import React, { PureComponent } from 'react';
import { BASE_URL } from '../utils/baseUrl';

class Media extends PureComponent {
  render() {
    const { src, className, alt } = this.props;
    return (
      <div className={className}>
        {/* Per-image alt text belongs in src/data.json alongside each media entry once someone writes real descriptions */}
        {/* Lazy so a display:none tile (e.g. hero/fotos images hidden on a
            phone) is never fetched at all, not just hidden after download. */}
        <img src={BASE_URL + src} alt={alt || ''} loading="lazy" />
      </div>
    );
  }
}

export default Media;
