import { medications } from '../data/medications';
import './Pricing.css';

function Pricing() {
  const pricingExamples = [
    { medication: 'Escitalopram', concentration: '1mg/mL', size: '30mL', price: 89 },
    { medication: 'Sertraline', concentration: '10mg/mL', size: '60mL', price: 119 },
    { medication: 'Venlafaxine', concentration: '25mg/5mL', size: '120mL', price: 189 },
    { medication: 'Alprazolam', concentration: '0.5mg/mL', size: '30mL', price: 125 },
    { medication: 'Clonazepam', concentration: '0.1mg/mL', size: '60mL', price: 155 },
    { medication: 'Duloxetine', concentration: '6mg/mL', size: '60mL', price: 149 }
  ];

  const insurancePlans = [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'United Healthcare',
    'Humana',
    'Kaiser Permanente',
    'Anthem',
    'Medicare Part D (select plans)'
  ];

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="page-header">
          <h1>Pricing & Insurance</h1>
          <p>Transparent pricing with insurance and cash-pay options</p>
        </div>

        <div className="pricing-overview">
          <h2>Cost Overview</h2>
          <p>Pricing varies by medication, concentration, and bottle size. Here are some examples:</p>
          
          <div className="pricing-table">
            <table>
              <thead>
                <tr>
                  <th>Medication</th>
                  <th>Concentration</th>
                  <th>Bottle Size</th>
                  <th>Cash Price</th>
                </tr>
              </thead>
              <tbody>
                {pricingExamples.map((example, index) => (
                  <tr key={index}>
                    <td>{example.medication}</td>
                    <td>{example.concentration}</td>
                    <td>{example.size}</td>
                    <td>${example.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="pricing-note">
            * Prices shown are estimates. Final pricing depends on your specific prescription and may vary.
          </p>
        </div>

        <div className="insurance-section">
          <h2>Insurance Coverage</h2>
          <div className="insurance-content">
            <div className="insurance-info">
              <h3>Accepted Insurance Plans</h3>
              <p>We work with most major insurance providers:</p>
              <ul className="insurance-list">
                {insurancePlans.map((plan, index) => (
                  <li key={index}>{plan}</li>
                ))}
              </ul>
              <p className="insurance-note">
                Coverage varies by plan. Compounded medications are often covered when 
                medically necessary for tapering.
              </p>
            </div>
            
            <div className="coverage-check">
              <h3>Check Your Coverage</h3>
              <p>Find out your exact copay and coverage details before ordering.</p>
              <form className="coverage-form">
                <input type="text" placeholder="Insurance Provider" />
                <input type="text" placeholder="Member ID" />
                <input type="text" placeholder="Group Number" />
                <button type="submit">Check Coverage</button>
              </form>
              <p className="form-note">
                Or call us at 1-800-TAPER-ME and we'll verify your benefits.
              </p>
            </div>
          </div>
        </div>

        <div className="cash-pay-section">
          <h2>Cash-Pay Options</h2>
          <div className="cash-pay-grid">
            <div className="cash-pay-card">
              <h3>Direct Pay Discount</h3>
              <p>Save 10% when you pay cash at the time of order.</p>
              <ul>
                <li>No insurance hassles</li>
                <li>Immediate processing</li>
                <li>Automatic discount applied</li>
              </ul>
            </div>
            <div className="cash-pay-card">
              <h3>Subscription Savings</h3>
              <p>Save 15% with monthly auto-refills for your taper.</p>
              <ul>
                <li>Never run out</li>
                <li>Cancel anytime</li>
                <li>Free shipping included</li>
              </ul>
            </div>
            <div className="cash-pay-card">
              <h3>Financial Assistance</h3>
              <p>Need-based discounts available for qualifying patients.</p>
              <ul>
                <li>Income-based pricing</li>
                <li>Payment plans available</li>
                <li>Apply online or by phone</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pricing-faq">
          <h2>Pricing FAQs</h2>
          <div className="faq-list">
            <details>
              <summary>Why is liquid medication more expensive than pills?</summary>
              <p>
                Compounded liquid medications require specialized preparation, quality testing, 
                and custom packaging. The precision and convenience often make it worthwhile 
                for successful tapering.
              </p>
            </details>
            <details>
              <summary>Does insurance cover compounded medications?</summary>
              <p>
                Many insurance plans cover compounded medications when medically necessary. 
                Coverage depends on your specific plan and diagnosis. We'll help verify your benefits.
              </p>
            </details>
            <details>
              <summary>Can I use my FSA/HSA?</summary>
              <p>
                Yes! TaperMe medications are FSA/HSA eligible. We provide detailed receipts 
                for reimbursement.
              </p>
            </details>
            <details>
              <summary>Do you offer payment plans?</summary>
              <p>
                Yes, we offer flexible payment plans for orders over $200. Contact us to 
                discuss options.
              </p>
            </details>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Browse our medications or contact us to discuss pricing for your specific needs.</p>
          <div className="cta-buttons">
            <a href="/medications" className="cta-button primary">Browse Medications</a>
            <a href="/contact" className="cta-button secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing; 