import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Feather, Users, Award, ShieldCheck, TrendingUp, BookOpen, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { INITIAL_BOOKS } from '../data';
import { BookCard } from '../components/BookCard';

export const Home: React.FC = () => {
  // Select a few books to feature
  const featuredBooks = INITIAL_BOOKS.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-navy-900 pt-24 pb-32 overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-navy-800 rounded-full px-4 py-1 mb-8 border border-navy-700">
             <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
             </span>
             <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">Currently Vetting New Titles</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-cream-50 mb-6 leading-tight">
            Connecting Authors with a Community of <br className="hidden md:block"/>
            <span className="text-gold-500 italic">500+ Dedicated Readers</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10 font-light">
            No bots. No review swaps. Just honest feedback from a curated circle of literary enthusiasts overseen by a professional curator.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/authors">
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Submit Your Book
              </Button>
            </Link>
            <Link to="/vault">
              <Button variant="outline" className="px-8 py-4 text-lg text-cream-50 border-cream-50 hover:bg-white/10">
                Browse The Vault
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">Trusted by authors featured on</p>
           <div className="flex justify-center items-center space-x-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap gap-y-8">
             <span className="text-xl font-serif font-bold text-gray-800">Goodreads</span>
             <span className="text-xl font-serif font-bold text-gray-800">Amazon KDP</span>
             <span className="text-xl font-serif font-bold text-gray-800">Publishers Weekly</span>
             <span className="text-xl font-serif font-bold text-gray-800">Kirkus</span>
             <span className="text-xl font-serif font-bold text-gray-800">Substack</span>
           </div>
        </div>
      </div>

      {/* NEW: Featured Selections */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-2">Featured from The Vault</h2>
              <p className="text-gray-600">Top-rated selections currently making waves in the circle.</p>
            </div>
            <Link to="/vault" className="hidden md:flex items-center text-gold-600 font-medium hover:text-navy-900 transition-colors">
              View All Books <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
             <Link to="/vault">
               <Button variant="outline">View All Books</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Curator's Note */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-50 p-10 md:p-14 shadow-xl border-l-4 border-gold-500 relative">
             <Feather className="absolute top-8 right-8 text-gray-200 transform rotate-12" size={100} />
             <div className="relative z-10">
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">A Note from the Curator</h2>
                <div className="prose prose-lg text-gray-600 font-serif leading-relaxed">
                  <p className="mb-4">
                    "In an era of algorithmic recommendations and 'hustle culture' publishing, we've lost the art of the slow, thoughtful read."
                  </p>
                  <p className="mb-4">
                    My name is <strong>A.H. Leonard</strong>. I founded BookFam not to scale a tech unicorn, but to solve a simple problem: Good books were dying in obscurity because their authors couldn't find honest readers.
                  </p>
                  <p className="mb-4">
                    Our community is capped. Our readers are vetted. We don't accept every submission. This isn't a vanity metric service; it's a literary circle for the digital age. If you're looking for operational honesty and literary depth, you're in the right place.
                  </p>
                  <p className="mt-8 font-bold text-navy-900 text-right">— A.H. Leonard</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: The Anti-Algorithm Manifesto */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Philosophy</span>
                <h2 className="text-4xl font-serif font-bold mb-6">The Anti-Algorithm</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Most platforms optimize for engagement, clicks, and outrage. We optimize for depth, nuance, and prose. 
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  A book shouldn't be judged by a 3-second TikTok. It should be judged by a reader sitting in a quiet room, turning pages, absorbing ideas. We are reclaiming that space.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-200">Human curation over machine learning.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-200">Slow reading over speed skimming.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-gray-200">Honest critique over paid hype.</span>
                  </li>
                </ul>
             </div>
             <div className="relative h-96 bg-navy-800 rounded-sm overflow-hidden flex items-center justify-center border border-navy-700">
                <div className="absolute inset-0 bg-navy-900 opacity-50"></div>
                <div className="relative z-10 text-center p-8">
                  <h3 className="text-3xl font-serif italic text-gold-500 mb-2">"Literature is the original internet."</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-widest">— The Circle</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">The Curation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We operate differently than standard review sites. It's quality over speed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <ShieldCheck size={40} className="text-gold-600" />, 
                title: "1. Submission & Vetting", 
                desc: "Authors submit their manuscript. I personally review the first 50 pages to ensure it meets our quality standards." 
              },
              { 
                icon: <Users size={40} className="text-gold-600" />, 
                title: "2. The Reader Circle", 
                desc: "Accepted books are distributed to our closed community of 500+ readers. Readers opt-in based on interest, not assignment." 
              },
              { 
                icon: <Award size={40} className="text-gold-600" />, 
                title: "3. Feedback Loop", 
                desc: "Readers provide detailed feedback and honest reviews on major platforms. You receive a curated report of their insights." 
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-cream-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Community Stats */}
      <section className="py-16 bg-cream-100 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-4 text-navy-900"><Users size={32} /></div>
                <div className="text-4xl font-serif font-bold text-navy-900 mb-1">540+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Active Readers</div>
              </div>
              <div>
                <div className="flex justify-center mb-4 text-navy-900"><BookOpen size={32} /></div>
                <div className="text-4xl font-serif font-bold text-navy-900 mb-1">12k+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Pages Vetted</div>
              </div>
              <div>
                <div className="flex justify-center mb-4 text-navy-900"><MessageSquare size={32} /></div>
                <div className="text-4xl font-serif font-bold text-navy-900 mb-1">3.5k</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Honest Reviews</div>
              </div>
              <div>
                <div className="flex justify-center mb-4 text-navy-900"><TrendingUp size={32} /></div>
                <div className="text-4xl font-serif font-bold text-navy-900 mb-1">89%</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Acceptance Rate</div>
              </div>
            </div>
         </div>
      </section>
      
      {/* CTA */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500 opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready for Honest Feedback?</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Join the waitlist for our next review cycle. Spots are limited to maintain reader quality and ensure every book gets the attention it deserves.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/authors">
              <Button variant="secondary" className="px-10 py-4 text-lg w-full sm:w-auto">
                View Submission Packages
              </Button>
            </Link>
            <Link to="/authors">
               <button className="px-10 py-4 text-lg text-white border border-white/30 hover:bg-white/10 rounded-sm w-full sm:w-auto transition-colors">
                  Contact Curator
               </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};