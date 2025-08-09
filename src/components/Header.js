import { LOGO_URL } from "./mockData";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login")
  const [buttonClass, setButtonClass] = useState(`w-24 px-4 py-2 rounded-md text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-blue-600`) 

  const handleLoginClick = () => {
    if(loginStatus === "Login") {
      setLoginStatus("Logout") 
      setButtonClass("bg-red-600")
    } else {
      setLoginStatus("Login")
      setButtonClass("bg-blue-600")
    }
  }

  return (
    <div className="header-container">
      {/* The final fix is to add .default to the logo variable */}
      <img className="app-logo bg-white p-2 rounded-md mix-blend-normal" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>


          <button className={`w-24 px-4 py-2 rounded-md text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${buttonClass}`} onClick={() => {
              
              handleLoginClick()

          }}>{loginStatus}</button>
        </ul>
      </div>

    </div>
  );
};