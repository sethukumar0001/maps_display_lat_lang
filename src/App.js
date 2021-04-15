import React, { Component } from "react";
import { render } from "react-dom";
import { LoadScript } from "@react-google-maps/api";
import Map from "./Map";
// import "./style.css";

const lib = ["places"];
const key = ""; // PUT GMAP API KEY HERE

export default class App extends React.Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={key} libraries={lib}>
        <Map />
      </LoadScript>
    );
  }
}