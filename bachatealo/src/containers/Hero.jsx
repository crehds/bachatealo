import React, { Component } from 'react';
import Media from '../components/Media.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    idHero: state.data.section[1].description,
    fotosPortada: state.data.section[1].imgPortada,
  };
}

class Hero extends Component {
  render () {
    return (
      <section className="Hero" id={this.props.idHero}>
        {/*Contenedor de las fotos iniciales*/}
        <div className="hero-container">
          {
            this.props.fotosPortada.map((item) =>
              <Media
                key={item.id}
                src={item.foto}
                alt={item.id}
              />
            )
          }
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps)(Hero);
