import { useParams, Link, Navigate } from 'react-router-dom';
import { getMedicationBySlug } from '../data/medications';
import './MedicationDetail.css';

function MedicationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const medication = slug ? getMedicationBySlug(slug) : undefined;

  if (!medication) {
    return <Navigate to="/medications" replace />;
  }

  const sampleTaperSchedule = [
    { week: 1, dose: '100%', description: 'Starting dose' },
    { week: 2, dose: '90%', description: '10% reduction' },
    { week: 4, dose: '80%', description: '10% reduction' },
    { week: 6, dose: '70%', description: '10% reduction' },
    { week: 8, dose: '60%', description: '10% reduction' },
    { week: 10, dose: '50%', description: '10% reduction' },
    { week: 12, dose: '40%', description: '10% reduction' },
    { week: 14, dose: '30%', description: '10% reduction' },
    { week: 16, dose: '20%', description: '10% reduction' },
    { week: 18, dose: '10%', description: '10% reduction' },
    { week: 20, dose: '0%', description: 'Discontinuation' }
  ];

  return (
    <div className="medication-detail">
      <div className="container">
        <Link to="/medications" className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m7-7l-7 7 7 7"/>
          </svg>
          Back to All Medications
        </Link>

        <div className="medication-header">
          <div>
            <h1>{medication.genericName}</h1>
            <div className="medication-meta">
              <span className="brand-names">({medication.brandNames.join(', ')})</span>
              <span className="class-badge">{medication.class}</span>
            </div>
          </div>
        </div>

        <div className="medication-content">
          <div className="content-section">
            <h2>What It Is</h2>
            <p>{medication.description}</p>
            <h3>Common Indications:</h3>
            <ul>
              {medication.indications.map((indication, index) => (
                <li key={index}>{indication}</li>
              ))}
            </ul>
          </div>

          <div className="content-section">
            <h2>Why Liquid Taper?</h2>
            <p>{medication.whyLiquidTaper}</p>
          </div>

          <div className="content-section">
            <h2>Product Options</h2>
            <div className="product-options">
              <div className="option-group">
                <h3>Available Concentrations:</h3>
                <div className="option-list">
                  {medication.concentrations.map((conc, index) => (
                    <div key={index} className="option-item">{conc}</div>
                  ))}
                </div>
              </div>
              <div className="option-group">
                <h3>Bottle Sizes:</h3>
                <div className="option-list">
                  {medication.bottleSizes.map((size, index) => (
                    <div key={index} className="option-item">{size}</div>
                  ))}
                </div>
              </div>
              <div className="included-items">
                <h3>Each Order Includes:</h3>
                <ul>
                  <li>Medication in selected concentration</li>
                  <li>Oral syringe for precise measurement</li>
                  <li>Detailed dosing instructions</li>
                  <li>Storage guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Sample Taper Schedule</h2>
            <p className="schedule-disclaimer">
              This is an educational example only. Your healthcare provider will create a personalized taper schedule based on your specific needs.
            </p>
            <div className="taper-schedule">
              <table>
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Dose</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleTaperSchedule.map((row, index) => (
                    <tr key={index}>
                      <td>Week {row.week}</td>
                      <td>{row.dose}</td>
                      <td>{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-section">
            <h2>Pricing & Insurance</h2>
            <div className="pricing-info">
              <div className="price-card">
                <h3>Cash Price</h3>
                <p className="price">Starting at ${medication.basePrice}/month</p>
                <p className="price-note">Price varies by concentration and bottle size</p>
              </div>
              <div className="price-card">
                <h3>Insurance Coverage</h3>
                <p>Many insurance plans cover compounded medications</p>
                <button className="check-coverage-btn">Check Your Coverage</button>
              </div>
            </div>
          </div>

          <div className="order-section">
            <h2>Ready to Order?</h2>
            <p>Upload your prescription and we'll get started on your custom formulation.</p>
            <button className="order-btn">Order Now</button>
            <p className="order-note">Prescription required. Your doctor can send it directly to our pharmacy.</p>
          </div>

          <div className="content-section">
            <h2>Related FAQs</h2>
            <div className="faq-list">
              <details>
                <summary>How long does {medication.genericName} liquid remain stable?</summary>
                <p>Our compounded liquid formulations are tested for stability and typically remain potent for 60-90 days when stored properly.</p>
              </details>
              <details>
                <summary>Can I adjust my taper schedule after starting?</summary>
                <p>Yes, always work with your healthcare provider to adjust your taper based on how you're feeling. Our liquid form makes it easy to make small adjustments.</p>
              </details>
              <details>
                <summary>What if I need a concentration not listed?</summary>
                <p>We can compound custom concentrations based on your doctor's prescription. Contact us to discuss your specific needs.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicationDetail; 