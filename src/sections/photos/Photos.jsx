import React, { Component } from 'react';
import Media from '../../shared/ui/Media.jsx';
import { useSiteData } from '../../data/SiteDataContext';

class Photos extends Component {
  render() {
    return (
      <section className="Photos" id={this.props.photos.sectionId}>
        {/* Title kept outside the grid container */}
        <div className="photos-title">
          <h2>{this.props.title}</h2>
        </div>
        {/* The photo grid itself */}
        <div className="photos container">
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

function PhotosContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.photos.data].title;
  const album = props.photos.media.map((mediaId) => entities.media[mediaId]);
  return <Photos {...props} title={title} album={album} />;
}

export default PhotosContainer;
