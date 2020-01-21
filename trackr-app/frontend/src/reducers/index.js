import { combineReducers } from "redux";
import projects from "./projects";
import errors from "./errors";

export default combineReducers({
  projects,
  errors
});
