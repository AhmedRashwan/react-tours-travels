import React, { Fragment } from "react";
import Blog from "../../components/Blog/Blog";
import Nav from "../../components/Nav/Nav";

const BlogPage = () => {
  return (
    <Fragment>
      <Nav pageName="Blog" />
      <Blog />
    </Fragment>
  );
};

export default BlogPage;
