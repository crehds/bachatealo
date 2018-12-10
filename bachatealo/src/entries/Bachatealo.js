import React, { Component } from 'react';
import HandleError from '../containers/Handle-error.jsx';
import Portada from '../containers/Portada.jsx';
import Hero from '../containers/Hero.jsx';
import History from '../containers/History.jsx';
import Location from '../containers/Location.jsx';
import Event from '../containers/Eventos.jsx';
import Fotos from '../containers/Fotos.jsx';
import Video from '../containers/Video.jsx';
import Footer from '../containers/Footer.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    imgPortada: state.data.section[0].imgPortada,
    menu: state.data.section[0].menu,

    fotosPortada: state.data.section[1].imgPortada,

    rotonda: state.data.section[2].rotonda,
    alameda: state.data.section[2].alameda,

    googleMap: state.data.section[3].googleMap,
    titleLocation: state.data.section[3].titleLocation,
    direccion: state.data.section[3].direccion,
    referencia: state.data.section[3].referencia,
    Dias: state.data.section[3].Dias,
    horario: state.data.section[3].horario,
    generos: state.data.section[3].generos,

    titleEvent: state.data.section[4].titleEvent,
    imgEvento: state.data.section[4].imgEvento,
    details: state.data.section[4].details,

    titleFotos: state.data.section[5].titleFotos,
    imgFotos: state.data.section[5].imgFotos,

    titleVideo: state.data.section[6].titleVideo,
    srcVideo: state.data.section[6].srcVideo,

    titleFooter: state.data.section[7].titleFooter,
    name: state.data.section[7].name,
    numero: state.data.section[7].numero,
    correo: state.data.section[7].correo,
    redesSociales: state.data.section[7].redesSociales,

  };
}

class Bachatealo extends Component {
  render() {
    return (
      <HandleError>
        <Portada
        imgPortada={this.props.imgPortada}
        menu={this.props.menu}
        />
        <Hero
        fotosPortada={this.props.fotosPortada}
        />
        <History
          alameda={this.props.alameda}
          rotonda={this.props.rotonda}
        />
      <Location
          googleMap={this.props.googleMap}
          titleDetails={this.props.titleDetails}
          direccion={this.props.direccion}
          referencia={this.props.referencia}
          Dias={this.props.Dias}
          horario={this.props.horario}
          generos={this.props.generos}
        />
        <Event
          titleEvent={this.props.titleEvent}
          imgEvento={this.props.imgEvento}
          details={this.props.details}
        />
        <Fotos
        titleFotos={this.props.titleFotos}
        imgFotos={this.props.imgFotos}
        />
        <Video
          titleVideo={this.props.titleVideo}
          srcVideo={this.props.srcVideo}
        />
        <Footer
          titleFooter={this.props.titleFooter}
          name={this.props.name}
          numero={this.props.numero}
          correo={this.props.correo}
          redesSociales={this.props.redesSociales}
        />
      </HandleError>
    );
  }
}

export default connect(mapStateToProps)(Bachatealo);
