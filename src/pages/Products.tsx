
import React, { useState } from 'react';
import ProductCard, { Product } from '@/components/ProductCard';
import { toast } from 'sonner';

// Initial product data
const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 249.99,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Audio'
  },
  {
    id: 2,
    name: 'Wireless Keyboard',
    price: 129.99,
    stock: 32,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 299.99,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Wearables'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 179.99,
    stock: 27,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Audio'
  },
  {
    id: 5,
    name: 'Ergonomic Mouse',
    price: 89.99,
    stock: 41,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Laptop Stand',
    price: 49.99,
    stock: 36,
    image: 'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Accessories'
  },
];

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleStockChange = (id: number, newStock: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, stock: newStock } : product
    ));
    
    // Get the product name for the notification
    const productName = products.find(p => p.id === id)?.name;
    toast.success(`Stock updated for ${productName}`, {
      description: `New stock quantity: ${newStock}`,
    });
  };
  
  return (
    <div className="transition-page space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-muted-foreground">Manage your product inventory.</p>
      </div>
      
      <div className="glass-card px-4 py-2 rounded-lg text-sm">
        <span className="font-medium">{products.length}</span> products
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onStockChange={handleStockChange} 
            className={{ 'animate-delay-100': index % 3 === 1, 'animate-delay-200': index % 3 === 2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
