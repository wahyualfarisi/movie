import React, { Component } from "react";
import { Card } from "../../../common/Card";

class Popular extends Component {
  render() {
    return (
      <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            Popular
          </div>
          <div className="wrap">
            <Card urlImage="https://image.tmdb.org/t/p/w500/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" />
            <Card urlImage="https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg" />

            <Card urlImage="https://image.tmdb.org/t/p/w500/cmJ71gdZxCqkMUvGwWgSg3MK7pC.jpg" />

            <Card urlImage="https://image.tmdb.org/t/p/w500/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg" />

            <Card urlImage="https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;
