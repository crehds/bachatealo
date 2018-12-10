import React, { Component } from 'react';

class History extends Component {
  render() {
    return (
      <section className="History" id={this.props.id}>
        <div className="history-container">
          {/*Inicia primera parte*/}
          <div className="history-div">
            <div className="history-title">
              <h1>¿Cómo empezamos?</h1>
            </div>
            <p>Esto es otro párrafo</p>
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
            <p>Esto es otro párrafo
              <br/>otra linea
              <br/>otra linea
              <br/>otra linea
              <br/>otra linea
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

export default History;
