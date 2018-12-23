import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const title = state.data.entities.data[props.location.data].title;
  const details = state.data.entities.data[props.location.data].details;
  return {
    title,
    ...details,
  };
}

class Location extends Component {
  render () {
    const {
      googleMap,
      direccion,
      referencia,
      dias,
      horario,
      generos,
      facebook,
    } = this.props;
    return (
      <section className="Location" id={this.props.location.sectionId}>
        {/*Contenedor de la ubicación*/}
        {console.log(this.props)}
        <div className="location-container">
          {/*contenedor del mapa*/}
          <div className="location-container-map">
            <figure className="location-map">
              <iframe className="flexible-map"
                src={googleMap}
                title={this.props.title}
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              >
              </iframe>
            </figure>
          </div>
          {/*contenedor de los detalles de la ubicación*/}
          <div className="location-description">
            <div className="description-left">
              <p>{this.props.title}</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{direccion}</p>
            </div>
            <div className="description-left">
              <p>Referencia</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{referencia}</p>
            </div>
            <div className="description-left">
              <p>Días</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{dias}</p>
            </div>
            <div className="description-left">
              <p>Horario</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{horario}</p>
            </div>
            <div className="description-left">
              <p>Géneros</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{generos}</p>
            </div>
            <div className="description-left">
              <p>Facebook</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{facebook}</p>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Location);
