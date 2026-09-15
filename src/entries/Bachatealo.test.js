import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Bachatealo from './Bachatealo';
import reducer from '../reducers/data';

let container = null;
const realMatchMedia = window.matchMedia;

function mount() {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(
      <Provider store={createStore(reducer)}>
        <Bachatealo />
      </Provider>,
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
    'Último evento',
    'Momentos Destacados...',
    'Recuerdos...',
    'Programación y diseño',
  ]);
});
