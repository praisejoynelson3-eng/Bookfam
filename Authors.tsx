import React from 'react';
import { PRICING_TIERS, TESTIMONIALS } from '../data';
import { Button } from '../components/ui/Button';
import { CheckCircle, HelpCircle } from 'lucide-react';

export const Authors: React.FC = () => {
  return (
    <div className="bg-cream-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Reader Circle</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Honest, curated exposure for serious authors.
          </p>
        </div>
      </div>

      {/* Model Explanation */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg mx-auto text-gray-600">
          <h3 className="text-navy-900 font-serif text-2xl mb-4">How the Tipping Fee Works</h3>
          <p>
            BookFam operates on a "Tipping Fee" model. Your payment covers the administrative time of the Curator (A.H. Leonard) to vet your work and manage the logistics of distributing your book to our 500+ reader community.
          </p>
          <p>
            <strong>Note:</strong> We do not pay readers for positive reviews. Readers are volunteers who receive a free copy of your book. This ensures compliance with platform guidelines (Amazon/Goodreads) and maintains the integrity of the feedback.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`bg-white rounded-lg p-8 border-2 flex flex-col ${tier.recommended ? 'border-gold-500 shadow-xl relative' : 'border-gray-200'}`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white px-4 py-1 text-sm font-bold uppercase tracking-wide rounded-full">
                  Curator's Choice
                </div>
              )}
              <h3 className="text-xl font-bold text-navy-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-serif font-bold text-navy-900">{tier.price}</span>
                <span className="ml-2 text-gray-500">/ title</span>
              </div>
              <p className="text-gold-600 font-medium mb-6">{tier.readersCount}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.recommended ? 'primary' : 'outline'} fullWidth>
                Select {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16 mb-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-12">From the Vault</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-cream-50 p-8 rounded-sm text-left">
                        <p className="text-gray-600 italic mb-4 text-lg">"{t.quote}"</p>
                        <div>
                            <p className="font-bold text-navy-900">{t.authorName}</p>
                            <p className="text-sm text-gold-600">Author of {t.bookTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 shadow-lg rounded-sm border-t-4 border-navy-900">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-navy-900">Submit for Vetting</h2>
            <p className="text-gray-500 mt-2">Start the process. No payment required until acceptance.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-navy-900 focus:ring-navy-900 p-3 border" placeholder="J. Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-navy-900 focus:ring-navy-900 p-3 border" placeholder="author@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
              <input type="text" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-navy-900 focus:ring-navy-900 p-3 border" placeholder="The Great Novel" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                <select className="w-full border-gray-300 rounded-sm shadow-sm focus:border-navy-900 focus:ring-navy-900 p-3 border">
                    <option>Fiction</option>
                    <option>Non-Fiction</option>
                    <option>Business</option>
                    <option>Spiritual</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Word Count</label>
                <input type="number" className="w-full border-gray-300 rounded-sm shadow-sm focus:border-navy-900 focus:ring-navy-900 p-3 border" placeholder="50000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Elevator Pitch (2-3 sentences)</label>
              <textarea rows={4} className="w-full border-gray-300 rounded-sm shadow-sm focus:border-navy-900 focus:ring-navy-900 p-3 border"></textarea>
            </div>

            <div className="flex items-center">
              <input id="terms" type="checkbox" className="h-4 w-4 text-navy-900 focus:ring-navy-900 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I understand that submission does not guarantee acceptance.
              </label>
            </div>

            <Button fullWidth size="lg">Submit Application</Button>
          </form>
        </div>
      </div>
    </div>
  );
};