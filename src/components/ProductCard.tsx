
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  className?: string;
}

const ProductCard = ({ product, onStockChange, className }: ProductCardProps) => {
  const handleIncreaseStock = () => {
    if (onStockChange) {
      onStockChange(product.id, product.stock + 1);
    }
  };

  const handleDecreaseStock = () => {
    if (onStockChange && product.stock > 0) {
      onStockChange(product.id, product.stock - 1);
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
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Stock:</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleDecreaseStock}
                className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground"
                disabled={product.stock <= 0}
              >
                -
              </button>
              <span className="w-8 text-center">{product.stock}</span>
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
      </div>
    </div>
  );
};

export default ProductCard;
