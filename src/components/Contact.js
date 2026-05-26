import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  // GOOGLE WEB APP URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzraAZ25ZY1JPWSIyo_9aFK7q7aTG-M0jZE9FS_1ZN2IovcEbdAWxVah5Wott9wbND6qA/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Sent data to Google Sheets without assigning to an unused variable
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses browser CORS policy restrictions safely for Google web apps
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // If the code makes it here without jumping to the catch block, it worked!
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset the success text back to standard form after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="contact-center-box">
        <p className="hero-mono">03. What's Next?</p>
        <h2 className="hero-subtitle" style={{color: '#fff'}}>Get In Touch</h2>
        <p className="hero-desc">
          My inbox is always open. Fill out the form below to send a message directly to my database tracker, and I'll get back to you soon!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              required
              disabled={status === 'submitting'}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              required
              disabled={status === 'submitting'}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              required
              rows="4"
              disabled={status === 'submitting'}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input"
              style={{resize: 'none'}}
              placeholder="Say hello..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="form-submit-btn"
            disabled={status === 'submitting'}
            style={{
              opacity: status === 'submitting' ? 0.6 : 1,
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
            }}
          >
            {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
          </button>

          {/* User Interface Notification Messages */}
          {status === 'success' && (
            <p style={{ color: '#22d3ee', marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', textAlign: 'center' }}>
              ✓ Message sent successfully directly to my records!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ef4444', marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.85rem', textAlign: 'center' }}>
              ✕ Failed to send. Please check your internet connection and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}