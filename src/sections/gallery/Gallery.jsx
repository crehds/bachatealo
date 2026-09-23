import React, { Component } from 'react';
import Media from '../../shared/ui/Media.jsx';
import { useSiteData } from '../../data/SiteDataContext';
import { formatEventDate } from '../../utils/events';

class Gallery extends Component {
  render() {
    return (
      <section className="Gallery" id={this.props.gallery.sectionId}>
        {/* Title kept outside the grid container */}
        <div className="gallery-title">
          <h2>{this.props.title}</h2>
        </div>
        {/* Photos from past events */}
        <div className="gallery container">
          {this.props.album.map((item) => (
            <div className="gallery-item" key={item.id}>
              <Media {...item} />
              <p className="gallery-item-title">{item.title}</p>
              <p className="gallery-item-date">{formatEventDate(item.date)}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function GalleryContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.gallery.data].title;

  // Authoring order in data.json is not load-bearing — that's the entire
  // point of matchSectionsById — so this section orders itself, oldest
  // first, from each item's own date. ISO dates (YYYY-MM-DD) compare
  // correctly as plain strings, so no parsing is needed just to sort.
  // To sort newest first instead, swap a.date and b.date on the next line.
  const album = props.gallery.media
    .map((mediaId) => entities.media[mediaId])
    .sort((a, b) => a.date.localeCompare(b.date));

  return <Gallery {...props} title={title} album={album} />;
}

export default GalleryContainer;
