import { useEffect, useRef } from 'react';
import useScrollAnimation from './useScrollAnimation';

const flowSteps = [
  { num: 1, title: 'Capture', desc: 'Automatically collect leads, inquiries, and customer information through conversational forms' },
  { num: 2, title: 'Qualify', desc: 'AI-powered qualification to score and route leads based on behavior and responses' },
  { num: 3, title: 'Engage', desc: 'Personalized follow-ups and nurture campaigns triggered by user actions' },
  { num: 4, title: 'Convert', desc: 'Automated scheduling, booking, and payment processing to close deals faster' },
];

const metrics = [
  { target: 85, label: '% Time Saved on Routine Tasks', dir: 'animate-left' },
  { target: 3, label: 'x Faster Response Times', dir: 'animate-center' },
  { target: 60, label: '% Reduction in Support Costs', dir: 'animate-right' },
];

const MetricCard = ({ target, label, dir }) => {
  const ref = useScrollAnimation();
  const valRef = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        let count = 0;
        const steps = 60;
        const inc = target / steps;
        const interval = setInterval(() => {
          count += inc;
          if (count >= target) { count = target; clearInterval(interval); }
          if (valRef.current) valRef.current.textContent = Math.floor(count);
        }, 2000 / steps);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className={`metric-card ${dir}`} ref={ref}>
      <span className="metric-value" ref={valRef}>0</span>
      <span className="metric-label">{label}</span>
    </div>
  );
};

const AutomationSection = () => {
  const flowRef = useRef(null);

  useEffect(() => {
    if (!flowRef.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        flowRef.current.querySelectorAll('.flow-step').forEach(el => el.classList.add('cascade'));
      }
    }, { threshold: 0.2 });
    obs.observe(flowRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="automation-section" id="automation">
      <div className="automation-container">
        <div className="automation-header">
          <span className="section-tag" style={{ background: '#fff', color: 'var(--black)' }}>Smart Automation</span>
          <h2>End-to-End Business Automation</h2>
          <p>Streamline your entire workflow with intelligent automation. From lead capture to customer support, ChatViq handles it all automatically.</p>
        </div>

        <div className="automation-flow" ref={flowRef}>
          {flowSteps.map(({ num, title, desc }) => (
            <div className="flow-step" key={num}>
              <div className="flow-number">{num}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="automation-metrics">
          {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
