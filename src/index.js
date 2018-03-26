import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer, { initialState } from "./reducers";
import { handleLang } from "./i18n";

const lang = document.location.href.split("/").pop();

const storedData = JSON.parse(localStorage.getItem("state"));

const store = createStore(
  rootReducer,
  storedData ? storedData : initialState,
  applyMiddleware(thunk)
);

store.subscribe(() =>
  localStorage.setItem("state", JSON.stringify(store.getState()))
);

handleLang(lang, store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
