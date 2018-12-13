import React, { Component } from 'react';
import  { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idHistory: state.data.section[2].description,
    rotonda: state.data.section[2].rotonda,
    alameda: state.data.section[2].alameda,
  };
}

class History extends Component {
  render() {
    return (
      <section className="History" id={this.props.idHistory}>
        <div className="history-container">
          {/*Inicia primera parte*/}
          <div className="history-div">
            <div className="history-title">
              <h1>¿Cómo empezamos?</h1>
            </div>
            <p>Aún en desarrollo</p>
          </div>
          <div className="history-div">
            <img
              className="history-img"
              src={this.props.alameda}
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
              src={this.props.rotonda}
              alt="imagen de practica"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(History);
