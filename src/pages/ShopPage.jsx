import React from 'react';

export default function ShopPage() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99' },
    { id: 2, name: 'Smart Watch', price: '$149.99' },
    { id: 3, name: 'Ergonomic Desk Chair', price: '$199.99' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
      <p className="text-gray-500 mb-8">Explore our complete collection of curated items.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 font-medium">
              Product Image
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
            <p className="text-indigo-600 font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}