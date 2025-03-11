
import React, { useState } from 'react';
import OrderItem, { OrderItem as OrderItemType, OrderStatus } from '@/components/OrderItem';
import { toast } from 'sonner';

// Initial orders data
const initialOrders: OrderItemType[] = [
  {
    id: '1088',
    customerName: 'John Doe',
    date: 'Aug 12, 2023',
    total: 549.97,
    status: 'processing',
    items: [
      { productId: 1, productName: 'Premium Headphones', quantity: 1, price: 249.99 },
      { productId: 5, productName: 'Ergonomic Mouse', quantity: 1, price: 89.99 },
      { productId: 6, productName: 'Laptop Stand', quantity: 1, price: 49.99 },
      { productId: 4, productName: 'Bluetooth Speaker', quantity: 1, price: 179.99 },
    ],
  },
  {
    id: '1087',
    customerName: 'Jane Smith',
    date: 'Aug 10, 2023',
    total: 429.98,
    status: 'delivered',
    items: [
      { productId: 2, productName: 'Wireless Keyboard', quantity: 1, price: 129.99 },
      { productId: 3, productName: 'Smart Watch', quantity: 1, price: 299.99 },
    ],
  },
  {
    id: '1086',
    customerName: 'Robert Johnson',
    date: 'Aug 8, 2023',
    total: 249.99,
    status: 'delivered',
    items: [
      { productId: 1, productName: 'Premium Headphones', quantity: 1, price: 249.99 },
    ],
  },
  {
    id: '1085',
    customerName: 'Emily Davis',
    date: 'Aug 5, 2023',
    total: 539.96,
    status: 'delivered',
    items: [
      { productId: 5, productName: 'Ergonomic Mouse', quantity: 2, price: 89.99 },
      { productId: 2, productName: 'Wireless Keyboard', quantity: 1, price: 129.99 },
      { productId: 6, productName: 'Laptop Stand', quantity: 2, price: 49.99 },
      { productId: 4, productName: 'Bluetooth Speaker', quantity: 1, price: 179.99 },
    ],
  },
];

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderItemType[]>(initialOrders);
  const [statusFilter, setStatusFilter] = useState<'all' | OrderStatus>('all');

  const handleStatusChange = (id: string, newStatus: OrderStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
    
    toast.success(`Order #${id} status updated`, {
      description: `New status: ${newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}`,
    });
  };

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(o => o.status === statusFilter);

  const processingCount = orders.filter(o => o.status === 'processing').length;
  const deliveredCount = orders.filter(o => o.status === 'delivered').length;

  return (
    <div className="transition-page space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-muted-foreground">Manage customer orders.</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => setStatusFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            statusFilter === 'all' 
              ? 'glass-card' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          All ({orders.length})
        </button>
        <button
          onClick={() => setStatusFilter('processing')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            statusFilter === 'processing' 
              ? 'glass-card' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Processing ({processingCount})
        </button>
        <button
          onClick={() => setStatusFilter('delivered')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            statusFilter === 'delivered' 
              ? 'glass-card' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Delivered ({deliveredCount})
        </button>
      </div>
      
      <div className="space-y-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <OrderItem 
              key={order.id} 
              order={order} 
              onStatusChange={handleStatusChange} 
              className={{ 'animate-delay-100': index % 2 === 1 }}
            />
          ))
        ) : (
          <div className="glass-card rounded-xl p-8 text-center animate-fadeIn">
            <p className="text-muted-foreground">No orders found matching the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
