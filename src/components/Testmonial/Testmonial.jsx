import React, { Fragment } from "react";
import bgImage3 from "../../images/bg_3.jpg";
import bgImage4 from "../../images/bg_4.jpg";
import personImage1 from "../../images/person_1.jpg";
import personImage2 from "../../images/person_2.jpg";
import personImage3 from "../../images/person_3.jpg";
import personImage4 from "../../images/person_4.jpg";

const Testmonial = () => {
  return (
    <Fragment>
      <section
        className="ftco-section testimony-section bg-bottom"
        style={{ backgroundImage: `url(${bgImage3})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-4">Tourist Feedback</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${personImage1})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${personImage2})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${bgImage3})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${bgImage4})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${bgImage4})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testmonial;
