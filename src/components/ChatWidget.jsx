import { useState, useRef, useEffect } from 'react';

const botReplies = [
  "Thanks for reaching out! How can I help you today? 😊",
  "Great question! Our team is here to assist you with anything you need.",
  "I can help with that! Could you tell me more about what you're looking for?",
  "Absolutely! ChatViq makes it super easy to automate that workflow.",
  "Let me look into that for you. One moment please! ⚡",
  "That's a great use case! Many of our customers use ChatViq for exactly that.",
  "I'd recommend checking out our Features section — it covers this in detail!",
  "Happy to help! Is there anything else you'd like to know? 🚀",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [msgInput, setMsgInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const replyIdx = useRef(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowNotif(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const togglePanel = () => {
    setIsOpen(p => !p);
    setShowNotif(false);
  };

  const startChat = (name) => {
    setChatStarted(true);
    const n = name || 'there';
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages([{ type: 'bot', text: `Hi ${n}! 👋 Welcome to ChatViq. How can I help you today?` }]);
    }, 1100);
  };

  const sendMessage = () => {
    const text = msgInput.trim();
    if (!text) return;
    setMessages(prev => [...prev, { type: 'user', text }]);
    setMsgInput('');
    const reply = botReplies[replyIdx.current % botReplies.length];
    replyIdx.current++;
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: reply }]);
    }, 1100);
  };

  return (
    <>
      {/* Launcher */}
      <div className={`chat-launcher ${isOpen ? 'open' : ''}`} onClick={togglePanel} style={{ cursor: 'none' }}>
        {showNotif && !isOpen && <div className="notif-dot" style={{ display: 'block' }}></div>}
        {isOpen
          ? <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          : <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        }
      </div>

      {/* Panel */}
      <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>💬 ChatViq Support</h3>
          <button className="chat-close" onClick={togglePanel}>×</button>
        </div>

        {!chatStarted ? (
          <div className="chat-welcome">
            <h4>👋 Welcome!</h4>
            <p>Chat with our AI assistant. Get instant help, answers, and support.</p>
            <input
              placeholder="Your name (optional)"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && startChat(nameInput)}
            />
            <button className="chat-start-btn" onClick={() => startChat(nameInput)}>Start Chat</button>
            <button className="chat-guest-btn" onClick={() => startChat('Guest')}>Continue as Guest</button>
          </div>
        ) : (
          <div className="chat-screen active">
            <div className="chat-messages active">
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.type}`}>{m.text}</div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
            <div className="chat-input-bar">
              <input
                placeholder="Type a message..."
                value={msgInput}
                onChange={e => setMsgInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
              />
              <button className="chat-send-btn" onClick={sendMessage}>
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
