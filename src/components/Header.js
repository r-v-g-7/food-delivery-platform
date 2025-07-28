import { LOGO_URL } from "./mockData";
import { useState } from "react";

export const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login")

  return (
    <div className="header-container">
      {/* The final fix is to add .default to the logo variable */}
      <img className="app-logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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