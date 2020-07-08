import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ToastProvider } from "react-toast-notifications";

const store = createStore(cartReducer);

ReactDOM.render(
  <ToastProvider autoDismiss autoDismissTimeout={1500} placement="top-center">
    <Provider store={store}>
      <App />
    </Provider>
  </ToastProvider>,
  document.getElementById("root")
);
