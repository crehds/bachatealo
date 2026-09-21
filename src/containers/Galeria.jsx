import React, { Component } from 'react';
import Media from '../components/Media.jsx';
import { useSiteData } from '../context/SiteDataContext';
import { formatEventDate } from '../utils/events';

class Galeria extends Component {
  render() {
    return (
      <section className="Galeria" id={this.props.galeria.sectionId}>
        {/*Titulo independiente del contenedor*/}
        <div className="galeria-title">
          <h2>{this.props.title}</h2>
        </div>
        {/*Contenedor de las fotos de eventos pasados*/}
        <div className="galeria container">
          {this.props.album.map((item) => (
            <div className="galeria-item" key={item.id}>
              <Media {...item} />
              <p className="galeria-item-title">{item.title}</p>
              <p className="galeria-item-date">{formatEventDate(item.date)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function GaleriaContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.galeria.data].title;

  // Authoring order in data.json is not load-bearing — that's the entire
  // point of matchSectionsById — so this section orders itself, oldest
  // first, from each item's own date. ISO dates (YYYY-MM-DD) compare
  // correctly as plain strings, so no parsing is needed just to sort.
  // To sort newest first instead, swap a.date and b.date on the next line.
  const album = props.galeria.media
    .map((mediaId) => entities.media[mediaId])
    .sort((a, b) => a.date.localeCompare(b.date));

  return <Galeria {...props} title={title} album={album} />;
}

export default GaleriaContainer;
