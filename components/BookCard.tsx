import React from 'react';
import { Book } from '../types';
import { Star, Users } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full rounded-sm overflow-hidden group">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-navy-900 text-white text-xs px-2 py-1 uppercase tracking-wider font-semibold opacity-90">
          {book.category}
        </div>
        {book.status === 'Active Reading' && (
           <div className="absolute bottom-0 left-0 w-full bg-gold-600 text-white text-xs py-1 text-center font-medium">
             Active Reader Circle
           </div>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold text-navy-900 leading-tight">
            {book.title}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">
          By {book.author}
        </p>
        
        <div className="flex items-center mb-4 text-gold-600">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < book.rating ? "currentColor" : "none"} 
              className={i < book.rating ? "text-gold-600" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-xs text-gray-400">({book.rating}.0)</span>
        </div>

        <div className="mb-6 flex-1">
          <p className="text-sm text-gray-600 italic border-l-2 border-gold-500 pl-3">
            "{book.curatorTake}"
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Users size={14} />
              {book.readerSlotsFilled}/{book.totalReaderSlots} Readers
            </span>
            <span className={`px-2 py-1 rounded-full ${
              book.status === 'Active Reading' ? 'bg-green-100 text-green-800' :
              book.status === 'Vetting' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {book.status}
            </span>
        </div>
      </div>
    </div>
  );
};
