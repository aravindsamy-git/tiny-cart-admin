
import React from 'react';
import { Package, ShoppingCart, TrendingUp, Truck, Users, BarChart3, LineChart, DollarSign } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <h2 className="text-lg font-medium mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Performance Metrics
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Conversion Rate</span>
                <span className="font-medium">4.2%</span>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Average Order Value</span>
                <span className="font-medium">$193.75</span>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Revenue Growth</span>
                <span className="font-medium">+8.3%</span>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <h2 className="text-lg font-medium mb-4 flex items-center">
            <LineChart className="w-5 h-5 mr-2" />
            Top Products
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded bg-secondary/30 flex items-center justify-center text-primary mr-3">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-sm">Premium Headphones</span>
              </div>
              <span className="text-sm font-medium">$1,249.95</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded bg-secondary/30 flex items-center justify-center text-primary mr-3">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-sm">Smart Watch</span>
              </div>
              <span className="text-sm font-medium">$899.97</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded bg-secondary/30 flex items-center justify-center text-primary mr-3">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-sm">Bluetooth Speaker</span>
              </div>
              <span className="text-sm font-medium">$719.96</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded bg-secondary/30 flex items-center justify-center text-primary mr-3">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-sm">Wireless Keyboard</span>
              </div>
              <span className="text-sm font-medium">$649.95</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
