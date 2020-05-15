import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Repos from "./containers/Repos/Repos";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Repos} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
