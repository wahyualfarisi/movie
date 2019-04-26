import React from 'react'

export const Card  = ({urlImage}) => {
    return (
      <div className="box" style={
          { background: 'url('+ urlImage +')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
       }}>
       
        <div className="poster p1">
            <h4>Avenger - End Game (2019)</h4>
            <a class="example_e" href="add-website-here" target="_blank" rel="nofollow noopener">Preview</a>
        </div>
        
      </div>
    )
  
}
