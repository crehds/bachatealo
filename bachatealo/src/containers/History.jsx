import React, { Component } from 'react';
import  { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const images = props.history.media.map((mediaId) => state.data.entities.media[mediaId]);
  return {
    ...images,
  };
}

class History extends Component {
  render() {
    return (
      <section className="History" id={this.props.history.sectionId}>
        <div className="history-container">
          {/*Inicia primera parte*/}
          {console.log(this.props)}
          <div className="history-div">
            <div className="history-title">
              <h1>¿Cómo empezamos?</h1>
            </div>
            <p>Aún en desarrollo</p>
          </div>
          <div className="history-div">
            <img
              className="history-img"
              src={this.props[0].src}
              alt="imagen de practica"
            />
          </div>
          {/*Inicia segunda parte*/}
          <div className="history-div">
            <div className="history-title">
              <h1>Actualidad</h1>
            </div>
            <p>Aún en desarrollo
            </p>
          </div>
          <div className="history-div">
            <img
              className="history-img"
              src={this.props[1].src}
              alt="imagen de practica"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(History);
