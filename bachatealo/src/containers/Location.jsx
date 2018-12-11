import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idLocation: state.data.section[3].description,
    googleMap: state.data.section[3].googleMap,
    titleLocation: state.data.section[3].titleLocation,
    direccion: state.data.section[3].direccion,
    referencia: state.data.section[3].referencia,
    Dias: state.data.section[3].Dias,
    horario: state.data.section[3].horario,
    generos: state.data.section[3].generos,
  };
}

class Location extends Component {
  render () {
    return (
      <section className="Location" id={this.props.idLocation}>
        {/*Contenedor de la ubicación*/}
        <div className="location-container">
          {/*contenedor del mapa*/}
          <div className="location-container-map">
            <figure className="location-map">
              <iframe className="flexible-map"
                src={this.props.googleMap}
                title={this.props.titleLocation}
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
              <p>{this.props.titleLocation}</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.direccion}</p>
            </div>
            <div className="description-left">
              <p>Referencia</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.referencia}</p>
            </div>
            <div className="description-left">
              <p>Días</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.Dias}</p>
            </div>
            <div className="description-left">
              <p>Horario</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.horario}</p>
            </div>
            <div className="description-left">
              <p>Géneros</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.generos}</p>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Location);
