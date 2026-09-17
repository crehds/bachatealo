import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Eventos from './Eventos';
import { SiteDataProvider } from '../context/SiteDataContext';
import { formatEventDate } from '../utils/events';

// Eventos is inactive in the shipped data.json, so mounting the full app
// (Bachatealo.test.js) never exercises this container's own entity lookup
// (entities.data[props.eventos.data]) or its destructuring of
// title/evento/imgEvento. SiteDataProvider always sources real data.json
// content with no override point, so this file mocks the schema module to
// supply a small, controlled fixture and mounts the container directly —
// a missing entity or a renamed field now fails here instead of passing
// the suite unnoticed.
jest.mock('../schemas/index', () => ({
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
  expect(values).toEqual([
    formatEventDate('2030-06-15'),
    'Test Venue',
    '8:00 pm',
    '999-999-999',
  ]);

  expect(
    container.querySelector('.event-image').getAttribute('src')
  ).toContain('/images/test-event.webp');
});
