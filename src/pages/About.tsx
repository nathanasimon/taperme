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
      title: 'Patient-First',
      description: 'Built by a patient, for patients. We understand your journey because we\'ve lived it.'
    },
    {
      icon: '⚡',
      title: 'Convenience',
      description: 'No more pharmacy runarounds. Get your medication delivered directly to your door.'
    },
    {
      icon: '💰',
      title: 'Accessibility',
      description: 'Fair pricing and insurance advocacy. Quality tapering shouldn\'t break the bank.'
    },
    {
      icon: '🔬',
      title: 'Precision',
      description: 'Exact dosing with liquid formulations. Because accuracy matters in tapering.'
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
            TaperMe exists to fix a broken system. Born from personal frustration with the 
            inaccessibility of liquid formulations, we're building a patient-first solution that 
            prioritizes quality, convenience, and affordability. We believe precise tapering shouldn't 
            require multiple pharmacy visits, weeks of waiting, or premium prices. Our mission is 
            simple: make safe, accurate medication tapering accessible to everyone who needs it.
          </p>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              When I first decided to taper off Lamotrigine, following the advice of specialists 
              in the field, I tried to find liquid formulation. This is the stuff we give to babies: 
              it is exact, and much more accurate than splitting pills. My psychiatrist wrote it out 
              to my normal pharmacy - no stock available. This was shocking to me as lamotrigine is 
              one of the most popular psychiatric drugs.
            </p>
            <p>
              Nevertheless, onto a bigger, more well-stocked pharmacy farther away from me. No stock 
              again. Finally, we realized we were going to have to get this custom-made by a 
              compounding pharmacy. They said it would take a few days. Not only did the whole thing 
              end up costing $84 dollars - insurance did not cover it at all. For less medication, 
              I had to pay more.
            </p>
            <p>
              This is when I knew I had to build a way to do this better. TaperMe was born from this 
              frustration - a patient-first provider focused on making things as high quality and 
              convenient as possible. We believe that safe, precise tapering should be accessible to 
              everyone, not just those who can navigate a complex system or afford premium prices.
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
          <h2>Ready to Taper the Right Way?</h2>
          <p>Don't struggle with pill splitting or pharmacy runarounds. Join thousands who've discovered a better way to taper.</p>
          <a href="/contact" className="cta-button">Start Your Journey</a>
        </div>
      </div>
    </div>
  );
}

export default About; 