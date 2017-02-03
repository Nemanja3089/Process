import { combineReducers } from "redux";
import processes from "./reducers/processes";
import login from "./reducers/login";

export default combineReducers({
  processes,
  login
});
