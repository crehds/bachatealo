import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Gallery from './Gallery';
import { SiteDataProvider } from '../../context/SiteDataContext';

// Mounting the full app (Bachatealo.test.jsx) only ever exercises this
// container through the real, already-chronological data.json. This file
// mocks the schema module instead so the fixture can put dates deliberately
// out of order — a component that rendered media in array order rather than
// sorting by date would pass every other test in the suite and only fail
// here.
vi.mock('../../schemas/index', () => ({
  default: {
    entities: {
      data: {
        gallery: {
          id: 'gallery',
          title: 'Eventos pasados',
        },
      },
      media: {
        20: {
          id: '20',
          src: '/images/test-gallery-1.webp',
          title: 'Evento de prueba 1',
          date: '2020-05-10',
          alt: 'Descripcion de prueba 1',
        },
        21: {
          id: '21',
          src: '/images/test-gallery-2.webp',
          title: 'Evento de prueba 2',
          date: '2018-03-01',
          alt: 'Descripcion de prueba 2',
        },
        22: {
          id: '22',
          src: '/images/test-gallery-3.webp',
          title: 'Evento de prueba 3',
          date: '2019-11-20',
          alt: 'Descripcion de prueba 3',
        },
      },
      section: {},
    },
    result: { sections: [] },
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

// The fixture's media array is deliberately NOT in date order (20: 2020,
// 21: 2018, 22: 2019), so a naive implementation that renders in array
// order fails the sort test below without needing a second, separate case.
function renderGallery() {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(
      <SiteDataProvider>
        <Gallery
          gallery={{ data: 'gallery', sectionId: '9', media: ['20', '21', '22'] }}
        />
      </SiteDataProvider>,
      container
    );
  });
}

it('renders the section title and id', () => {
  renderGallery();

  const section = container.querySelector('section.Gallery');
  expect(section.id).toBe('9');
  expect(section.querySelector('h2').textContent).toBe('Eventos pasados');
});

it('sorts the gallery chronologically, oldest first, regardless of media array order', () => {
  renderGallery();

  const titles = [...container.querySelectorAll('.gallery-item-title')].map(
    (el) => el.textContent
  );

  // Fixture order is 20 (2020), 21 (2018), 22 (2019); oldest-first is
  // 21, 22, 20.
  expect(titles).toEqual([
    'Evento de prueba 2',
    'Evento de prueba 3',
    'Evento de prueba 1',
  ]);
});

it("renders each item's formatted date alongside its name", () => {
  renderGallery();

  const dates = [...container.querySelectorAll('.gallery-item-date')].map(
    (el) => el.textContent
  );

  // Literal, not a call to formatEventDate: that function has its own
  // direct coverage in events.test.js, and computing the expectation by
  // calling it here would let a formatting regression move both sides of
  // this assertion together and never fail this row.
  expect(dates).toEqual([
    '1 de marzo de 2018',
    '20 de noviembre de 2019',
    '10 de mayo de 2020',
  ]);
});

it('passes each item alt text through to its rendered image', () => {
  renderGallery();

  const altTexts = [...container.querySelectorAll('img')].map((img) =>
    img.getAttribute('alt')
  );

  expect(altTexts).toEqual([
    'Descripcion de prueba 2',
    'Descripcion de prueba 3',
    'Descripcion de prueba 1',
  ]);
});
