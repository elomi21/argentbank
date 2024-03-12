import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./style/index.scss";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
