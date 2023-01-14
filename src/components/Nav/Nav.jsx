import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import bgImage1 from "../../images/bg_1.jpg";
const Nav = (props) => {
  const { location } = useParams("/");
  console.log(location);
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link to={"/"}>
            Pacific<span>Travel Agency</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item ${
                  props.pageName === "Home" ? "active" : ""
                }`}
              >
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  props.pageName === "About" ? "active" : ""
                }`}
              >
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li
                className={`nav-item ${
                  props.pageName === "Destination" ? "active" : ""
                }`}
              >
                <Link to={"/destination"} className="nav-link">
                  Destination
                </Link>
              </li>
              <li
                className={`nav-item ${
                  props.pageName === "Hotel" ? "active" : ""
                }`}
              >
                <Link to={"/hotel"} className="nav-link">
                  Hotel
                </Link>
              </li>
              <li
                className={`nav-item ${
                  props.pageName === "Blog" ? "active" : ""
                }`}
              >
                <Link to={"/blog"} className="nav-link">
                  Blog
                </Link>
              </li>
              <li
                className={`nav-item ${
                  props.pageName === "Contact" ? "active" : ""
                }`}
              >
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.pageName !== "Home" ? (
        <section
          className="hero-wrap hero-wrap-2 js-fullheight"
          style={{ backgroundImage: `url(${bgImage1})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate pb-5 text-center">
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <Link to={"/"}>
                      Home <i className="fa fa-chevron-right"></i>
                    </Link>
                  </span>{" "}
                  <span>
                    {props.pageName != "Home" ? props.pageName : ""}{" "}
                    <i className="fa fa-chevron-right"></i>
                  </span>
                </p>

                <h1 className="mb-0 bread">
                  {props.pageName != "Home" ? props.pageName : ""}
                </h1>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Nav;
