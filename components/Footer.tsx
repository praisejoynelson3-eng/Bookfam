import React from 'react';
import { BookOpen, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-cream-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-gold-500" size={24} />
              <span className="font-serif text-2xl font-bold tracking-tight">BookFam</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Connecting conscientious authors with a community of 500+ vetted readers. Quality curation over quantity. Operational honesty over hustle.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#/authors" className="text-base text-gray-300 hover:text-white">For Authors</a></li>
              <li><a href="#/vault" className="text-base text-gray-300 hover:text-white">Curator Reviews</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Editorial Vetting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About A.H. Leonard</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Community Code</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} BookFam. All rights reserved. Est. 2024.
          </p>
        </div>
      </div>
    </footer>
  );
};
