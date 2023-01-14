import React, { Fragment } from "react";
import service1Image from "../../images/services-1.jpg";

const Hero = () => {
  return (
    <Fragment>
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: `url(${service1Image})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center"
            data-scrollax-parent="true"
          >
            <div className="col-md-7 ftco-animate">
              <span className="subheading">Welcome to Pacific</span>
              <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
              <p className="caps">
                Travel to the any corner of the world, without going around in
                circles
              </p>
            </div>
            <a
              href="https://vimeo.com/45830194"
              className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
            >
              <span className="fa fa-play"></span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
