import { useState } from "react";
export default function ClaimPlotModal({ plot, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plant, setPlant] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // API request will be added later.
  };

  return (
    <div className="modal-overlay">
      <div className="modal claim-plot-modal-container">
        <header className="modal-header claim-plot-modal-header">
          <div className="modal-header-icon" aria-hidden="true">
            +
          </div>

          <div className="modal-header-content">
            <h2 className="modal-title">Claim Plot #{plot.id}</h2>

            <p className="modal-header-subtitle">
              Choose your plant and register your plot
            </p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="modal-field">
              <label htmlFor="claim-name">Full Name</label>

              <input
                id="claim-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="modal-field">
              <label htmlFor="claim-phone">Personal Phone Number</label>

              <input
                id="claim-phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter your personal phone number"
                required
              />
            </div>

            <div className="modal-field">
              <label htmlFor="claim-email">Personal Email</label>

              <input
                id="claim-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your personal email"
                required
              />
            </div>

            <div className="modal-field">
              <label htmlFor="claim-plant">Plant Type</label>

              <select
                id="claim-plant"
                value={plant}
                onChange={(event) => setPlant(event.target.value)}
                required
              >
                <option value="" disabled>
                  Select a plant
                </option>

                <option value="sunflower">Sunflower</option>

                <option value="flower">Flower</option>

                <option value="mint">Mint</option>
              </select>
            </div>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="modal-button modal-button-secondary"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="modal-button claim-plot-submit-button"
            >
              Claim Plot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
