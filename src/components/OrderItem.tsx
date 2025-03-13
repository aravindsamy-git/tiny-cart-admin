
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Package, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export type OrderStatus = 'processing' | 'delivered';

export interface OrderItem {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }[];
}

interface OrderItemProps {
  order: OrderItem;
  onStatusChange?: (id: string, newStatus: OrderStatus) => void;
  className?: string | Record<string, boolean>;
}

const OrderItem = ({ order, onStatusChange, className }: OrderItemProps) => {
  const [isUpdating, setIsUpdating] = useState<OrderStatus | null>(null);

  const handleStatusChange = (newStatus: OrderStatus) => {
    if (onStatusChange && newStatus !== order.status) {
      setIsUpdating(newStatus);
      
      // Simulate API call to update status in database
      setTimeout(() => {
        onStatusChange(order.id, newStatus);
        setIsUpdating(null);
      }, 1500); // Simulate a delay of 1.5 seconds
    }
  };

  const statusClasses = {
    processing: 'status-processing',
    delivered: 'status-delivered',
  };

  return (
    <div className={cn(
      "glass-card rounded-xl p-6 animate-fadeIn",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center mb-2">
            <Package className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Order #{order.id}</span>
          </div>
          <h3 className="text-lg font-medium">{order.customerName}</h3>
          <p className="text-sm text-muted-foreground">{order.date}</p>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-xl font-semibold">${order.total.toFixed(2)}</span>
          <div className="mt-2 flex items-center space-x-2">
            <Button
              variant={order.status === 'processing' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleStatusChange('processing')}
              className="text-xs"
              disabled={isUpdating !== null}
            >
              {isUpdating === 'processing' ? (
                <>
                  <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                  Updating...
                </>
              ) : (
                'Processing'
              )}
            </Button>
            <Button
              variant={order.status === 'delivered' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleStatusChange('delivered')}
              className="text-xs"
              disabled={isUpdating !== null}
            >
              {isUpdating === 'delivered' ? (
                <>
                  <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                  Updating...
                </>
              ) : (
                'Delivered'
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {isUpdating && (
        <div className="mt-4">
          <p className="text-xs text-center text-muted-foreground mb-1">Updating status...</p>
          <Progress value={100} className="h-1" />
        </div>
      )}
      
      <div className="mt-4 border-t border-border pt-4">
        <h4 className="text-sm font-medium mb-2">Order Items</h4>
        <ul className="space-y-2">
          {order.items.map((item) => (
            <li key={item.productId} className="flex justify-between text-sm">
              <span>{item.quantity}x {item.productName}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderItem;
