import React, { Component } from 'react';
import { connect } from  'react-redux';

function mapStateToProps({ rotonda, alameda }) {
  return {
    rotonda,
    alameda,
  };
}

class History extends Component {
  render() {
    return (
      <section className="History" id={this.props.id}>
        <div className="history-container">
          <p>Esto es otro párrafo</p>
          <div>
            <img
              className="history-img"
              src={this.props.rotonda}
              alt="imagen de practica"
              />
          </div>
          <div>
            <img
              className="history-img"
              src={this.props.alameda}
              alt="imagen de practica"
              />
          </div>
          <p>Este es otro parrafo</p>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(History);
