import React from "react";
import App from "./components";
import ReactDOM from "react-dom";
import persistReducer from "./modules";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { persistStore } from "redux-persist";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const store = createStore(
  persistReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
