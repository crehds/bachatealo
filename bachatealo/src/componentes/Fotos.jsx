import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    album: state.album,
  };
}

class Fotos extends Component {
  render() {
    return (
      <section id={this.props.id} className="Fotos">
        <div className="fotos container">
          {
            this.props.album.map((item) =>
            <div key={item.id}>
              <img src={item.foto} alt={item.id}/>
            </div>
            )
          }
        </div>
      </section>
    );
  }

}

export default connect(mapStateToProps)(Fotos);
