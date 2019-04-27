import React from 'react';
import spinner from './../img/myspin1.gif';

const  Spinner  = () => {
    return (
      <div>
        <img alt="loading" src={spinner} style={{ width: '100px', margin: 'auto', display: 'block' }} />
      </div>
    );
}

export default Spinner;
