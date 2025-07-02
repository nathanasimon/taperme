import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            TaperMe
          </Link>
          <nav className="nav">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/medications" className={isActive('/medications')}>Medications</Link>
            <Link to="/how-it-works" className={isActive('/how-it-works')}>How It Works</Link>
            <Link to="/pricing" className={isActive('/pricing')}>Pricing & Insurance</Link>
            <Link to="/providers" className={isActive('/providers')}>Providers</Link>
            <Link to="/faq" className={isActive('/faq')}>FAQ</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Floating Provider CTA - Only on providers page */}
      {location.pathname === '/providers' && (
        <Link to="/providers" className="floating-provider-cta">
          <span>Become a TaperMe Provider</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </Link>
      )}

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>TaperMe</h4>
              <p>Liquid Tapering Made Simple</p>
              <p className="hipaa-badge">HIPAA Compliant</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/medications">Browse Medications</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/providers">For Providers</Link>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/about">About Us</Link>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>support@taperme.com</p>
              <p>1-800-TAPER-ME</p>
              <p>Mon-Fri 9AM-5PM EST</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TaperMe. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout; 