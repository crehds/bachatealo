import React from 'react';

function RegularError(props) {
  return (
    <div>
      <img src={props.src} alt=""/>
      <h1 style={ { color: 'white' } }>
        Ha ocurrido un error
      </h1>
    </div>
  );
}

export default RegularError;
