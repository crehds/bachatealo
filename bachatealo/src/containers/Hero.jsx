import React, { Component } from 'react';
import Media from '../components/Media.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const album = props.hero.media.map((mediaId) => state.data.entities.media[mediaId]);
  return {
    album,
  };
}

class Hero extends Component {
  render () {
    return (
      <section className="Hero" id={this.props.hero.sectionId}>
        {/*Contenedor de las fotos iniciales*/}
        <div className="hero-container">
          {console.log(this.props.album)}
          {
            this.props.album.map((item) =>
              <Media
                {...item}
                key={item.id}
              />
            )
          }
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps)(Hero);
