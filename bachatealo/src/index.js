import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Bachatealo from './Bachatealo';
import * as serviceWorker from './serviceWorker';
import logo from './images/logo.svg';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import imagen1 from './images/paraHero/1.jpg';
import imagen2 from './images/paraHero/2.jpg';
import imagen3 from './images/paraHero/3.jpg';
import imagen4 from './images/paraHero/4.jpg';
import imagen5 from './images/paraHero/5.jpg';
import imagen6 from './images/paraHero/6.jpg';
import imagen7 from './images/paraHero/7.png';
import imagen8 from './images/paraHero/8.jpg';
import imagen9 from './images/paraHero/9.jpg';
import practica from './images/paraHistory/practica.jpg';

// import imagen10 from './images/paraHero/10.jpg';
const initialState = {
  menu: [
    {
      href: '#fotos',
      title: 'Fotos',
      id: '1',
    },
    {
      href: '#videos',
      title: 'Videos',
      id: '2',
    },
    {
      href: '#eventos',
      title: 'Eventos',
      id: '3',
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
  practica: practica,

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
