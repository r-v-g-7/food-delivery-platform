const CJFooter = () => {
  return (
    <footer className="cj-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>🍔 Company</h3>
          <ul className="footer-links">
            <li><a href="#">About CJ</a></li>
            <li><a href="#">Grove Street Grub</a></li>
            <li><a href="#">Careers (We accept bicycle skills)</a></li>
            <li><a href="#">The Homies</a></li>
            <li><a href="#">CJ Prime™</a></li>
            <li><a href="#">CJMart</a></li>
            <li><a href="#">CJ DineOut</a></li>
            <li><a href="#">CJ Genie</a></li>
            <li><a href="#">Minis</a></li>
            <li><a href="#">Pyng</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>📞 Contact Us</h3>
          <ul className="footer-links">
            <li><a href="#">Shout “Grove Street 4 Life”</a></li>
            <li><a href="#">Help & Gun Support</a></li>
            <li><a href="#">Partner with CJ</a></li>
            <li><a href="#">Ride with us</a></li>
          </ul>
          <h3>⚖️ Legal Stuff</h3>
          <ul className="footer-links">
            <li><a href="#">Terms & Chicken</a></li>
            <li><a href="#">Cookie? Gimme the damn cookie</a></li>
            <li><a href="#">Privacy? We got you, fool</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>🔍 Explore with CJ</h3>
          <ul className="footer-links">
            <li><a href="#">CJ News</a></li>
            <li><a href="#">Snackables</a></li>
            <li><a href="#">Life at CJFood</a></li>
          </ul>
          <h3>🤳 Social Links</h3>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Instagram">IN</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Pinterest">PI</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>

        <div className="footer-column app-section">
          <h3>📱 For Better Experience</h3>
          <p>Download the CJFood App now or risk Big Smoke ordering your life away.</p>
          <div className="app-download">
            <a href="#" className="app-button android">
              <span>🚴‍♂️ Download Android App</span>
              <small>Requires 3 stars or less wanted level</small>
            </a>
            <a href="#" className="app-button ios">
              <span>🍗 Download iOS App</span>
              <small>Includes free bucket of Cluckin' Chicken</small>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-locations">
            <p><strong>Available in:</strong> Grove Street, Los Santos, Las Venturas, San Fierro, Big Smoke’s Kitchen, That One Train You Couldn’t Catch, 47 Hood Zones</p>
        </div>
        <p className="copyright">© 2025 CJFood Inc.™ – "All We Had to Do Was Follow the Damn Recipe, CJ!"</p>
      </div>
    </footer>
  );
};

export default CJFooter;