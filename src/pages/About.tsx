import './About.css';

function About() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      bio: 'Board-certified psychiatrist with 20 years of experience in medication management and tapering protocols.'
    },
    {
      name: 'Dr. James Chen',
      role: 'Chief Pharmacy Officer',
      bio: 'Licensed pharmacist specializing in compounding and pharmaceutical innovation for mental health.'
    },
    {
      name: 'Maria Rodriguez',
      role: 'CEO',
      bio: 'Healthcare entrepreneur passionate about improving access to precision medication management.'
    },
    {
      name: 'Dr. Emily Thompson',
      role: 'Clinical Director',
      bio: 'Clinical psychopharmacologist focused on minimizing withdrawal and discontinuation syndromes.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Precision',
      description: 'Every dose matters. We believe in exact measurements for optimal outcomes.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Working hand-in-hand with providers and patients for successful tapering.'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Leveraging compounding technology to solve medication discontinuation challenges.'
    },
    {
      icon: '❤️',
      title: 'Compassion',
      description: 'Understanding the difficulty of tapering and supporting every step of the journey.'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Us</h1>
          <p>Revolutionizing psychiatric medication tapering through precision compounding</p>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            TaperMe exists to eliminate the suffering caused by improper medication discontinuation. 
            We believe everyone deserves access to precise, gradual tapering that respects the brain's 
            need for slow adjustment. Through liquid compounding and expert support, we're making 
            successful tapering possible for patients worldwide.
          </p>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              TaperMe was founded in 2020 by a team of healthcare professionals who witnessed 
              firsthand the challenges of medication discontinuation. Too many patients were 
              suffering from withdrawal symptoms simply because they couldn't reduce their doses 
              gradually enough with standard tablets.
            </p>
            <p>
              We partnered with leading compounding pharmacies to develop a solution: precision 
              liquid formulations that allow for micro-tapering. What started as a small pilot 
              program has grown into a nationwide service helping thousands of patients successfully 
              discontinue their medications.
            </p>
            <p>
              Today, TaperMe works with over 500 healthcare providers across the country, offering 
              liquid formulations for the most commonly prescribed psychiatric medications. Our 
              commitment to quality, precision, and patient support continues to drive everything we do.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-photo">
                  <div className="photo-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="partners-section">
          <h2>Our Pharmacy Partners</h2>
          <p>
            We work exclusively with PCAB-accredited compounding pharmacies that meet the highest 
            standards for quality and safety. Our partners are licensed in all 50 states and maintain:
          </p>
          <ul className="standards-list">
            <li>USP 797 and 795 compliance</li>
            <li>Regular third-party quality audits</li>
            <li>Potency and sterility testing</li>
            <li>Beyond-use date validation</li>
            <li>Full traceability of all ingredients</li>
          </ul>
        </div>

        <div className="quality-section">
          <h2>Quality & Safety</h2>
          <div className="quality-grid">
            <div className="quality-card">
              <h3>Rigorous Testing</h3>
              <p>Every batch is tested for potency, purity, and stability before shipping.</p>
            </div>
            <div className="quality-card">
              <h3>HIPAA Compliant</h3>
              <p>Your health information is protected with bank-level encryption and security.</p>
            </div>
            <div className="quality-card">
              <h3>Licensed Pharmacists</h3>
              <p>All prescriptions are reviewed by licensed pharmacists before compounding.</p>
            </div>
            <div className="quality-card">
              <h3>Continuous Monitoring</h3>
              <p>We track outcomes and gather feedback to continuously improve our formulations.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Join Us in Transforming Tapering</h2>
          <p>Whether you're a patient, provider, or pharmacy interested in partnering, we'd love to hear from you.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}

export default About; 