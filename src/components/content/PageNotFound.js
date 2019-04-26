import React, { Component } from 'react';
import notFound from '../../img/notfound.svg';

class PageNotFound extends Component {
  render() {
    return (
      <div className="android-card-container mdl-grid">
      <div className="android-more-section">
        <div className="android-section-title mdl-typography--display-1-color-contrast">
          <img src={notFound} alt="pagenotfound" width="200px;" /> <br />
        </div>
     
        
      </div>
      </div>
    )
  }
}
export default PageNotFound;
