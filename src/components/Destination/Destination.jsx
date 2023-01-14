import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import bgImage1 from "../../images/bg_3.jpg";
import place1 from "../../images/place-1.jpg";
import place2 from "../../images/place-2.jpg";
import place3 from "../../images/place-3.jpg";
import place4 from "../../images/place-4.jpg";

import destinationImage6 from "../../images/destination-6.jpg";
import destinationImage7 from "../../images/destination-7.jpg";
import destinationImage8 from "../../images/destination-8.jpg";
import destinationImage9 from "../../images/destination-9.jpg";
import destinationImage10 from "../../images/destination-10.jpg";
import destinationImage11 from "../../images/destination-11.jpg";
import destinationImage12 from "../../images/destination-12.jpg";
const destinations = [
  {
    id: 1,
    image: destinationImage6,
    country: "Philippines",
    tours: "8 Tours",
    destinationDescription:
      "A small river named Duden flows by their place and supplies it with the necessary",
  },
];
const destinationTours = [
  {
    id: 1,
    image: destinationImage6,
    name: "Banaue Rice Terraces",
    price: "$1100",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
  {
    id: 1,
    image: destinationImage7,
    name: "Banaue Rice Terraces",
    price: "$1200",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
  {
    id: 1,
    image: destinationImage8,
    name: "Banaue Rice Terraces",
    price: "$1600",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
  {
    id: 1,
    image: destinationImage9,
    name: "Banaue Rice Terraces",
    price: "$4100",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
  {
    id: 1,
    image: destinationImage10,
    name: "Banaue Rice Terraces",
    price: "$1300",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
  {
    id: 1,
    image: destinationImage11,
    name: "Banaue Rice Terraces",
    price: "$2100",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
  {
    id: 21,
    image: destinationImage12,
    name: "Banaue Rice Terraces",
    price: "$2100",
    location: "Philippines",
    mountain: "Mountain",
    duration: "5 Days",
    shower: "2",
    kingSize: "1",
    umbrella: "1",
  },
];
const Destination = () => {
  return (
    <Fragment>
      <section
        className=" img ftco-select-destination"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Pacific Provide Places</span>
              <h2 className="mb-4">Select Your Destination</h2>
            </div>
          </div>
        </div>
        <div className="container container-2">
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-destination owl-carousel ftco-animate">
                {destinations.map((destination) => {
                  return (
                    <div key={destination.id} className="item">
                      <div className="project-destination">
                        <a
                          href="#"
                          className="img"
                          style={{
                            backgroundImage: `url(${destination.image})`,
                          }}
                        >
                          <div className="text">
                            <h3>{destination.country}</h3>
                            <span>{destination.tours}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate ">
              <span className="subheading">Destination</span>
              <h2 className="mb-4">Tour Destination</h2>
            </div>
          </div>
          <div className="row">
            {destinationTours.map((destinationTour) => {
              return (
                <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
                  <div className="project-wrap">
                    <a
                      href="#"
                      className="img"
                      style={{
                        backgroundImage: `url(${destinationTour.image})`,
                      }}
                    >
                      <span className="price">
                        {destinationTour.price}/person
                      </span>
                    </a>
                    <div className="text p-4">
                      <span className="days">{destinationTour.duration}</span>
                      <h3>
                        <Link to={"/"}>{destinationTour.name}</Link>
                      </h3>
                      <p className="location">
                        <span className="fa fa-map-marker"></span>{" "}
                        {destinationTour.location}
                      </p>
                      <ul>
                        <li>
                          <span className="flaticon-shower"></span>
                          {destinationTour.shower}
                        </li>
                        <li>
                          <span className="flaticon-king-size"></span>
                          {destinationTour.kingSize}
                        </li>
                        <li>
                          <span className="flaticon-sun-umbrella"></span>
                          {destinationTour.umbrella}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Destination;
