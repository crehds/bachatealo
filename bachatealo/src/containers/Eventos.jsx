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
          <h1>Chocolatada</h1>
        </div>
        {/*Este event tiene display de flex*/}
        <div className="event">
          <div className="event-flexcontainer">
            <p>Fecha:</p>
            <p>Lugar:</p>
            <p>Hora de inicio:</p>
            <p>Donaciones al:</p>
          </div>
          <div className="event-flexcontainer">
            <p>16 de diciembre</p>
            <p>Municipalidad de los olivos</p>
            <p>7:00 pm</p>
            <p>960265942</p>
          </div>
        </div>
        <div className="event">
          <img className="event-image" src={this.props.evento} alt="evento"/>
        </div>
      </div>
    </section>
  );
  }
}

export default connect(mapStateToProps)(Event);
