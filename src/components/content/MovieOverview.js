import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getOverviewMovie } from "./../../actions/OverviewAction";
import Spinner from "../../common/Spinner";

class MovieOverview extends Component {
  componentDidMount = async () => {
    await this.props.getOverviewMovie(this.props.match.params.id);
  };

  render() {
    let OverviewDisplay, title, description, genre;

    const { isLoaded, movie } = this.props.overview;

    if (movie === null || isLoaded) {
      OverviewDisplay = <Spinner />;
    } else {
      if (Object.keys(movie).length > 0) {
        console.log(movie);
        const { poster_path, original_title, overview } = movie;

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
          />
        );

        title = <h1>{original_title}</h1>;

        description = (
          <React.Fragment>
            <h3>Description : </h3>
            <p>{overview}</p>
          </React.Fragment>
        );

        genre = movie.genres.map( (item, i) => {
          return (
            <Button variant="light" key={i}>{item.name}</Button>
          )
        })

        

       
      } else {
        OverviewDisplay = <h1>Terjadi Masalah</h1>;
      }
    }

    return (
      <Container>
        <Row>
          <Col md={6}>{OverviewDisplay}</Col>
          <Col md={6}>
            <div className="content_desc_overview">
              <div className="detail_overview">
                {title}
                {description}
                {genre}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  overview: state.overview
});

export default connect(
  mapStateToProps,
  { getOverviewMovie }
)(MovieOverview);
