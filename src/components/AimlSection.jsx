import useScrollAnimation from './useScrollAnimation';

const AimlSection = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section className="aiml-section" id="aiml">
      <div className="aiml-container">
        <div className="aiml-content animate-left" ref={leftRef}>
          <span className="section-tag">AIML Technology</span>
          <h2>Artificial Intelligence Markup Language</h2>
          <p>Build sophisticated conversational AI using AIML, the industry-standard language for creating intelligent chatbot responses. Our platform makes it easy to design complex dialogue flows, pattern matching, and context management.</p>
          <p>ChatViq's AIML engine supports advanced features like recursive patterns, topic-based conversations, wildcards, and variables — giving you complete control over how your bot understands and responds to users.</p>
          <div className="aiml-features">
            {[
              { title: 'Pattern Matching', desc: 'Powerful regex and wildcard support for flexible user input recognition', icon: <svg viewBox="0 0 24 24"><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg> },
              { title: 'Context Management', desc: 'Maintain conversation state and remember user preferences across sessions', icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> },
              { title: 'Multi-Topic Flows', desc: 'Organize conversations into topics for better structure and maintainability', icon: <svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg> },
            ].map(({ title, desc, icon }) => (
              <div className="aiml-feature" key={title}>
                <div className="aiml-feature-icon">{icon}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="aiml-visual animate-right" ref={rightRef}>
          <div className="aiml-code-window">
            <div className="code-header">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
            </div>
            <div className="code-content">
              <span className="code-line"><span className="code-comment">{'<!-- AIML Pattern Example -->'}</span></span>
              <span className="code-line">&lt;<span className="code-keyword">category</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&lt;<span className="code-keyword">pattern</span>&gt;HELLO *&lt;/<span className="code-keyword">pattern</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&lt;<span className="code-keyword">template</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;Hi there! Welcome to</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-function">get</span> name=<span className="code-string">"company"</span>/&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;How can I help you today?</span>
              <span className="code-line">&nbsp;&nbsp;&lt;/<span className="code-keyword">template</span>&gt;</span>
              <span className="code-line">&lt;/<span className="code-keyword">category</span>&gt;</span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line"><span className="code-comment">{'<!-- Context-aware response -->'}</span></span>
              <span className="code-line">&lt;<span className="code-keyword">category</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&lt;<span className="code-keyword">pattern</span>&gt;ORDER STATUS&lt;/<span className="code-keyword">pattern</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&lt;<span className="code-keyword">template</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-function">srai</span>&gt;CHECK ORDER&lt;/<span className="code-function">srai</span>&gt;</span>
              <span className="code-line">&nbsp;&nbsp;&lt;/<span className="code-keyword">template</span>&gt;</span>
              <span className="code-line">&lt;/<span className="code-keyword">category</span>&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimlSection;
