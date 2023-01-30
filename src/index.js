import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/redux_store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./storeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});
