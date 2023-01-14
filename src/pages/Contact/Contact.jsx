import React, { Fragment } from "react";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";

const ContactPage = () => {
  return (
    <Fragment>
      <Nav pageName="Contact" />
      <Contact />
    </Fragment>
  );
};

export default ContactPage;
