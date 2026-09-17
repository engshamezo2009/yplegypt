import { useLocation, useNavigate } from "react-router-dom";
import ApplicationSuccessModal from "../components/modals/ApplicationSuccessModal.jsx";
import "../styles/home.css";
export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const showApplicationSuccess = location.state?.showApplicationSuccess;
  const closeApplicationSuccessModal = () => {
    navigate("/homepage", {
      replace: true,
      state: {},
    });
  };
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Young Planet Leaders in Egypt</h1>
          <p>The environment for all | Community for all</p>
        </div>
      </section>

      {/* Overview */}
      <section className="home-overview">
        <div className="overview-content">
          <div className="overview-text">
            <span className="section-label">Overview</span>
            <h2>Growing a Greener Future</h2>
            <p>
              This project helps make the Egyptian schools green and beautiful.
              The goal is to use empty areas to plant new things because a clean
              environment helps students feel less stressed and get better
              grades.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="home-team">
        <div className="team-content">
          <div className="team-text">
            <span className="section-label">Meet Our Team</span>
            <h2>Young Planet Leaders Egypt</h2>
            <p>
              Our board decided to act, hoping to restore what we once had. Meet
              YPL Egypt, a team created to bring beauty back.
            </p>
            <a href="/about-us" className="home-button">
              About Us
            </a>
          </div>

          <div className="team-image">
            <img src="/Images/MeetTeam.jpeg" alt="Young Planet Leaders Team" />
          </div>
        </div>
      </section>

      {/* Planting Guide */}
      <section className="home-planting-guide">
        <div className="planting-guide-content">
          <span className="section-label">Grow With Us</span>
          <h2>Tips for Growing Plants</h2>
          <p>
            Discover useful information and practical tips for planting and
            caring for plants. Learn how to create greener spaces and help make
            your environment healthier.
          </p>

          <a href="/planting-guide" className="home-button">
            Explore Planting Tips
          </a>
        </div>
      </section>

      {/* Dashboard */}
      <section className="home-dashboard">
        <div className="dashboard-content">
          <span className="section-label">Dashboard</span>
          <h2>Track Your Team's Progress</h2>
          <p>
            Teams and their earned points are presented here, offering a clear
            and objective overview for accurate comparison and evaluation.
          </p>

          <a href="/dashboard" className="home-button">
            Dashboard
          </a>
        </div>
      </section>

      {showApplicationSuccess && (
        <ApplicationSuccessModal onClose={closeApplicationSuccessModal} />
      )}
    </div>
  );
}
