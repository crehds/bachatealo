import React, { Component } from 'react';
import { useSiteData } from '../../data/SiteDataContext';

class Footer extends Component {
  render() {
    const {
      heading,
      name,
      phone,
      email,
      socialLinks,
    } = this.props.details;
    return (
      <section className="Footer" id={this.props.footer.sectionId}>
        {/*Contenedor del pie de página*/}
        <div className="footer-container">
          {/*Datos del programador*/}
          <div className="footer-details">
            <h2>{heading}</h2>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
          {/* The developer's social links */}
          <div className="footer-icons">
            {socialLinks.map((link) =>
              <a
                key={link.id}
                href={link.href}
                className={link.description}
                aria-label={link.name}
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
