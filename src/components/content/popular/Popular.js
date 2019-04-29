import React, { Component } from "react";
import { Card } from "../../../common/Card";
import {connect} from 'react-redux';
import queryString from 'query-string';

//action
import {getPopularMovie, getLoadMoreMovie} from '../../../actions/popularAction';
import Spinner from "../../../common/Spinner";

class Popular extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: null
    }
  }



  componentDidMount = async() => {
    this._loadAllPopular(); 
  }

  _loadAllPopular = async() => {// func load all popular with parse query string in parameter
    const parse = queryString.parse(this.props.location.search);
    let parse2  = parseInt(parse.page);
    await this.setState({
      page: parse2 ? parse2 : 1
    })
    await this.props.getLoadMoreMovie(parseInt(this.state.page) );
  }



  _loadMore = async(e) => {
    e.preventDefault();
   
    await this.setState( (prev) => {
      return { page: prev.page + 1 }
    });

    await this.props.getLoadMoreMovie(parseInt(this.state.page) )
    this.props.history.push('/popular?page='+parseInt(this.state.page)); 
  }

  _prevMovie = async (e) => {
    e.preventDefault();

    await this.setState( (prev) => {
      return { 
        page: prev.page - parseInt(1)
      }
    });
    this.props.getLoadMoreMovie(parseInt(this.state.page) )
  }
  


  render() {
    let displayContent, buttonPrev, PageInfo;

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
              movieId={movie.id}
              urlImage={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
              title={movie.title}
            />
          );
        });

        //cek pagination
        if(this.state.page >= 2 && this.state.page !== 1 ){
          buttonPrev = (
            <button
               onClick={this._prevMovie}
               className="btn__loadmore_popular_prev">
               <i className="fas fa-arrow-left fa-3x"></i>
            </button>
          );
        }

        //infoPages
        PageInfo = (
          <div style={{fontSize: '20px'}}>
               {this.state.page} of {popular.total_pages} result
            </div>
        )
        
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
            {isLoaded ? 'Wait' : 'Populars'} <br />
            {PageInfo}
          </div>

        

          <div className="wrap">
            {displayContent}
          </div>


          
          {buttonPrev}
          {!isLoaded && (
            <button onClick={this._loadMore} className="btn__loadmore_popular_next"><i className="fas fa-arrow-right fa-3x"></i></button>
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
