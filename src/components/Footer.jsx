import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              My<span className="text-indigo-400">Store</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your one-stop destination for modern, high-quality products curated for your everyday lifestyle.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-indigo-400 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/category" className="hover:text-indigo-400 transition-colors">Category</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:contact@mystore.com" className="hover:text-indigo-400 transition-colors">
                  Send Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
  <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
  <p className="mt-2 sm:mt-0 flex items-center gap-1.5">
    <span>Developed with</span>
    <span className="text-red-500">&hearts;</span>
    <span>by</span>
    <span className="text-indigo-400 font-medium">Thant Zin Oo</span>
  </p>
</div>
      </div>
    </footer>
  );
}