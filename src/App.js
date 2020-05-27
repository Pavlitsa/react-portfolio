import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} /> */}
      <Route exact path="/react-portfolio" component={Home} />
      <Route exact path="/react-portfolio/about" component={About} />
      <Route exact path="/react-portfolio/projects" component={Projects} />
    </div>
  );
};

export default App;
