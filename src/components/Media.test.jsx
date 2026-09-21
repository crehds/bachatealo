import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Media from './Media';

let container = null;

afterEach(() => {
  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

function renderMedia(props) {
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    ReactDOM.render(<Media {...props} />, container);
  });

  return container.querySelector('img');
}

it('passes a given alt through to the rendered image', () => {
  const img = renderMedia({ src: '/images/test.webp', alt: 'a real description' });
  expect(img.getAttribute('alt')).toBe('a real description');
});

// Load-bearing for accessibility: an image with no alt attribute at all
// (as opposed to an empty one) is announced by some screen readers using
// its filename, which is worse than silence. This is currently unasserted
// anywhere else in the suite.
it('falls back to an empty alt, not a missing one, when none is given', () => {
  const img = renderMedia({ src: '/images/test.webp' });
  expect(img.getAttribute('alt')).toBe('');
});

it('marks every image lazy, so a hidden tile is never fetched', () => {
  const img = renderMedia({ src: '/images/test.webp', alt: 'x' });
  expect(img.getAttribute('loading')).toBe('lazy');
});
