import React, { Component } from 'react';
import HandleError from './ErrorBoundary.jsx';
import History from '../sections/history/History.jsx';
import Location from '../sections/location/Location.jsx';
import Event from '../sections/events/Events.jsx';
import Gallery from '../sections/gallery/Gallery.jsx';
import Photos from '../sections/photos/Photos.jsx';
import Video from '../sections/videos/Video.jsx';
import Footer from '../sections/footer/Footer.jsx';
import Header from '../containers/Header.jsx';
import HomeLayout from './HomeLayout.jsx';
import { useSiteData } from '../data/SiteDataContext';
import { isEventVisible, isGalleryVisible } from '../utils/events';
import './layers.css';

class Bachatealo extends Component {
  render() {
    const {
      portada,
      hero,
      history,
      location,
      events,
      gallery,
      photos,
      videos,
      footer,
      showEvents,
      showGallery,
    } = this.props;
    return (
      <HandleError>
        <HomeLayout>
          <Header portada={portada} hero={hero} />
          <History history={history} />
          <Location location={location} />
          {showEvents && <Event events={events} />}
          {showGallery && <Gallery gallery={gallery} />}
          <Photos photos={photos} />
          <Video videos={videos} />
          <Footer footer={footer} />
        </HomeLayout>
      </HandleError>
    );
  }
}

// The fixed slots Bachatealo renders into, and the only place that list is
// spelled out — matchSectionsById and the missing-key check below both
// read from this instead of duplicating it.
const SECTION_KEYS = [
  'portada',
  'hero',
  'history',
  'location',
  'events',
  'gallery',
  'photos',
  'videos',
  'footer',
];

// Matches each normalized section to its fixed slot by identity
// (data.json's own `data.id`, e.g. "Portada", "history") instead of by
// array position. Exported so this — the part of the file most likely to
// go wrong again — is testable on its own, with plain fixtures, without
// rendering every section's container.
//
// Two of today's ids (Portada, Hero) are capitalized while the rest
// (history, location, events, photos, videos, footer) are not, and the
// slot keys above are all lower-case. Matching case-insensitively means a
// data.json author never has to remember which two ids are special-cased —
// any reasonable capitalization of a known name just works. The cost is
// that "Portada" and "portada" become indistinguishable, which nothing
// here needs to tell apart.
//
// A section whose id matches no known key is ignored, not misassigned —
// that's what lets data.json carry a section this component doesn't
// render yet (like a future gallery) without breaking today's build. A
// key with no matching section is the opposite kind of problem — silently
// rendering with a missing slot is a broken page in production — so that
// throws immediately, the same house style as useSiteData's
// throw-outside-provider guard.
export function matchSectionsById(results) {
  const sections = {};

  results.forEach((result) => {
    const key = SECTION_KEYS.find(
      (candidate) => candidate === result.data.toLowerCase()
    );
    if (key) {
      sections[key] = result;
    }
  });

  const missingKeys = SECTION_KEYS.filter((key) => !sections[key]);
  if (missingKeys.length > 0) {
    throw new Error(
      `Bachatealo: data.json has no section whose data.id matches "${missingKeys.join(
        '", "'
      )}" (case-insensitive). Every one of ${SECTION_KEYS.join(
        ', '
      )} is required.`
    );
  }

  return sections;
}

function BachatealoContainer(props) {
  const { entities, sections: sectionIds } = useSiteData();

  const results = sectionIds.map((sectionId) => entities.section[sectionId]);
  const sections = matchSectionsById(results);

  const showEvents = isEventVisible(entities.data[sections.events.data]);
  const showGallery = isGalleryVisible(entities.data[sections.gallery.data]);

  return (
    <Bachatealo
      {...props}
      {...sections}
      showEvents={showEvents}
      showGallery={showGallery}
    />
  );
}

export default BachatealoContainer;
