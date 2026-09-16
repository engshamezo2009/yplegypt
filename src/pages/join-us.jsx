import { useState } from "react";
import { useNavigate } from "react-router-dom";
import createApplication from "../api/createApplication.js";
import "../styles/join-us.css";
export default function JoinUs() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    question: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
      submit: "",
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const password = formData.password;
    const question = formData.question.trim();
    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s\-()]{8,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!question) {
      newErrors.question = "This field is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    try {
      await createApplication({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        password: formData.password,
        question: formData.question.trim(),
      });

      navigate("/login");
    } catch (error) {
      switch (error.error) {
        case "DATA_ALREADY_EXISTS":
          setErrors({
            email: "An account with this email already exists.",
          });
          break;

        case "VALIDATION_ERROR":
          setErrors({
            submit: "Please check your information and try again.",
          });
          break;

        case "NETWORK_ERROR":
          setErrors({
            submit:
              "Unable to connect to the server. Please check your connection and try again.",
          });
          break;

        case "SERVER_ERROR":
        default:
          setErrors({
            submit: "Something went wrong. Please try again later.",
          });
          break;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="join-us-page">
      <div className="join-us-container">
        {/* Back to Home */}
        <button
          type="button"
          className="join-us-back-button"
          onClick={() => navigate("/homepage")}
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="join-us-header">
          <span className="join-us-label">YPL Egypt</span>
          <h1>Join Us</h1>
          <p>Create your account and become part of the YPL Egypt community.</p>
        </div>

        {/* Form */}
        <form className="join-us-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="join-us-field">
            <label htmlFor="join-us-name">Name</label>
            <input
              id="join-us-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "join-us-name-error" : undefined}
            />

            {errors.name && (
              <span id="join-us-name-error" className="join-us-field-error">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="join-us-field">
            <label htmlFor="join-us-email">Email</label>
            <input
              id="join-us-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "join-us-email-error" : undefined
              }
            />

            {errors.email && (
              <span id="join-us-email-error" className="join-us-field-error">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="join-us-field">
            <label htmlFor="join-us-phone">Phone Number</label>
            <input
              id="join-us-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "join-us-phone-error" : undefined
              }
            />

            {errors.phone && (
              <span id="join-us-phone-error" className="join-us-field-error">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="join-us-field">
            <label htmlFor="join-us-password">Password</label>

            <div className="join-us-password-wrapper">
              <input
                id="join-us-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                autoComplete="new-password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? "join-us-password-error" : undefined
                }
              />

              <button
                type="button"
                className="join-us-password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <span id="join-us-password-error" className="join-us-field-error">
                {errors.password}
              </span>
            )}
          </div>

          {/* Question */}
          <div className="join-us-field">
            <label htmlFor="join-us-question">Question</label>

            <textarea
              id="join-us-question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder="Question will be added here"
              rows={5}
              autoComplete="off"
              aria-invalid={Boolean(errors.question)}
              aria-describedby={
                errors.question ? "join-us-question-error" : undefined
              }
            />

            {errors.question && (
              <span id="join-us-question-error" className="join-us-field-error">
                {errors.question}
              </span>
            )}
          </div>

          {/* General Error */}
          {errors.submit && (
            <div className="join-us-submit-error" role="alert">
              {errors.submit}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="join-us-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login */}
        <div className="join-us-login">
          <span>Already have an account?</span>

          <button
            type="button"
            className="join-us-login-button"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
