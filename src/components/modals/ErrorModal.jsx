const errorMessages = {
  DATA_NOT_FOUND: "The requested data could not be found.",
  DATA_ALREADY_EXISTS: "This data already exists.",
  VALIDATION_ERROR: "Please check the provided information and try again.",
  INVALID_FILE_TYPE: "The selected file type is not supported.",
  INVALID_TOKEN: "Your session is invalid. Please log in again.",
  TOKEN_EXPIRED: "Your session has expired. Please log in again.",
  INVALID_CREDENTIALS: "The email or password is incorrect.",
  NETWORK_ERROR:
    "Unable to connect to the server. Please check your internet connection.",
  SERVER_ERROR: "Something went wrong on the server. Please try again later.",
};

export default function ErrorModal({ error, onClose }) {
  const message =
    errorMessages[error] || "Something went wrong. Please try again.";

  return (
    <div className="modal-overlay">
      <div className="modal error-modal-container">
        <header className="modal-header">
          <div className="modal-header-icon" aria-hidden="true">
            !
          </div>

          <div className="modal-header-content">
            <h2 className="modal-title">Something went wrong</h2>

            <p className="modal-header-subtitle">
              We couldn't complete your request
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

        <div className="modal-body">
          <p className="modal-description">{message}</p>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="modal-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
