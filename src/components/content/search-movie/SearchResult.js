import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchMovie} from '../../../actions/SearchActions';
import { Card } from '../../../common/Card';
import imgNotfound from './../../../img/empty.svg';
import Spinner from '../../../common/Spinner';
import queryString from 'query-string';
import { Container, Button} from "react-bootstrap";
import RecomendationNotFound from '../../../common/RecomendationNotFound';
class SearchResult extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: '',
      page: null
    }
  }

  componentDidMount = async() => {
    await this._loadSearch()
  }

  _loadSearch = async() => {
    const query = queryString.parse(this.props.location.search);
    const keyword = query.q;

     this.setState({
         keyword: keyword
       })
    this.props.searchMovie(keyword, this.props.history);
  }

  _loadMore = () => {
    this.props.history.push('/search?q='+this.state.keyword+'&&page=')
  }
  


  render() {
    let searchDisplay, poster, pageInfo;

    const { search, isLoaded } = this.props.results;
    console.log(search);
  

    if(search === null || isLoaded){
      searchDisplay = <Spinner />
    }else{
      if(Object.keys(search.results).length > 0){
        searchDisplay = search.results.map((movie) => {
          if(movie.poster_path === null){
            poster = imgNotfound;
          }else{
            poster = 'https://image.tmdb.org/t/p/w500'+movie.poster_path;
          }
          return (
            <Card
              key={movie.id}
              movieId={movie.id}
              urlImage={poster}
              title={movie.title}
            />
          )
        });

        pageInfo = (
          <div>
          </div>
        )


      }else{
        searchDisplay = (
          <Container>
            <h2>There were no results for {this.state.keyword}</h2>
            <RecomendationNotFound />
          </Container>
        )
      }
    }

    
    return (
      <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            {isLoaded ? 'Wait' : 'Search Results'}
          </div>
          <div className="wrap">
            {searchDisplay}
          </div>

          <Container style={{ marginTop: '30px' }}>
          {!isLoaded && (
            <Button variant="outline-secondary" size="lg" onClick={() => this.props.history.push('/')} >Go Back</Button>
          )}

          {!isLoaded && (
            <button onClick={this._loadMore} className="btn__loadmore_popular_next"><i className="fas fa-arrow-right fa-3x"></i></button>
          )}
             
          </Container>

        </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.searchResult
})


export default connect(mapStateToProps, {searchMovie}) (SearchResult);