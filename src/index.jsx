import React from 'react';
import ReactDOM from 'react-dom';
// import './cssProd/index.css';
import Bachatealo from './app/App';
import * as serviceWorker from './serviceWorker';
import { SiteDataProvider } from './data/SiteDataContext';

ReactDOM.render(
  <SiteDataProvider>
    <Bachatealo />
  </SiteDataProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
