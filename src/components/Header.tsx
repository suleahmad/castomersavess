import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Headset } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      alert(`Simulating search for: "${searchQuery}"`);
      setShowResults(false);
    }
  };

  return (
    <header className="header glass-panel">
      <div className="header-container">
        <div className="logo">
          <Headset className="logo-icon" size={32} />
          <h1>HelpLine</h1>
        </div>
        
        <div className="search-bar-container">
          <form className="search-wrapper" onSubmit={handleSearchSubmit}>
            <Search className="search-icon" size={20} />
            <input 
              type="search" 
              placeholder="Search for articles, support, or answers..." 
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length > 0 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
            />
            {showResults && (
              <div className="search-results-dropdown glass-panel">
                <div className="search-result-item query">Searching for "{searchQuery}"...</div>
                <div className="search-result-item">Article: How to reset your password</div>
                <div className="search-result-item">Article: Contacting Support</div>
                <div className="search-result-item">FAQ: Billing and Subscriptions</div>
              </div>
            )}
          </form>
        </div>

        <nav className="nav-links">
          <a href="#">Knowledge Base</a>
          <a href="#">Contact Us</a>
          <Link to="/admin" className="login-btn">Sign In</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
