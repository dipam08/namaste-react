import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// JSON Object for restaurant data

/////////////////////////////

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// const Title = () => <h1>Hello World </h1>;

// const Heading = () => (
//   <div className="container">
//     <Title />
//     <h1 className="head"> Namaste React </h1>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
