import React from "react";
import "./App.css";
import "./css/custome.css";
import logo from "./img/logo-movie-2.png";

function App() {
  return (
    <React.Fragment>
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
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
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">Popular</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">Tablets</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">Wear</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com" >TV</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">Auto</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">One</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="www.google.com">Play</a>
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
          <a className="mdl-navigation__link" href="www.google.com">Popular</a>
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

      
      <div className="android-content mdl-layout__content">
        
          <div className="android-more-section">
          <div
            className="android-section-title mdl-typography--display-1-color-contrast"
          >
            Popular Movie
          </div>

          <div className="android-card-container mdl-grid">
            <div className="wrap">
              <div
                className="box two"
              >
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>DISCOVER</h1>
                <div className="poster p2">
                  <h4>B</h4>
                </div>
              </div>

              <div className="box three">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>IMAGINE</h1>
                <div className="poster p3">
                  <h4>G</h4>
                </div>
              </div>

              <div className="box five">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>
              <div className="box fith">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>
              <div className="box five">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box six">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box seven">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box eight">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box nine">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box five">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box five">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>

              <div className="box five">
                <div className="date">
                  <h4>6/29/18</h4>
                </div>
                <h1>SPIRIT</h1>
                <div className="poster p4">
                  <h4>M</h4>
                </div>
              </div>
            </div>

           
          </div>
        </div>


        <footer className="android-footer mdl-mega-footer">
        <div className="mdl-mega-footer--top-section">
          <div className="mdl-mega-footer--left-section">
            <button className="mdl-mega-footer--social-btn"></button>
            &nbsp;
            <button className="mdl-mega-footer--social-btn"></button>
            &nbsp;
            <button className="mdl-mega-footer--social-btn"></button>
          </div>
          <div className="mdl-mega-footer--right-section">
            <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
            </a>
          </div>
        </div>

        <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light">
            Satellite imagery: © 2014 Astrium, DigitalGlobe
          </p>
          <p className="mdl-typography--font-light">
            Some features and devices may not be available in all areas
          </p>
        </div>

        <div className="mdl-mega-footer--bottom-section">
          <a className="android-link android-link-menu mdl-typography--font-light" href="www.google.com"  id="version-dropdown" >
            Versions
            <i className="material-icons">arrow_drop_up</i>
          </a>
          <ul
            className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect"
            htmlFor="version-dropdown"
          >
            <li className="mdl-menu__item">5.0 Lollipop</li>
            <li className="mdl-menu__item">4.4 KitKat</li>
            <li className="mdl-menu__item">4.3 Jelly Bean</li>
            <li className="mdl-menu__item">Android History</li>
          </ul>
          <a
             href="www.google.com"
            className="android-link android-link-menu mdl-typography--font-light"
            id="developers-dropdown"
          >
            For Developers
            <i className="material-icons">arrow_drop_up</i>
          </a>
          <ul
            className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect"
            htmlFor="developers-dropdown"
          >
            <li className="mdl-menu__item">App developer resources</li>
            <li className="mdl-menu__item">Android Open Source Project</li>
            <li className="mdl-menu__item">Android SDK</li>
            <li className="mdl-menu__item">Android for Work</li>
          </ul>
          <a  className="android-link mdl-typography--font-light" href="www.google.com">Blog</a>
          <a className="android-link mdl-typography--font-light" href="www.google.com">Privacy Policy</a>
        </div>
      </footer>

      
      
      
      
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
