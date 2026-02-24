import useScrollAnimation from './useScrollAnimation';

const features = [
  {
    dir: 'animate-left',
    title: 'Visual Bot Builder',
    desc: 'Create complex conversation flows with our intuitive drag-and-drop interface. No coding required - design sophisticated bots visually.',
    icon: <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>
  },
  {
    dir: 'animate-right',
    title: 'Advanced Analytics',
    desc: 'Track every conversation with detailed analytics. Monitor performance, identify bottlenecks, and continuously improve your bot with data-driven insights.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
  },
  {
    dir: 'animate-left',
    title: 'Team Collaboration',
    desc: 'Built for teams. Multiple users, role-based permissions, version control, and collaborative editing to keep everyone in sync.',
    icon: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
  },
  {
    dir: 'animate-center',
    title: 'Smart Handoff',
    desc: 'Seamless transition to human agents when needed. Bot automatically escalates complex issues while maintaining full conversation context.',
    icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
  },
  {
    dir: 'animate-right',
    title: 'API & Integrations',
    desc: 'Connect with your existing tools. REST API, webhooks, and 50+ pre-built integrations with popular platforms like Salesforce, HubSpot, Zendesk.',
    icon: <svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
  },
];

const FeatureCard = ({ dir, title, desc, icon }) => {
  const ref = useScrollAnimation();
  return (
    <div className={`feature-card ${dir}`} ref={ref}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const FeaturesSection = () => (
  <section className="features" id="features">
    <div className="section-header">
      <span className="section-tag">Core Features</span>
      <h2 className="section-title">Everything You Need to Succeed</h2>
      <p className="section-subtitle">Comprehensive tools and features to build, deploy, and scale your conversational AI.</p>
    </div>
    <div className="features-grid">
      {features.map((f, i) => <FeatureCard key={i} {...f} />)}
    </div>
  </section>
);

export default FeaturesSection;
