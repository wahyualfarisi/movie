import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "../../../common/Card";
import { getNowPlaying } from "../../../actions/NowPlayingActions";
import Spinner from "../../../common/Spinner";
import queryString from "query-string";
import imgNotfound from "./../../../img/empty.svg";

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }

  componentDidMount = async () => {
    this._loadAllNowPlaying();
  };

  _loadAllNowPlaying = async () => {
    const parse = queryString.parse(this.props.location.search);
    let urlPage = parseInt(parse.page);

    await this.setState({
      page: urlPage ? urlPage : 1
    });
    await this.props.getNowPlaying(parseInt(this.state.page));
  };

  _loadMore = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page + 1 };
    });

    await this.props.getNowPlaying(parseInt(this.state.page));
    this.props.history.push("/?page=" + parseInt(this.state.page));
  };

  _prevMovie = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return {
        page: prev.page - parseInt(1)
      };
    });
    await this.props.getNowPlaying(parseInt(this.state.page));
    if (parseInt(this.state.page) === 1) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/?page=" + parseInt(this.state.page));
    }
  };

  render() {
    let nowPlayingDisplay, pageInfo, buttonPrev, buttonNext, poster;
    const { nowPlaying, isLoaded } = this.props.nowplaying;

    if (nowPlaying === null || isLoaded) {
      nowPlayingDisplay = <Spinner />;
    } else {
      if (Object.keys(nowPlaying).length > 0) {
        console.log(typeof nowPlaying.total_pages);
        nowPlayingDisplay = nowPlaying.results.map(movie => {
          if (movie.poster_path === null) {
            poster = imgNotfound;
          } else {
            poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          }
          return (
            <Card
              key={movie.id}
              movieId={movie.id}
              urlImage={poster}
              title={movie.title}
            />
          );
        });
      } else {
        nowPlayingDisplay = <h1>Terjadi Masalah</h1>;
      }

      //page info
      pageInfo = (
        <div style={{ fontSize: "20px" }}>
          {this.state.page} of {nowPlaying.total_pages} results
        </div>
      );

      //buttton prev
      if (this.state.page >= 2 && this.state.page !== 1) {
        buttonPrev = (
          <button
            onClick={this._prevMovie}
            className="btn__loadmore_popular_prev"
            style={{
              border: 'none',
              backgroundColor: 'white'
            }}
          >
            <i className="fas fa-arrow-left fa-3x" />
          </button>
        );
      }

      if (!isLoaded) {
        buttonNext = (
          <button
            onClick={this._loadMore}
            className="btn__loadmore_popular_next"
            style={{
              border: 'none',
              backgroundColor: 'white'
            }}
          >
            <i className="fas fa-arrow-right fa-3x" />
          </button>
        );
      }
    }

    return (
      <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            {isLoaded ? "" : "Now Playings"}
            {pageInfo}
          </div>

          <div className="wrap" style={{ paddingBottom: "10px" }}>
            {nowPlayingDisplay}
          </div>

          {buttonPrev}
          {buttonNext}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nowplaying: state.nowplaying
});

export default connect(
  mapStateToProps,
  { getNowPlaying }
)(NowPlaying);
