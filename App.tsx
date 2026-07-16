
import React, { useState, useEffect, Suspense, memo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

// Dynamic imports for code splitting
const Home = React.lazy(() => import('./views/Home'));
const Projects = React.lazy(() => import('./views/Projects'));
const ProjectDetail = React.lazy(() => import('./views/ProjectDetail'));
const Vision = React.lazy(() => import('./views/Vision'));
const Capacities = React.lazy(() => import('./views/Capacities'));
const Contact = React.lazy(() => import('./views/Contact'));
const ClientPortal = React.lazy(() => import('./src/components/portal/ClientPortal'));

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
      <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-tighter pointer-events-auto">
        PROJECT MEDIA <span className="text-xs uppercase font-sans tracking-widest text-zinc-500">INC.</span>
      </Link>
      
      <div className="hidden md:flex space-x-8 text-xs font-sans tracking-widest uppercase items-center pointer-events-auto">
        <Link to="/projects" className="hover:text-zinc-400 transition-colors">Projects</Link>
        <Link to="/vision" className="hover:text-zinc-400 transition-colors">Vision</Link>
        <Link to="/capacities" className="hover:text-zinc-400 transition-colors">Capacities</Link>
        <Link to="/contact" className="hover:text-zinc-400 transition-colors">Contact</Link>
        <Link to="/portal" className="px-4 py-2 border border-white/20 hover:bg-white hover:text-black transition-all">Client Portal</Link>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden pointer-events-auto text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center space-y-8 z-40 pointer-events-auto">
          <Link to="/projects" className="text-2xl font-serif">Projects</Link>
          <Link to="/vision" className="text-2xl font-serif">Vision</Link>
          <Link to="/capacities" className="text-2xl font-serif">Capacities</Link>
          <Link to="/contact" className="text-2xl font-serif">Contact</Link>
          <Link to="/portal" className="text-2xl font-serif text-zinc-400">Client Portal</Link>
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8">
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
});

const Footer = memo(() => (
  <footer className="bg-black border-t border-zinc-900 py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-6">
        <h3 className="font-serif text-2xl">Project Media Inc</h3>
        <p className="text-zinc-500 text-sm max-w-xs leading-relaxed uppercase tracking-wider">
          Cinema as Language.<br />
          Strategy as Foundation.
        </p>
      </div>
      <div className="flex flex-col space-y-2 text-sm tracking-widest uppercase">
        <Link to="/projects" className="hover:text-zinc-400">Works</Link>
        <Link to="/vision" className="hover:text-zinc-400">The Manifesto</Link>
        <Link to="/capacities" className="hover:text-zinc-400">Capabilities</Link>
        <Link to="/contact" className="hover:text-zinc-400">Collaborate</Link>
      </div>
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-zinc-600">Contacto</p>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Contacto Geral</p>
          <a href="mailto:geral@projectmediainc.com" className="text-sm hover:text-zinc-300 transition-colors">geral@projectmediainc.com</a>
        </div>
      </div>
    </div>
    <div className="mt-24 text-[10px] uppercase tracking-[0.2em] text-zinc-700 flex justify-between">
      <span>© 2024 Project Media Inc. All rights reserved.</span>
      <span className="hidden md:inline">Autoral • Provocador • Estratégico</span>
    </div>
  </footer>
));

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="h-screen bg-black flex items-center justify-center text-white font-serif tracking-widest uppercase text-xs">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/capacities" element={<Capacities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portal" element={<ClientPortal />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
