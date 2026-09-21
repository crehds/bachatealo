import React, { PureComponent } from 'react';
import { BASE_URL } from '../utils/baseUrl';

class Media extends PureComponent {
  render() {
    const { src, className, alt } = this.props;
    return (
      <div className={className}>
        {/* Per-image alt text belongs in src/data.json alongside each media entry once someone writes real descriptions */}
        {/* Lazy so a display:none tile (the hero and fotos images hidden on a
            phone) has a chance of never being fetched rather than being
            downloaded and then hidden. This is a hint, not a guarantee: the
            spec lets a browser load a deferred image whenever it likes, and
            engines differ on images hidden by an ancestor. Confirm in a
            network panel before relying on the saving. */}
        <img src={BASE_URL + src} alt={alt || ''} loading="lazy" />
      </div>
    );
  }
}

export default Media;
