import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Dipam Dutta </h1>;

const Heading = () => (
  <div className="container">
    <Title />
    <h1 className="head"> Namaste React </h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
