import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import Blog from "./components/Blog/Blog";
// import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />

        <Route exact path="/projects" component={Projects} />

        {/* <Route exact path="/blog" component={Blog} />

        <Route exact path="/contact" component={Contact} /> */}

    </div>
  );
}

export default App;
