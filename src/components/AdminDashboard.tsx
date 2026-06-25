import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Settings, LogOut, Bell } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar glass-panel">
        <div className="sidebar-logo">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="active"><Users size={20} /> Users</a>
          <a href="#"><FileText size={20} /> Content</a>
          <a href="#"><Settings size={20} /> Settings</a>
        </nav>
        <button className="logout-btn" onClick={() => navigate('/')}>
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header glass-panel">
          <h1>Dashboard Overview</h1>
          <div className="header-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card glass-panel">
              <h3>Active Tickets</h3>
              <p className="stat-value">24</p>
              <p className="stat-trend positive">+12% from last week</p>
            </div>
            <div className="stat-card glass-panel">
              <h3>Resolved</h3>
              <p className="stat-value">1,432</p>
              <p className="stat-trend positive">+5% from last week</p>
            </div>
            <div className="stat-card glass-panel">
              <h3>Response Time</h3>
              <p className="stat-value">1.2h</p>
              <p className="stat-trend negative">-0.3h from last week</p>
            </div>
          </div>

          <div className="recent-activity glass-panel">
            <h2>Recent Support Requests</h2>
            <table className="activity-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Issue</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Unable to reset password</td>
                  <td><span className="status-badge pending">Pending</span></td>
                  <td>2 mins ago</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Billing error on checkout</td>
                  <td><span className="status-badge resolved">Resolved</span></td>
                  <td>1 hour ago</td>
                </tr>
                <tr>
                  <td>Michael T.</td>
                  <td>App crashes on launch</td>
                  <td><span className="status-badge in-progress">In Progress</span></td>
                  <td>3 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
