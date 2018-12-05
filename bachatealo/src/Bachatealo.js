import React, { Component } from 'react';
import Portada from './containers/Portada.jsx';
import Hero from './containers/Hero.jsx';
import History from './containers/History.jsx';
import Fotos from './containers/Fotos.jsx';
import Video from './containers/Video.jsx';
import Event from './containers/Eventos.jsx';
import HandleError from './containers/Handle-error.jsx';

class Bachatealo extends Component {
  render() {
    return (
      <HandleError>
        <Portada id="portada"/>
        <Hero id="hero"/>
        <History id="history"/>
        <Event id="eventos"/>
        <Fotos id="fotos"/>
        <Video id="videos"/>
      </HandleError>
    );
  }
}

export default Bachatealo;
