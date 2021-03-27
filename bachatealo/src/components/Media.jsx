import React, { PureComponent } from 'react';

class Media extends PureComponent {
  state = {
    ...this.props,
  };

  render() {
    const { src, id, className } = this.state;
    return (
      <div key={id} className={className}>
        <img src={process.env.PUBLIC_URL + src} alt={id} />
      </div>
    );
  }
}

export default Media;
