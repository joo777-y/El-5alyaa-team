import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      
    {/* instagram section */}

      <div className="instagram-section">
        <div className="instagram-content">
          <h2>Our Instagram</h2>
          <p>Follow our store on Instagram</p>
          <button className="follow-btn">Follow Us</button>
        </div>
      </div>

     {/* Footer Top */}

      <div className="footer-top">
        <div className="footer-address">
          <p>El-5alyaa team</p>
          <p></p>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-help">
          <h4>Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <div className="footer-Input">
          <input class="email-input" type="email" placeholder="Enter Your Email Address" />
          <button className="email-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      
      <div className="footer-bottom">
        <p>2025 El-5alyaa team. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
