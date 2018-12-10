import React, { Component } from 'react';

class Location extends Component {
  render () {
    return (
      <section className="Location" id={this.props.id}>
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

export default Location;
