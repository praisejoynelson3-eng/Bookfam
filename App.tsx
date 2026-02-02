import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Authors } from './pages/Authors';
import { Vault } from './pages/Vault';
import { Dashboard } from './pages/Dashboard';

// Wrapper to conditionally render layout elements if needed, 
// though for this app we want Navbar/Footer everywhere.
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  
  // Example: Hide footer on dashboard if desired, but we'll keep it for now.
  const isDashboard = pathname === '/dashboard';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BookProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </BookProvider>
  );
};

export default App;