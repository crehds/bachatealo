import React, { Component } from 'react';
import HandleError from '../containers/Handle-error.jsx';
import Portada from '../containers/Portada.jsx';
// import Hero from '../containers/Hero.jsx';
// import History from '../containers/History.jsx';
// import Location from '../containers/Location.jsx';
// import Event from '../containers/Eventos.jsx';
// import Fotos from '../containers/Fotos.jsx';
// import Video from '../containers/Video.jsx';
// import Footer from '../containers/Footer.jsx';
// import Portada from '../components/Portada.jsx';
import HomeLayout  from '../components/Home-layout.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const results = state.data.sections.map((sectionId) => state.data.entities.section[sectionId]);

  const sections = {
    portada: {},
    hero: {},
    history: {},
    location: {},
    event: {},
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
    sections,
  };
}

class Bachatealo extends Component {
  render() {
    return (
      <HandleError>
        <HomeLayout>
        { console.log(this.props.sections)}
          <Portada portada={this.props.sections.portada}/>
          {/*<Hero />
          <History/>
          <Location/>
          <Event/>
          <Fotos/>
          <Video/>
          <Footer/>*/}
        </HomeLayout>
      </HandleError>
    );
  }
}

export default connect(mapStateToProps)(Bachatealo);
