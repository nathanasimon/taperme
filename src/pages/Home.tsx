import { Link } from 'react-router-dom';
import { medicationsByClass } from '../data/medications';
import { providers } from '../data/providers';
import './Home.css';

function Home() {
  const medicationClasses = [
    { name: 'SSRIs', description: 'Selective Serotonin Reuptake Inhibitors' },
    { name: 'SNRIs', description: 'Serotonin-Norepinephrine Reuptake Inhibitors' },
    { name: 'Benzodiazepines', description: 'Anti-anxiety medications' },
    { name: 'Antipsychotics', description: 'For psychotic disorders' },
    { name: 'Mood Stabilizers', description: 'For bipolar disorder' },
    { name: 'Stimulants', description: 'For ADHD and narcolepsy' },
    { name: 'Others', description: 'Other psychiatric medications' }
  ];

  const testimonials = [
    {
      quote: "TaperMe made it possible for me to finally get off Effexor after years of failed attempts. The liquid form was a game-changer.",
      author: "Sarah M.",
      medication: "Venlafaxine"
    },
    {
      quote: "My doctor recommended TaperMe for my benzo taper. The precision dosing helped me avoid the severe withdrawal I experienced before.",
      author: "Michael R.",
      medication: "Clonazepam"
    },
    {
      quote: "After struggling with Cymbalta withdrawal, TaperMe's liquid formulation finally gave me the control I needed to taper successfully.",
      author: "Jennifer L.",
      medication: "Duloxetine"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Tapering Made Simple</h1>
          <p className="hero-subtitle">
            All your psychiatric meds, pre-measured in liquid form, shipped direct.
          </p>
          <div className="hero-actions">
            <Link to="/medications" className="cta-button">
              Browse Medications
            </Link>
            <Link to="/how-it-works" className="button-outline">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Why Liquid Taper */}
      <section className="why-liquid">
        <div className="container">
          <div className="section-header">
            <h2>Why Liquid Taper?</h2>
            <p>The most precise way to reduce your medication dose</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
                </svg>
              </div>
              <h3>Precise Dose Reductions</h3>
              <p>Make micro-adjustments impossible with pills. Reduce by exact milligrams, not rough approximations.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4 C 4 12, 12 16, 20 20" />
                  <path d="M4 4 L 4 12 L 12 12" strokeDasharray="2 2" opacity="0.3" />
                  <path d="M12 12 L 12 20 L 20 20" strokeDasharray="2 2" opacity="0.3" />
                </svg>
              </div>
              <h3>Smooth Taper Curves</h3>
              <p>Follow hyperbolic or custom taper schedules. No more stair-step reductions from pill splitting.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Avoid Pill-Splitting Inaccuracies</h3>
              <p>Eliminate uneven splits and crumbling pills. Every dose is exactly what your doctor prescribed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Categories */}
      <section className="medication-categories">
        <div className="container">
          <div className="section-header">
            <h2>Medication Categories</h2>
            <p>Browse our complete catalog of liquid formulations</p>
          </div>
          <div className="categories-grid">
            {medicationClasses.map((category) => (
              <Link 
                key={category.name} 
                to="/medications" 
                className="category-card"
                state={{ filter: category.name }}
              >
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="medication-count">
                  {medicationsByClass[category.name as keyof typeof medicationsByClass]?.length || 0} medications
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="how-it-works-teaser">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple steps to start your tapering journey</p>
          </div>
          <div className="steps-preview">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Select Your Medication</h3>
              <p>Choose from our full catalog of psychiatric medications</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Choose Your Formula</h3>
              <p>Pick concentration and bottle size for your taper plan</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>We Ship to You</h3>
              <p>Receive your medication with pre-measured syringe</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Taper with Precision</h3>
              <p>Follow your schedule with exact dosing every time</p>
            </div>
          </div>
          <Link to="/how-it-works" className="learn-more">
            Learn More About Our Process
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Providers Teaser */}
      <section className="providers-teaser">
        <div className="container">
          <div className="section-header">
            <h2>Trusted by Leading Providers</h2>
            <p>Discover the healthcare professionals who trust TaperMe.</p>
          </div>
          <div className="provider-logos">
            {providers.slice(0, 4).map((provider) => (
              <div key={provider.id} className="provider-logo-item">
                <div className="provider-logo-placeholder">
                  <span>{provider.name.charAt(0)}</span>
                </div>
                <span className="provider-name">{provider.name}</span>
              </div>
            ))}
          </div>
          <Link to="/providers" className="see-all-providers">
            See All Providers Who Use TaperMe
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Real experiences from our patients</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.medication} patient</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Taper?</h2>
            <p>Browse our full catalog of medications and find the right solution for you.</p>
            <Link to="/medications" className="cta-button">
              Browse Medications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 