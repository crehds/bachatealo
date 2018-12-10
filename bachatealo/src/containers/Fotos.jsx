import React, { Component } from 'react';

class Fotos extends Component {
  render() {
    return (
      <section className="Fotos" id={this.props.id}>
        {/*Titulo independiente del contenedor*/}
        <div className="fotos-title">
          <h1>{this.props.titleFotos}</h1>
        </div>
        {/*Contenedor de las fotos*/}
        <div className="fotos container">
          {
            this.props.imgFotos.map((item) =>
              <div key={item.id}>
                <figure>
                  <img
                    src={item.foto}
                    alt={item.id}
                  />
                </figure>
              </div>
            )
          }
        </div>
      </section>
    );
  }

}

export default Fotos;
