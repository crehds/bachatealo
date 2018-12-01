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

// import imagen10 from './images/paraHero/10.jpg';
const initialState = {
  menu: [
    {
      href: '#history',
      title: 'Historia',
      id: '1',
    },
    {
      href: '#fotos',
      title: 'Fotos',
      id: '2',
    },
    {
      href: '#videos',
      title: 'Videos',
      id: '3',
    },
    {
      href: '#eventos',
      title: 'Eventos',
      id: '4',
    },
  ],
  logoPortada: logo,
  imagen1: imagen7,
  imagen2: imagen3,
  imagen3: imagen9,
  imagen4: imagen5,
  imagen5: imagen1,
  imagen6: imagen6,
  imagen7: imagen2,
  imagen8: imagen8,
  imagen9: imagen4,
  rotonda: rotonda,
  alameda: alameda,

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
  ],

  // imagen10: imagen10,
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

const store = createStore(reducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <Bachatealo />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
