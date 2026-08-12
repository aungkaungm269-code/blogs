import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
        Welcome to MyStore! We are dedicated to offering high-quality products, fast delivery, and an exceptional online shopping experience tailored to your daily needs.
      </p>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our goal is to build a modern, intuitive, and seamlessly accessible modern web application powered by React, Vite, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}