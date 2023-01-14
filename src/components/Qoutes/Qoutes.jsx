import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import bgImage1 from "../../images/bg_1.jpg";
const Qoutes = () => {
  return (
    <Fragment>
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

export default Qoutes;
