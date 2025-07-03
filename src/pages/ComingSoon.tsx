import React from 'react';
import './ComingSoon.css';

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">TaperMe</h1>
        <h2 className="coming-soon-subtitle">Coming Soon</h2>
        <p className="coming-soon-description">
          We're working hard to bring you a revolutionary platform for safe medication tapering. 
          Our team is putting the finishing touches on an experience that will transform how you 
          manage your medication journey.
        </p>
        <div className="coming-soon-features">
          <div className="feature">
            <span className="feature-icon">💊</span>
            <span className="feature-text">Personalized Tapering Plans</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👨‍⚕️</span>
            <span className="feature-text">Expert Provider Network</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <span className="feature-text">Progress Tracking</span>
          </div>
        </div>
        <div className="coming-soon-cta">
          <p className="cta-text">Be the first to know when we launch!</p>
          <form className="email-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input"
              required
            />
            <button type="submit" className="notify-button">Notify Me</button>
          </form>
        </div>
        <div className="coming-soon-footer">
          <p className="footer-text">© 2024 TaperMe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 