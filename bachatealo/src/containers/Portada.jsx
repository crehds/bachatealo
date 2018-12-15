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
    this.props.addClass(this.nav);

  };

  handleIsActive = () => {
    const media = window.matchMedia('screen and (min-width:769px)');
    if (media.matches) {
      if (this.nav.classList.contains('is-active')) {
        this.nav.classList.remove('is-active');
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
    const d = window.innerWidth;
    return (
      <section className="Portada" id={this.props.idPortada}>
        {/*Contenedor del logotipo y el menú*/}
        <header id="header" className="header container">
          {/*Logotipo*/}
          <a href="#Portada" className="logotipo-link">
            <figure className="logotipo">
              <img src={this.props.imgPortada} href="#Portada" alt="logotipo de Bachatealo"/>
            </figure>
          </a>
          {console.log(d)}
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
