import axios from "axios";

import { GET_PROJECTS, DELETE_PROJECTS } from "./types";

// GET PROJECTS
export const getProjects = () => dispatch => {
  axios
    .get("/api/projects/")
    .then(res => {
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE PROJECTS
export const deleteProjects = id => dispatch => {
  axios
    .delete(`/api/projects/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_PROJECTS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
