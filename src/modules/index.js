import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  messages,
  errors,
});

export default persistReducer(persistConfig, rootReducer);
