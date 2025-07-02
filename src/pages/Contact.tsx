import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We\'ll respond within 24 hours.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>We're here to help with your tapering journey</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type *</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="patient">Patient Question</option>
                  <option value="provider">Provider Inquiry</option>
                  <option value="insurance">Insurance/Billing</option>
                  <option value="prescription">Prescription Status</option>
                  <option value="technical">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p>General Inquiries: <a href="mailto:support@taperme.com">support@taperme.com</a></p>
              <p>Provider Support: <a href="mailto:providers@taperme.com">providers@taperme.com</a></p>
              <p>Prescription Questions: <a href="mailto:rx@taperme.com">rx@taperme.com</a></p>
            </div>

            <div className="contact-method">
              <h3>📞 Phone</h3>
              <p>Main: 1-800-TAPER-ME (1-800-827-3763)</p>
              <p>Hours: Monday-Friday 9AM-5PM EST</p>
              <p>24/7 Emergency: 1-800-TAPER-911</p>
            </div>

            <div className="contact-method">
              <h3>📍 Mailing Address</h3>
              <p>TaperMe</p>
              <p>123 Precision Way</p>
              <p>Boston, MA 02108</p>
            </div>

            <div className="contact-method">
              <h3>🚚 Pharmacy Partners</h3>
              <p>For prescription verification and pharmacy inquiries:</p>
              <p>Fax: 1-800-TAPER-FAX</p>
              <p>Secure Portal: pharmacy.taperme.com</p>
            </div>
          </div>
        </div>

        <div className="urgent-section">
          <h2>Need Urgent Help?</h2>
          <div className="urgent-grid">
            <div className="urgent-card">
              <h3>Medication Emergency</h3>
              <p>If you're experiencing severe withdrawal symptoms or medical emergency, call 911 immediately.</p>
            </div>
            <div className="urgent-card">
              <h3>Urgent Refill</h3>
              <p>Running low on medication? Call our urgent line at 1-800-TAPER-911 for expedited processing.</p>
            </div>
            <div className="urgent-card">
              <h3>Provider Hotline</h3>
              <p>Healthcare providers can reach our clinical team directly at 1-800-TAPER-DOC.</p>
            </div>
          </div>
        </div>

        <div className="response-time">
          <h2>Response Times</h2>
          <div className="response-grid">
            <div className="response-card">
              <h3>Email Inquiries</h3>
              <p>24-48 hours</p>
            </div>
            <div className="response-card">
              <h3>Phone Calls</h3>
              <p>Immediate during business hours</p>
            </div>
            <div className="response-card">
              <h3>Prescription Processing</h3>
              <p>1-2 business days</p>
            </div>
            <div className="response-card">
              <h3>Urgent Requests</h3>
              <p>Same day response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 