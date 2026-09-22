import React, { PureComponent } from 'react';
import Section from './Section.jsx';
import Media from './Media.jsx';

// Below 640px hero.css hides every tile from the fifth on
// (`div:nth-child(n + 5) { display: none }`), so these four are the ones
// a visitor sees at every width. They load eagerly because they are the
// first images on the page: deferring what someone is already looking at
// delays the first paint rather than saving anything. The rest keep
// Media's lazy default, which is what stops a phone downloading five
// photos it will never show.
// This number and that CSS rule describe the same thing from two files.
// If one moves, the other has to move with it.
const EAGER_TILES = 4;

export default class Hero extends PureComponent {
  render() {
    return (
      <Section id={this.props.id} class={this.props.class}>
        {/*Contenedor de las fotos iniciales*/}
        <div className='hero-container'>
          {this.props.album.map((item, i) => (
            <Media
              {...item}
              key={item.id}
              className='photo__hero'
              loading={i < EAGER_TILES ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </Section>
    );
  }
}
