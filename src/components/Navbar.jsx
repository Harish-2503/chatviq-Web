import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="logo">Chat<span>Viq</span></div>
        <ul className="nav-links">
          {[['#home','Home'],['#technology','Technology'],['#aiml','AIML'],['#automation','Automation'],['#features','Features'],['#pricing','Pricing']].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); scrollTo(href); }}>{label}</a>
            </li>
          ))}
        </ul>
        <button className="btn-nav">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
