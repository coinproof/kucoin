import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { Switch, Route, Redirect } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import Ranking from "./Ranking";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Ranking />

    </>
  )
};

export default App;