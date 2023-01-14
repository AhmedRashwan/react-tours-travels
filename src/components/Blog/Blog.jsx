import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import image1 from "../../images/image_1.jpg";
import image2 from "../../images/image_2.jpg";
import image3 from "../../images/image_3.jpg";
const blogs = [
  {
    id: 1,
    image: image1,
    date: "11 September 2020",
    day: "11",
    month: "September",
    year: "2020",
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 2,
    image: image2,
    date: "11 September 2020",
    day: "11",
    month: "September",
    year: "2020",
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 3,
    image: image3,
    date: "11 September 2020",
    day: "11",
    month: "September",
    year: "2020",
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

const Blog = () => {
  return (
    <Fragment>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Our Blog</span>
              <h2 className="mb-4">Recent Post</h2>
            </div>
          </div>
          <div className="row d-flex">
            {blogs.map((blog) => {
              return (
                <div className="col-md-4 d-flex ftco-animate">
                  <div className="blog-entry justify-content-end">
                    <Link
                      to={"/"}
                      className="block-20"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    ></Link>
                    <div className="text">
                      <div className="d-flex align-items-center mb-4 topp">
                        <div className="one">
                          <span className="day">{blog.day}</span>
                        </div>
                        <div className="two">
                          <span className="yr">{blog.year}</span>
                          <span className="mos">{blog.month}</span>
                        </div>
                      </div>
                      <h3 className="heading">
                        <Link to={"/"}>{blog.description}</Link>
                      </h3>
                      <p>
                        <Link
                          to={`/blog/${blog.id}`}
                          className="btn btn-primary"
                        >
                          Read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <Link
                  to={"/"}
                  className="block-20"
                  style={{ backgroundImage: `url(${image3})` }}
                ></Link>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <Link to={"/"}>Most Popular Place In This World</Link>
                  </h3>
                  {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                  <p>
                    <Link to={"/"} className="btn btn-primary">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
