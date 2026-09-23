import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
import { SiteDataProvider } from '../../data/SiteDataContext';
import mockedSchema from '../../data/schema';

// This section's container looks up the shared events entity via
// findEventSection(entities) and uses it to filter the events link out of
// the menu. data.json always ships an events entity (merely inactive), so
// mounting the full app (App.test.jsx) never exercises the "entity missing
// entirely" branch. This file supplies a small, controlled fixture instead
// and mutates entities.data.events per test, mirroring Events.test.jsx.
const menu = [
  { id: '1', href: '#1', title: 'Inicio' },
  { id: '4', href: '#5', title: 'Eventos' },
  { id: '5', href: '#6', title: 'Fotos' },
];

vi.mock('../../data/schema', () => ({
  default: {
    entities: {
      data: {
        Header: { id: 'Header', menu: [], logo: '/images/logo.svg' },
      },
      media: {},
      section: {},
    },
    result: { sections: [] },
  },
}));

mockedSchema.entities.data.Header.menu = menu;

const headerProp = { data: 'Header', sectionId: '1' };

let container = null;

afterEach(() => {
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
  delete mockedSchema.entities.data.events;
});

function mount() {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(
      <SiteDataProvider>
        <Header header={headerProp} />
      </SiteDataProvider>,
      container
    );
  });

  return container;
}

function menuLinkTitles(root) {
  return [...root.querySelectorAll('#menu-list a')].map((a) => a.textContent);
}

it('passes the menu through unchanged when no events entity exists at all', () => {
  // No entities.data.events at all — not inactive, absent. findEventSection
  // returns undefined here (proved directly in events.test.js); there is no
  // sectionId left to filter against, so nothing should be removed.
  const root = mount();

  expect(menuLinkTitles(root)).toEqual(['Inicio', 'Eventos', 'Fotos']);
});

it('filters the events link out of the menu while its section is hidden', () => {
  mockedSchema.entities.data.events = {
    id: 'events',
    sectionId: '5',
    active: false,
  };

  const root = mount();

  expect(menuLinkTitles(root)).toEqual(['Inicio', 'Fotos']);
});

it('renders the real header element and the logo from its own data', () => {
  // This section used to be called Portada while a container called Header
  // rendered no <header> at all. The name now sits on the element that has
  // one, so assert the element exists rather than trusting the file name.
  const root = mount();

  const section = root.querySelector('section.Header');
  expect(section).not.toBeNull();
  expect(section.id).toBe('1');

  const bar = section.querySelector('header.header-bar');
  expect(bar).not.toBeNull();

  // The page's only h1, and the logo path read off the renamed `logo` key.
  expect(bar.querySelector('h1').textContent).toBe('Bachatealo');
  expect(bar.querySelector('.logotipo img').getAttribute('src')).toContain(
    '/images/logo.svg'
  );
});
