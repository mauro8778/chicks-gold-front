import React from 'react';
import '../styles/footer.css'; // Asegúrate de importar el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section vertical">
        <div className="section">
          <div className="image-container">
            <img src="/faceboko.png" alt="Imagen 1" className="footer-image" />
            <img src="/discord.png" alt="Imagen 2" className="footer-image" />
            <img src="/ig.png" alt="Imagen 3" className="footer-image" />
            <img src="/x.png" alt="Imagen 4" className="footer-image" />
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-section horizontal">
        <div className="section2">
          <img src="/chicks.svg" alt="Imagen" className="section-image" />
          <div className="email-info">
            <span className="email-text">support@chicksgold.com</span>
          </div>
        </div>

        <div className="section-4">
          <p>Chicks Gold</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Bug Bounty</p>
        </div>

        <div className="section-5">
          <p>Support</p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Sitemap</p>
        </div>

        <div className="section-6">
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Copyright Policy</p>
        </div>

        <div className="section-7">
          <div className="stars-container">
            <div className="star-card">
              ★
            </div>
            <div className="star-card">
              ★
            </div>
            <div className="star-card">
              ★
            </div>
            <div className="star-card">
              ★
            </div>
            <div className="star-card">
              ★
            </div>
            <p>Trustpilot Reviews</p>
          </div>
        </div>

      </div>
      <div className="copyright-message">
        <p>Copyright © 2017, ChicksGold.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

