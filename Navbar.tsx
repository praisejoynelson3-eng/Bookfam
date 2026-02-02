import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-gold-600 font-semibold" : "text-gray-600 hover:text-navy-900";
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 bg-navy-900 text-white flex items-center justify-center rounded-sm group-hover:bg-gold-600 transition-colors">
                <BookOpen size={20} />
              </div>
              <span className="font-serif text-2xl font-bold text-navy-900 tracking-tight">
                Book<span className="text-gold-600">Fam</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-10">
            <Link to="/" className={`${isActive('/')} text-sm uppercase tracking-wider transition-colors`}>
              Home
            </Link>
            <Link to="/vault" className={`${isActive('/vault')} text-sm uppercase tracking-wider transition-colors`}>
              The Vault
            </Link>
            <Link to="/authors" className={`${isActive('/authors')} text-sm uppercase tracking-wider transition-colors`}>
              For Authors
            </Link>
            <Link to="/dashboard" className={`${isActive('/dashboard')} text-sm uppercase tracking-wider transition-colors`}>
              Admin
            </Link>
            <Link to="/authors">
                <button className="bg-navy-900 text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-gold-600 transition-colors">
                Join Circle
                </button>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">Home</Link>
            <Link to="/vault" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">The Vault</Link>
            <Link to="/authors" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">For Authors</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};