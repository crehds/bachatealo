import React, { Component } from 'react';
import { useSiteData } from '../data/SiteDataContext';
import Portada from '../components/Portada.jsx';
import Hero from '../components/Hero.jsx';
import HeaderLayout from '../components/Header-layout.jsx';
import { findEventSection, isEventVisible } from '../utils/events';

class Header extends Component {
  // Whether the mobile menu is open is view state, so it lives here rather
  // than as a class toggled on a DOM node from inside a reducer.
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((previous) => ({ isMenuOpen: !previous.isMenuOpen }));
  };

  // Above the breakpoint the menu is laid out inline, so an open mobile menu
  // must not survive a resize past it.
  handleIsActive = () => {
    // Guarded: resize fires continuously, and setState on an already
    // closed menu would re-render the header for nothing.
    if (
      this.state.isMenuOpen &&
      window.matchMedia('screen and (min-width:769px)').matches
    ) {
      this.setState({ isMenuOpen: false });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleIsActive);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleIsActive);
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
          isMenuOpen={this.state.isMenuOpen}
          onToggleMenu={this.toggleMenu}
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

function HeaderContainer(props) {
  const { entities } = useSiteData();

  //datos de portada
  // The events link must disappear with the section it points at, or the
  // menu offers a jump to an anchor that is no longer rendered. When the
  // eventos entity is missing entirely (as opposed to merely inactive),
  // there is no sectionId to match against and nothing to filter — the
  // menu passes through unchanged instead of dereferencing it.
  const eventSection = findEventSection(entities);
  const menu = eventSection
    ? entities.data[props.portada.data].menu.filter(
        (item) =>
          isEventVisible(eventSection) ||
          item.href !== "#" + eventSection.sectionId
      )
    : entities.data[props.portada.data].menu;
  const imgPortada = entities.data[props.portada.data].imgPortada;

  //datos de hero
  const album = props.hero.media.map((mediaId) => entities.media[mediaId]);

  return (
    <Header {...props} menu={menu} imgPortada={imgPortada} album={album} />
  );
}

export default HeaderContainer;
