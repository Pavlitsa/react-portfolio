import React from "react";
import "./Home.css";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  const headerHome = {
    title1: "Hi, my name is Pavlina and I'm",
    title2: "a Web Developer living in Munich.",
    subtitle: "Find out more about me ",
    link: "here",
    img: "ironhack2.jpg"
  };

  return (
    <div className="home">
      <Header title1={headerHome.title1} title2={headerHome.title2} subtitle={headerHome.subtitle} link={headerHome.link} image={headerHome.img} />
      <Footer />
    </div>
  );
};

export default Home;
