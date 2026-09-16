import React, { PureComponent } from 'react';

class Media extends PureComponent {
  render() {
    const { src, className, alt } = this.props;
    return (
      <div className={className}>
        {/* Per-image alt text belongs in src/data.json alongside each media entry once someone writes real descriptions */}
        <img src={process.env.PUBLIC_URL + src} alt={alt || ''} />
      </div>
    );
  }
}

export default Media;
