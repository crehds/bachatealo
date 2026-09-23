import React, { Component } from 'react';
import { useSiteData } from '../../data/SiteDataContext';
import { formatEventDate } from '../../utils/events';
import { BASE_URL } from '../../utils/baseUrl';

class Event extends Component {
  render() {
    const { event } = this.props;

    // Label and value are paired here rather than in two parallel arrays in
    // data.json, where a field added to one side and not the other silently
    // shifted every row out of alignment.
    //
    // The labels are Spanish because the visitor reads them. Only the keys
    // they pull from are English.
    const rows = [
      ['Fecha', formatEventDate(event.date)],
      ['Lugar', event.venue],
      ['Inicio', event.start],
      ['Donaciones', event.contact],
    ];

    return (
      <section className="Event" id={this.props.events.sectionId}>
        <div className="event-container">
          <div className="event">
            <h2>{this.props.title}</h2>
          </div>
          {/* This one lays its children out with flex */}
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
              src={BASE_URL + this.props.eventImage}
              alt="evento"
            />
          </div>
        </div>
      </section>
    );
  }
}

function EventsContainer(props) {
  const { entities } = useSiteData();
  const { title, event, eventImage } = entities.data[props.events.data];

  return (
    <Event {...props} title={title} event={event} eventImage={eventImage} />
  );
}

export default EventsContainer;
