import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext.jsx";

import login from "../api/login.js";

import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const email = formData.email.trim();
    const password = formData.password;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
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
      const response = await login({
        email: formData.email.trim(),
        password: formData.password,
      });

      setUser(response.member);

      navigate("/homepage");
    } catch (error) {
      switch (error.error) {
        case "INVALID_CREDENTIALS":
          setErrors({
            submit: "Incorrect email or password.",
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
    <div className="login-page">
      <div className="login-container">
        <button
          type="button"
          className="login-back-button"
          onClick={() => navigate("/homepage")}
        >
          ← Back to Home
        </button>

        <div className="login-header">
          <span className="login-label">YPL Egypt</span>
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your account.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-field">
            <label htmlFor="login-email">Email</label>

            <input
              id="login-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "login-email-error" : undefined}
            />

            {errors.email && (
              <span id="login-email-error" className="login-field-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Password</label>

            <div className="login-password-wrapper">
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? "login-password-error" : undefined
                }
              />

              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <span id="login-password-error" className="login-field-error">
                {errors.password}
              </span>
            )}
          </div>

          {errors.submit && (
            <div className="login-submit-error" role="alert">
              {errors.submit}
            </div>
          )}

          <button
            type="submit"
            className="login-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="login-join">
          <span>Don't have an account?</span>

          <button
            type="button"
            className="login-join-button"
            onClick={() => navigate("/join-us")}
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
