import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from "./../../img/logo-movie-2.png";
import {connect} from 'react-redux';
import {searchMovie} from '../../actions/SearchActions';


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.keyword.trim() === "") {
      return false
    }
    
    this.props.searchMovie(this.state.keyword, this.props.history)
    this.setState({ keyword: '' })
  }

  

  render() {
    return (
        <React.Fragment>
        <div className="android-header mdl-layout__header mdl-layout__header--waterfall">


        <div className="mdl-layout__header-row">
          <span className="android-title mdl-layout-title">
            <img className="android-logo-image" src={logo} alt="prop" />
          </span>
          <div className="android-header-spacer mdl-layout-spacer" />
          <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label
              className="mdl-button mdl-js-button mdl-button--icon"
              htmlFor="search-field"
            >
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
            <form onSubmit={this.onSubmit}>
              <input
                className="mdl-textfield__input"
                type="text"
                id="search-field"
                onChange={this.onChange}
                value={this.state.keyword}
              />
              </form>
            </div>
          </div>
          
          <div className="android-navigation-container">
            <nav className="android-navigation mdl-navigation">
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" exact={true} activeClassName="android-link" to="/" style={{ textDecoration: 'none' }} >Now Playing</NavLink>
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" activeClassName="android-link" to="/popular" style={{ textDecoration: 'none' }}>Popular</NavLink>
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" activeClassName="android-link" to="/top-rated" style={{ textDecoration: 'none' }}>Top Rated</NavLink>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/">Tv Movie</a>
            </nav>
          </div>

          <span className="android-mobile-title mdl-layout-title">
            <img className="android-logo-image" src={logo} alt="logo" />
          </span>

          <button
            className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect"
            id="more-button"
          >
            <i className="material-icons">more_vert</i>
          </button>

          <ul
          className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect"
          htmlFor="more-button"
        >
          <li className="mdl-menu__item">5.0 Lollipop</li>
          <li className="mdl-menu__item">4.4 KitKat</li>
          <li disabled className="mdl-menu__item">4.3 Jelly Bean</li>
          <li className="mdl-menu__item">Android History</li>
        </ul>


        </div>
      </div>

      <div className="android-drawer mdl-layout__drawer">
      <span className="mdl-layout-title">
        <img className="android-logo-image" src={logo} alt="logo"  />
      </span>
      <nav className="mdl-navigation">
        <span className="mdl-navigation__link" href="www.google.com">Discover</span>
        <NavLink className="mdl-navigation__link" to="/" exact={true} activeClassName="android-link" style={{ textDecoration: 'none' }} ><i className="fa fa-play-circle" ></i>  Now Playing</NavLink>
        <NavLink className="mdl-navigation__link" to="/popular" activeClassName="android-link" style={{ textDecoration: 'none' }} ><i className="fa fa-fire" ></i> Popular</NavLink>
        <NavLink className="mdl-navigation__link" to="/top-rated" activeClassName="android-link" style={{ textDecoration: 'none' }} ><i className="fa fa-star" ></i> Top Rated</NavLink>
        <div className="android-drawer-separator"></div>
        <span className="mdl-navigation__link" href="www.google.com">Genre</span>
        <a className="mdl-navigation__link" href="www.google.com">Lollipop 5.0</a>
        <a className="mdl-navigation__link" href="www.google.com">KitKat 4.4</a>
        <a className="mdl-navigation__link" href="www.google.com">Jelly Bean 4.3</a>
        <a className="mdl-navigation__link" href="www.google.com">Android history</a>
        <div className="android-drawer-separator"></div>
        <span className="mdl-navigation__link" href="www.google.com">Resources</span>
        <a className="mdl-navigation__link" href="www.google.com">Official blog</a>
        <a className="mdl-navigation__link" href="www.google.com">Android on Google+</a>
        <a className="mdl-navigation__link" href="www.google.com">Android on Twitter</a>
        <div className="android-drawer-separator"></div>
        <span className="mdl-navigation__link" href="www.google.com">For developers</span>
        <a className="mdl-navigation__link" href="www.google.com">App developer resources</a>
        <a className="mdl-navigation__link" href="www.google.com" >Android Open Source Project</a>
        <a className="mdl-navigation__link" href="www.google.com" >Android SDK</a>
      </nav>
    </div>
    </React.Fragment>
    )
  }
}


export default connect(null, { searchMovie }) (withRouter(Navbar));
