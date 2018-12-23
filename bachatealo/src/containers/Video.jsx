import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const title = state.data.entities.data[props.videos.data].title;
  const album = props.videos.media.map((videoId) => state.data.entities.media[videoId]);
  return {
    title,
    album,
  };
}

class Video extends Component {
  render() {
    return (
      <section className="Video" id={this.props.videos.sectionId}>
        {/*Titulo independiente del contenedor*/}
        <div className="video-title">
          <h1>{this.props.title}</h1>
        </div>
        {/*Contenedor de los videos*/}
        <div className="video container">
          {this.props.album.map((video) => (
            <div key={video.id}>
              <figure>
                <div>
                  <iframe
                    src={video.src}
                    title={video.title}
                    width= '560'
                    height='315'
                    scrolling="no"
                    frameBorder="0"
                    allowtransparency="true"
                    allowFullScreen={true}>
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

export default connect(mapStateToProps)(Video);
