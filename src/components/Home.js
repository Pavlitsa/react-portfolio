import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  const headerHome = {
    title: "Web Developer living in Munich.",
    img: "bulb-pink.jpg"
  };

  return (
    <div className="home">
      <Header title={headerHome.title} image={headerHome.img} />

      <Footer />
    </div>
  );
};

export default Home;
