import React from "react";
import ReactDOM from "react-dom";
import TestingApp from "./TestingApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/JLaroPortfolio">
      <TestingApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
