import React, { Component } from 'react';
import Section from './Section.jsx';
import Media from './Media.jsx';

export default class Hero extends Component {
  addAnimation = (elements) => {
    console.log(elements);
    elements.forEach((e, i) =>
      setTimeout(
        (e) => {
          e.style.animationName = 'appear';
          e.style.animationDuration = '1.5s';
          e.style.aniamtionIterationCount = '1';
          e.style.animationTimingFunction = 'cubic-bezier(0.57, 0.07, 0.44, 2)';
          e.style.opacity = '1';
        },
        500 * i,
        e
      )
    );
  };

  componentDidMount() {
    let elements = [...document.getElementsByClassName('photo__hero')];
    this.addAnimation(elements);
  }

  render() {
    return (
      <Section id={this.props.id} class={this.props.class}>
        {/*Contenedor de las fotos iniciales*/}
        <div className='hero-container'>
          {this.props.album.map((item, i) => (
            <Media {...item} key={item.id} className='photo__hero' />
          ))}
        </div>
      </Section>
    );
  }
}

// function Hero(props) {
//   return (
//     <Section id={props.id} class={props.class}>
//       {/*Contenedor de las fotos iniciales*/}
//       <div className='hero-container'>
//         {props.album.map((item, i) => (
//           <Media {...item} key={item.id} />
//         ))}
//       </div>
//     </Section>
//   );
// }

// export default Hero;
