import React from 'react';
import Menu from './Menu.jsx';
import Section from '../shared/ui/Section.jsx';
import { BASE_URL } from '../utils/baseUrl';

function Portada(props) {
  return (
    <Section id={props.id} class={props.class}>
      <header id='header' className='header container'>
        {/* The only h1 on the page: the logo is an image, so the page needs a
            text heading that assistive technology and crawlers can read. */}
        <h1 className='visually-hidden'>Bachatealo</h1>
        <a href='#1' className='logotipo-link'>
          <figure className='logotipo'>
            <img
              src={BASE_URL + props.imgPortada}
              alt='logotipo de Bachatealo'
            />
          </figure>
        </a>
        <Menu
          menu={props.menu}
          isOpen={props.isMenuOpen}
          onToggle={props.onToggleMenu}
        />
      </header>
    </Section>
  );
}

export default Portada;
