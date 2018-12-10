import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';

class Portada extends Component {
  render() {
    return (
      <section className="Portada" id={this.props.id}>
        {/*Contenedor del logotipo y el menú*/}
        <header id="header" className="header container">
          {/*Logotipo*/}
          <figure className="logotipo">
            <img src={this.props.imgPortada} alt="logotipo de Bachatealo"/>
          </figure>
          {/* Menú*/}
          <Menu menu={this.props.menu}/>
          {/*<nav className="menu">
            <ul>
              {this.props.menu.map((item) =>
                <li key={item.id}>
                  <a
                    href={item.href}>{item.title}
                  </a>
                </li>
              )
            </ul>
          </nav>*/}
        </header>
      </section>
    );
  }
}

export default Portada;
