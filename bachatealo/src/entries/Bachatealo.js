import React, { Component } from 'react';
import Portada from '../containers/Portada.jsx';
import Hero from '../containers/Hero.jsx';
import History from '../containers/History.jsx';
import Fotos from '../containers/Fotos.jsx';
import Video from '../containers/Video.jsx';
import Event from '../containers/Eventos.jsx';
import HandleError from '../containers/Handle-error.jsx';
import Details from '../containers/Details.jsx';
import Footer from '../containers/Footer.jsx';

class Bachatealo extends Component {
  render() {
    return (
      <HandleError>
        <Portada id="portada"/>
        <Hero id="hero"/>
        <History id="history"/>
        <Details id="footer"/>
        <Event id="eventos"/>
        <Fotos id="fotos"/>
        <Video id="videos"/>
        <Footer id="footer"/>
      </HandleError>
    );
  }
}

export default Bachatealo;
