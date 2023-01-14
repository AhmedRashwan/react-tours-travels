import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import hotelImage1 from "../../images/hotel-resto-1.jpg";
import hotelImage2 from "../../images/hotel-resto-2.jpg";
import hotelImage3 from "../../images/hotel-resto-3.jpg";
import hotelImage4 from "../../images/hotel-resto-4.jpg";
import hotelImage5 from "../../images/hotel-resto-5.jpg";
import hotelImage6 from "../../images/hotel-resto-6.jpg";

const Hotel = () => {
  return (
    <Fragment>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Pacific Provide Hotels</span>
              <h2 className="mb-4">Select Your Hotel</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="project-wrap hotel">
                <Link
                  to={"/"}
                  className="img"
                  style={{ backgroundImage: `url(${hotelImage1})` }}
                >
                  <span className="price">$200/person</span>
                </Link>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">8 Days Tour</span>
                  <h3>
                    <Link to={"/"}>Manila Hotel</Link>
                  </h3>
                  <p className="location">
                    <span className="fa fa-map-marker"></span> Manila,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span className="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span className="flaticon-mountains"></span>Near Mountain
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="project-wrap hotel">
                <Link
                  to={"/"}
                  className="img"
                  style={{ backgroundImage: `url(${hotelImage2})` }}
                >
                  <span className="price">$200/person</span>
                </Link>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">10 Days Tour</span>
                  <h3>
                    <Link to={"/"}>Manila Hotel</Link>
                  </h3>
                  <p className="location">
                    <span className="fa fa-map-marker"></span> Manila,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span className="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span className="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="project-wrap hotel">
                <Link
                  to={"/"}
                  className="img"
                  style={{ backgroundImage: `url(${hotelImage3})` }}
                >
                  <span className="price">$200/person</span>
                </Link>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">7 Days Tour</span>
                  <h3>
                    <Link to={"/"}>Manila Hotel</Link>
                  </h3>
                  <p className="location">
                    <span className="fa fa-map-marker"></span> Manila,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span className="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span className="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 ftco-animate">
              <div className="project-wrap hotel">
                <Link
                  to={"/"}
                  className="img"
                  style={{ backgroundImage: `url(${hotelImage4})` }}
                >
                  <span className="price">$200/person</span>
                </Link>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">8 Days Tour</span>
                  <h3>
                    <Link to={"/"}>Manila Hotel</Link>
                  </h3>
                  <p className="location">
                    <span className="fa fa-map-marker"></span> Manila,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span className="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span className="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="project-wrap hotel">
                <Link
                  to={"/"}
                  className="img"
                  style={{ backgroundImage: `url(${hotelImage5})` }}
                >
                  <span className="price">$200/person</span>
                </Link>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">10 Days Tour</span>
                  <h3>
                    <Link to={"/"}>Manila Hotel</Link>
                  </h3>
                  <p className="location">
                    <span className="fa fa-map-marker"></span> Manila,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span className="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span className="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="project-wrap hotel">
                <Link
                  to={"/"}
                  className="img"
                  style={{ backgroundImage: `url(${hotelImage6})` }}
                >
                  <span className="price">$200/person</span>
                </Link>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">7 Days Tour</span>
                  <h3>
                    <Link to={"/"}>Manila Hotel</Link>
                  </h3>
                  <p className="location">
                    <span className="fa fa-map-marker"></span> Manila,
                    Philippines
                  </p>
                  <ul>
                    <li>
                      <span className="flaticon-shower"></span>2
                    </li>
                    <li>
                      <span className="flaticon-king-size"></span>3
                    </li>
                    <li>
                      <span className="flaticon-sun-umbrella"></span>Near Beach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hotel;
