import React, { Component } from 'react';
import { useSiteData } from '../../data/SiteDataContext';

class Location extends Component {
  render () {
    const {
      googleMap,
      address,
      landmark,
      days,
      hours,
      genres,
      facebook,
    } = this.props;
    return (
      <section className="Location" id={this.props.location.sectionId}>
        <h2 className="visually-hidden">{this.props.title}</h2>
        {/*Contenedor de la ubicación*/}
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
              <p>:&nbsp;&nbsp;{address}</p>
            </div>
            <div className="description-left">
              <p>Referencia</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{landmark}</p>
            </div>
            <div className="description-left">
              <p>Días</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{days}</p>
            </div>
            <div className="description-left">
              <p>Horario</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{hours}</p>
            </div>
            <div className="description-left">
              <p>Géneros</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{genres}</p>
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

function LocationContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.location.data].title;
  const details = entities.data[props.location.data].details;
  return <Location {...props} title={title} {...details} />;
}

export default LocationContainer;
