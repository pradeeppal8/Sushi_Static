import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

type Props = {
  onNavigate?: (page: string) => void
}

export default function Footer({ onNavigate }: Props) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left Navigation */}
        <div className="footer-nav">
          <ul className="footer-links">
            <li>
              <button type="button" onClick={() => onNavigate && onNavigate('home')}>HOME</button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate && onNavigate('about')}>ABOUT</button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate && onNavigate('services')}>SERVICES</button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate && onNavigate('products')}>PRODUCTS</button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate && onNavigate('blog')}>BLOG</button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate && onNavigate('contact')}>CONTACT</button>
            </li>
          </ul>
        </div>

        {/* Center - Subscribe */}
        <div className="footer-subscribe">
          <h3>JOIN THE TRIBE</h3>
          <div className="subscribe-form">
            <input 
              type="email" 
              placeholder="CLICK HERE TO SUBSCRIBE" 
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              →
            </button>
          </div>
        </div>

        {/* Right - Social Links */}
        <div className="footer-social">
          <div className="social-links">
            <a href="https://facebook.com" className="social-link">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
