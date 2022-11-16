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
import { connect } from 'react-redux';
import '../cssProd/index.css';

function mapStateToProps(state, props) {
  const results = state.data.sections.map(
    (sectionId) => state.data.entities.section[sectionId]
  );

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

  return {
    ...sections,
  };
}

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
    } = this.props;
    return (
      <HandleError>
        <HomeLayout>
          <Header portada={portada} hero={hero} />
          <History history={history} />
          <Location location={location} />
          <Event eventos={eventos} />
          <Fotos fotos={fotos} />
          <Video videos={videos} />
          <Footer footer={footer} />
        </HomeLayout>
      </HandleError>
    );
  }
}

export default connect(mapStateToProps)(Bachatealo);
