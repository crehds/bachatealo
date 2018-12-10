import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <div className="footer-container">
          <div className="footer-details">
            <h1>{this.props.titleFooter}</h1>
            <p>{this.props.name}</p>
            <p>{this.props.numero}</p>
            <p>{this.props.correo}</p>
          </div>
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

export default Footer;
