import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import BlogDetails from "../../components/Blog/BlogDetails";
import Nav from "../../components/Nav/Nav";

const SingleBlogPage = () => {
  return (
    <Fragment>
      <Nav pageName="Report" />
      <BlogDetails id="123" />
    </Fragment>
  );
};

export default SingleBlogPage;
