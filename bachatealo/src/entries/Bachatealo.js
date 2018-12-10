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
    //Portada
    idPortada: state.data.section[0].description,
    imgPortada: state.data.section[0].imgPortada,
    menu: state.data.section[0].menu,

    //Hero
    idHero: state.data.section[1].description,
    fotosPortada: state.data.section[1].imgPortada,

    //History
    idHistory: state.data.section[2].description,
    rotonda: state.data.section[2].rotonda,
    alameda: state.data.section[2].alameda,

    //Location
    idLocation: state.data.section[3].description,
    googleMap: state.data.section[3].googleMap,
    titleLocation: state.data.section[3].titleLocation,
    direccion: state.data.section[3].direccion,
    referencia: state.data.section[3].referencia,
    Dias: state.data.section[3].Dias,
    horario: state.data.section[3].horario,
    generos: state.data.section[3].generos,

    //Evento
    idEvento: state.data.section[4].description,
    titleEvent: state.data.section[4].titleEvent,
    imgEvento: state.data.section[4].imgEvento,
    details: state.data.section[4].details,

    //Fotos
    idFotos: state.data.section[5].description,
    titleFotos: state.data.section[5].titleFotos,
    imgFotos: state.data.section[5].imgFotos,

    //Video
    idVideo: state.data.section[6].description,
    titleVideo: state.data.section[6].titleVideo,
    srcVideo: state.data.section[6].srcVideo,

    //Footer
    idFooter: state.data.section[7].description,
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
          id={this.props.idPortada}
          imgPortada={this.props.imgPortada}
          menu={this.props.menu}
        />
        <Hero
          id={this.props.idHero}
          fotosPortada={this.props.fotosPortada}
        />
        <History
          id={this.props.idHistory}
          alameda={this.props.alameda}
          rotonda={this.props.rotonda}
        />
        <Location
          id={this.props.idLocation}
          googleMap={this.props.googleMap}
          titleLocation={this.props.titleLocation}
          direccion={this.props.direccion}
          referencia={this.props.referencia}
          Dias={this.props.Dias}
          horario={this.props.horario}
          generos={this.props.generos}
        />
        <Event
          id={this.props.idEvento}
          titleEvent={this.props.titleEvent}
          imgEvento={this.props.imgEvento}
          details={this.props.details}
        />
        <Fotos
          id={this.props.idFotos}
          titleFotos={this.props.titleFotos}
          imgFotos={this.props.imgFotos}
        />
        <Video
          id={this.props.idVideo}
          titleVideo={this.props.titleVideo}
          srcVideo={this.props.srcVideo}
        />
        <Footer
          id={this.props.idFooter}
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
