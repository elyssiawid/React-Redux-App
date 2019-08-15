import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import Webcam from "./Webcam";

const WebcamList = props => {
  console.log("JUNEJEEE", props);
  return (
    <>
      <h1>SpaceX App</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        ) : (
          "Get SpaceX Data"
        )}
      </button>
      {props.webcams &&
        props.webcams.map(cam => <Webcam key={cam.name} webcam={cam} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    webcams: state.webcams
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(WebcamList);
