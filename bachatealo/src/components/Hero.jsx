import React from 'react';
import Section from './Section.jsx';
import Media from './Media.jsx';

function Hero(props) {
  return (
    <Section
      id={props.id}
      class={props.class}
    >
    {/*Contenedor de las fotos iniciales*/}
    <div className="hero-container">
      {
        props.album.map((item) =>
          <Media
            {...item}
            key={item.id}
          />
        )
      }
    </div>
    </Section>
  );
}

export default Hero;
