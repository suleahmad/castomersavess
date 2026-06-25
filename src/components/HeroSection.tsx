
import { MessageCircle, Phone, FileText } from 'lucide-react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">How can we help you today?</h2>
        <p className="hero-subtitle">
          Welcome to the premium customer service experience. We are here to assist you 24/7.
        </p>
        
        <div className="hero-actions">
          <button className="primary-btn hero-btn">
            <MessageCircle className="btn-icon" />
            Live Chat
          </button>
          <button className="secondary-btn hero-btn">
            <Phone className="btn-icon" />
            Call Us Now
          </button>
          <button className="secondary-btn hero-btn outline">
            <FileText className="btn-icon" />
            Submit a Ticket
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
