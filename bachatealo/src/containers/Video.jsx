import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <section className="Video" id={this.props.id}>
        {/*Titulo independiente del contenedor*/}
        <div className="video-title">
          <h1>{this.props.titleVideo}</h1>
        </div>
        {/*Contenedor de los videos*/}
        <div className="video container">
          {this.props.srcVideo.map((video) => (
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

export default Video;
