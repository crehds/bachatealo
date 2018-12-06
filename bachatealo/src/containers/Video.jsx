import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  render() {
    return (
      <section id={this.props.id} className="Video">
        <div className="video-title">
          <h1>Recuerdos...</h1>
        </div>
        <div className="video container">
          <figure>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbachatealo%2Fvideos%2F303067066926144%2F&show_text=0&width=560"
                title='video1'
                width= '560'
                height='315'
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={false}>
              </iframe>
            </div>
          </figure>
          <figure>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbachatealo%2Fvideos%2F225816234651228%2F&show_text=0&width=560"
                title='video2'
                width= '560'
                height='315'
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={false}>
              </iframe>
            </div>
          </figure>
        </div>
      </section>
    );
  }
}

export default connect()(Video);
