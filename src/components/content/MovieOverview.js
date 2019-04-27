import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { connect } from "react-redux";
import {
  getOverviewMovie,
  getSimiliarMovies
} from "./../../actions/OverviewAction";
// import Spinner from "../../common/Spinner";
import StarRatings from "react-star-ratings";
// import { Card } from "../../common/Card";

class MovieOverview extends Component {
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    await this.props.getOverviewMovie(id);
    await this.props.getSimiliarMovies(id);
  };

  render() {
    let OverviewDisplay, title, description, genre;

    const { isLoaded, movie } = this.props.overview;

    if (movie === null || isLoaded) {
      OverviewDisplay = '';
    } else {
      if (Object.keys(movie).length > 0) {
        const {
          poster_path,
          original_title,
          overview,
          status,
          vote_average
        } = movie;

        OverviewDisplay = (
          <div
            className="single_box"
            style={{
              background:
                "url('https://image.tmdb.org/t/p/w500" + poster_path + "')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="posteroverview p6">
              <h4>{status}</h4>
            </div>
          </div>
        );

        title = (
          <div style={{ marginBottom: "20px" }}>
            <h1>{original_title}</h1>
            <StarRatings
              rating={vote_average / 2}
              starRatedColor="blue"
              starDimension="20px"
              numberOfStars={5}
              name="Rating"
            />
          </div>
        );

        description = (
          <ReactPlaceholder
            type="text"
            ready={true}
            rows={6}
            color="#E0E0E0"
            showLoadingAnimation={true}
          >
            <h3>Description : </h3>
            <p>{overview}</p>
          </ReactPlaceholder>
        );

        genre = movie.genres.map((item, i) => {
          return (
            <Button variant="light" key={i}>
              {item.name}
            </Button>
          );
        });
      } else {
        OverviewDisplay = <h1>Terjadi Masalah</h1>;
      }
    }

    return (
      <Container>
        <Row>
          <Col md={6}>
            {OverviewDisplay}
            {isLoaded && (
              <ReactPlaceholder
              type="text"
              ready={false}
              rows={10}
              color="#E0E0E0"
              showLoadingAnimation={true}
            >
              <h1>loaded</h1>
            </ReactPlaceholder>
            )}
            
          </Col>
          <Col md={6}>
            <div className="content_desc_overview">
              <div className="detail_overview">
                {title}
                {description}
                {genre}

                {isLoaded && (
                  <ReactPlaceholder
                    type="text"
                    ready={false}
                    rows={20}
                    color="#E0E0E0"
                    showLoadingAnimation={true}
                  >
                    <h1>loaded</h1>
                  </ReactPlaceholder>
                )}
              </div>
            </div>
          </Col>
        </Row>

        <div className="wrap" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  overview: state.overview
});

export default connect(
  mapStateToProps,
  { getOverviewMovie, getSimiliarMovies }
)(MovieOverview);
