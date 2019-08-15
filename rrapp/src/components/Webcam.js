import React from "react";

const Webcam = props => {
  return (
    <div>
      <h1>{props.webcam.mission_name}</h1>
      <p>{props.webcam.description}</p>
      <h5>{props.webcam.website}</h5>
      <h5>{props.webcam.wikipedia}</h5>
    </div>
  );
};

export default Webcam;
