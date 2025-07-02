import { Link, useLocation } from 'react-router-dom';
import { medicationsByClass } from '../data/medications';
import type { MedicationClass } from '../data/medications';
import './Medications.css';

function Medications() {
  const location = useLocation();
  const filterClass = location.state?.filter as MedicationClass | undefined;

  const classes: MedicationClass[] = [
    'SSRIs',
    'SNRIs',
    'Benzodiazepines',
    'Antipsychotics',
    'Mood Stabilizers',
    'Stimulants',
    'Others'
  ];

  return (
    <div className="medications-page">
      <div className="container">
        <div className="page-header">
          <h1>Medications</h1>
          <p>Choose your medication class to get started.</p>
        </div>

        <div className="medications-table">
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Generic Name</th>
                <th>Brand Name(s)</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((className) => {
                const classMeds = medicationsByClass[className] || [];
                return classMeds.map((med, index) => (
                  <tr key={med.id} className={filterClass === className ? 'highlighted' : ''}>
                    {index === 0 && (
                      <td rowSpan={classMeds.length} className="class-cell">
                        <div className="class-name">{className}</div>
                      </td>
                    )}
                    <td className="generic-name">{med.genericName}</td>
                    <td className="brand-names">{med.brandNames.join(', ')}</td>
                    <td className="details-cell">
                      <Link to={`/medications/${med.slug}`} className="details-link">
                        View Details →
                      </Link>
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>

        <div className="medications-info">
          <h2>All Medications Available in Liquid Form</h2>
          <p>
            Every medication in our catalog is carefully compounded into liquid form by our 
            partner pharmacies. Each prescription includes:
          </p>
          <ul>
            <li>Custom concentration based on your taper plan</li>
            <li>Pre-measured oral syringe for accurate dosing</li>
            <li>Clear labeling with dosing instructions</li>
            <li>Stability testing to ensure potency</li>
          </ul>
          
          <div className="prescription-notice">
            <strong>Note:</strong> All medications require a valid prescription from your healthcare provider.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medications; 