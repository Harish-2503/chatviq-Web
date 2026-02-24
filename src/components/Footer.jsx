const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-brand">
        <h3>ChatViq</h3>
        <p>The most powerful AI chatbot platform for modern businesses. Build, deploy, and scale conversational experiences that drive results.</p>
      </div>
      {[
        { title: 'Product', links: [['#features','Features'],['#pricing','Pricing'],['#integrations','Integrations'],['#api','API Docs']] },
        { title: 'Company', links: [['#about','About Us'],['#blog','Blog'],['#careers','Careers'],['#contact','Contact']] },
        { title: 'Resources', links: [['#help','Help Center'],['#tutorials','Tutorials'],['#community','Community'],['#status','Status']] },
      ].map(({ title, links }) => (
        <div className="footer-column" key={title}>
          <h4>{title}</h4>
          <ul className="footer-links">
            {links.map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 ChatViq. All rights reserved. | Privacy Policy | Terms of Service</p>
    </div>
  </footer>
);

export default Footer;
