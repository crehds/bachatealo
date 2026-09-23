import React, { Component } from 'react';
import { useSiteData } from '../../context/SiteDataContext';

class Video extends Component {
  render() {
    return (
      <section className='Video' id={this.props.videos.sectionId}>
        {/*Titulo independiente del contenedor*/}
        <div className='video-title'>
          <h2>{this.props.title}</h2>
        </div>
        {/*Contenedor de los videos*/}
        <div className='video container'>
          {this.props.album.map((video) => (
            <div key={video.id}>
              <figure>
                <div>
                  <iframe
                    src={video.src}
                    title={video.title}
                    width='560'
                    height='315'
                    scrolling='no'
                    frameBorder='0'
                    allowtransparency='true'
                    allowFullScreen={true}
                  >
                  </iframe>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

function VideoContainer(props) {
  const { entities } = useSiteData();
  const title = entities.data[props.videos.data].title;
  const album = props.videos.media.map(
    (videoId) => entities.media[videoId]
  );
  return <Video {...props} title={title} album={album} />;
}

export default VideoContainer;
