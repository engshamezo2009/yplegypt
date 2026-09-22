import { NavLink } from "react-router-dom";
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Site Map */}
        <div className="footer-section">
          <h3>Site Map</h3>

          <ul>
            <li>
              <NavLink to="/homepage">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/planting-guide">Planting Guide</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/planting-field">Planting Field</NavLink>
            </li>
          </ul>
        </div>

        {/* Keep In Touch */}
        <div className="footer-section">
          <h3>Keep In Touch</h3>

          <a
            href="https://www.instagram.com/ypl_egypt/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/ypl-egypt"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>

          <a href="mailto:yplegypt@gmail.com" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607-." />
            </svg>
            yplegypt@gmail.com
          </a>

          <a href="tel:+201063903274" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            +20 106 390 3274
          </a>
        </div>

        {/* About Us */}
        <div className="footer-section">
          <h3>About Us</h3>

          <div className="about-us-section">
            <div className="about-us-header">
              <img src="/Images/LogoGreen.png" alt="YPL Logo" />

              <h4>Young Planet Leaders</h4>
            </div>

            <p>
              This project helps make Egyptian schools green and beautiful. We
              use empty areas to plant new things because a clean environment
              helps students feel less stressed and get better grades.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024-2025 Young Planet Leaders Egypt. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
