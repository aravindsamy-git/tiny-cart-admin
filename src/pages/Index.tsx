
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Package, ShoppingCart, TrendingUp, Truck, Users } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 500 },
  { name: 'Apr', sales: 800 },
  { name: 'May', sales: 300 },
  { name: 'Jun', sales: 550 },
];

const IndexPage = () => {
  return (
    <div className="transition-page space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your e-commerce admin panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Orders"
          value="24"
          description="Last 30 days"
          trend="up"
          trendValue="12%"
          icon={<ShoppingCart className="w-6 h-6" />}
        />
        <StatsCard
          title="Total Sales"
          value="$4,650.00"
          description="Last 30 days"
          trend="up"
          trendValue="8%"
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <StatsCard
          title="Items in Stock"
          value="142"
          description="Across 6 products"
          trend="neutral"
          trendValue="0%"
          icon={<Package className="w-6 h-6" />}
        />
        <StatsCard
          title="Delivered Orders"
          value="18"
          description="Last 30 days"
          trend="up"
          trendValue="25%"
          icon={<Truck className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <h2 className="text-lg font-medium mb-4">Sales Overview</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">New order #1088</p>
                <p className="text-xs text-muted-foreground">John Doe placed a new order</p>
                <p className="text-xs text-muted-foreground mt-1">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Order #1087 delivered</p>
                <p className="text-xs text-muted-foreground">Order successfully delivered</p>
                <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Stock updated</p>
                <p className="text-xs text-muted-foreground">Premium Headphones stock updated to 20</p>
                <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
