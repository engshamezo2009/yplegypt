import { useNavigate } from "react-router-dom";

import "../styles/coming-soon.css";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <main className="coming-soon-page">
      <div className="coming-soon-background">
        <span className="coming-soon-glow glow-one"></span>
        <span className="coming-soon-glow glow-two"></span>
        <span className="coming-soon-circle circle-one"></span>
        <span className="coming-soon-circle circle-two"></span>
      </div>

      <section className="coming-soon-content">
        <div className="coming-soon-label">
          <span></span>
          <p>Something exciting is growing</p>
          <span></span>
        </div>

        <h1 className="coming-soon-title">
          COMING
          <span>SOON</span>
        </h1>

        <div className="coming-soon-line"></div>

        <p className="coming-soon-description">
          We're preparing something special for you.
          <br />
          Stay tuned and get ready for what's coming next.
        </p>

        <button
          type="button"
          className="coming-soon-button"
          onClick={() => navigate("/homepage")}
        >
          Back to Home
        </button>
      </section>
    </main>
  );
}
