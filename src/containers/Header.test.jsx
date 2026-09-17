import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
import { SiteDataProvider } from '../context/SiteDataContext';
import mockedSchema from '../schemas/index';

// Header's container looks up the shared events entity via
// findEventSection(entities) and uses it to filter the events link out of
// portada's menu. data.json always ships an eventos entity (merely
// inactive), so mounting the full app (Bachatealo.test.js) never exercises
// the "entity missing entirely" branch. This file supplies a small,
// controlled fixture instead and mutates entities.data.eventos per test,
// mirroring the Eventos.test.jsx pattern.
const menu = [
  { id: '1', href: '#1', title: 'Inicio' },
  { id: '4', href: '#5', title: 'Eventos' },
  { id: '5', href: '#6', title: 'Fotos' },
];

jest.mock('../schemas/index', () => ({
  entities: {
    data: {
      Portada: { id: 'Portada', menu: [], imgPortada: '/images/logo.svg' },
    },
    media: {},
    section: {},
  },
  result: { sections: [] },
}));

mockedSchema.entities.data.Portada.menu = menu;

const portadaProp = { data: 'Portada', sectionId: '1' };
const heroProp = { data: 'Hero', sectionId: '2', media: [] };

let container = null;

afterEach(() => {
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
  delete mockedSchema.entities.data.eventos;
});

function mount() {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(
      <SiteDataProvider>
        <Header portada={portadaProp} hero={heroProp} />
      </SiteDataProvider>,
      container
    );
  });

  return container;
}

function menuLinkTitles(root) {
  return [...root.querySelectorAll('#menu-list a')].map((a) => a.textContent);
}

it('passes the menu through unchanged when no eventos entity exists at all', () => {
  // No entities.data.eventos at all — not inactive, absent. findEventSection
  // returns undefined here (proved directly in events.test.js); there is no
  // sectionId left to filter against, so nothing should be removed.
  const root = mount();

  expect(menuLinkTitles(root)).toEqual(['Inicio', 'Eventos', 'Fotos']);
});

it('filters the events link out of the menu while its section is hidden', () => {
  mockedSchema.entities.data.eventos = {
    id: 'eventos',
    sectionId: '5',
    active: false,
  };

  const root = mount();

  expect(menuLinkTitles(root)).toEqual(['Inicio', 'Fotos']);
});
