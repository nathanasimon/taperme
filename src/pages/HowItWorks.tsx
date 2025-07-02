import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Select Your Medication',
      description: 'Browse our full catalog of psychiatric medications. Each medication page includes detailed information about available concentrations, pricing, and why liquid tapering might benefit you.',
      details: [
        'Search by generic or brand name',
        'Filter by medication class',
        'Read about liquid tapering benefits for your specific medication'
      ]
    },
    {
      number: 2,
      title: 'Pick Concentration & Quantity',
      description: 'Work with your healthcare provider to determine the right concentration and bottle size for your tapering schedule.',
      details: [
        'Multiple concentration options available',
        'Bottle sizes from 30mL to 240mL',
        'Custom concentrations available upon request'
      ]
    },
    {
      number: 3,
      title: 'We Prep & Ship to You',
      description: 'Our partner pharmacies compound your medication to exact specifications and ship directly to your door.',
      details: [
        'Compounded fresh for each order',
        'Quality tested for potency and stability',
        'Shipped with temperature control when needed',
        'Tracking provided for all shipments'
      ]
    },
    {
      number: 4,
      title: 'Taper with Pre-Measured Syringe',
      description: 'Use the included oral syringe to measure exact doses according to your tapering schedule.',
      details: [
        'Precision oral syringe included',
        'Clear measurement markings',
        'Easy-to-follow dosing instructions',
        'Support available for dosing questions'
      ]
    }
  ];

  return (
    <div className="how-it-works-page">
      <div className="container">
        <div className="page-header">
          <h1>How It Works</h1>
          <p>From prescription to precision tapering in four simple steps</p>
        </div>

        <div className="steps-detailed">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-header">
                <div className="step-number">{step.number}</div>
                <h2>{step.title}</h2>
              </div>
              <p className="step-description">{step.description}</p>
              <ul className="step-details">
                {step.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="process-flowchart">
          <h2>The TaperMe Process</h2>
          <div className="flowchart">
            <div className="flow-row">
              <div className="flow-item">
                <div className="flow-icon">👤</div>
                <h3>You & Your Doctor</h3>
                <p>Decide on tapering plan</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <div className="flow-icon">📝</div>
                <h3>Prescription</h3>
                <p>Doctor sends Rx to TaperMe</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <div className="flow-icon">🏭</div>
                <h3>Compounding</h3>
                <p>We prepare your liquid medication</p>
              </div>
            </div>
            <div className="flow-row">
              <div className="flow-item">
                <div className="flow-icon">📦</div>
                <h3>Shipping</h3>
                <p>Direct to your door</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <div className="flow-icon">💊</div>
                <h3>Tapering</h3>
                <p>Follow your schedule precisely</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <div className="flow-icon">✅</div>
                <h3>Success</h3>
                <p>Complete your taper smoothly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <h2>Why Liquid Tapering Works Better</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>Precision Dosing</h3>
              <p>
                Unlike pill splitting, liquid medications allow for exact dose measurements. 
                Reduce by 0.1mg or even smaller increments—impossible with tablets.
              </p>
            </div>
            <div className="info-card">
              <h3>Smooth Transitions</h3>
              <p>
                Avoid the "stair-step" effect of pill splitting. Liquid tapering enables 
                truly gradual dose reductions that your brain can adjust to more easily.
              </p>
            </div>
            <div className="info-card">
              <h3>Flexibility</h3>
              <p>
                Need to slow down your taper? Speed it up? Make micro-adjustments? 
                Liquid formulations give you complete control over your dosing.
              </p>
            </div>
            <div className="info-card">
              <h3>No More Crumbles</h3>
              <p>
                Eliminate the frustration and inaccuracy of breaking pills. Every dose 
                is consistent, clean, and exactly what your doctor prescribed.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Start Your Liquid Taper?</h2>
          <p>Browse our medication catalog and find your prescription.</p>
          <a href="/medications" className="cta-button">Browse Medications</a>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks; 