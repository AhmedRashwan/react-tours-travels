import React, { Fragment } from "react";
import serviceImage1 from "../../images/services-1.jpg";
import serviceImage2 from "../../images/services-2.jpg";
import serviceImage3 from "../../images/services-3.jpg";
import serviceImage4 from "../../images/services-4.jpg";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    image: serviceImage1,
    activityDescription:
      "A small river named Duden flows by their place and supplies it with the necessary",
    iconClass: "flaticon-map",
  },
  {
    id: 2,
    image: serviceImage2,
    activityDescription:
      "A small river named Duden flows by their place and supplies it with the necessary",
    iconClass: "flaticon-map",
  },
  {
    id: 3,
    image: serviceImage3,
    activityDescription:
      "A small river named Duden flows by their place and supplies it with the necessary",
    iconClass: "flaticon-map",
  },
  {
    id: 4,
    image: serviceImage4,
    activityDescription:
      "A small river named Duden flows by their place and supplies it with the necessary",
    iconClass: "flaticon-map",
  },
];
const Services = () => {
  return (
    <Fragment>
      <section className="ftco-section services-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
              <div className="w-100">
                <span className="subheading">Welcome to Pacific</span>
                <h2 className="mb-4">It's time to start your adventure</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <p>
                  <Link
                    to={"/destination"}
                    className="btn btn-primary py-3 px-4"
                  >
                    Search Destination
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                {services.map((service, index) => {
                  return (
                    <div
                      key={service.id}
                      className="col-md-12 col-lg-6 d-flex align-self-stretch"
                    >
                      <div
                        className="services services-1 color-1 d-block img"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className={service.iconClass}></span>
                        </div>
                        <div className="media-body">
                          <h3 className="heading mb-3">Activities</h3>
                          <p>{service.activityDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
