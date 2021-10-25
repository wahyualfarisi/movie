import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "./../../img/movie.svg";
import { connect } from "react-redux";
import { searchMovie } from "../../actions/SearchActions";
import { getGenre, getListbygenre } from "../../actions/GenreActions";
import { Button } from "react-bootstrap";
import apiImage from './../../img/api-source.jpg'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  componentDidMount = () => {
    this.props.getGenre();
  };

  onChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.keyword.trim() === "") {
      return false;
    }

    this.props.searchMovie(this.state.keyword, this.props.history);
    this.setState({ keyword: "" });
  };

  onClick = (id, name) => {
    this.props.getListbygenre(id, name, this.props.history);
  };

  render() {
    
    let displayGenre;
    const { isLoaded, genre } = this.props.genre;

    if (genre !== null && !isLoaded) {
      displayGenre = genre.map((item, i) => {
        return (
          <Button
            onClick={() => this.onClick(item.id, item.name)}
            style={{ textAlign: "left" }}
            className="mdl-navigation__link"
            key={i}
            variant="light"
          >
            <i className="fa fa-play-circle" /> {item.name}
          </Button>
        );
      });
    } else {
      displayGenre = "<p>something wrong</p>";
    }
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
                <NavLink
                  className="mdl-navigation__link mdl-typography--text-uppercase"
                  exact={true}
                  activeClassName="android-link"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  Now Playing
                </NavLink>
                <NavLink
                  className="mdl-navigation__link mdl-typography--text-uppercase"
                  activeClassName="android-link"
                  to="/popular"
                  style={{ textDecoration: "none" }}
                >
                  Popular
                </NavLink>
                <NavLink
                  className="mdl-navigation__link mdl-typography--text-uppercase"
                  activeClassName="android-link"
                  to="/top-rated"
                  style={{ textDecoration: "none" }}
                >
                  Top Rated
                </NavLink>
              </nav>
            </div>

            <span className="android-mobile-title mdl-layout-title">
              <img className="android-logo-image" src={logo} alt="logo" />
            </span>

          </div>
        </div>

        <div className="android-drawer mdl-layout__drawer">
          <span className="mdl-layout-title">
            <img className="android-logo-image" src={logo} alt="logo" />
          </span>
          <nav className="mdl-navigation">
            <span className="mdl-navigation__link" href="/">
              Discover
            </span>
            <NavLink
              className="mdl-navigation__link"
              to="/"
              exact={true}
              activeClassName="android-link"
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-play-circle" /> Now Playing
            </NavLink>
            <NavLink
              className="mdl-navigation__link"
              to="/popular"
              activeClassName="android-link"
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-fire" /> Popular
            </NavLink>
            <NavLink
              className="mdl-navigation__link"
              to="/top-rated"
              activeClassName="android-link"
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-star" /> Top Rated
            </NavLink>
            <div className="android-drawer-separator" />
            <span className="mdl-navigation__link">
              <p style={{ textAlign: "left" }}>Genre</p>
            </span>
            {displayGenre}
            <div className="android-drawer-separator" />
            <div style={{
              textAlign: 'center',
              padding: '10px'
            }}>
              <h6 style={{
                fontWeight: 'bold'
              }}>API PROVIDED BY</h6>
              <img src={apiImage} alt="Api Source DB" width="50%" />
            </div>
            
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  genre: state.genre
});

export default connect(
  mapStateToProps,
  { searchMovie, getGenre, getListbygenre }
)(withRouter(Navbar));
