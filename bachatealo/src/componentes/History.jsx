import React, { Component } from 'react';
import { connect } from  'react-redux';

function mapStateToProps(state) {
  return {
    src: state.practica,
  };
}

class History extends Component {
  render() {
    return (
      <section className="History">
        <div className="history-container">
          <p></p>
          <div>
            <img
              className="history-img"
              src={this.props.src}
              alt="imagen de practica"
              />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(History);
