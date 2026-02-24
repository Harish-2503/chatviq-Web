import useScrollAnimation from './useScrollAnimation';

const techCards = [
  {
    dir: 'animate-left',
    title: 'Natural Language Processing',
    desc: 'Advanced NLP algorithms understand context, sentiment, and intent to deliver accurate responses in real-time conversations.',
    features: ['Multi-language support (120+ languages)', 'Context-aware responses', 'Sentiment analysis in real-time', 'Intent recognition with 98% accuracy'],
    icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
  },
  {
    dir: 'animate-center',
    title: 'Machine Learning Engine',
    desc: 'Self-improving AI that learns from every interaction to continuously enhance response quality and accuracy.',
    features: ['Continuous learning algorithms', 'Pattern recognition & prediction', 'Automated model optimization', 'Anomaly detection'],
    icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10-4h2v6h-2z"/></svg>
  },
  {
    dir: 'animate-right',
    title: 'Enterprise Security',
    desc: 'Bank-level encryption and security protocols to protect sensitive customer data and ensure compliance.',
    features: ['End-to-end encryption', 'GDPR & HIPAA compliant', 'SOC 2 Type II certified', 'Regular security audits'],
    icon: <svg viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.3l7-3.11L19 8.3V13c0 4-3 7-7 7zm-1-11h2v6h-2zm0 8h2v2h-2z"/></svg>
  }
];

const TechCard = ({ dir, title, desc, features, icon }) => {
  const ref = useScrollAnimation();
  return (
    <div className={`tech-card ${dir}`} ref={ref}>
      <div className="tech-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="tech-features">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
};

const TechSection = () => (
  <section className="tech-section" id="technology">
    <div className="section-header">
      <span className="section-tag">Advanced Technology</span>
      <h2 className="section-title">Next-Generation Chatbot Platform</h2>
      <p className="section-subtitle">
        Powered by cutting-edge AI, machine learning, and natural language understanding to deliver human-like conversations that truly understand your customers.
      </p>
    </div>
    <div className="tech-grid">
      {techCards.map((card, i) => <TechCard key={i} {...card} />)}
    </div>
  </section>
);

export default TechSection;
