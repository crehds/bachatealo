import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idEvento: state.data.section[4].description,
    titleEvent: state.data.section[4].titleEvent,
    imgEvento: state.data.section[4].imgEvento,
    details: state.data.section[4].details,
  };
}

class Event extends Component {
  render() {
    return (
      <section className="Event" id={this.props.idEvento}>
        <div className="event-container">
          <div className="event">
            <h1>{this.props.titleEvent}</h1>
          </div>
          {/*Este event tiene display de flex*/}
          <div className="event">
            {this.props.details.map((details) => (
              <div
                className="event-flexcontainer"
                key={details.id}
              >
                <p>{details.linea1}</p>
                <p>{details.linea2}</p>
                <p>{details.linea3}</p>
                <p>{details.linea4}</p>
              </div>
            ))}
          </div>
          <div className="event">
            <img
              className="event-image"
              src={this.props.imgEvento}
              alt="evento"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Event);
