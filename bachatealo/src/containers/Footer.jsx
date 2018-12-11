import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idFooter: state.data.section[7].description,
    titleFooter: state.data.section[7].titleFooter,
    name: state.data.section[7].name,
    numero: state.data.section[7].numero,
    correo: state.data.section[7].correo,
    redesSociales: state.data.section[7].redesSociales,
  };
}

class Footer extends Component {
  render() {
    return (
      <section className="Footer" id={this.props.idFooter}>
        {/*Contenedor del pie de página*/}
        <div className="footer-container">
          {/*Datos del programador*/}
          <div className="footer-details">
            <h1>{this.props.titleFooter}</h1>
            <p>{this.props.name}</p>
            <p>{this.props.numero}</p>
            <p>{this.props.correo}</p>
          </div>
          {/*Redes sociales del programador*/}
          <div className="footer-icons">
            {this.props.redesSociales.map((red) =>
              <a
                key={red.id}
                href={red.href}
                className={red.description}
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Footer);
