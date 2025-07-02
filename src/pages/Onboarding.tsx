import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Onboarding.css';

type OnboardingStep = 'welcome' | 'insurance' | 'prescriptions' | 'account';

function Onboarding() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [hasInsurance, setHasInsurance] = useState<boolean | null>(null);
  const [prescriptionType, setPrescriptionType] = useState<'existing' | 'new' | null>(null);
  const navigate = useNavigate();

  const renderStepIndicator = () => {
    const steps = ['welcome', 'insurance', 'prescriptions', 'account'];
    const currentIndex = steps.indexOf(currentStep);
    
    return (
      <div className="step-indicator">
        {steps.map((step, index) => (
          <div 
            key={step} 
            className={`step ${index <= currentIndex ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
          >
            <span className="step-number">{index + 1}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderWelcomeStep = () => (
    <div className="onboarding-step welcome-step">
      <h1>Welcome to TaperMe</h1>
      <p className="step-subtitle">Your journey to safely taper psychiatric medications starts here</p>
      
      <div className="benefits-list">
        <div className="benefit-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3 8-8" />
          </svg>
          <span>Precise liquid formulations for accurate tapering</span>
        </div>
        <div className="benefit-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3 8-8" />
          </svg>
          <span>Direct shipping to your door</span>
        </div>
        <div className="benefit-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3 8-8" />
          </svg>
          <span>Covered by most insurance plans</span>
        </div>
        <div className="benefit-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3 8-8" />
          </svg>
          <span>Expert pharmacist support 24/7</span>
        </div>
      </div>

      <button 
        className="primary-button"
        onClick={() => setCurrentStep('insurance')}
      >
        Continue
      </button>
      
      <p className="privacy-note">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
          <path d="M12 2L4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-5z" />
        </svg>
        Your health information is always protected
      </p>
    </div>
  );

  const renderInsuranceStep = () => (
    <div className="onboarding-step insurance-step">
      <h2>Do you have insurance?</h2>
      <p className="step-subtitle">We accept most major insurance plans</p>
      
      <div className="insurance-options">
        <button 
          className="insurance-option"
          onClick={() => {
            setHasInsurance(true);
            setCurrentStep('prescriptions');
          }}
        >
          <div className="option-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 8h10M7 12h6" />
            </svg>
          </div>
          <h3>Yes, I have insurance</h3>
          <p>We'll verify your coverage and show you your copay</p>
        </button>
        
        <button 
          className="insurance-option"
          onClick={() => {
            setHasInsurance(false);
            setCurrentStep('prescriptions');
          }}
        >
          <div className="option-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3>No insurance</h3>
          <p>No problem! We offer competitive cash prices</p>
        </button>
      </div>
      
      <button 
        className="back-button"
        onClick={() => setCurrentStep('welcome')}
      >
        Back
      </button>
    </div>
  );

  const renderPrescriptionsStep = () => (
    <div className="onboarding-step prescriptions-step">
      <h2>How would you like to start?</h2>
      <p className="step-subtitle">Choose the option that best fits your needs</p>
      
      <div className="prescription-options">
        <button 
          className="prescription-option"
          onClick={() => {
            setPrescriptionType('existing');
            setCurrentStep('account');
          }}
        >
          <div className="option-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h3>I have a prescription</h3>
          <p>Transfer an existing prescription or upload a new one</p>
        </button>
        
        <button 
          className="prescription-option"
          onClick={() => {
            setPrescriptionType('new');
            setCurrentStep('account');
          }}
        >
          <div className="option-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h3>I need a prescription</h3>
          <p>Connect with a provider who specializes in tapering</p>
        </button>
      </div>
      
      <button 
        className="back-button"
        onClick={() => setCurrentStep('insurance')}
      >
        Back
      </button>
    </div>
  );

  const renderAccountStep = () => (
    <div className="onboarding-step account-step">
      <h2>Create your account</h2>
      <p className="step-subtitle">Securely save your information for easy refills</p>
      
      <form className="account-form" onSubmit={(e) => {
        e.preventDefault();
        // Handle form submission
        navigate('/medications');
      }}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            required 
            placeholder="your@email.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            required 
            placeholder="Create a password"
          />
          <span className="input-hint">At least 8 characters</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            placeholder="(555) 123-4567"
          />
          <span className="input-hint">For prescription updates</span>
        </div>
        
        <div className="form-checkbox">
          <input 
            type="checkbox" 
            id="terms" 
            required 
          />
          <label htmlFor="terms">
            I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
          </label>
        </div>
        
        <button type="submit" className="primary-button">
          Create Account & Continue
        </button>
      </form>
      
      <div className="existing-account">
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
      
      <button 
        className="back-button"
        onClick={() => setCurrentStep('prescriptions')}
      >
        Back
      </button>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return renderWelcomeStep();
      case 'insurance':
        return renderInsuranceStep();
      case 'prescriptions':
        return renderPrescriptionsStep();
      case 'account':
        return renderAccountStep();
      default:
        return renderWelcomeStep();
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <Link to="/" className="logo">TaperMe</Link>
        {currentStep !== 'welcome' && renderStepIndicator()}
      </div>
      
      <div className="onboarding-content">
        {renderCurrentStep()}
      </div>
    </div>
  );
}

export default Onboarding; 