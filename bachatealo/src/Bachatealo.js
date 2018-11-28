import React, { Component } from 'react';
import Portada from './componentes/Portada.jsx';
import Hero from './componentes/Hero.jsx';
import History from './componentes/History.jsx';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <section className="Bachatealo">
        <link
          href="https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro"
          rel="stylesheet"
        />
        <Portada />
        <Hero />
        <History />
      </section>
    );
  }
}

export default App;
