import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../images/image_1.jpg";
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
];
const BlogDetails = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ftco-animate py-md-5 mt-md-5">
            <h2 className="mb-3">
              It is a long established fact a reader be distracted
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
              perferendis et doloribus unde architecto optio laboriosam porro
              adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore perferendis, enim praesentium omnis, iste
              doloremque quia officia optio deserunt molestiae voluptates soluta
              architecto tempora.
            </p>
            <p>
              <img src="images/bg_5.jpg" alt="" className="img-fluid" />
            </p>
            <p>
              Molestiae cupiditate inventore animi, maxime sapiente optio, illo
              est nemo veritatis repellat sunt doloribus nesciunt! Minima
              laborum magni reiciendis qui voluptate quisquam voluptatem soluta
              illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti
              tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor
              minima esse vero ut ea, repudiandae suscipit!
            </p>
            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
            <p>
              Temporibus ad error suscipit exercitationem hic molestiae totam
              obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora
              maiores ex architecto voluptatum aut officia doloremque. Error
              dolore voluptas, omnis molestias odio dignissimos culpa ex earum
              nisi consequatur quos odit quasi repellat qui officiis reiciendis
              incidunt hic non? Debitis commodi aut, adipisci.
            </p>
            <p>
              <img src="images/bg_1.jpg" alt="" className="img-fluid" />
            </p>
            <p>
              Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
              reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
              tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab
              consectetur suscipit veritatis nulla quos quia aspernatur
              perferendis, libero sint. Error, velit, porro. Deserunt minus,
              quibusdam iste enim veniam, modi rem maiores.
            </p>
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                <Link to={"/"} className="tag-cloud-link">
                  Life
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  Sport
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  Tech
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  Travel
                </Link>
              </div>
            </div>

            <div className="about-author d-flex p-4 bg-light">
              <div className="bio mr-5">
                <img
                  src="images/person_1.jpg"
                  alt="Image placeholder"
                  className="img-fluid mb-4"
                />
              </div>
              <div className="desc">
                <h3>George Washington</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5">
              <h3
                className="mb-5"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                6 Comments
              </h3>
              <ul className="comment-list">
                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder" />
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">September 11, 2020 at 2:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p>
                      <Link to={"/"} className="reply">
                        Reply
                      </Link>
                    </p>
                  </div>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder" />
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">September 11, 2020 at 2:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p>
                      <Link to={"/"} className="reply">
                        Reply
                      </Link>
                    </p>
                  </div>

                  <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                        <img
                          src="images/person_1.jpg"
                          alt="Image placeholder"
                        />
                      </div>
                      <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">September 11, 2020 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <Link to={"/"} className="reply">
                            Reply
                          </Link>
                        </p>
                      </div>

                      <ul className="children">
                        <li className="comment">
                          <div className="vcard bio">
                            <img
                              src="images/person_1.jpg"
                              alt="Image placeholder"
                            />
                          </div>
                          <div className="comment-body">
                            <h3>John Doe</h3>
                            <div className="meta">
                              September 11, 2020 at 2:21pm
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p>
                              <Link to={"/"} className="reply">
                                Reply
                              </Link>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="comment">
                  <div className="vcard bio">
                    <img src="images/person_1.jpg" alt="Image placeholder" />
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">September 11, 2020 at 2:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p>
                      <Link to={"/"} className="reply">
                        Reply
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>

              <div className="comment-form-wrap pt-5">
                <h3
                  className="mb-5"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Leave a comment
                </h3>
                <form action="#" className="p-5 bg-light">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="url" className="form-control" id="website" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="10"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Post Comment"
                      className="btn py-3 px-4 btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 sidebar ftco-animate bg-light py-md-5">
            <div className="sidebar-box pt-md-5">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
            <div className="sidebar-box ftco-animate">
              <div className="categories">
                <h3>Categories</h3>
                <li>
                  <Link to={"/"}>
                    Travel <span>(12)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    Tour <span>(22)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    Destination <span>(37)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    Drinks <span>(42)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    Foods <span>(14)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    Travel <span>(140)</span>
                  </Link>
                </li>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Recent Blog</h3>
              <div className="block-21 mb-4 d-flex">
                <Link
                  to={"/"}
                  className="blog-img mr-4"
                  style={{ backgroundImage: `url(${image1})` }}
                ></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to={"/"}>
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-calendar"></span> September 11,
                        2020
                      </Link>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-user"></span> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-comment"></span> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <Link
                  to={"/"}
                  className="blog-img mr-4"
                  style={{ backgroundImage: `url(${image1})` }}
                ></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to={"/"}>
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-calendar"></span> September 11,
                        2020
                      </Link>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-user"></span> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-comment"></span> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <Link
                  to={"/"}
                  className="blog-img mr-4"
                  style={{ backgroundImage: `url(${image1})` }}
                ></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to={"/"}>
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-calendar"></span> September 11,
                        2020
                      </Link>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-user"></span> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to={"/"}>
                        <span className="fa fa-comment"></span> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div className="tagcloud">
                <Link to={"/"} className="tag-cloud-link">
                  dish
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  menu
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  food
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  sweet
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  tasty
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  delicious
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  desserts
                </Link>
                <Link to={"/"} className="tag-cloud-link">
                  drinks
                </Link>
              </div>
            </div>

            <div className="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetails;
