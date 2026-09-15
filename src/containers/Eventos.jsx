import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatEventDate } from '../utils/events';

function mapStateToProps(state, props) {
  const { title, evento, imgEvento } = state.data.entities.data[
    props.eventos.data
  ];

  return {
    title,
    evento,
    imgEvento,
  };
}

class Event extends Component {
  render() {
    const { evento } = this.props;

    // Label and value are paired here rather than in two parallel arrays in
    // data.json, where a field added to one side and not the other silently
    // shifted every row out of alignment.
    const rows = [
      ['Fecha', formatEventDate(evento.fecha)],
      ['Lugar', evento.lugar],
      ['Inicio', evento.inicio],
      ['Donaciones', evento.contacto],
    ];

    return (
      <section className="Event" id={this.props.eventos.sectionId}>
        <div className="event-container">
          <div className="event">
            <h2>{this.props.title}</h2>
          </div>
          {/*Este event tiene display de flex*/}
          <div className="event">
            <div className="event-flexcontainer">
              {rows.map(([label]) => (
                <p key={label}>{label}</p>
              ))}
            </div>
            <div className="event-flexcontainer">
              {rows.map(([label, value]) => (
                <p key={label}>{value}</p>
              ))}
            </div>
          </div>
          <div className="event">
            <img
              className="event-image"
              src={process.env.PUBLIC_URL + this.props.imgEvento}
              alt="evento"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Event);
