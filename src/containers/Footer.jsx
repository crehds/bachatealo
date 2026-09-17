import React, { Component } from 'react';
import { useSiteData } from '../context/SiteDataContext';

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
      <section className="Footer" id={this.props.footer.sectionId}>
        {/*Contenedor del pie de página*/}
        <div className="footer-container">
          {/*Datos del programador*/}
          <div className="footer-details">
            <h2>{titleFooter}</h2>
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
                aria-label={red.name}
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

function FooterContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.footer.data].title;
  const details = entities.data[props.footer.data].details;
  return <Footer {...props} title={title} details={details} />;
}

export default FooterContainer;
