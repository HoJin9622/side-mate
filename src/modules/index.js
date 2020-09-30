import { combineReducers } from "redux";
import auth from "./auth";
import messages from "./messages";
import errors from "./errors";

const rootReducer = combineReducers({
  auth,
  messages,
  errors,
});

export default rootReducer;
