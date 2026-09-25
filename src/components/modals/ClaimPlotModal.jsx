import { useState } from "react";

import claimField from "../../api/claimField.js";

export default function ClaimPlotModal({ plot, onClose, onClaimSuccess }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plant, setPlant] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "VALIDATION_ERROR":
        return "Please check all fields and make sure the information is correct.";

      case "CONTACT_ALREADY_USED":
        return "This phone number or email is already being used to claim a plot.";

      case "FIELD_OCCUPIED":
        return "This plot has already been claimed by someone else.";

      case "DATA_NOT_FOUND":
        return "This plot could not be found. Please refresh the page and try again.";

      case "NETWORK_ERROR":
        return "Could not connect to the server. Please check your internet connection and try again.";

      case "SERVER_ERROR":
      default:
        return "Something went wrong while claiming this plot. Please try again.";
    }
  };

  const clearError = () => {
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await claimField({
        id: plot.id,
        name,
        phone,
        email,
        plant,
      });

      onClaimSuccess(response.field);
    } catch (error) {
      setError(error.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal claim-plot-modal-container">
        <header className="modal-header claim-plot-modal-header">
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
                onChange={(event) => {
                  setName(event.target.value);
                  clearError();
                }}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="modal-field">
              <label htmlFor="claim-phone">Personal Phone Number</label>

              <input
                id="claim-phone"
                type="tel"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  clearError();
                }}
                placeholder="Enter your personal phone number"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="modal-field">
              <label htmlFor="claim-email">Personal Email</label>

              <input
                id="claim-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearError();
                }}
                placeholder="Enter your personal email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="modal-field">
              <label htmlFor="claim-plant">Plant Type</label>

              <select
                id="claim-plant"
                value={plant}
                onChange={(event) => {
                  setPlant(event.target.value);
                  clearError();
                }}
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  Select a plant
                </option>

                <option value="sunflower">Sunflower</option>

                <option value="flower">Flower</option>

                <option value="mint">Mint</option>
              </select>
            </div>

            {error && (
              <div className="claim-plot-error">
                <div className="claim-plot-error-icon">!</div>

                <div className="claim-plot-error-content">
                  <strong>Unable to claim plot</strong>

                  <p>{getErrorMessage(error)}</p>
                </div>

                <button
                  type="button"
                  className="claim-plot-error-close"
                  onClick={() => setError(null)}
                  aria-label="Dismiss error"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="modal-button modal-button-secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="modal-button claim-plot-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Claiming..." : "Claim Plot"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
