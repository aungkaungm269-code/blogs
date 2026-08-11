import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}