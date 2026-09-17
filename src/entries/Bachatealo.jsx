import React, { Component } from 'react';
import HandleError from '../containers/Handle-error.jsx';
import History from '../containers/History.jsx';
import Location from '../containers/Location.jsx';
import Event from '../containers/Eventos.jsx';
import Fotos from '../containers/Fotos.jsx';
import Video from '../containers/Video.jsx';
import Footer from '../containers/Footer.jsx';
import Header from '../containers/Header.jsx';
import HomeLayout from '../components/Home-layout.jsx';
import { useSiteData } from '../context/SiteDataContext';
import { isEventVisible } from '../utils/events';
import '../cssDev/App.css';

class Bachatealo extends Component {
  render() {
    const {
      portada,
      hero,
      history,
      location,
      eventos,
      fotos,
      videos,
      footer,
      showEvents,
    } = this.props;
    return (
      <HandleError>
        <HomeLayout>
          <Header portada={portada} hero={hero} />
          <History history={history} />
          <Location location={location} />
          {showEvents && <Event eventos={eventos} />}
          <Fotos fotos={fotos} />
          <Video videos={videos} />
          <Footer footer={footer} />
        </HomeLayout>
      </HandleError>
    );
  }
}

function BachatealoContainer(props) {
  const { entities, sections: sectionIds } = useSiteData();

  const results = sectionIds.map((sectionId) => entities.section[sectionId]);

  const sections = {
    portada: {},
    hero: {},
    history: {},
    location: {},
    eventos: {},
    fotos: {},
    videos: {},
    footer: {},
  };

  let cont = 0;
  for (let i in sections) {
    sections[i] = results[cont];
    cont++;
  }

  const showEvents = isEventVisible(entities.data[sections.eventos.data]);

  return <Bachatealo {...props} {...sections} showEvents={showEvents} />;
}

export default BachatealoContainer;
