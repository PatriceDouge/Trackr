import { GET_PROJECTS } from "../actions/types.js";
import { DELETE_PROJECTS } from "../actions/types.js";

const initialState = {
  projects: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case DELETE_PROJECTS:
      return {
        ...state,
        projects: state.projects.filter(project => project.id != action.payload)
      };
    default:
      return state;
  }
}
