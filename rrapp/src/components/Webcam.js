import React from "react";

const Webcam = props => {
  return (
    <div>
      <h4>{props.webcam.mission_name}</h4>
      <h2>{props.webcam.website}</h2>
      <img src={props.webcam.url} alt={props.webcam.mission_name} />
    </div>
  );
};

export default Webcam;
