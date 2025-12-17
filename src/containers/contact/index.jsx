import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import './styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted: ", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="contact-subtitle">Let's work together on your next project</p>
      </div>

      <div className="contact-content">
        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="info-card glass-card fade-in">
            <div className="info-card__icon">
              <FaEnvelope size={30} />
            </div>
            <h3 className="info-card__title">Email</h3>
            <p className="info-card__value">viteshlomada@gmail.com</p>
          </div>

          <div className="info-card glass-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="info-card__icon">
              <FaMapMarkerAlt size={30} />
            </div>
            <h3 className="info-card__title">Location</h3>
            <p className="info-card__value">Proddatur, Andhra Pradesh</p>
          </div>

          <div className="info-card glass-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="info-card__icon">
              <FaPhone size={30} />
            </div>
            <h3 className="info-card__title">Phone</h3>
            <p className="info-card__value">Available on request</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper glass-card fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="contact-form__title">Send Me a Message</h2>

          {submitSuccess && (
            <div className="success-message">
              <FaCheckCircle size={24} />
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                placeholder="Your name"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                placeholder="Tell me about your project..."
                rows="6"
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
