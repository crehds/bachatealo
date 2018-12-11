import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idPortada: state.data.section[0].description,
    imgPortada: state.data.section[0].imgPortada,
    menu: state.data.section[0].menu,
  };
}

class Portada extends Component {
  render() {
    return (
      <section className="Portada" id={this.props.idPortada}>
        {/*Contenedor del logotipo y el menú*/}
        <header id="header" className="header container">
          {/*Logotipo*/}
          <figure className="logotipo">
            <img src={this.props.imgPortada} alt="logotipo de Bachatealo"/>
          </figure>
          {/* Menú*/}
          <Menu
            menu={this.props.menu}
          />
        </header>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Portada);
