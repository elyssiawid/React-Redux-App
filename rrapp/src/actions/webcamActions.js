import axios from "axios";

export const FETCH_WEBCAM_DATA_START = "FETCH_WEBCAM_DATA_START";
export const FETCH_WEBCAM_DATA_SUCCESS = "FETCH_WEBCAM_DATA_SUCCESS";
export const FETCH_WEBCAM_DATA_FAILURE = "FETCH_WEBCAM_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_WEBCAM_DATA_START });
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_WEBCAM_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_WEBCAM_DATA_FAILURE, payload: err.response });
      });
  };
};
