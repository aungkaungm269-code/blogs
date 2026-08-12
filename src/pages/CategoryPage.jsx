import React from 'react';

export default function CategoryPage() {
  const categories = [
    { id: 1, name: 'Electronics', count: '120+ Items' },
    { id: 2, name: 'Fashion', count: '250+ Items' },
    { id: 3, name: 'Home & Living', count: '80+ Items' },
    { id: 4, name: 'Books', count: '150+ Items' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Product Categories</h1>
      <p className="text-gray-500 mb-8">Browse items by category to find what you need.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 p-6 rounded-xl text-center cursor-pointer transition-all shadow-sm hover:shadow"
          >
            <h3 className="text-xl font-semibold text-indigo-900 mb-1">{cat.name}</h3>
            <span className="text-sm text-indigo-600 font-medium">{cat.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}