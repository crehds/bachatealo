import React from 'react';
import Menu from './Menu.jsx';
import Section from './Section.jsx';

function Portada(props) {
  return (
    <Section
      id={props.id}
      class={props.class}
    >
      <header id="header" className="header container">
        <a href="#1" className="logotipo-link">
          <figure className="logotipo">
            <img src={props.imgPortada} alt="logotipo de Bachatealo"/>
          </figure>
        </a>
        <Menu
          menu={props.menu}
          handleAddClass={props.handleAddClass}
          setRef={props.navRef}
        />
      </header>
    </Section>
  );
}

export default Portada;
