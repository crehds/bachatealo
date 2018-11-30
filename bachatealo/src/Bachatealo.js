import React, { Component } from 'react';
import Portada from './componentes/Portada.jsx';
import Hero from './componentes/Hero.jsx';
import History from './componentes/History.jsx';
import Fotos from './componentes/Fotos.jsx';
import './css/index.css';
import Video from './componentes/Video.jsx';

class App extends Component {
  render() {
    return (
      <section className="Bachatealo">
        <link
          href="https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro"
          rel="stylesheet"
        />
        <Portada id="portada"/>
        <Hero id="hero"/>
        <History id="history"/>
        <Fotos id="fotos"/>
        <Video id="videos"/>
      </section>
    );
  }
}

export default App;
