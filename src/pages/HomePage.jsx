import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-indigo-600 text-white rounded-2xl p-10 text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyStore</h1>
        <p className="text-indigo-100 text-lg mb-6">Explore high-quality modern products at the best prices.</p>
        <Link to="/shop" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors inline-block">
          Shop Now →
        </Link>
      </div>
    </div>
  );
}