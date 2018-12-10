import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// function mapStateToProps({ album }) {
//   return {
//     album,
//   };
// }

class Fotos extends Component {
  render() {
    return (
      <section id={this.props.id} className="Fotos">
        <div className="fotos-title">
          <h1>{this.props.titleFotos}</h1>
        </div>
        <div className="fotos container">
          {
            this.props.imgFotos.map((item) =>
              <div key={item.id}>
                <figure>
                  <img src={item.foto} alt={item.id}/>
                </figure>
              </div>
            )
          }
        </div>
      </section>
    );
  }

}

export default Fotos;
