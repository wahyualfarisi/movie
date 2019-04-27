import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./../../img/logo-movie-2.png";

class Navbar extends Component {
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
              <input
                className="mdl-textfield__input"
                type="text"
                id="search-field"
              />
            </div>
          </div>
          
          <div className="android-navigation-container">
            <nav className="android-navigation mdl-navigation">
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" exact={true} activeClassName="android-link" to="/" style={{ textDecoration: 'none' }} >Now Playing</NavLink>
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" activeClassName="android-link" to="/popular" style={{ textDecoration: 'none' }}>Popular</NavLink>
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" activeClassName="android-link" to="/top-rated" style={{ textDecoration: 'none' }}>Top Rated</NavLink>
              <NavLink className="mdl-navigation__link mdl-typography--text-uppercase" activeClassName="android-link" to="/up-coming" style={{ textDecoration: 'none' }}>Up Coming</NavLink>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">Wears</a>
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
        <NavLink className="mdl-navigation__link" to="/" exact={true} activeClassName="android-link" >Now Playing</NavLink>
        <NavLink className="mdl-navigation__link" to="/popular" activeClassName="android-link" >Popular</NavLink>
        <NavLink className="mdl-navigation__link" to="/top-rated" activeClassName="android-link" >Top Rated</NavLink>
        <a className="mdl-navigation__link" href="www.google.com">Tablets</a>
        <a className="mdl-navigation__link" href="www.google.com">Wear</a>
        <a className="mdl-navigation__link" href="www.google.com">TV</a>
        <a className="mdl-navigation__link" href="www.google.com">Auto</a>
        <a className="mdl-navigation__link" href="www.google.com">One</a>
        <a className="mdl-navigation__link" href="www.google.com">Play</a>
        <div className="android-drawer-separator"></div>
        <span className="mdl-navigation__link" href="www.google.com">Versions</span>
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

export default Navbar;
