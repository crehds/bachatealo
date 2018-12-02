import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ evento }) {
  return {
    evento,
  };
}

class Event extends Component {
  render() {
    return (
    <section className="Event" id={this.props.id}>
      <div className="event-container">
        <div className="event">
          <h1>Título</h1>
        </div>
        <div className="event">
          <p>Descripción</p>
        </div>
        <div className="event">
          <img src={this.props.evento} alt="evento"/>
        </div>
      </div>
    </section>
  );
  }
}

export default connect(mapStateToProps)(Event);
