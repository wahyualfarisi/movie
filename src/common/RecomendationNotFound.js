import React from 'react';
import emptySvg from './../img/empty.svg';

const RecomendationNotFound = () =>  {
    return (
      <div style={{marginTop: '30px'}}>
        <img src={emptySvg} alt="empty-content" className="img-responsive" style={{ width: '300px', margin: 'auto', display: 'block' }} />
      </div>
    )
}

export default RecomendationNotFound;
