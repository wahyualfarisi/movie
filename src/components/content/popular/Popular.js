import React, { Component } from "react";
import { Card } from "../../../common/Card";
import {connect} from 'react-redux';

//action
import {getPopularMovie, getLoadMoreMovie} from '../../../actions/popularAction';
import Spinner from "../../../common/Spinner";

class Popular extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 2
    }
  }


  componentDidMount() {
   this.props.getPopularMovie();
  }

  _loadMore = (e) => {
    e.preventDefault();

    this.setState( (prev) => {
      return { page: prev.page + 1 }
    });
    this.props.getLoadMoreMovie(parseInt(this.state.page) )
  }

  _prevMovie = (e) => {
    e.preventDefault();

    this.setState( (prev) => {
      return { page: prev.page - 1 }
    });
    this.props.getLoadMoreMovie(parseInt(this.state.page) )
  }
  


  render() {
    let displayContent;

    const {isLoaded, popular} = this.props.popular;

    if(popular === null || isLoaded){
      displayContent = <Spinner />
    }else{
      if(Object.keys(popular).length > 0){
        // console.log(popular)
        displayContent = popular.results.map( (movie) => {
          return  (
            <Card
              key={movie.id}
              urlImage={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
              title={movie.title}
            />
          );
          
        })
        
      }else{
        displayContent = (
          <h1>Terjadi Masalah</h1>
        )
      }
    }


    return (
      <div className="android-card-container mdl-grid">
        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">
            Popular
          </div>
          <div className="wrap">
            {displayContent}
          </div>

          {this.state.page > 3 && (
            <button onClick={this._prevMovie} className="btn__loadmore_popular_prev">prev</button>
          )}

          {!isLoaded && (
            <button onClick={this._loadMore} className="btn__loadmore_popular_next">Load More</button>
          )}

        
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  popular: state.popular
})

export default connect(mapStateToProps, {getPopularMovie, getLoadMoreMovie}) (Popular);
