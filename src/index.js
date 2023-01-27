import React from "react";
import ReactDOM from "react-dom/client";
import state, { subscriber } from "./Components/redux/state";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, updatePostText } from "./Components/redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostText={updatePostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerender(state);

subscriber(rerender)