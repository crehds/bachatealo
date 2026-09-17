import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Bachatealo from './Bachatealo';
import { SiteDataProvider } from '../context/SiteDataContext';

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

it('assigns each of the 8 sections to its fixed slot by position, not by name', () => {
  // Bachatealo's mapping from data.json onto the fixed
  // portada/hero/history/location/eventos/fotos/videos/footer slots is
  // purely positional: it walks the normalized sections array by index with
  // a `cont` counter, not by matching an id or name. This test re-derives
  // that mapping independently of the code under test by reading the
  // sectionId/className every content section renders (the two layout
  // wrapper <section>s never set an id), so a transposition anywhere in the
  // positional assignment shows up here even where it wouldn't change any
  // rendered text.
  //
  // The full contract below covers all 8 slots, including eventos
  // (sectionId "5"), which data.json currently hides via active: false.
  // Whether eventos is visible is a separate concern, already covered by
  // "hides the events section..." below; hardcoding its absence here would
  // fail this test the day someone announces a real event, for a reason
  // that has nothing to do with the positional mapping it exists to guard.
  // So instead of asserting a fixed visible subset, the expectation is the
  // full contract filtered down to whichever ids actually rendered — this
  // still fails on any transposition (a slot showing the wrong id and/or
  // the wrong component's className) while staying silent on eventos'
  // visibility either way.
  const root = mount();

  const fullPositionalContract = [
    { id: '1', className: 'Portada' },
    { id: '2', className: 'Hero' },
    { id: '3', className: 'History' },
    { id: '4', className: 'Location' },
    { id: '5', className: 'Event' },
    { id: '6', className: 'Fotos' },
    { id: '7', className: 'Video' },
    { id: '8', className: 'Footer' },
  ];

  const actual = [...root.querySelectorAll('section[id]')].map((el) => ({
    id: el.id,
    className: el.className,
  }));

  const actualIds = new Set(actual.map((section) => section.id));
  const expected = fullPositionalContract.filter((section) =>
    actualIds.has(section.id)
  );

  expect(actual).toEqual(expected);
});

it('resolves media entities through the seam for hero, history, photo, and video sections', () => {
  // The hero/fotos/video albums and the two history images all moved their
  // entities.media[mediaId] lookup off the redux store during the seam
  // refactor (Header.jsx, Fotos.jsx, Video.jsx, History.jsx). A wrong key
  // there resolves to undefined rather than throwing, so nothing before
  // this asserted on the rendered result. Checking the src sequence pins
  // both identity (the right media entity) and completeness (nothing
  // dropped or duplicated) for every one of those lookups.
  const root = mount();

  const srcsOf = (selector) =>
    [...root.querySelectorAll(selector)].map((el) => el.getAttribute('src'));

  expect(srcsOf('.hero-container img')).toEqual([
    expect.stringContaining('/images/paraHero/7.webp'),
    expect.stringContaining('/images/paraHero/3.webp'),
    expect.stringContaining('/images/paraHero/9.webp'),
    expect.stringContaining('/images/paraHero/5.webp'),
    expect.stringContaining('/images/paraHero/1.webp'),
    expect.stringContaining('/images/paraHero/6.webp'),
    expect.stringContaining('/images/paraHero/2.webp'),
    expect.stringContaining('/images/paraHero/8.webp'),
    expect.stringContaining('/images/paraHero/4.webp'),
  ]);

  expect(srcsOf('.history-img')).toEqual([
    expect.stringContaining('/images/paraHistory/for_history.webp'),
    expect.stringContaining('/images/paraHistory/history_actual.webp'),
  ]);

  expect(srcsOf('.fotos.container img')).toEqual([
    expect.stringContaining('/images/paraHero/7.webp'),
    expect.stringContaining('/images/paraHero/6.webp'),
    expect.stringContaining('/images/paraHero/9.webp'),
    expect.stringContaining('/images/paraHero/4.webp'),
    expect.stringContaining('/images/paraHero/5.webp'),
    expect.stringContaining('/images/paraHero/2.webp'),
  ]);

  expect(srcsOf('.video.container iframe')).toEqual([
    expect.stringContaining('225802351319283'),
    expect.stringContaining('225816234651228'),
  ]);
});
