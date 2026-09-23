import React, { PureComponent } from 'react';
import Section from '../../shared/ui/Section.jsx';
import Media from '../../shared/ui/Media.jsx';
import { useSiteData } from '../../data/SiteDataContext';

// Below 768px hero.css hides every tile from the fifth on
// (`div:nth-child(n + 5) { display: none }`), so these four are the ones
// a visitor sees at every width. They load eagerly because they are the
// first images on the page: deferring what someone is already looking at
// delays the first paint rather than saving anything. The rest keep
// Media's lazy default, which is what stops a phone downloading five
// photos it will never show.
// This number and that CSS rule describe the same thing from two files.
// If one moves, the other has to move with it.
const EAGER_TILES = 4;

class Hero extends PureComponent {
  render() {
    return (
      <Section id={this.props.hero.sectionId} class={this.props.hero.data}>
        {/* The opening photo mosaic */}
        <div className='hero-container'>
          {this.props.album.map((item, i) => (
            <Media
              {...item}
              key={item.id}
              className='photo__hero'
              loading={i < EAGER_TILES ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </Section>
    );
  }
}

// The album lookup used to live in the Header container, which fetched data
// for this section and the header's at once. Each section now reads its own.
function HeroContainer(props) {
  const { entities } = useSiteData();
  const album = props.hero.media.map((mediaId) => entities.media[mediaId]);

  return <Hero {...props} album={album} />;
}

export default HeroContainer;
