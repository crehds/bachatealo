import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Bachatealo from './Bachatealo';
import reducer from '../reducers/data';

it('renders the landing page without crashing', () => {
  const store = createStore(reducer);
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <Bachatealo />
    </Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
