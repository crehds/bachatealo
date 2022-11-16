import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const title = state.data.entities.data[props.footer.data].title;
  const details = state.data.entities.data[props.footer.data].details;
  return {
    title,
    details,
  };
}

class Footer extends Component {
  render() {
    const {
      titleFooter,
      name,
      numero,
      correo,
      redesSociales,
    } = this.props.details;
    return (
      <section className="Footer" id={this.props.idFooter}>
        {/*Contenedor del pie de página*/}
        <div className="footer-container">
          {/*Datos del programador*/}
          <div className="footer-details">
            <h1>{titleFooter}</h1>
            <p>{name}</p>
            <p>{numero}</p>
            <p>{correo}</p>
          </div>
          {/*Redes sociales del programador*/}
          <div className="footer-icons">
            {redesSociales.map((red) =>
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
