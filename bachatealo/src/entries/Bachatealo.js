import React, { Component } from 'react';
import HandleError from '../containers/Handle-error.jsx';
import Portada from '../containers/Portada.jsx';
import Hero from '../containers/Hero.jsx';
import History from '../containers/History.jsx';
import Location from '../containers/Location.jsx';
import Event from '../containers/Eventos.jsx';
import Fotos from '../containers/Fotos.jsx';
import Video from '../containers/Video.jsx';
import Footer from '../containers/Footer.jsx';

class Bachatealo extends Component {
  render() {
    return (
      <HandleError>
        <Portada/>
        <Hero/>
        <History/>
        <Location/>
        <Event/>
        <Fotos/>
        <Video/>
        <Footer/>
      </HandleError>
    );
  }
}

export default Bachatealo;
