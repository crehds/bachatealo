import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ data }) {
  return {
    redesSociales: data.section[0].datos[1].redesSociales,
  };
}

class Footer extends Component {
  render() {
    return (
      <section className="Footer" id={this.props.id}>
        <div className="footer-container">
          <div className="footer-details">
            <p>dato</p>
            <p>dato</p>
            <p>dato</p>
          </div>
          <div className="footer-icons">
            {this.props.redesSociales.map((red) =>
              <a href={red.src}>{red.description}</a>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Footer);
