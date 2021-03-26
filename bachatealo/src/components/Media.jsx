import React, { PureComponent } from 'react';

class Media extends PureComponent {
  state = {
    ...this.props,
  };

  render () {
    const { src, id } = this.state;
    return (
      <div key={id}>
        <img src={process.env.PUBLIC_URL + src} alt={id}/>
      </div>
    );
  }
}

export default Media;
