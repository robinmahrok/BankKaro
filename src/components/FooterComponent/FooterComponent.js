import React from "react";
import "./FooterComponent.css"; // Assuming you will use an external CSS file
import { FaTwitter, FaInstagram, FaAppStore, FaGooglePlay } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="footer">
      {/* Social Media and Intro Section */}
      <div className="footer-left">
        <div className="social-icons">
          <FaTwitter className="icon" size={24} />
          <FaInstagram className="icon" size={24} />
        </div>
        <p className="para1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
          sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce
          id mollis ex.
        </p>
        <div className="download-buttons">
          <button className="app-store">
            <FaAppStore className="button-icon" size={20} />
            App Store</button>
          <button className="google-play">
            <FaGooglePlay className="button-icon" size={20} />
            Google Play</button>
        </div>
        <p className="para2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea.
        </p>
      </div>

<div className="outer-footer">
      {/* Footer Links Section */}
      <div className="footer-center">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About BankKaro</li>
            <li>Vision and Mission</li>
            <li>Our Team Members</li>
            <li>Partners and Investors</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Blog</h3>
          <ul>
            <li>BankKaro Savings</li>
            <li>Cashless Makes Perfect</li>
            <li>BankKaro No Interest</li>
            <li>BankKaro Digital Wallet</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>Card Genius</li>
            <li>Lounge Finder</li>
            <li>Beat My Card</li>
            <li>Compare Cards</li>
          </ul>
        </div>
      </div>
      <div className="footer-center">

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Contact Us</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-column">

        <p>&copy; 2024 BankKaro <br/>Powered by Pouring Pounds</p>
      </div>
      </div>
      </div>
      {/* Footer Bottom Section */}
    
    </footer>
  );
};

export default FooterComponent;
