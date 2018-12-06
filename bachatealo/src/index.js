import React from 'react';
import ReactDOM from 'react-dom';
import './cssProd/index.css';
import Bachatealo from './Bachatealo';
import * as serviceWorker from './serviceWorker';
import logo from './images/logo.svg';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import imagen1 from './images/paraHero/1.png';
import imagen2 from './images/paraHero/2.png';
import imagen3 from './images/paraHero/3.png';
import imagen4 from './images/paraHero/4.png';
import imagen5 from './images/paraHero/5.png';
import imagen6 from './images/paraHero/6.png';
import imagen7 from './images/paraHero/7.png';
import imagen8 from './images/paraHero/8.png';
import imagen9 from './images/paraHero/9.png';
import rotonda from './images/paraHistory/rotonda.png';
import alameda from './images/paraHistory/alameda.png';
import evento from './images/paraEventos/eventos.png';
import error from './images/paraError/error.jpg';

const initialState = {
  menu: [
    {
      href: '#history',
      title: '¿Quiénes somos?',
      id: '1',
    },
    {
      href: '#eventos',
      title: 'Eventos',
      id: '2',
    },
    {
      href: '#fotos',
      title: 'Fotos',
      id: '3',
    },
    {
      href: '#videos',
      title: 'Videos',
      id: '4',
    },
  ],

  logoPortada: logo,
  rotonda,
  alameda,
  evento,
  error,

  fotosPortada: [
    {
      foto: imagen7,
      id: '1',
    },
    {
      foto: imagen3,
      id: '2',
    },
    {
      foto: imagen9,
      id: '3',
    },
    {
      foto: imagen5,
      id: '4',
    },
    {
      foto: imagen1,
      id: '5',
    },
    {
      foto: imagen6,
      id: '6',
    },
    {
      foto: imagen2,
      id: '7',
    },
    {
      foto: imagen8,
      id: '8',
    },
    {
      foto: imagen4,
      id: '9',
    },
  ],

  album: [
    {
      foto: imagen7,
      id: '1',
    },
    {
      foto: imagen6,
      id: '2',
    },
    {
      foto: imagen9,
      id: '3',
    },
    {
      foto: imagen4,
      id: '4',
    },
    {
      foto: imagen5,
      id: '5',
    },
    {
      foto: imagen2,
      id: '6',
    },
  ],

};
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return { ...state, ...newProps,
      };
    }

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <Bachatealo />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
