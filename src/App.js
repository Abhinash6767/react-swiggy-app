import React from "react";
import ReactDOM from "react-dom/client";
// import { cards } from "../data.json";
import Header from "./component/Header";
import Body from "./component/Body";

// const resData = cards;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
