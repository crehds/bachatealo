import React from 'react';

const errorImage = `${process.env.PUBLIC_URL}/images/paraError/error.jpg`;

function RegularError() {
  return (
    <div>
      {/* Decorative: the heading below already carries the message. */}
      <img src={errorImage} alt="" />
      <h1 style={ { color: 'white' } }>
        Ha ocurrido un error
      </h1>
    </div>
  );
}

export default RegularError;
