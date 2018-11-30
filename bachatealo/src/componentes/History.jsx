import React, { Component } from 'react';
import { connect } from  'react-redux';

function mapStateToProps(state) {
  return {
    src: state.rotonda,
    src1: state.alameda,
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
              src={this.props.src}
              alt="imagen de practica"
              />
          </div>
          <div>
            <img
              className="history-img"
              src={this.props.src1}
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
