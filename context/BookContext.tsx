import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Book } from '../types';
import { INITIAL_BOOKS } from '../data';

interface BookContextType {
  books: Book[];
  addBook: (book: Book) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);

  const addBook = (book: Book) => {
    setBooks((prev) => [book, ...prev]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
};
