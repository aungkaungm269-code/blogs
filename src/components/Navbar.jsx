import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1'
      : 'hover:text-indigo-600 transition-colors';

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? 'block py-2 text-indigo-600 font-semibold border-b border-gray-100'
      : 'block py-2 hover:text-indigo-600 border-b border-gray-100 transition-colors';

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-wide">
              My<span className="text-gray-800">Store</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>
            <NavLink to="/category" className={navLinkClass}>
              Category
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </div>

          {/* Desktop Right Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/shop"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-2 font-medium text-gray-600">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/category" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
            Category
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}