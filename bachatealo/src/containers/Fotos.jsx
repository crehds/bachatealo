import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idFotos: state.data.section[5].description,
    titleFotos: state.data.section[5].titleFotos,
    imgFotos: state.data.section[5].imgFotos,
  };
}

class Fotos extends Component {
  render() {
    return (
      <section className="Fotos" id={this.props.idFotos}>
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

export default connect(mapStateToProps)(Fotos);
