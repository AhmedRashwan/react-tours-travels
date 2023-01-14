import React, { Fragment } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Blog from "../../components/Blog/Blog";
import Destination from "../../components/Destination/Destination";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Qoutes from "../../components/Qoutes/Qoutes";
import Search from "../../components/Search/Search";
import Services from "../../components/Services/Services";
import Testmonial from "../../components/Testmonial/Testmonial";

const Home = () => {
  return (
    <Fragment>
      <Nav pageName="Home" />
      <Hero />
      <Search />
      <Services />
      <Destination />
      <AboutUs />
      <Testmonial />
      <Blog />
      <Qoutes />
    </Fragment>
  );
};

export default Home;
