import React, { Fragment } from "react";
import bgImage1 from "../../images/bg_1.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Fragment>
      <section className="ftco-section ftco-no-pb contact-section mb-4">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-3 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <h3 className="mb-2">Address</h3>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <h3 className="mb-2">Contact Number</h3>
                <p>
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <h3 className="mb-2">Email Address</h3>
                <p>
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe"></span>
                </div>
                <h3 className="mb-2">Website</h3>
                <p>
                  <Link to={"/"}>yoursite.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section ftco-no-pt">
        <div className="container">
          <div className="row block-9">
            <div className="col-md-6 order-md-last d-flex">
              <form action="#" className="bg-light p-5 contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6 d-flex">
              <div id="map" className="bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-intro ftco-section ftco-no-pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div
                className="img"
                style={{ backgroundImage: `url(${bgImage1})` }}
              >
                <div className="overlay"></div>
                <h2>We Are Pacific A Travel Agency</h2>
                <p>
                  We can manage your dream building A small river named Duden
                  flows by their place
                </p>
                <p className="mb-0">
                  <Link to={"/"} className="btn btn-primary px-4 py-3">
                    Ask For A Quote
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
