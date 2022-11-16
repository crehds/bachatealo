import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const images = props.history.media.map(
    (mediaId) => state.data.entities.media[mediaId]
  );
  return {
    ...images,
  };
}

class History extends Component {
  render() {
    return (
      <section className='History' id={this.props.history.sectionId}>
        <div className='history-container'>
          {/*Inicia primera parte*/}
          <div className='history-div'>
            <div className='history-title'>
              <h1>¿Cómo empezamos?</h1>
            </div>
            <p>
              A inicios del año 2017 un grupo de amigos observaba a grupos de
              danza tradicional bailar y ensayar en la municipalidad de los
              olivos. Pronto surgió la idea de aplicar la misma idea de baile al
              aire libre para nosotros. Aunque con mucho miedo pues, era algo
              normal y de costumbre, observar a distintos grupos danzar y
              bailar, más no en cuanto a ritmos modernos se refiere(bachata y
              salsa).
              <br />
              <br />
              La idea vio la luz, con un grupo pequeño de 12 personas dentro de
              las cuales se consiguió un parlante para así poder bailar y
              practicar nuestro tan amado hobby. Al pasar los días, el efecto
              multiplicativo de la amistad interconecto a este grupo con muchas
              personas las cuales llegaban de diversas academias y lugares donde
              se enseñaba y practicaba el baile moderno.
              <br />
              <br />
              Es así, que a los dos meses de haber iniciado nuestras reuniones y
              notar que el numero de asistentes habia aumentado
              considerablemente, empezamos a buscar un nombre para nuestro
              grupo. Dando paso a la elección del nombre <b>Bachatealo</b> que
              nos identifica desde el 4 de mayo del 2017
            </p>
          </div>
          <div className='history-div'>
            <img
              className='history-img'
              src={process.env.PUBLIC_URL + this.props[0].src}
              alt='imagen de practica'
            />
          </div>
          {/*Inicia segunda parte*/}
          <div className='history-div'>
            <div className='history-title'>
              <h1>Actualidad</h1>
            </div>
            <p>
              Al pasar los años, siempre existen cambios entre los cuales nos
              han llevado a movernos de lugar por temas municipales. Lugares
              como: Apupal, parque Los Gemelos y parque Los Jazmines nos han
              visto llegar y entablar nuevas amistades asi como nuevas
              anécdotas.
              <br />
              <br />
              Sin embargo, la pandemia esta mucho mas allá que algun tema
              municipal o el amor por nuestro hobby. Estamos en tiempos de
              angustia donde debemos preservar la responsibilidad y conciencia.
              Por ello, <b>Bachatealo</b> aguarda a que las reuniones sean
              permitidas otra vez para que el baile nos vea reunirnos una vez
              más.
            </p>
          </div>
          <div className='history-div'>
            <img
              className='history-img'
              src={process.env.PUBLIC_URL + this.props[1].src}
              alt='imagen de practica'
            />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(History);
