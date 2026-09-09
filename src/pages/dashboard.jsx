import { NavLink, Outlet } from "react-router-dom";

import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-header-content">
          <div className="dashboard-intro">
            <span className="dashboard-label">YPL Egypt</span>

            <h1>Dashboard</h1>

            <p>Explore our events, teams, and their progress.</p>
          </div>

          <nav className="dashboard-nav">
            <NavLink
              to="/dashboard/green-future-challenge-2026"
              className={({ isActive }) =>
                `dashboard-nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="dashboard-nav-number">01</span>

              <span className="dashboard-nav-content">
                <span className="dashboard-nav-title">
                  Green Future Challenge
                </span>

                <span className="dashboard-nav-year">2026</span>
              </span>
            </NavLink>

            <NavLink
              to="/dashboard/another-event-2026"
              className={({ isActive }) =>
                `dashboard-nav-link ${isActive ? "active" : ""}`
              }
            >
              <span className="dashboard-nav-number">02</span>

              <span className="dashboard-nav-content">
                <span className="dashboard-nav-title">Another Event</span>

                <span className="dashboard-nav-year">2026</span>
              </span>
            </NavLink>
          </nav>
        </div>
      </div>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
