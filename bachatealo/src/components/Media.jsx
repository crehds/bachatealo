import React, { PureComponent } from 'react';

class Media extends PureComponent {
  state = {
    ...this.props,
  };

  render () {
    const { src, id } = this.state;
    console.log(this.props);
    return (
      <div key={id}>
        <img src={src} alt={id}/>
      </div>
    );
  }
}

export default Media;
