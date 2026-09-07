import { NavLink } from "react-router-dom";
import "../styles/header.css"
export default function Header() {
  return (
    <header>
      <div className="logo-box">
        <img src="/Images/LogoGreen.png" alt="YPL Logo" />
        <span className="logo-text">YPL</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/homepage">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login" id="authLink">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
