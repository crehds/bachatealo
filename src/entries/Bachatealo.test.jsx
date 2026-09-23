import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Bachatealo from './Bachatealo';
import { SiteDataProvider } from '../data/SiteDataContext';
import rawData from '../data/data.json';

let container = null;
const realMatchMedia = window.matchMedia;

function mount() {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(
      <SiteDataProvider>
        <Bachatealo />
      </SiteDataProvider>,
      container
    );
  });

  return container;
}

// Teardown belongs here rather than at the end of each test: a failing
// assertion throws, and an unmount that never runs would leak the tree and
// its resize listener into the next test.
afterEach(() => {
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
  window.matchMedia = realMatchMedia;
});

function click(element) {
  act(() => {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}

it('renders the landing page without crashing', () => {
  expect(mount().querySelector('nav.menu')).not.toBeNull();
});

it('opens and closes the mobile menu, keeping aria-expanded honest', () => {
  const root = mount();
  const button = root.querySelector('#burguer-menu');
  const nav = root.querySelector('nav.menu');

  // A real button is what makes the menu reachable by keyboard at all.
  expect(button.tagName).toBe('BUTTON');
  expect(button.getAttribute('aria-controls')).toBe('menu-list');
  expect(root.querySelector('#menu-list')).not.toBeNull();

  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(nav.className).not.toContain('is-active');

  click(button);
  expect(button.getAttribute('aria-expanded')).toBe('true');
  expect(nav.className).toContain('is-active');

  click(button);
  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(nav.className).not.toContain('is-active');
});

it('closes an open menu once the viewport grows past the breakpoint', () => {
  const root = mount();
  const button = root.querySelector('#burguer-menu');

  click(button);
  expect(button.getAttribute('aria-expanded')).toBe('true');

  window.matchMedia = () => ({ matches: true });
  act(() => {
    window.dispatchEvent(new Event('resize'));
  });

  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(root.querySelector('nav.menu').className).not.toContain('is-active');
});

it('gives every section a heading under a single page heading', () => {
  const root = mount();

  const h1 = root.querySelectorAll('h1');
  expect(h1).toHaveLength(1);
  expect(h1[0].textContent).toBe('Bachatealo');

  // Every section heading, in document order. Asserting the whole list
  // catches a heading that goes missing and one that appears twice.
  const headings = [...root.querySelectorAll('h2')].map((h) => h.textContent);
  expect(headings).toEqual([
    '¿Cómo empezamos?',
    'Actualidad',
    'Ubicación',
    'Momentos Destacados...',
    'Recuerdos...',
    'Programación y diseño',
  ]);
});

it('hides the events section and its menu link while no event is announced', () => {
  const root = mount();

  // data.json currently has active: false, so neither may appear.
  expect(root.querySelector('section.Event')).toBeNull();

  const links = [...root.querySelectorAll('#menu-list a')];
  expect(links.map((a) => a.textContent)).not.toContain('Eventos');
  expect(links.map((a) => a.getAttribute('href'))).not.toContain('#5');

  // The rest of the menu is untouched.
  expect(links.map((a) => a.textContent)).toContain('Fotos');
});

it('hides the past-events gallery while data.json has not switched it on', () => {
  // The gallery ships as a template: its media entries are placeholder
  // names and reused photos, not real history. data.json's gallery.active
  // is false today specifically so that never reaches a real visitor —
  // this is the test that keeps it that way.
  const root = mount();

  expect(root.querySelector('section.Gallery')).toBeNull();
  expect(root.textContent).not.toContain('PLANTILLA');
});

it('assigns each of the 8 sections to its fixed slot by position, not by name', () => {
  // Bachatealo's mapping from data.json onto the fixed
  // portada/hero/history/location/eventos/photos/videos/footer slots is
  // purely positional: it walks the normalized sections array by index with
  // a `cont` counter, not by matching an id or name. This test re-derives
  // that mapping independently of the code under test by reading the
  // sectionId/className every content section renders (the two layout
  // wrapper <section>s never set an id), so a transposition anywhere in the
  // positional assignment shows up here even where it wouldn't change any
  // rendered text.
  //
  // Only eventos (sectionId "5") is conditional on content (data.json's
  // active flag); the other 7 slots always render. The floor below is
  // deliberately independent of the render it checks: an earlier version
  // derived "expected" by filtering the contract with the very ids read
  // out of `actual`, which made a regression that drops every section's
  // id attribute pass vacuously (actual === [] === expected). Asserting
  // the 7 stable ids against a fixed literal closes that hole, while
  // eventos' own slot is still checked only when content actually shows
  // it — so this keeps the content-decoupling without hardcoding a
  // visible subset that content changes could invalidate.
  const root = mount();

  const actual = [...root.querySelectorAll('section[id]')].map((el) => ({
    id: el.id,
    className: el.className,
  }));

  const alwaysVisibleIds = ['1', '2', '3', '4', '6', '7', '8'];
  const stableSlots = actual.filter((section) =>
    alwaysVisibleIds.includes(section.id)
  );

  expect(stableSlots).toEqual([
    { id: '1', className: 'Portada' },
    { id: '2', className: 'Hero' },
    { id: '3', className: 'History' },
    { id: '4', className: 'Location' },
    { id: '6', className: 'Photos' },
    { id: '7', className: 'Video' },
    { id: '8', className: 'Footer' },
  ]);

  // Eventos is conditional: only when it actually renders does its slot
  // get checked, but when it does, it must sit exactly between location
  // (id "4") and photos (id "6") — its contract position.
  const eventosIndex = actual.findIndex((section) => section.id === '5');
  if (eventosIndex !== -1) {
    const locationIndex = actual.findIndex((section) => section.id === '4');
    const photosIndex = actual.findIndex((section) => section.id === '6');
    expect(actual[eventosIndex].className).toBe('Event');
    expect(eventosIndex).toBe(locationIndex + 1);
    expect(photosIndex).toBe(eventosIndex + 1);
  }
});

it('resolves media entities through the seam for hero, history, photo, and video sections', () => {
  // The hero/photos/video albums and the two history images all moved their
  // entities.media[mediaId] lookup off the redux store during the seam
  // refactor (Header.jsx, Photos.jsx, Video.jsx, History.jsx). A wrong key
  // there resolves to undefined rather than throwing, so nothing before
  // this asserted on the rendered result.
  //
  // The expectation is read from data.json itself, fresh, rather than
  // frozen as a literal catalogue: adding, removing or reordering a photo
  // moves both sides of the comparison together, so this stays about
  // whether the lookup resolves the declared entities in the declared
  // order, not about how many photos the site happens to ship today.
  const root = mount();

  const srcsOf = (selector) =>
    [...root.querySelectorAll(selector)].map((el) => el.getAttribute('src'));

  const declaredSrcsFor = (sectionDataId) =>
    rawData.sections
      .find((section) => section.data.id === sectionDataId)
      .media.map((item) => item.src);

  const expectAlbumMatchesDeclaredOrder = (actualSrcs, sectionDataId) => {
    actualSrcs.forEach((src) => expect(src).toBeTruthy());
    expect(actualSrcs).toEqual(
      declaredSrcsFor(sectionDataId).map((src) => expect.stringContaining(src))
    );
  };

  expectAlbumMatchesDeclaredOrder(srcsOf('.hero-container img'), 'Hero');
  // History renders exactly two images by fixed index
  // (this.props[0]/this.props[1]), not a mapped list, but the declared
  // order check is the same shape.
  expectAlbumMatchesDeclaredOrder(srcsOf('.history-img'), 'history');
  expectAlbumMatchesDeclaredOrder(srcsOf('.photos.container img'), 'photos');
  expectAlbumMatchesDeclaredOrder(srcsOf('.video.container iframe'), 'videos');
});
