import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SupportCategories from './components/SupportCategories';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

const MainLayout = () => (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <HeroSection />
      <SupportCategories />
    </main>
    <footer className="footer glass-panel">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} HelpLine Premium Support. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
