import { providers } from '../data/providers';
import './Providers.css';

function Providers() {
  return (
    <div className="providers-page">
      <div className="container">
        <div className="page-header">
          <h1>Providers Who Use TaperMe</h1>
          <p>Trusted by clinicians and clinics nationwide</p>
        </div>

        <div className="providers-intro">
          <p>
            Leading psychiatric practices across the country rely on TaperMe to help their 
            patients successfully discontinue medications. Our precision liquid formulations 
            have transformed the tapering process for both providers and patients.
          </p>
        </div>

        <div className="provider-logos-section">
          <h2>Our Partner Practices</h2>
          <div className="provider-grid">
            {providers.map((provider) => (
              <div key={provider.id} className="provider-card">
                <div className="provider-logo">
                  <div className="logo-placeholder">
                    {provider.name.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <h3>{provider.name}</h3>
                {provider.caseStudySlug && (
                  <a href="#" className="case-study-link">View Case Study →</a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h2>What Providers Are Saying</h2>
          <div className="testimonials-grid">
            {providers.map((provider) => (
              <div key={provider.id} className="testimonial-card">
                <blockquote>"{provider.testimonial}"</blockquote>
                <div className="testimonial-author">
                  <strong>{provider.author}</strong>
                  <span>{provider.role}</span>
                  <span className="provider-name">{provider.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-section">
          <h2>Why Providers Choose TaperMe</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Precision Dosing</h3>
              <p>
                Enable exact dose reductions impossible with pill splitting. 
                Create truly personalized taper schedules for each patient.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h3>Better Outcomes</h3>
              <p>
                Studies show liquid tapering reduces withdrawal symptoms and 
                improves successful discontinuation rates by up to 70%.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Workflow Integration</h3>
              <p>
                Easy prescription submission, automated refills, and direct 
                shipping to patients streamline your practice workflow.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Patient Satisfaction</h3>
              <p>
                Patients report higher satisfaction with liquid tapering due to 
                reduced side effects and greater control over their taper.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Educational Support</h3>
              <p>
                Access to tapering protocols, patient education materials, and 
                ongoing clinical support from our pharmacy team.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Quality Assurance</h3>
              <p>
                All medications are compounded in certified pharmacies with 
                rigorous quality control and stability testing.
              </p>
            </div>
          </div>
        </div>

        <div className="partner-cta">
          <div className="cta-content">
            <h2>Become a TaperMe Provider</h2>
            <p>
              Join the growing network of providers offering precision liquid tapering 
              to their patients. Get started with our provider portal and educational resources.
            </p>
            <div className="cta-features">
              <div className="feature">
                <strong>✓ No cost to join</strong>
              </div>
              <div className="feature">
                <strong>✓ Educational webinars</strong>
              </div>
              <div className="feature">
                <strong>✓ Marketing materials</strong>
              </div>
              <div className="feature">
                <strong>✓ Dedicated support</strong>
              </div>
            </div>
            <button className="partner-button">Join as a Partner</button>
          </div>
        </div>

        <div className="provider-resources">
          <h2>Provider Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Tapering Guidelines</h3>
              <p>Evidence-based protocols for common psychiatric medications</p>
              <a href="#">Download PDF →</a>
            </div>
            <div className="resource-card">
              <h3>Patient Handouts</h3>
              <p>Educational materials to share with your patients</p>
              <a href="#">Access Materials →</a>
            </div>
            <div className="resource-card">
              <h3>Webinar Series</h3>
              <p>Monthly educational sessions on tapering best practices</p>
              <a href="#">View Schedule →</a>
            </div>
            <div className="resource-card">
              <h3>Clinical Support</h3>
              <p>Direct line to our pharmacy team for dosing questions</p>
              <a href="#">Contact Support →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Providers; 