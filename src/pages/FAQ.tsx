import './FAQ.css';

function FAQ() {
  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'Do you require a prescription?',
          a: 'Yes, all medications require a valid prescription from a licensed healthcare provider. Your doctor can send the prescription directly to our pharmacy, or you can upload it during the ordering process.'
        },
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 3-5 business days. We also offer expedited shipping options for 1-2 day delivery. All medications are shipped with appropriate temperature control when needed.'
        },
        {
          q: 'Can you handle controlled substances?',
          a: 'Yes, we can compound certain controlled substances including benzodiazepines and stimulants. These require additional verification and may have shipping restrictions based on your state.'
        },
        {
          q: 'What if I need a custom taper schedule?',
          a: 'We work with your healthcare provider to create custom concentrations and schedules. Our pharmacy team can compound virtually any concentration needed for your specific taper plan.'
        }
      ]
    },
    {
      category: 'Ordering & Pricing',
      questions: [
        {
          q: 'How do I place an order?',
          a: 'First, browse our medication catalog and select your medication. Then upload your prescription or have your doctor send it to us. Once verified, we\'ll compound your medication and ship it directly to you.'
        },
        {
          q: 'Do you accept insurance?',
          a: 'Yes, we work with most major insurance plans. Coverage for compounded medications varies by plan. We can verify your benefits before you order.'
        },
        {
          q: 'Can I use my FSA or HSA?',
          a: 'Yes, TaperMe medications are FSA/HSA eligible. We provide detailed receipts that include all necessary information for reimbursement.'
        },
        {
          q: 'Do you offer payment plans?',
          a: 'Yes, we offer flexible payment plans for orders over $200. Contact our support team to discuss available options.'
        }
      ]
    },
    {
      category: 'Medication & Safety',
      questions: [
        {
          q: 'How long does the liquid medication remain stable?',
          a: 'Our compounded liquid medications are tested for stability and typically remain potent for 60-90 days when stored properly. Each bottle includes specific storage instructions and expiration dating.'
        },
        {
          q: 'What\'s included with my order?',
          a: 'Each order includes your liquid medication, a precision oral syringe for accurate dosing, detailed instructions, and storage guidelines. Everything you need for successful tapering.'
        },
        {
          q: 'Are your medications FDA approved?',
          a: 'Compounded medications are not FDA approved, but are prepared in FDA-registered facilities following strict quality standards. Compounding is a regulated practice overseen by state boards of pharmacy.'
        },
        {
          q: 'What if I have an allergic reaction?',
          a: 'Stop taking the medication immediately and contact your healthcare provider. Our compounds can be customized to avoid specific allergens or dyes if needed.'
        }
      ]
    },
    {
      category: 'Tapering Process',
      questions: [
        {
          q: 'How do I know what taper schedule to follow?',
          a: 'Your healthcare provider will create a personalized taper schedule based on your specific situation. We provide the liquid medication that makes following that schedule possible.'
        },
        {
          q: 'Can I adjust my taper rate after starting?',
          a: 'Yes, always work with your healthcare provider to adjust your taper based on how you\'re feeling. Our liquid formulations make it easy to make small adjustments as needed.'
        },
        {
          q: 'What if I run out before my next refill?',
          a: 'Contact us immediately. We offer expedited shipping and can work with your provider to ensure you don\'t have any gaps in your medication.'
        },
        {
          q: 'Do you provide tapering guidance?',
          a: 'While we don\'t provide medical advice, we offer educational resources and can connect you with providers experienced in tapering. Your prescribing doctor should guide your taper.'
        }
      ]
    },
    {
      category: 'Technical & Account',
      questions: [
        {
          q: 'How do I track my order?',
          a: 'You\'ll receive tracking information via email once your order ships. You can also log into your account to view order status and tracking details.'
        },
        {
          q: 'Can I set up automatic refills?',
          a: 'Yes, we offer subscription services with a 15% discount. You can customize the frequency and pause or cancel anytime.'
        },
        {
          q: 'What if I need to change my shipping address?',
          a: 'You can update your shipping address in your account settings or contact our support team. Changes must be made before your order ships.'
        },
        {
          q: 'How do I cancel an order?',
          a: 'Orders can be cancelled before compounding begins. Once we\'ve started preparing your medication, we cannot accept cancellations due to the custom nature of the product.'
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <div className="container">
        <div className="page-header">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about TaperMe</p>
        </div>

        <div className="faq-content">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="faq-section">
              <h2>{section.category}</h2>
              <div className="questions-list">
                {section.questions.map((item, questionIndex) => (
                  <details key={questionIndex} className="faq-item">
                    <summary>{item.q}</summary>
                    <div className="answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta">
          <h2>Still Have Questions?</h2>
          <p>Our support team is here to help.</p>
          <div className="contact-options">
            <div className="contact-option">
              <h3>📧 Email</h3>
              <p>support@taperme.com</p>
              <p className="response-time">Response within 24 hours</p>
            </div>
            <div className="contact-option">
              <h3>📞 Phone</h3>
              <p>1-800-TAPER-ME</p>
              <p className="response-time">Mon-Fri 9AM-5PM EST</p>
            </div>
            <div className="contact-option">
              <h3>💬 Live Chat</h3>
              <p>Available on all pages</p>
              <p className="response-time">Instant support</p>
            </div>
          </div>
          <a href="/contact" className="contact-button">Contact Support</a>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 