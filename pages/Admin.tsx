import React, { useState } from 'react';
import { useBooks } from '../context/BookContext';
import { Book } from '../types';
import { Button } from '../components/ui/Button';
import { Plus, List, Trash2 } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { books, addBook } = useBooks();
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');

  // Form State
  const [formData, setFormData] = useState<Partial<Book>>({
    title: '',
    author: '',
    coverUrl: '',
    category: 'Fiction',
    rating: 0,
    curatorTake: '',
    status: 'Vetting',
    readerSlotsFilled: 0,
    totalReaderSlots: 50
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;

    const newBook: Book = {
      id: Date.now().toString(),
      title: formData.title!,
      author: formData.author!,
      coverUrl: formData.coverUrl || 'https://picsum.photos/300/450',
      category: formData.category as any,
      rating: Number(formData.rating) || 0,
      curatorTake: formData.curatorTake || 'Pending review...',
      status: formData.status as any,
      readerSlotsFilled: Number(formData.readerSlotsFilled) || 0,
      totalReaderSlots: 50
    };

    addBook(newBook);
    alert('Book added to The Vault!');
    setActiveTab('list');
    setFormData({
        title: '',
        author: '',
        coverUrl: '',
        category: 'Fiction',
        rating: 0,
        curatorTake: '',
        status: 'Vetting',
        readerSlotsFilled: 0,
        totalReaderSlots: 50
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-serif font-bold text-navy-900">Command Center</h1>
                <p className="text-gray-500">Manage the BookFam library and curation status.</p>
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={() => setActiveTab('list')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm ${activeTab === 'list' ? 'bg-navy-900 text-white' : 'bg-white text-gray-700'}`}
                >
                    <List size={18} /> List
                </button>
                <button 
                    onClick={() => setActiveTab('add')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-sm ${activeTab === 'add' ? 'bg-navy-900 text-white' : 'bg-white text-gray-700'}`}
                >
                    <Plus size={18} /> Add Book
                </button>
            </div>
        </header>

        {activeTab === 'list' && (
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Readers</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full object-cover" src={book.coverUrl} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{book.title}</div>
                                            <div className="text-sm text-gray-500">{book.author}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        book.status === 'Active Reading' ? 'bg-green-100 text-green-800' : 
                                        book.status === 'Vetting' ? 'bg-yellow-100 text-yellow-800' : 
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {book.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {book.readerSlotsFilled} / {book.totalReaderSlots}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {book.rating > 0 ? book.rating : '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}

        {activeTab === 'add' && (
            <div className="bg-white rounded-sm shadow-sm p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-6">Add New Title</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input name="title" value={formData.title} onChange={handleInputChange} type="text" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Author</label>
                            <input name="author" value={formData.author} onChange={handleInputChange} type="text" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select name="category" value={formData.category} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2">
                                <option>Fiction</option>
                                <option>Non-Fiction</option>
                                <option>Business</option>
                                <option>Spiritual</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <select name="status" value={formData.status} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2">
                                <option value="Vetting">Vetting</option>
                                <option value="Active Reading">Active Reading</option>
                                <option value="Archived">Archived</option>
                            </select>
                        </div>
                    </div>

                    <div>
                         <label className="block text-sm font-medium text-gray-700">Cover URL (Optional)</label>
                         <input name="coverUrl" value={formData.coverUrl} onChange={handleInputChange} type="text" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2" placeholder="https://..." />
                    </div>

                    <div>
                         <label className="block text-sm font-medium text-gray-700">Curator's Take</label>
                         <textarea name="curatorTake" value={formData.curatorTake} onChange={handleInputChange} rows={3} className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2"></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Reader Slots Filled</label>
                            <input name="readerSlotsFilled" value={formData.readerSlotsFilled} onChange={handleInputChange} type="number" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
                            <input name="rating" value={formData.rating} onChange={handleInputChange} type="number" max="5" min="0" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm p-2" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button type="submit" fullWidth>Add Book to Vault</Button>
                    </div>
                </form>
            </div>
        )}
      </div>
    </div>
  );
};
