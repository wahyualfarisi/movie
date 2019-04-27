import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";
import "./css/custome.css";
import Navbar from "./components/layout/Navbar";
import Popular from "./components/content/popular/Popular";
import TopRated from "./components/content/top-rated/TopRated";
import NowPlaying from "./components/content/now-playing/NowPlaying";
import PageNotFound from "./components/content/PageNotFound";
import UpComing from "./components/content/up-coming/UpComing";

function App() {
  return (
    <Provider store={store} >
      <HashRouter basename="/">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Navbar />
          <div className="android-content mdl-layout__content">
            <Switch>
              <Route exact path="/" component={NowPlaying} />
              <Route path="/popular" component={Popular} />
              <Route path="/top-rated" component={TopRated} />
              <Route path="/up-coming" component={UpComing} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
