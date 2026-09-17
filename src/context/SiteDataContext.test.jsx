import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useSiteData } from './SiteDataContext';

// A minimal consumer: the hook's failure path is what's under test, not
// any particular container's rendering.
function ReadsSiteData() {
  useSiteData();
  return null;
}

it('throws a clear error when used outside SiteDataProvider', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  // With no error boundary above it, React logs this render error to
  // console.error on top of the exception it rethrows. Silencing it here
  // keeps the test output clean without touching what's actually asserted
  // below.
  const consoleError = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  try {
    expect(() => {
      act(() => {
        ReactDOM.render(<ReadsSiteData />, container);
      });
    }).toThrow('useSiteData must be used within a SiteDataProvider');
  } finally {
    // Unconditional: if the assertion above ever fails, the failure must
    // not leave console.error mocked or an orphan node in document.body
    // for the rest of the file to trip over.
    consoleError.mockRestore();
    container.remove();
  }
});
