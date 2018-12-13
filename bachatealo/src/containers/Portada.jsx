import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';
import { connect } from 'react-redux';
import { addClass } from '../actions/index';

function mapStateToProps(state, props) {
  return {
    idPortada: state.data.section[0].description,
    imgPortada: state.data.section[0].imgPortada,
    menu: state.data.section[0].menu,
  };
}

const mapDispatchToProps = {
  addClass,
};

class Portada extends Component {
  handleAddClass = (event) => {
    // const action = event;
    this.props.addClass(this.nav);
  };

  setNavRef = element => (
    this.nav = element
  );

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
            handleAddClass={this.handleAddClass}
            setRef={this.setNavRef}
          />
        </header>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portada);
