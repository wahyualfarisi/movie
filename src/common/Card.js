import React from 'react'

export const Card  = ({urlImage, title = 'no Title'}) => {
    return (
      <div className="box" style={
          { background: 'url('+ urlImage +')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
       }}>
       
        <div className="poster p1">
            <h4>{title}</h4>
            <a className="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">Overview</a>
        </div>
        
      </div>
    )
  
}
