export default function PlotDetailsModal({ plot, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal plot-details-modal-container">
        <header className="modal-header">
          <div className="modal-header-icon" aria-hidden="true">
            {plot.id}
          </div>

          <div className="modal-header-content">
            <h2 className="modal-title">Plot #{plot.id}</h2>

            <p className="modal-header-subtitle">Planting plot details</p>
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

        <div className="modal-body">
          <div className="plot-details-status">
            <span className="plot-details-status-dot" />

            <span>Occupied</span>
          </div>

          <div className="plot-details-section">
            <h3 className="plot-details-section-title">Owner</h3>

            <div className="plot-details-info">
              <div className="plot-details-row">
                <span className="plot-details-label">Name</span>

                <span className="plot-details-value">
                  {plot.owner?.name || "Not available"}
                </span>
              </div>

              <div className="plot-details-row">
                <span className="plot-details-label">Phone</span>

                <span className="plot-details-value">
                  {plot.owner?.phone || "Not available"}
                </span>
              </div>

              <div className="plot-details-row">
                <span className="plot-details-label">Email</span>

                <span className="plot-details-value">
                  {plot.owner?.email || "Not available"}
                </span>
              </div>
            </div>
          </div>

          <div className="plot-details-section">
            <h3 className="plot-details-section-title">Plant</h3>

            <div className="plot-details-plant">
              {plot.plant || "Not available"}
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button type="button" className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
