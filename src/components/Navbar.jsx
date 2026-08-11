import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600 tracking-wide">
              Dev<span className="text-gray-800">Blog</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
              ပင်မစာမျက်နှာ
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              ဆောင်းပါးများ
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              အမျိုးအစားများ
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              ကျွနုပ်တို့အကြောင်း
            </a>
          </div>

          {/* Desktop Right Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
              ဆောင်းပါးရေးမည်
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? (
                // Close Icon (X)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Icon
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
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-3 font-medium text-gray-600">
          <a href="#" className="block py-2 text-indigo-600 border-b border-gray-100">
            ပင်မစာမျက်နှာ
          </a>
          <a href="#" className="block py-2 hover:text-indigo-600 border-b border-gray-100">
            ဆောင်းပါးများ
          </a>
          <a href="#" className="block py-2 hover:text-indigo-600 border-b border-gray-100">
            အမျိုးအစားများ
          </a>
          <a href="#" className="block py-2 hover:text-indigo-600 border-b border-gray-100">
            ကျွနုပ်တို့အကြောင်း
          </a>
          <div className="pt-2">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              ဆောင်းပါးရေးမည်
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}