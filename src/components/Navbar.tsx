
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Menu, X, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout, user } = useAuth();

  // Check if screen is mobile on initial load and when resized
  useEffect(() => {
    const checkScreenSize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: '/products', label: 'Products', icon: <Package className="w-5 h-5" /> },
    { path: '/orders', label: 'Orders', icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  return (
    <nav className={cn(
      "transition-all duration-300 border-r border-border bg-card shadow-sm z-10 flex flex-col h-screen",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && (
          <div className="py-2">
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">E-commerce</p>
          </div>
        )}
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-secondary transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>
      
      <div className="space-y-1 mt-6 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              cn(
                "navbar-item flex items-center gap-2 px-3 py-2 rounded-md transition-all",
                isActive ? "navbar-item active" : "",
                isCollapsed ? "justify-center" : ""
              )
            }
            style={({ isActive }) => ({
              animationDelay: isActive ? '0ms' : '100ms',
            })}
          >
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </div>
      
      {/* User and logout section at bottom */}
      <div className="mt-auto p-4 border-t border-border">
        {!isCollapsed && user && (
          <div className="mb-2">
            <p className="text-sm font-medium truncate">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
        )}
        <button
          onClick={logout}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 w-full transition-colors",
            isCollapsed ? "justify-center" : ""
          )}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
