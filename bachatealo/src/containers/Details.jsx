import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ data }) {
  return {
    data,
  };
}

class Details extends Component {
  render () {
    return (
      <section className="Details" id={this.props.id}>
        <div className="footer-container">
          <div className="footer-container-map">
            <figure className="footer-map">
              <iframe className="flexible-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.751916764291!2d-77.07334038561879!3d-11.991652494141654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce5bd20c7b79%3A0x8c32944c21a8f61e!2sPlaza+de+Armas+de+Los+Olivos%2C+Jr.C%C3%A9sar+Vallejo%2C+Los+Olivos+15301!5e0!3m2!1ses!2spe!4v1544216183284"
                title={this.props.data.section[0].title}
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen>
              </iframe>
            </figure>
          </div>
          <div className="footer-details">
              <div className="description-left">
                <p>Ubicación</p>
              </div>
              <div className="description-right">
                <p>:&nbsp;&nbsp;{this.props.data.section[0].datos[0].datos.direccion}</p>
              </div>
            <div className="description-left">
              <p>Referencia</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.data.section[0].datos[0].datos.referencia}</p>
            </div>
            <div className="description-left">
              <p>Días</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.data.section[0].datos[0].datos.Dias}</p>
            </div>
            <div className="description-left">
              <p>Horario</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.data.section[0].datos[0].datos.horario}</p>
            </div>
            <div className="description-left">
              <p>Géneros</p>
            </div>
            <div className="description-right">
              <p>:&nbsp;&nbsp;{this.props.data.section[0].datos[0].datos.generos}</p>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Details);
