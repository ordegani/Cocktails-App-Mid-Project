import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HelloPage from "./components/HelloPage";
import NavBar from "./NavBar";
import Recipe from "./Recipe";
import Info from "./Info";
import Random from "./Random";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/helloPage" component={HelloPage} />
          <Route exact path="/" component={Main} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/Random" component={Random} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
