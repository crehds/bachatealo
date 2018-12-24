import React, { Component } from 'react';
import { connect } from 'react-redux';
import Portada from '../components/Portada.jsx';
import Hero from '../components/Hero.jsx';
import HeaderLayout from '../components/Header-layout.jsx';
import { addClass } from '../actions/index';

function mapStateToProps(state, props) {
  //datos de portada
  const menu = state.data.entities.data[props.portada.data].menu;
  const imgPortada = state.data.entities.data[props.portada.data].imgPortada;

  //datos de hero
  const album = props.hero.media.map((mediaId) => state.data.entities.media[mediaId]);

  return {
    menu,
    imgPortada,
    album,
  };
}

const mapDispatchToProps = {
  addClass,
};

class Header extends Component {

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

  async componentDidMount() {
    await window.addEventListener('resize', this.handleIsActive);
  }

  render() {
    const {
      portada,
      hero,
    } = this.props;
    return (
      <HeaderLayout>
        <Portada
          id={portada.sectionId}
          class={portada.data}
          menu={this.props.menu}
          imgPortada={this.props.imgPortada}
          handleAddClass={this.handleAddClass}
          navRef={this.setNavRef}
        />
        <Hero
          id={hero.sectionId}
          class={hero.data}
          album={this.props.album}
        />
      </HeaderLayout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
