import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Get Your Prescription to Us',
      description: 'Your provider can send a new prescription directly to TaperMe, or you can transfer your existing prescription from any pharmacy.',
      details: [
        'Provider sends prescription electronically to TaperMe',
        'Or transfer from CVS, Walgreens, or any pharmacy',
        'We handle all the paperwork',
        'Insurance verification included'
      ]
    },
    {
      number: 2,
      title: 'We Convert to Liquid',
      description: 'Our pharmacists automatically convert your prescription to the appropriate liquid concentration for precise tapering.',
      details: [
        'No guesswork - we know the right concentration',
        'Same active ingredient, just in liquid form',
        'Optimized for gradual dose reductions',
        'All conversions reviewed by licensed pharmacists'
      ]
    },
    {
      number: 3,
      title: 'Fresh Compounding & Delivery',
      description: 'Your medication is compounded fresh and shipped directly to your door with everything you need.',
      details: [
        'Made-to-order for maximum potency',
        'Includes precision oral syringes',
        'Clear instructions and dosing guide',
        'Shipped in 2-3 business days'
      ]
    },
    {
      number: 4,
      title: 'Taper at Your Own Pace',
      description: 'Use the included syringe to measure exact doses. Adjust as slowly as you need - no more pill splitting.',
      details: [
        'Reduce by as little as 0.1mL at a time',
        'No more crushing or cutting pills',
        'Stay on any dose as long as needed',
        'Refill reminders and support included'
      ]
    }
  ];

  return (
    <div className="how-it-works-page">
      <div className="container">
        <div className="page-header">
          <h1>How It Works</h1>
          <p>As easy as your regular pharmacy, but designed for tapering</p>
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
          <h2>Ready to Start Tapering Properly?</h2>
          <p>Transfer your prescription or have your provider send a new one. We'll handle the rest.</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks; 