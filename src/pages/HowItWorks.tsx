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