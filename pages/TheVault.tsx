import React, { useState } from 'react';
import { useBooks } from '../context/BookContext';
import { BookCard } from '../components/BookCard';
import { Filter } from 'lucide-react';

type FilterType = 'All' | 'Fiction' | 'Non-Fiction' | 'Business' | 'Spiritual';

export const Vault: React.FC = () => {
  const { books } = useBooks();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredBooks = activeFilter === 'All' 
    ? books 
    : books.filter(b => b.category === activeFilter);

  const filters: FilterType[] = ['All', 'Fiction', 'Non-Fiction', 'Business', 'Spiritual'];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">The Vault</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated collection of books that have passed through our reader circle. 
            Browse by genre to find your next read.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === filter 
                  ? 'bg-navy-900 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {activeFilter === filter && <Filter size={14} />}
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No books found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};
