import React, { Component } from "react";
import { Card } from "../../../common/Card";
import { connect } from "react-redux";
import { getTopRated } from "../../../actions/topRatedActions";
import queryString from "query-string";
import Spinner from "../../../common/Spinner";
import imgNotfound from "./../../../img/empty.svg";

class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };
  }

  componentDidMount() {
    this._loadAllTopRated();
  }

  _loadAllTopRated = async () => {
    const parse = queryString.parse(this.props.location.search);
    let urlPage = parseInt(parse.page);

    await this.setState({
      page: urlPage ? urlPage : 1
    });
    await this.props.getTopRated(parseInt(this.state.page));
  };

  _prevMovie = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return {
        page: prev.page - parseInt(1)
      };
    });
    this.props.getTopRated(parseInt(this.state.page));
    if (parseInt(this.state.page) === 1) {
      this.props.history.push("/top-rated");
    } else {
      this.props.history.push("/top-rated?page=" + parseInt(this.state.page));
    }
  };

  _loadMore = async e => {
    e.preventDefault();

    await this.setState(prev => {
      return { page: prev.page + 1 };
    });

    await this.props.getTopRated(parseInt(this.state.page));
    this.props.history.push("/top-rated?page=" + parseInt(this.state.page));
  };

  render() {
    let topRatedDisplay, buttonPrev, PageInfo, poster;

    const { isLoaded, toprated } = this.props.toprated;
    if (toprated === null || isLoaded) {
      topRatedDisplay = <Spinner />;
    } else {
      if (Object.keys(toprated.results).length > 0) {
        topRatedDisplay = toprated.results.map(movie => {
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

        //button preveous
        if (this.state.page >= 2 && this.state.page !== 1) {
          buttonPrev = (
            <button
              onClick={this._prevMovie}
              className="btn__loadmore_popular_prev"
            >
              <i className="fas fa-arrow-left fa-3x" />
            </button>
          );
        }

        //page info
        PageInfo = (
          <div style={{ fontSize: "20px" }}>
            {this.state.page} of {toprated.total_pages} result
          </div>
        );
      }
    }

    return (
      <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            {isLoaded ? "" : "Top Rated"}
            {PageInfo}
          </div>
          <div className="wrap">{topRatedDisplay}</div>

          {buttonPrev}
          {!isLoaded && (
            <button
              onClick={this._loadMore}
              className="btn__loadmore_popular_next"
            >
              <i className="fas fa-arrow-right fa-3x" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toprated: state.toprated
});

export default connect(
  mapStateToProps,
  { getTopRated }
)(TopRated);
