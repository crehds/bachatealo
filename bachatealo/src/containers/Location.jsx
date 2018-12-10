import React, { Component } from 'react';

class Location extends Component {
  render () {
    return (
      <section className="Location">
        <div className="location-container">
          <div className="location-container-map">
            <figure className="location-map">
              <iframe className="flexible-map"
                src={this.props.googleMap}
                title={this.props.titleLocation}
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen>
              </iframe>
            </figure>
          </div>
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
