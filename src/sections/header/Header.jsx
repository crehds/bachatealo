import React, { Component } from 'react';
import Menu from './Menu.jsx';
import Section from '../../shared/ui/Section.jsx';
import { useSiteData } from '../../data/SiteDataContext';
import { BASE_URL } from '../../utils/baseUrl';
import { findEventSection, isEventVisible } from '../../utils/events';
import useActiveSection from './useActiveSection';

// This section renders the page's real <header>: the logo and the nav.
// It used to be called Portada while a separate container called Header
// rendered no header at all — it only wrapped this section and the hero in
// an unstyled <section class="header-layout">. That wrapper had no rule in
// any stylesheet and nothing selected through it, so it is gone, the name
// now sits on the element that earns it, and the hero fetches its own data.
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
    const { header } = this.props;
    return (
      <Section id={header.sectionId} class={header.data}>
        {/* Class is `header-bar`, not `header`: the <Section> above already
            carries the section's own class, which comes from the data id and
            is `Header`. Two classes differing only in case on nested elements
            is a trap, so the inner one says what it is instead. */}
        <header className='header-bar container'>
          {/* The only h1 on the page: the logo is an image, so the page needs a
              text heading that assistive technology and crawlers can read. */}
          <h1 className='visually-hidden'>Bachatealo</h1>
          <a href='#1' className='logotipo-link'>
            <figure className='logotipo'>
              <img
                src={BASE_URL + this.props.logo}
                alt='logotipo de Bachatealo'
              />
            </figure>
          </a>
          <Menu
            menu={this.props.menu}
            isOpen={this.state.isMenuOpen}
            onToggle={this.toggleMenu}
            activeHref={this.props.activeHref}
          />
        </header>
      </Section>
    );
  }
}

function HeaderContainer(props) {
  const { entities } = useSiteData();

  // The events link must disappear with the section it points at, or the
  // menu offers a jump to an anchor that is no longer rendered. When the
  // events entity is missing entirely (as opposed to merely inactive),
  // there is no sectionId to match against and nothing to filter — the
  // menu passes through unchanged instead of dereferencing it.
  const eventSection = findEventSection(entities);
  const declaredMenu = entities.data[props.header.data].menu;
  const menu = eventSection
    ? declaredMenu.filter(
        (item) =>
          isEventVisible(eventSection) ||
          item.href !== '#' + eventSection.sectionId
      )
    : declaredMenu;

  const logo = entities.data[props.header.data].logo;

  // Scroll-spy is DOM/listener wiring, not view state, so it lives in a
  // hook here rather than as more state on the class component below.
  const hrefs = menu.map((item) => item.href);
  const activeHref = useActiveSection(hrefs);

  return <Header {...props} menu={menu} logo={logo} activeHref={activeHref} />;
}

export default HeaderContainer;
