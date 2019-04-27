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
      page: 1
    }
  }


  componentDidMount() {
   this.props.getPopularMovie();
  }

  _loadMore = async(e) => {
    e.preventDefault();

    await this.setState( (prev) => {
      return { page: prev.page + 1 }
    });
    console.log(this.state.page);
    this.props.getLoadMoreMovie(parseInt(this.state.page) )
  }

  _prevMovie = async (e) => {
    e.preventDefault();

    await this.setState( (prev) => {
      return { 
        page: prev.page - parseInt(1)
      }
    });
    console.log(this.state.page);
    this.props.getLoadMoreMovie(parseInt(this.state.page) )
  }
  


  render() {
    let displayContent, buttonPrev;

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
        });

        if(this.state.page >= 2 && this.state.page !== 1 ){
          buttonPrev = (
            <button onClick={this._prevMovie} className="btn__loadmore_popular_prev"><i class="fas fa-arrow-left fa-3x"></i></button>
          );
        }
        
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

          {buttonPrev}

          {!isLoaded && (
            <button onClick={this._loadMore} className="btn__loadmore_popular_next"><i class="fas fa-arrow-right fa-3x"></i></button>
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
