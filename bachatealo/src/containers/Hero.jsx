import React, { Component } from 'react';
import { connect } from  'react-redux';

function mapStateToProps(state) {
  return {
    imagen1: state.imagen1,
    imagen2: state.imagen2,
    imagen3: state.imagen3,
    imagen4: state.imagen4,
    imagen5: state.imagen5,
    imagen6: state.imagen6,
    imagen7: state.imagen7,
    imagen8: state.imagen8,
    imagen9: state.imagen9,
  };
}

class Hero extends Component {
  render () {
    console.log('hola');
    return (
      <section id="hero" className="Hero">
        <div className="hero-container">
          <div>
            <img src={this.props.imagen1} alt="1"/>
          </div>
          <div>
            <img src={this.props.imagen2} alt="2"/>
          </div>
          <div>
            <img src={this.props.imagen3} alt="3"/>
          </div>
          <div>
            <img src={this.props.imagen4} alt="4"/>
          </div>
          <div>
            <img src={this.props.imagen5} alt="5"/>
          </div>
          <div>
            <img src={this.props.imagen6} alt="6"/>
          </div>
          <div>
            <img src={this.props.imagen7} alt="7"/>
          </div>
          <div>
            <img src={this.props.imagen8} alt="8"/>
          </div>
          <div>
            <img src={this.props.imagen9} alt="9"/>
          </div>
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps)(Hero);
