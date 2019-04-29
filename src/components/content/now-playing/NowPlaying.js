import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card } from "../../../common/Card";
import { getNowPlaying } from '../../../actions/NowPlayingActions';
import Spinner from "../../../common/Spinner";

class NowPlaying extends Component {



  componentDidMount = async() => {
    await this.props.getNowPlaying()
  }
  

  render() {
    let nowPlayingDisplay;
    const { nowPlaying, isLoaded } = this.props.nowplaying;
    
    if(nowPlaying === null || isLoaded){
      nowPlayingDisplay = <Spinner />
    }else{
      if(Object.keys(nowPlaying).length > 0){
        nowPlayingDisplay = nowPlaying.results.map( (movie) => {
          return (
            <Card
            key={movie.id}
            movieId={movie.id}
            urlImage={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
            title={movie.title}
          />
          )
        })
      }else{
        nowPlayingDisplay = (
          <h1>Terjadi Masalah</h1>
        )
      }
    }

    return (
      <div className="android-card-container mdl-grid">
      <div className="android-more-section">
        <div className="android-section-title mdl-typography--display-1-color-contrast">
          {isLoaded ? 'Wait' : 'Now Playing'}
        </div>
        <div className="wrap">
          {nowPlayingDisplay}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nowplaying: state.nowplaying
})

export default connect(mapStateToProps, { getNowPlaying }) (NowPlaying);
