import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
// Import the image from the same folder


// { name, areaName, cuisines, avgRating, deliveryTime, cloudinaryImageId }


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);



