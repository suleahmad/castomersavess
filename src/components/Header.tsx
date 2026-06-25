
import { Search, Headset } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header glass-panel">
      <div className="header-container">
        <div className="logo">
          <Headset className="logo-icon" size={32} />
          <h1>HelpLine</h1>
        </div>
        
        <div className="search-bar-container">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="search" 
              placeholder="Search for articles, support, or answers..." 
              className="search-input"
            />
          </div>
        </div>

        <nav className="nav-links">
          <a href="#">Knowledge Base</a>
          <a href="#">Contact Us</a>
          <button className="login-btn">Sign In</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
