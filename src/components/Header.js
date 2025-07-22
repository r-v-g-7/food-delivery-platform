import { LOGO_URL } from "./mockData";

export const Header = () => {
  return (
    <div className="header-container">
      {/* The final fix is to add .default to the logo variable */}
      <img className="app-logo" src={LOGO_URL}/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  );
};