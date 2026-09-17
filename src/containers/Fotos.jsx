import React, { Component } from 'react';
import Media from '../components/Media.jsx';
import { useSiteData } from '../context/SiteDataContext';

class Fotos extends Component {
  render() {
    return (
      <section className="Fotos" id={this.props.fotos.sectionId}>
        {/*Titulo independiente del contenedor*/}
        <div className="fotos-title">
          <h2>{this.props.title}</h2>
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

function FotosContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.fotos.data].title;
  const album = props.fotos.media.map((mediaId) => entities.media[mediaId]);
  return <Fotos {...props} title={title} album={album} />;
}

export default FotosContainer;
