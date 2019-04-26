import React, { Component } from "react";
import { Card } from "../../../common/Card";

class TopRated extends Component {
  render() {
    return (
      <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            Top Rated
          </div>
          <div className="wrap">
            <Card urlImage="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg" />

            <Card urlImage="https://image.tmdb.org/t/p/w500/yPisjyLweCl1tbgwgtzBCNCBle.jpg" />

            <Card urlImage="https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg" />

            <Card urlImage="https://image.tmdb.org/t/p/w500/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default TopRated;
