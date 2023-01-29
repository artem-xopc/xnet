import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux_store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = (state) => {
  debugger
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
})