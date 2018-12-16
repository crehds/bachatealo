import React, { PureComponent } from 'react';

class Media extends PureComponent {
  state = {
    ...this.props,
  };

  render () {
    const { key, src, id } = this.state;
    return (
      <div key={key}>
        <img src={src} alt={id}/>
      </div>
    );
  }
}

export default Media;
