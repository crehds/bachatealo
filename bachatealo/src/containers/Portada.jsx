import React, { Component } from 'react';

class Portada extends Component {
  render() {
    return (
      <section id="Portada" className="Portada">
        <header id="header" className="header container">
          <figure className="logotipo">
            <img src={this.props.imgPortada} alt="logotipo de Bachatealo"/>
          </figure>
          <nav className="menu">
            <ul>
              {this.props.menu.map((item) =>
                <li key={item.id}>
                  <a
                    href={item.href}>{item.title}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </section>
    );
  }
}

export default Portada;
