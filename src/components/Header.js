import { LOGO_URL } from "./mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import useUserOnlineStatus from "../utils/useUserOnlineStatus";

export const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login")

  return (
    <div className="header-container">
      {/* The final fix is to add .default to the logo variable */}
      <img className="app-logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>{useUserOnlineStatus() === "offline" ? "🔴 Offline" : "🟢 Online"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="">Cart</Link></li>


          <button className="login-status" onClick={() => {
            {
              if (loginStatus === "Login") {
                setLoginStatus("Logout")
              } else setLoginStatus("Login")
            }
          }}>{loginStatus}</button>
        </ul>
      </div>

    </div>
  );
};