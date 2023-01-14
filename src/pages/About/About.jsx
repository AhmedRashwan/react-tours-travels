import React, { Fragment } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Nav from "../../components/Nav/Nav";
import Services from "../../components/Services/Services";
import Testmonial from "../../components/Testmonial/Testmonial";

const About = () => {
  return (
    <Fragment>
      <Nav pageName="About" />
      <AboutUs />
      <Testmonial />
    </Fragment>
  );
};

export default About;
