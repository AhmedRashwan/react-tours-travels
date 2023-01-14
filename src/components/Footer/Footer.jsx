import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import bgImage3 from "../../images/bg_3.jpg";
const Footer = () => {
  return (
    <Fragment>
      <footer
        className="ftco-footer bg-bottom ftco-no-pt"
        style={{ backgroundImage: `url(${bgImage3})` }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md pt-5">
              <div className="ftco-footer-widget pt-md-5 mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li className="ftco-animate">
                    <Link to={"/"}>
                      <span className="fa fa-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to={"/"}>
                      <span className="fa fa-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to={"/"}>
                      <span className="fa fa-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md pt-5 border-left">
              <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Infromation</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Online Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      General Enquiries
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Booking Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Privacy and Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Call Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md pt-5 border-left">
              <div className="ftco-footer-widget pt-md-5 mb-4">
                <h2 className="ftco-heading-2">Experience</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Hotel and Restaurant
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Beach
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Nature
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Camping
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="py-2 d-block">
                      Party
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md pt-5 border-left">
              <div className="ftco-footer-widget pt-md-5 mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon fa fa-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <span className="icon fa fa-phone"></span>
                        <span className="text">+2 392 3929 210</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <span className="icon fa fa-paper-plane"></span>
                        <span className="text">info@yourdomain.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved |{" "}
                <Link to={"/"} target="_blank">
                  Ahmed Rashwan
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
