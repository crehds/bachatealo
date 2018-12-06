import React, { Component } from 'react';
import { connect } from  'react-redux';

function mapStateToProps({ fotosPortada }) {
  return {
    fotosPortada,
  };
}

class Hero extends Component {
  render () {
    return (
      <section id="hero" className="Hero">
        <div className="hero-container">
          {
            this.props.fotosPortada.map((item) =>
              <div key={item.id}>
                <img src={item.foto} alt={item.id}/>
              </div>
            )
          }
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps)(Hero);
