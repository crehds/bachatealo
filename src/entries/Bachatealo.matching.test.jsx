import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Bachatealo from './Bachatealo';
import { SiteDataProvider } from '../context/SiteDataContext';

// A small, render-safe fixture: enough for every one of the 8 section
// containers to mount without crashing (History needs exactly two media
// entries, since it reads them by fixed index rather than mapping; Footer
// needs a `redesSociales` array since it maps over it directly), entirely
// independent of the real data.json's size or content.
vi.mock('../schemas/index', () => ({
  default: {
    entities: {
      data: {
        Portada: { id: 'Portada', menu: [], imgPortada: '' },
        Hero: { id: 'Hero' },
        history: { id: 'history' },
        location: { id: 'location', title: 'Location title', details: {} },
        eventos: { id: 'eventos', active: false },
        fotos: { id: 'fotos', title: 'Fotos title' },
        videos: { id: 'videos', title: 'Videos title' },
        footer: {
          id: 'footer',
          title: 'Footer title',
          details: { redesSociales: [] },
        },
      },
      media: {
        h1: { src: '/h1.jpg' },
        h2: { src: '/h2.jpg' },
      },
      section: {
        8: { sectionId: '8', data: 'footer' },
        3: { sectionId: '3', data: 'history', media: ['h1', 'h2'] },
        1: { sectionId: '1', data: 'Portada' },
        6: { sectionId: '6', data: 'fotos', media: [] },
        2: { sectionId: '2', data: 'Hero', media: [] },
        5: { sectionId: '5', data: 'eventos' },
        7: { sectionId: '7', data: 'videos', media: [] },
        4: { sectionId: '4', data: 'location' },
      },
    },
    // The order data.json lists sections in — shuffled on purpose, and
    // deliberately not sorted by sectionId either. This is exactly the
    // input shape that broke the old position-based `cont` loop: this
    // test fails against that implementation and passes against a
    // data.id-based one.
    result: { sections: ['8', '3', '1', '6', '2', '5', '7', '4'] },
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
  // code under test. Eventos (sectionId "5") is inactive in this fixture,
  // so it's expected to be absent — that's a separate, already-tested
  // concern, not what this test is checking.
  const rendered = [...container.querySelectorAll('section[id]')].map(
    (el) => ({ id: el.id, className: el.className })
  );

  expect(rendered).toEqual([
    { id: '1', className: 'Portada' },
    { id: '2', className: 'Hero' },
    { id: '3', className: 'History' },
    { id: '4', className: 'Location' },
    { id: '6', className: 'Fotos' },
    { id: '7', className: 'Video' },
    { id: '8', className: 'Footer' },
  ]);
});
