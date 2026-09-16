import { useState } from "react";

import { NavLink } from "react-router-dom";

import { useAuth } from "../context/AuthContext.jsx";

import "../styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { user, isAuthenticated, setUser } = useAuth();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignOut = () => {
    setUser(null);
    setIsProfileOpen(false);
    closeMenu();
  };

  return (
    <header className="site-header">
      <div className="logo-box">
        <img src="/Images/LogoGreen.png" alt="YPL Logo" />
        <span className="logo-text">YPL</span>
      </div>

      <button
        type="button"
        className={`hamburger-button ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`site-navigation ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/homepage" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about-us" onClick={closeMenu}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/planting-guide" onClick={closeMenu}>
              Planting Guide
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" onClick={closeMenu}>
              Dashboard
            </NavLink>
          </li>

          {!isAuthenticated ? (
            <>
              <li>
                <NavLink to="/login" id="authLink" onClick={closeMenu}>
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink to="/join-us" id="authLink" onClick={closeMenu}>
                  Join Us
                </NavLink>
              </li>
            </>
          ) : (
            <li className="profile-menu">
              <button
                type="button"
                className="profile-button"
                onClick={() => setIsProfileOpen((prev) => !prev)}
                aria-expanded={isProfileOpen}
              >
                Profile
              </button>

              {isProfileOpen && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>

                  <button
                    type="button"
                    className="sign-out-button"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
