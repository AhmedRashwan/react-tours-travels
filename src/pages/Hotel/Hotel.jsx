import React, { Fragment } from "react";
import Destination from "../../components/Destination/Destination";
import Search from "../../components/Search/Search";
import Hotel from "../../components/Hotel/Hotel";
import Nav from "../../components/Nav/Nav";
const HotelPage = () => {
  return (
    <Fragment>
      <Nav pageName="Hotel" />
      <Search />
      <Destination />
      <Hotel />
    </Fragment>
  );
};

export default HotelPage;
