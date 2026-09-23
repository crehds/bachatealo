import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
import { SiteDataProvider } from '../../data/SiteDataContext';
import mockedSchema from '../../data/schema';

// Scroll-spy behaviour, exercised through the real Header tree: the pure
// decision is covered in activeSection.test.js, this file only proves the
// DOM wiring (mount/scroll/resize/unmount) drives it correctly.
const menu = [
  { id: '1', href: '#1', title: 'Inicio' },
  { id: '3', href: '#4', title: 'Encuéntranos' },
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

// jsdom never lays elements out, so every getBoundingClientRect is zeroed
// unless a test supplies one. Elements are keyed by id, and the fixed
// header bar (which has no id) by its 'header-bar' class, matching what
// the hook itself queries by.
let rects;
let originalGetBoundingClientRect;

function setRect(key, top, bottom = top + 10) {
  rects.set(key, { top, bottom });
}

beforeAll(() => {
  originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
  HTMLElement.prototype.getBoundingClientRect = function () {
    const key = this.classList.contains('header-bar') ? 'header-bar' : this.id;
    const rect = rects.get(key) || { top: 0, bottom: 0 };
    return {
      top: rect.top,
      bottom: rect.bottom,
      left: 0,
      right: 0,
      width: 0,
      height: rect.bottom - rect.top,
      x: 0,
      y: rect.top,
      toJSON() {
        return this;
      },
    };
  };
});

afterAll(() => {
  HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
});

// jsdom performs no layout, so document.documentElement.scrollHeight
// defaults to 0 — which would put every test at "the bottom of the page"
// by definition (innerHeight + scrollY >= scrollHeight - 2). Pin it to a
// tall value so the bottom-of-page branch only fires when a test asks for it.
function setScrollHeight(height) {
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: height,
  });
}

// requestAnimationFrame exists in this project's jsdom, but real frames are
// timer-based and non-deterministic to await from a test. Stub it with a
// queue the test drives explicitly instead.
let rafQueue;
let nextRafId;

beforeEach(() => {
  rects = new Map();
  rafQueue = new Map();
  nextRafId = 1;
  setScrollHeight(2000);
  window.scrollY = 0;

  vi.stubGlobal('requestAnimationFrame', (cb) => {
    const id = nextRafId++;
    rafQueue.set(id, cb);
    return id;
  });
  vi.stubGlobal('cancelAnimationFrame', (id) => {
    rafQueue.delete(id);
  });
});

afterEach(() => {
  vi.unstubAllGlobals();
});

function runFrame() {
  const callbacks = [...rafQueue.values()];
  rafQueue.clear();
  act(() => {
    callbacks.forEach((cb) => cb());
  });
}

let container = null;
let extraSections = [];

function addSection(id, top) {
  const section = document.createElement('section');
  section.id = id;
  document.body.appendChild(section);
  setRect(id, top);
  extraSections.push(section);
  return section;
}

afterEach(() => {
  if (container) {
    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    container.remove();
    container = null;
  }
  extraSections.forEach((el) => el.remove());
  extraSections = [];
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

function activeLinkTitles(root) {
  return [...root.querySelectorAll('#menu-list a')]
    .filter((a) => a.getAttribute('aria-current') === 'true')
    .map((a) => a.textContent);
}

it('highlights the link for the section under the header bar on mount, and no other', () => {
  // Section '1' is Header's own <section>, rendered by Header itself.
  setRect('1', -100);
  addSection('4', 20);
  addSection('6', 900);
  setRect('header-bar', 0, 60);

  const root = mount();
  runFrame(); // the mount recompute is scheduled through the same rAF throttle

  expect(activeLinkTitles(root)).toEqual(['Encuéntranos']);

  const others = [...root.querySelectorAll('#menu-list a')].filter(
    (a) => a.textContent !== 'Encuéntranos'
  );
  others.forEach((a) => expect(a.hasAttribute('aria-current')).toBe(false));
});

it('moves aria-current to the new link after a scroll changes which section is under the bar', () => {
  setRect('1', -500);
  addSection('4', -50);
  addSection('6', 900);
  setRect('header-bar', 0, 60);

  const root = mount();
  runFrame();
  expect(activeLinkTitles(root)).toEqual(['Encuéntranos']);

  // Scroll further down: section 6 now sits under the bar too.
  setRect('6', 10);
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
  runFrame();

  expect(activeLinkTitles(root)).toEqual(['Fotos']);
});

it('removes its scroll and resize listeners on unmount', () => {
  setRect('1', 0);
  addSection('4', 20);
  addSection('6', 900);
  setRect('header-bar', 0, 60);

  const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

  mount();
  runFrame();

  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
  container = null;

  const removedEvents = removeEventListenerSpy.mock.calls.map((call) => call[0]);
  expect(removedEvents).toContain('scroll');
  expect(removedEvents).toContain('resize');

  removeEventListenerSpy.mockRestore();
});

it('does not treat a page that cannot scroll as scrolled to the bottom', () => {
  // A page no taller than the viewport satisfies innerHeight + scrollY >=
  // scrollHeight at scroll position 0, so a bare bottom check would light
  // the lowest link even though the first section is the one under the bar.
  setScrollHeight(window.innerHeight);
  setRect('1', 0);
  addSection('4', 300);
  addSection('6', 600);
  setRect('header-bar', 0, 60);

  const root = mount();
  runFrame();

  expect(activeLinkTitles(root)).toEqual(['Inicio']);
});

it('still lights the lowest link once a page that does scroll reaches its bottom', () => {
  // The guard above must not switch the bottom rule off: section 6 never
  // reaches the bar here, and the bottom of the page is the only way in.
  setScrollHeight(window.innerHeight + 1000);
  window.scrollY = 1000;
  setRect('1', -1000);
  addSection('4', -200);
  addSection('6', 400);
  setRect('header-bar', 0, 60);

  const root = mount();
  runFrame();

  expect(activeLinkTitles(root)).toEqual(['Fotos']);
});
