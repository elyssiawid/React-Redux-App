import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import { Header } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

import { getData } from "../actions";

import Webcam from "./Webcam";

const WebcamList = props => {
  return (
    <>
      <Header as="h1">SpaceX Missions Data App</Header>
      <Button onClick={props.getData} style={{ justifyContent: "center" }}>
        {props.isLoading ? (
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        ) : (
          "Get SpaceX Missions Data"
        )}
      </Button>
      <div className="ui cards">
        <div className="ui card">
          <div className="content">
            {props.webcams &&
              props.webcams.map(cam => <Webcam key={cam.name} webcam={cam} />)}
          </div>
        </div>
      </div>
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
