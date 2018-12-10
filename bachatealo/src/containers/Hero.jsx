import React, { Component } from 'react';

class Hero extends Component {
  render () {
    return (
      <section id="hero" className="Hero">
        <div className="hero-container">
          {
            this.props.fotosPortada.map((item) =>
              <div key={item.id}>
                <img src={item.foto} alt={item.id}/>
              </div>
            )
          }
        </div>
      </section>
    );
  }
}
export default Hero;
