import useScrollAnimation from './useScrollAnimation';

const CtaSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="cta animate-center" ref={ref}>
      <div className="cta-container">
        <h2>Ready to Transform Your Business?</h2>
        <p>Join thousands of companies using ChatViq to automate conversations, increase engagement, and drive growth.</p>
        <div className="cta-buttons">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary" style={{ background: '#fff', color: 'var(--black)', border: 'none' }}>Book a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
