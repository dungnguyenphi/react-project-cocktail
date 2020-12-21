import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// import styles
import "./styles/style.css";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
//import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
