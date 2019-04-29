import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { connect } from "react-redux";
import {
  getOverviewMovie,
  getVideosofmovie,
  getRecomendationsMovie
} from "./../../actions/OverviewAction";
// import Spinner from "../../common/Spinner";
import StarRatings from "react-star-ratings";
import { CardRecomendation } from "../../common/Card";
// import { Card } from "../../common/Card";

class MovieOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      nameVideo: '',
      keyVideo: '',
      site: '',
      type: '',
      videoReady: false
    };
    
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    await this.props.getOverviewMovie(id);
    await this.props.getRecomendationsMovie(id);
    await this.props.getVideosofmovie(id);
  };

  componentWillReceiveProps = async(nextProps) => {
    //props video
    let video   = nextProps.overview.video;
    let isVideo = nextProps.overview.isVideo;
    if(video === null || isVideo){
      this.setState({ ...this.state })
    }else{
      if(Object.keys(video).length > 0 ){
         const { name, key, site, type } = video[0];
         await this.setState({
           nameVideo: name,
           keyVideo: key,
           site: site,
           type: type,
           videoReady: true
         });
      }else{
        this.setState({...this.state})
      }
    }  
  }

  _goBack = async() => {  
     const id = this.props.match.params.id;
     await this.props.getOverviewMovie(id);
     await this.props.getRecomendationsMovie(id);
     await this.props.getVideosofmovie(id);
     this.props.history.goBack();
  };

  handleHide = () => {
    this.setState({
      showModal: false
    });
  };

  _showModal = async() => {
    await this.setState({
      showModal: true
    });
  };

  onClickRecomendation = async(id) => {
    this.props.history.push('/overview/'+id);
    await this.props.getOverviewMovie(id);
    await this.props.getRecomendationsMovie(id);
    await this.props.getVideosofmovie(id);
    
    
  }

  render() {
    let OverviewDisplay,
        title,
        description, 
        genre, 
        videoDisplay, 
        recomendationDisplay;

    const { isLoaded, movie, recomendations, recomendationsload } = this.props.overview;
   

    //movie action
    if (movie === null || isLoaded) {
      OverviewDisplay = "";
    } else {
      if (Object.keys(movie).length > 0) {
        const {
          poster_path,
          original_title,
          overview,
          status,
          vote_average
        } = movie;

        //get posted cover
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

        //get title
        title = (
          <div style={{ marginBottom: "50px" }}>
            <h1>{original_title}</h1>
            <StarRatings
              rating={vote_average / 2}
              starRatedColor="blue"
              starDimension="20px"
              numberOfStars={5}
              name="Rating"
            />
            {vote_average}
          </div>
        );

        //get description
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

        //get genre
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
    
    
      // check video trailler
      if (this.state.videoReady) {
          videoDisplay = (
            <Button
                  onClick={this._showModal}
                  variant="outline-secondary"
                  block
                >
                  Trailer
                </Button>
          )
      } else {
          videoDisplay = "";
      }

//-------------------------------------------RECOMENDATION PAGE--------------------------------------------------------
    if(recomendations.length === 0 || recomendationsload){
      recomendationDisplay = "";
    }else{
      
      if(Object.keys(recomendations).length > 0){
        recomendationDisplay = recomendations.map( movie => {
          return  (
            <CardRecomendation
              key={movie.id}
              movieId={movie.id}
              urlImage={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
              title={movie.title}
              onClick={() => this.onClickRecomendation(movie.id)}
            />
          );
        })
      }else{
        recomendationDisplay = "Terjadi Masalah";
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

                {!isLoaded && (
                  <Container style={{ marginTop: '20px' }}>
                  <Row>
                    <Col md="6" >
                      {videoDisplay}
                    </Col>
                    <Col md="6">
                     
                      <Button
                        type="button"
                        onClick={this._goBack}
                        variant="outline-secondary"
                        block
                      >
                        Go Back
                      </Button>
                    </Col>
                  </Row>
                </Container>
                )}
                

                {isLoaded && (
                  <ReactPlaceholder
                    type="text"
                    ready={false}
                    rows={20}
                    color="#E0E0E0"
                    showLoadingAnimation={true}
                  >
                    <h1>loade</h1>
                  </ReactPlaceholder>
                )}
              </div>
            </div>
          </Col>
        </Row>

        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={this.handleHide}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          
          <Modal.Body
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0
            }}
          >
            <iframe
              title="youtube"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src={'https://www.youtube.com/embed/'+this.state.keyVideo}
              frameBorder="0"
              allowFullScreen
            />
          </Modal.Body>
        </Modal>

        <div>          
          {!recomendationsload && (
            <h3 className="text-muted">Recomendations</h3>
          )}
          <div className="wrap">
            {recomendationDisplay}
          </div>
        </div>
      
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  overview: state.overview
});

export default connect(
  mapStateToProps,
  { getOverviewMovie, 
    getVideosofmovie,
    getRecomendationsMovie
  }
)(withRouter(MovieOverview));
