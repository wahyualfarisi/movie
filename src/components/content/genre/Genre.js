import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getListbygenre,
  getGenre,
  getListbygenre2
} from "../../../actions/GenreActions";
import Spinner from "../../../common/Spinner";
import { CardRecomendation } from "../../../common/Card";
import imgNotfound from "./../../../img/notfound.svg";
import queryString from "query-string";

class Genre extends Component {
  constructor(props) {
    super(props);
    const parse = queryString.parse(this.props.location.search);
    let urlPage = parseInt(parse.page);
    this.state = {
      listMovie: [],
      rendered: true,
      genreNames: null,
      page: urlPage ? urlPage : 1
    };
  }

  componentDidMount = async () => {
    await this._loadMore();
  };

  _loadMore = async () => {
    const id = this.props.match.params.genre;
    await this.props.getListbygenre2(id, parseInt(this.state.page));
  };

  _prevMovie = async e => {
    e.preventDefault();
    const id = this.props.match.params.genre;
    await this.setState(prev => {
      return {
        page: prev.page - parseInt(1)
      };
    });

    await this.props.getListbygenre2(id, parseInt(this.state.page));
    if (parseInt(this.state.page) === 1) {
      this.props.history.push("/genre/" + id);
    } else {
      this.props.history.push(
        "/genre/" + id + "?page=" + parseInt(this.state.page)
      );
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.genre.listmovie === null || nextProps.genre.listLoaded) {
      this.setState({ ...this.state });
    } else {
      this.setState({
        listMovie: nextProps.genre.listmovie.results,
        rendered: false,
        genreNames: nextProps.genre.detailGenre
      });
    }
  };

  clickToOverview = id => {
    this.props.history.push("/overview/" + id);
  };

  nextPage = async e => {
    e.preventDefault();
    const id = this.props.match.params.genre;
    await this.setState(prev => {
      return { page: prev.page + 1 };
    });
    await this.props.getListbygenre2(id, parseInt(this.state.page));
    this.props.history.push(
      "/genre/" + id + "?page=" + parseInt(this.state.page)
    );
  };

  render() {
    let displayList, poster, buttonNext, buttonPrev;
    const { listMovie, rendered } = this.state;
    if (listMovie === null || rendered) {
      displayList = <Spinner />;
    } else {
      if (Object.keys(listMovie).length > 0) {
        displayList = listMovie.map(movie => {
          if (movie.poster_path === null) {
            poster = imgNotfound;
          } else {
            poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          }
          return (
            <CardRecomendation
              key={movie.id}
              movieId={movie.id}
              urlImage={poster}
              title={movie.title}
              onClick={() => this.clickToOverview(movie.id)}
            />
          );
        });

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

        if (!rendered) {
          buttonNext = (
            <button
              onClick={this.nextPage}
              className="btn__loadmore_popular_next"
            >
              <i className="fas fa-arrow-right fa-3x" />
            </button>
          );
        }
      } else {
        displayList = <p>Terjadi Masalah</p>;
      }
    }

    return (
      <div className="android-card-container">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            Genre's
            <p>{this.state.genreNames}</p>
          </div>

          <div className="wrap">{displayList}</div>
          {buttonPrev}
          {buttonNext}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.genre
});

export default connect(
  mapStateToProps,
  { getListbygenre, getGenre, getListbygenre2 }
)(withRouter(Genre));
