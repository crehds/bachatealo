import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  render() {
    return (
      <section id={this.props.id} className="Video">
        <div className="video container">
          <figure>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbachatealo%2Fvideos%2F303067066926144%2F&show_text=0&width=560"
              title='video1'
              style={{
                border: 'none',
                overflow: 'hidden',
                width: 'inherit',
                height: 'inherit',
              }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allowFullScreen={true}>
            </iframe>
          </figure>
          <figure>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbachatealo%2Fvideos%2F225816234651228%2F&show_text=0&width=560"
              title='video2'
              style={{
                border: 'none',
                overflow: 'hidden',
                width: 'inherit',
                height: 260,
              }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allowFullScreen={true}>
            </iframe>
          </figure>
        </div>
      </section>
    );
  }
}

export default connect()(Video);
