import React, { Component } from 'react';
import Media from '../components/Media.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const title = state.data.entities.data[props.fotos.data].title;
  const album = props.fotos.media.map((mediaId) => state.data.entities.media[mediaId]);
  return {
    title,
    album,
  };
}

class Fotos extends Component {
  render() {
    return (
      <section className="Fotos" id={this.props.fotos.sectionId}>
        {/*Titulo independiente del contenedor*/}
        <div className="fotos-title">
          <h1>{this.props.title}</h1>
        </div>
        {/*Contenedor de las fotos*/}
        <div className="fotos container">
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

export default connect(mapStateToProps)(Fotos);
