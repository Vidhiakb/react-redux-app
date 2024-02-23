import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom';

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
