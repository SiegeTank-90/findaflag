import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import DetailedInformation from "./pages/DetailedInformation";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter basename="https://siegetank-90.github.io/findaflag">
      <Routes>
        <Route path="*" element={<App />}></Route>
        <Route index element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
