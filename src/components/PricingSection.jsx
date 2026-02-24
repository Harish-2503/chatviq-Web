import useScrollAnimation from './useScrollAnimation';

const plans = [
  {
    dir: 'animate-left',
    name: 'Starter',
    price: '$0',
    period: '/month',
    desc: 'Perfect for trying out ChatViq',
    features: ['1,000 conversations/month', '1 chatbot', 'Basic analytics', 'Email support', 'Web widget'],
    btnText: 'Get Started Free',
    featured: false,
  },
  {
    dir: 'animate-center',
    name: 'Professional',
    price: '$99',
    period: '/month',
    desc: 'For growing businesses',
    features: ['50,000 conversations/month', '5 chatbots', 'Advanced analytics & reports', 'Priority support (24/7)', 'All integrations', 'Custom branding', 'API access'],
    btnText: 'Start Free Trial',
    featured: true,
  },
  {
    dir: 'animate-right',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations',
    features: ['Unlimited conversations', 'Unlimited chatbots', 'Dedicated account manager', 'Custom AI training', 'SSO & advanced security', 'SLA guarantee', 'White-label solution'],
    btnText: 'Contact Sales',
    featured: false,
  },
];

const PricingCard = ({ dir, name, price, period, desc, features, btnText, featured }) => {
  const ref = useScrollAnimation();
  return (
    <div className={`pricing-card ${dir} ${featured ? 'featured' : ''}`} ref={ref}>
      {featured && <span className="pricing-badge">Most Popular</span>}
      <h3>{name}</h3>
      <div className="pricing-price">{price}{period && <span>{period}</span>}</div>
      <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>{desc}</p>
      <ul className="pricing-features">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <button className="pricing-btn">{btnText}</button>
    </div>
  );
};

const PricingSection = () => (
  <section className="pricing" id="pricing">
    <div className="section-header">
      <span className="section-tag">Pricing Plans</span>
      <h2 className="section-title">Choose Your Perfect Plan</h2>
      <p className="section-subtitle">Flexible pricing for businesses of all sizes. Start free, upgrade as you grow.</p>
    </div>
    <div className="pricing-grid">
      {plans.map((p, i) => <PricingCard key={i} {...p} />)}
    </div>
  </section>
);

export default PricingSection;
