
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onStockChange?: (id: number, newStock: number) => void;
  className?: Record<string, boolean> | string;
}

const ProductCard = ({ product, onStockChange, className }: ProductCardProps) => {
  const [tempStock, setTempStock] = useState(product.stock);

  const handleIncreaseStock = () => {
    setTempStock(prev => prev + 1);
  };

  const handleDecreaseStock = () => {
    if (tempStock > 0) {
      setTempStock(prev => prev - 1);
    }
  };

  const handleUpdateStock = () => {
    if (onStockChange) {
      onStockChange(product.id, tempStock);
    }
  };

  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md animate-fadeIn",
      className
    )}>
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
        
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Stock:</span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleDecreaseStock}
                  className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground"
                  disabled={tempStock <= 0}
                >
                  -
                </button>
                <span className="w-8 text-center">{tempStock}</span>
                <button 
                  onClick={handleIncreaseStock}
                  className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              {product.stock > 0 ? (
                <span className="inline-flex items-center text-green-600 text-sm">
                  <Check className="w-4 h-4 mr-1" />
                  Available
                </span>
              ) : (
                <span className="inline-flex items-center text-red-600 text-sm">
                  <X className="w-4 h-4 mr-1" />
                  Out of stock
                </span>
              )}
            </div>
          </div>
          
          <Button 
            onClick={handleUpdateStock}
            variant="secondary"
            className="w-full"
            disabled={tempStock === product.stock}
          >
            Update Stock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
