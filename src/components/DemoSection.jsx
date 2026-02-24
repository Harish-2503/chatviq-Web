import { useState } from 'react';
import useScrollAnimation from './useScrollAnimation';

const tabs = [
  {
    id: 'support',
    label: 'Customer Support',
    title: 'Customer Support Bot',
    messages: [
      { type: 'bot', text: "Hi! I'm here to help with any questions about your order or account. What can I assist you with today?" },
      { type: 'user', text: "I haven't received my order yet" },
      { type: 'bot', text: "I'm sorry to hear that! Let me check on your order status. Could you provide your order number?" },
      { type: 'user', text: "It's #12345" },
      { type: 'bot', text: "Thank you! I found your order. It's currently in transit and expected to arrive by tomorrow. I can send you real-time tracking information if you'd like!" },
    ],
    features: ['Instant order lookup and tracking', 'Automated ticket creation', 'Escalation to human agents', 'Multi-channel support', 'Knowledge base integration'],
    featureBg: 'rgba(255,107,53,0.05)',
  },
  {
    id: 'sales',
    label: 'Sales Assistant',
    title: 'Sales Assistant Bot',
    messages: [
      { type: 'bot', text: "Welcome! I'm here to help you find the perfect solution for your business. What are you looking to achieve?" },
      { type: 'user', text: "We need a chatbot for our e-commerce site" },
      { type: 'bot', text: "Great! Our e-commerce bots are perfect for that. How many monthly visitors does your site get?" },
      { type: 'user', text: "About 50,000 visitors per month" },
      { type: 'bot', text: "Perfect! Based on your traffic, I'd recommend our Pro plan. It includes unlimited conversations, advanced analytics, and priority support. Would you like to see a detailed comparison?" },
    ],
    features: ['Lead qualification & scoring', 'Product recommendations', 'Automated quote generation', 'CRM integration', 'Meeting scheduling'],
    featureBg: 'rgba(59,130,246,0.05)',
  },
  {
    id: 'booking',
    label: 'Appointment Booking',
    title: 'Appointment Booking Bot',
    messages: [
      { type: 'bot', text: "Hello! I can help you schedule an appointment. What type of service are you interested in?" },
      { type: 'user', text: "I need a consultation" },
      { type: 'bot', text: "I'd be happy to schedule a consultation for you! What date works best for you?" },
      { type: 'user', text: "How about next Tuesday?" },
      { type: 'bot', text: "Next Tuesday works great! I have the following times available: 10:00 AM, 2:00 PM, and 4:00 PM. Which time would you prefer?" },
    ],
    features: ['Real-time availability checking', 'Calendar integration', 'Automated reminders', 'Rescheduling & cancellations', 'Payment processing'],
    featureBg: 'rgba(139,92,246,0.05)',
  },
];

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('support');
  const ref = useScrollAnimation();
  const active = tabs.find(t => t.id === activeTab);

  return (
    <section className="demo-section">
      <div className="demo-container">
        <div className="section-header">
          <span className="section-tag">Try It Live</span>
          <h2 className="section-title">Experience ChatViq in Action</h2>
          <p className="section-subtitle">See how our AI responds to different scenarios. Click the tabs to explore various use cases.</p>
        </div>

        <div className="demo-window animate-center" ref={ref}>
          <div className="demo-tabs">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`demo-tab ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >{t.label}</button>
            ))}
          </div>

          <div className="demo-content">
            <div className="demo-panel active">
              <h3 style={{ marginBottom: '2rem', fontSize: '1.7rem' }}>{active.title}</h3>
              <div className="demo-chat-container">
                <div className="demo-chat-box">
                  {active.messages.map((msg, i) => (
                    <div key={i} className={`demo-message ${msg.type}`}>{msg.text}</div>
                  ))}
                </div>
                <div style={{ padding: '2rem', background: active.featureBg, borderRadius: '20px' }}>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800 }}>Key Features:</h4>
                  <ul style={{ lineHeight: '1.9', color: 'var(--gray)', listStyle: 'none' }}>
                    {active.features.map((f, i) => <li key={i}>✓ {f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
