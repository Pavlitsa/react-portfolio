import React from "react";
import "../styles/Home.css";
import Footer from "./Footer";
import Header from "./Header";
import ironhack2 from "../images/ironhack2.jpg";

const Home = () => {
  const headerHome = {
    title1: "Hi, my name is Pavlina and I'm a Web Developer living in Munich.",
    subtitle: "Find out more about me ",
    link: "here.",
    img: ironhack2
  };

  return (
    <div className="home">
      <Header title1={headerHome.title1} subtitle={headerHome.subtitle} link={headerHome.link} image={headerHome.img} />
      <div className="main"></div>
      <Footer />
    </div>
  );
};

export default Home;
