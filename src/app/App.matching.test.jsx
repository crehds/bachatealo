import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Bachatealo from './App';
import { SiteDataProvider } from '../data/SiteDataContext';

// A small, render-safe fixture: enough for every one of the 9 section
// containers to mount without crashing (History needs exactly two media
// entries, since it reads them by fixed index rather than mapping; Footer
// needs a `socialLinks` array since it maps over it directly), entirely
// independent of the real data.json's size or content.
//
// The events section stays inactive here (a separate, already-tested concern — see
// Bachatealo.test.jsx), but gallery is deliberately switched on with three
// dated media entries: it lets this same fixture also stand in for "the
// flag is on", proving Bachatealo actually wires the gallery's data through
// end to end rather than just deciding whether to render it. Deep coverage
// of the sort/format/alt behaviour itself lives in Gallery.test.jsx.
vi.mock('../data/schema', () => ({
  default: {
    entities: {
      data: {
        Header: { id: 'Header', menu: [], logo: '' },
        Hero: { id: 'Hero' },
        history: { id: 'history' },
        location: { id: 'location', title: 'Location title', details: {} },
        events: { id: 'events', active: false },
        gallery: { id: 'gallery', title: 'Gallery title', active: true },
        photos: { id: 'photos', title: 'Photos title' },
        videos: { id: 'videos', title: 'Videos title' },
        footer: {
          id: 'footer',
          title: 'Footer title',
          details: { socialLinks: [] },
        },
      },
      media: {
        h1: { src: '/h1.jpg' },
        h2: { src: '/h2.jpg' },
        g1: {
          id: 'g1',
          src: '/g1.jpg',
          title: 'Gallery item1',
          date: '2020-06-01',
          alt: 'Gallery alt1',
        },
        g2: {
          id: 'g2',
          src: '/g2.jpg',
          title: 'Gallery item2',
          date: '2018-02-15',
          alt: 'Gallery alt2',
        },
        g3: {
          id: 'g3',
          src: '/g3.jpg',
          title: 'Gallery item3',
          date: '2019-09-30',
          alt: 'Gallery alt3',
        },
      },
      section: {
        8: { sectionId: '8', data: 'footer' },
        3: { sectionId: '3', data: 'history', media: ['h1', 'h2'] },
        1: { sectionId: '1', data: 'Header' },
        6: { sectionId: '6', data: 'photos', media: [] },
        2: { sectionId: '2', data: 'Hero', media: [] },
        5: { sectionId: '5', data: 'events' },
        9: { sectionId: '9', data: 'gallery', media: ['g1', 'g2', 'g3'] },
        7: { sectionId: '7', data: 'videos', media: [] },
        4: { sectionId: '4', data: 'location' },
      },
    },
    // The order data.json lists sections in — shuffled on purpose, and
    // deliberately not sorted by sectionId either. This is exactly the
    // input shape that broke the old position-based `cont` loop: this
    // test fails against that implementation and passes against a
    // data.id-based one.
    result: { sections: ['8', '3', '1', '6', '9', '2', '5', '7', '4'] },
  },
}));

let container = null;

afterEach(() => {
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it('assigns each section to its slot by data.id, even when data.json lists them out of order', () => {
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

  // Same technique as Bachatealo.test.jsx's positional test: read each
  // content section's own id/className off the DOM, independent of the
  // code under test. The events section (sectionId "5") is inactive here,
  // so it's expected to be absent — that's a separate, already-tested
  // concern, not what this test is checking. Gallery (sectionId "9") is
  // active in this fixture, so it is expected to appear, between location
  // and photos.
  const rendered = [...container.querySelectorAll('section[id]')].map(
    (el) => ({ id: el.id, className: el.className })
  );

  expect(rendered).toEqual([
    { id: '1', className: 'Header' },
    { id: '2', className: 'Hero' },
    { id: '3', className: 'History' },
    { id: '4', className: 'Location' },
    { id: '9', className: 'Gallery' },
    { id: '6', className: 'Photos' },
    { id: '7', className: 'Video' },
    { id: '8', className: 'Footer' },
  ]);
});

it('renders the gallery sorted oldest first, with each name/date/alt, once data.json switches it on', () => {
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

  // Proves the wiring end to end: the active flag lets the section render
  // at all, and the props Bachatealo passes down are the real entities,
  // not e.g. the bare media ids. Fixture order is g1 (2020), g2 (2018), g3
  // (2019); oldest-first is g2, g3, g1. Deeper permutations of this same
  // sort/format/alt behaviour are Gallery.test.jsx's job, not this one's.
  const titles = [...container.querySelectorAll('.gallery-item-title')].map(
    (el) => el.textContent
  );
  const dates = [...container.querySelectorAll('.gallery-item-date')].map(
    (el) => el.textContent
  );
  const alts = [
    ...container.querySelectorAll('section.Gallery img'),
  ].map((img) => img.getAttribute('alt'));

  expect(titles).toEqual(['Gallery item2', 'Gallery item3', 'Gallery item1']);
  expect(dates).toEqual([
    '15 de febrero de 2018',
    '30 de setiembre de 2019',
    '1 de junio de 2020',
  ]);
  expect(alts).toEqual(['Gallery alt2', 'Gallery alt3', 'Gallery alt1']);
});
