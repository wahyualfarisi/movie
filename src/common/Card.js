import React from 'react';
import { Link } from 'react-router-dom';

export const Card  = ({urlImage, title = 'no Title', movieId}) => {
    return (
      <div className="box" style={
          { background: 'url('+ urlImage +')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
       }}>
       
        <div className="poster p1">
            <h4>{title}</h4>
            <div className="wrap_overview">
                 <Link className="example_e" to={'overview/'+movieId} rel="nofollow noopener" style={{ paddingTop: '10' }}>Overview</Link>
            </div>
            
        </div>
        
      </div>
    )
  
}
