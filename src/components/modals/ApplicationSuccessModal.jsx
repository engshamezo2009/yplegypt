export default function ApplicationSuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="application-success-modal">
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="success-icon">✓</div>

        <h2>Application Submitted!</h2>

        <p>
          Your application has been submitted successfully. We will review your
          application and get back to you soon.
        </p>

        <button
          type="button"
          className="modal-confirm-button"
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
