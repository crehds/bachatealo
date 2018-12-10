import React, { Component } from 'react';

class Hero extends Component {
  render () {
    return (
      <section className="Hero" id={this.props.id}>
        {/*Contenedor de las fotos iniciales*/}
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
