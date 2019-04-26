import React, { Component } from "react";
import { Card } from "../../../common/Card";

class NowPlaying extends Component {
  render() {
    return (
      <div className="android-card-container mdl-grid">
      <div className="android-more-section">
        <div className="android-section-title mdl-typography--display-1-color-contrast">
          Now Playing
        </div>
        <div className="wrap">
          <Card urlImage="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" />
          <Card urlImage="https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg" />
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
    );
  }
}

export default NowPlaying;
