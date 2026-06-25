
import { CreditCard, Wrench, ShieldAlert, Truck, Box, Users } from 'lucide-react';
import './SupportCategories.css';

const categories = [
  { id: 1, title: 'Billing & Payments', icon: CreditCard, desc: 'Manage your invoices, payment methods, and subscriptions.' },
  { id: 2, title: 'Technical Support', icon: Wrench, desc: 'Troubleshoot issues with our products or services.' },
  { id: 3, title: 'Account Security', icon: ShieldAlert, desc: 'Update passwords, enable 2FA, and manage privacy.' },
  { id: 4, title: 'Orders & Tracking', icon: Truck, desc: 'Track your packages and view order history.' },
  { id: 5, title: 'Returns & Refunds', icon: Box, desc: 'Information on returning items and getting refunds.' },
  { id: 6, title: 'Community Forum', icon: Users, desc: 'Connect with other users and share solutions.' },
];

const SupportCategories: React.FC = () => {
  return (
    <section className="categories-section">
      <div className="categories-container">
        <h3 className="section-title">Browse by Category</h3>
        <div className="categories-grid">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div key={cat.id} className="category-card glass-panel">
                <div className="icon-wrapper">
                  <IconComponent size={28} className="category-icon" />
                </div>
                <h4 className="category-title">{cat.title}</h4>
                <p className="category-desc">{cat.desc}</p>
                <button className="category-link">View Articles &rarr;</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
