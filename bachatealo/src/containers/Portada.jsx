import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';
import { connect } from 'react-redux';
import { addClass } from '../actions/index';

function mapStateToProps(state, props) {
  const menu = state.data.entities.data[props.portada.data].menu;

  // const imgPortada = props.portada.media.map((mediaId) => state.data.entities.media[mediaId]);
  const imgPortada = state.data.entities.data[props.portada.data].imgPortada;

  return {
    menu,
    imgPortada,
  };
}

const mapDispatchToProps = {
  addClass,
};

class Portada extends Component {

  handleAddClass = async (event) => {
    await this.props.addClass(this.nav);
  };

  handleIsActive = async () => {
    const media = window.matchMedia('screen and (min-width:769px)');
    if (media.matches) {
      if (this.nav.classList.contains('is-active')) {
        await this.nav.classList.remove('is-active');
      }
    }
  };

  setNavRef = element => (
    this.nav = element
  );

  componentDidMount() {
    window.addEventListener('resize', this.handleIsActive);
  }

  render() {
    return (
      <section className="Portada" id={this.props.portada.id}>
        {console.log(this.props)}
        {/*Contenedor del logotipo y el menú*/}
        <header id="header" className="header container">
          {/*Logotipo*/}
          <a href="#Portada" className="logotipo-link">
            <figure className="logotipo">
              <img src={this.props.imgPortada} href="#Portada" alt="logotipo de Bachatealo"/>
            </figure>
          </a>
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
