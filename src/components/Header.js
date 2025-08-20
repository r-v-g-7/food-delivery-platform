import { LOGO_URL } from "./mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login")
  const [buttonClass, setButtonClass] = useState(`w-24 px-4 py-2 rounded-md text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-blue-600`)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

  const handleLoginClick = () => {
    if (loginStatus === "Login") {
      setLoginStatus("Logout")
      setButtonClass("bg-red-600")
    } else {
      setLoginStatus("Login")
      setButtonClass("bg-blue-600")
    }
  }

  return (
    <div className="header-container bg-white">
      {/* The final fix is to add .default to the logo variable */}
      <img className="app-logo p-1" src={LOGO_URL} />
      <div className="nav-items">
        <ul className="flex items-center gap-6 h-16">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="flex items-center">
            <Link to="/cart" className="relative flex items-center">
              🛒 Cart
              {cartItems.length > 0 && (
                <span className="ml-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li className="flex items-center"><Link to="/profile">Profile</Link></li>

          <button className={`w-24 px-4 py-2 rounded-md text-white font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${buttonClass}`} onClick={() => {
            handleLoginClick()
          }}>{loginStatus}</button>

        </ul>
      </div>

    </div>
  );
};



// className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow-sm"