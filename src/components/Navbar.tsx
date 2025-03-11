
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: '/products', label: 'Products', icon: <Package className="w-5 h-5" /> },
    { path: '/orders', label: 'Orders', icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  return (
    <nav className="w-64 border-r border-border bg-card shadow-sm z-10 p-4">
      <div className="space-y-6">
        <div className="flex items-center px-2">
          <div className="py-4">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">E-commerce Management</p>
          </div>
        </div>
        
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn("navbar-item", isActive ? "navbar-item active" : "")
              }
              style={({ isActive }) => ({
                animationDelay: isActive ? '0ms' : '100ms',
              })}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
