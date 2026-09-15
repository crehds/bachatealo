import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Bachatealo from './Bachatealo';
import reducer from '../reducers/data';

function mount() {
  const container = document.createElement('div');
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

function unmount(container) {
  ReactDOM.unmountComponentAtNode(container);
  document.body.removeChild(container);
}

function click(element) {
  act(() => {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}

it('renders the landing page without crashing', () => {
  const container = mount();
  unmount(container);
});

it('opens and closes the mobile menu, keeping aria-expanded honest', () => {
  const container = mount();
  const button = container.querySelector('#burguer-menu');
  const nav = container.querySelector('nav.menu');

  // A real button is what makes the menu reachable by keyboard at all.
  expect(button.tagName).toBe('BUTTON');
  expect(button.getAttribute('aria-controls')).toBe('menu-list');
  expect(container.querySelector('#menu-list')).not.toBeNull();

  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(nav.className).not.toContain('is-active');

  click(button);
  expect(button.getAttribute('aria-expanded')).toBe('true');
  expect(nav.className).toContain('is-active');

  click(button);
  expect(button.getAttribute('aria-expanded')).toBe('false');
  expect(nav.className).not.toContain('is-active');

  unmount(container);
});

it('exposes exactly one page heading', () => {
  const container = mount();

  const headings = container.querySelectorAll('h1');
  expect(headings).toHaveLength(1);
  expect(headings[0].textContent).toBe('Bachatealo');

  // Every section carries a heading, including the one whose title is only
  // available to assistive technology.
  expect(container.querySelectorAll('h2').length).toBeGreaterThan(0);

  unmount(container);
});
