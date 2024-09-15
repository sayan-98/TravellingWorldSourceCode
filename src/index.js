import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Redux/store";

// Get the element with the id root
const el = document.getElementById("root");

// Tell React to tkae control over that element
const root = ReactDOM.createRoot(el);

// Show the component on the screen
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
