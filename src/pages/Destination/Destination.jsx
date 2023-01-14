import React, { Fragment } from "react";
import Destination from "../../components/Destination/Destination";
import Nav from "../../components/Nav/Nav";

const DestinationPage = () => {
  return (
    <Fragment>
      <Nav pageName="Destination" />
      <Destination />
    </Fragment>
  );
};

export default DestinationPage;
