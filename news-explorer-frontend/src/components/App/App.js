import React from "react";
import { Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="background__image">
            <Header />
            <Main />
          </div>
          <About />
          <Footer />
        </Route>

        <Route exact path="/saved">
          <Header />
          <h1>saved articles</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
