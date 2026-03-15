import React from 'react';
import { BookOpen, Search, Star, PlusCircle } from 'lucide-react';
import logo from '../assets/Logo.png';

const Sidebar = ({ currentView, setView, isMobileOpen }) => {
  const menuItems = [
    { id: 'home', label: 'Start Lesson', icon: BookOpen },
    { id: 'search', label: 'Search Lessons', icon: Search },
    { id: 'favorites', label: 'Favorites', icon: Star },
    { id: 'create', label: 'Create New Lesson', icon: PlusCircle },
  ];

  return (
    <div className={`sidebar no-print ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <img src={logo} alt="INTRA" style={{ height: '40px', objectFit: 'contain' }} />
        <h2 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--primary)' }}>Academy</h2>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setView(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', padding: '1rem', background: '#f8f9fa', borderRadius: 'var(--radius)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <p>Logged in as Teacher</p>
      </div>
    </div>
  );
};

export default Sidebar;
