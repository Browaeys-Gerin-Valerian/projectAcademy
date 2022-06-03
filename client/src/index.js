import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.module.scss";
import "./sass/app.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
