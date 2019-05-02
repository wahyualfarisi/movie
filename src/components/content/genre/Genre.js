import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getListbygenre,
  getGenre,
  getListbygenre2
} from "../../../actions/GenreActions";
import Spinner from "../../../common/Spinner";
import { Card, CardRecomendation } from "../../../common/Card";
import imgNotfound from "./../../../img/notfound.svg";

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: [],
      rendered: true
    };
  }

  componentDidMount = async () => {
    const id = this.props.match.params.genre;
    this.props.getListbygenre2(id);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.genre.listmovie === null || nextProps.genre.listLoaded) {
      this.setState({ ...this.state });
    } else {
      this.setState({
        listMovie: nextProps.genre.listmovie.results,
        rendered: false
      });
    }
  };

  clickToOverview = id => {
    this.props.history.push("/overview/" + id);
  };

  render() {
    console.log("sebelum", this.state);
    let displayList, poster;
    const { listMovie, rendered } = this.state;
    if (listMovie === null || rendered) {
      displayList = <Spinner />;
    } else {
      if (Object.keys(listMovie).length > 0) {
        console.log("setelah", this.state);
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
      } else {
        displayList = <p>Terjadi Masalah</p>;
      }
    }

    return (
      <div className="android-card-container">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            Genre's
          </div>

          <div className="wrap">{displayList}</div>
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
