import React, { Component } from 'react';
import { Card } from "../../../common/Card";

class UpComing extends Component {
  render() {
    return (
        <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            Up Coming
          </div>
          <div className="wrap">
            <Card urlImage="https://image.tmdb.org/t/p/w500/nkCoAik5I4j3Gkd2upj9xv4F0QN.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/cmJ71gdZxCqkMUvGwWgSg3MK7pC.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/cmJ71gdZxCqkMUvGwWgSg3MK7pC.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/cmJ71gdZxCqkMUvGwWgSg3MK7pC.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg" />
  
            <Card urlImage="https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg" />
          </div>
        </div>
        </div>
    )
  }
}

export default UpComing;
