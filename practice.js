import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="data:image/png;base64,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" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
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
