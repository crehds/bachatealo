import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Eventos from './Eventos';
import { SiteDataProvider } from '../context/SiteDataContext';

// Eventos is inactive in the shipped data.json, so mounting the full app
// (Bachatealo.test.js) never exercises this container's own entity lookup
// (entities.data[props.eventos.data]) or its destructuring of
// title/evento/imgEvento. SiteDataProvider always sources real data.json
// content with no override point, so this file mocks the schema module to
// supply a small, controlled fixture and mounts the container directly —
// a missing entity or a renamed field now fails here instead of passing
// the suite unnoticed.
vi.mock('../schemas/index', () => ({
  default: {
    entities: {
      data: {
        eventos: {
          id: 'eventos',
          title: 'Próximo evento',
          evento: {
            fecha: '2030-06-15',
            lugar: 'Test Venue',
            inicio: '8:00 pm',
            contacto: '999-999-999',
          },
          imgEvento: '/images/test-event.webp',
        },
      },
      media: {},
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

it("renders the looked-up entity's title, event details, and image", () => {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(
      <SiteDataProvider>
        <Eventos eventos={{ data: 'eventos', sectionId: '5' }} />
      </SiteDataProvider>,
      container
    );
  });

  const section = container.querySelector('section.Event');
  expect(section.id).toBe('5');
  expect(section.querySelector('h2').textContent).toBe('Próximo evento');

  // Both rows come from the same `evento` object; asserting labels and
  // values together pins the field-to-row mapping, not just that some text
  // rendered somewhere.
  const [labels, values] = [
    ...container.querySelectorAll('.event-flexcontainer'),
  ].map((el) => [...el.querySelectorAll('p')].map((p) => p.textContent));

  expect(labels).toEqual(['Fecha', 'Lugar', 'Inicio', 'Donaciones']);
  // Literal, not a call to formatEventDate: that function is the code
  // under test's own formatter, has its own direct coverage in
  // events.test.js, and computing the expectation by calling it here would
  // let a formatting regression move both sides of this assertion together
  // and never fail this row.
  expect(values).toEqual([
    '15 de junio de 2030',
    'Test Venue',
    '8:00 pm',
    '999-999-999',
  ]);

  expect(
    container.querySelector('.event-image').getAttribute('src')
  ).toContain('/images/test-event.webp');
});
