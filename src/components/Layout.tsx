import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const location = useLocation();

  const signOutOnClick = () => {
    logout();
    setIsOpen(false);
  };

  const authOnClick = (action: 'login' | 'signup') => () => {
    loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
      authorizationParams: {
        screen_hint: action === 'signup' ? 'signup' : 'login',
      },
    });
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isEventsPage = location.pathname === '/events';

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-700 font-custom">
      <header className="bg-white shadow-md w-full fixed top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-black text-3xl lg:text-4xl xl:text-4xl w-full text-left md:text-center">Mercedes-Benz of Avon</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? 'Close' : <i className="fas fa-bars"></i>}
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex flex-col items-center justify-between bg-black text-white opacity-85 z-50 md:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl"
              aria-label="Close navigation"
            >
              Close
            </button>
            <div className="flex flex-col items-center mt-24 space-y-3">
              <Link to="/" onClick={handleLinkClick} className={`block py-3 text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
              <Link to="/vehicles" onClick={handleLinkClick} className={`block py-3 text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/vehicles' ? 'underline' : ''}`}>Vehicles</Link>
              <Link to="/services" onClick={handleLinkClick} className={`block py-3 text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/services' ? 'underline' : ''}`}>Services</Link>
              <Link to="/dashboard" onClick={handleLinkClick} className={`block py-3 text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/contact' ? 'underline' : ''}`}>Dashboard</Link>

              {!isAuthenticated ? (
                <>
                  <Link to="/" onClick={authOnClick('signup')} className={`block py-3 text-xl lg:text-2xl xl:text-3xl text-red-700 ${location.pathname === '/signup' ? 'underline' : ''}`}>Sign Up</Link>
                  <Link to="/" onClick={authOnClick('login')} className={`block py-3 text-xl lg:text-2xl xl:text-3xl text-red-700 ${location.pathname === '/login' ? 'underline' : ''}`}>Log In</Link>
                </>
              ) : (
                <Link to="/" onClick={signOutOnClick} className="block py-3 text-xl lg:text-2xl xl:text-3xl text-red-700">Sign Out</Link>
              )}
            </div>
            <div className="flex space-x-6 mb-10 text-2xl">
              <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope hover:text-blue-600 transition-colors duration-300"></i>
              </a>
              <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone hover:text-green-600 transition-colors duration-300"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram hover:text-pink-600 transition-colors duration-300"></i>
              </a>
            </div>
          </div>
        )}
        <nav className="hidden md:flex md:flex-row md:space-x-8 md:w-full md:justify-center py-4 text-black">
          <Link to="/" className={`text-xl lg:text-2xl xl:text-2xl hover:underline ${location.pathname === '/' ? 'underline' : ''}`}>Home</Link>
          <Link to="/vehicles" className={`text-xl lg:text-2xl xl:text-2xl hover:underline ${location.pathname === '/vehicles' ? 'underline' : ''}`}>Vehicles</Link>
          <Link to="/services" className={`text-xl lg:text-2xl xl:text-2xl hover:underline ${location.pathname === '/services' ? 'underline' : ''}`}>Services</Link>
          <Link to="/dashboard" className={`text-xl lg:text-2xl xl:text-2xl hover:underline ${location.pathname === '/contact' ? 'underline' : ''}`}>Dashboard</Link>
          
          {!isAuthenticated ? (
            <>
              <Link to="/" onClick={authOnClick('signup')} className={`text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline ${location.pathname === '/signup' ? 'underline' : ''}`}>Sign Up</Link>
              <Link to="/" onClick={authOnClick('login')} className={`text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline ${location.pathname === '/login' ? 'underline' : ''}`}>Log In</Link>
            </>
          ) : (
            <Link to="/" onClick={signOutOnClick} className="text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline">Sign Out</Link>
          )}
        </nav>
      </header>
      <main className={`flex-grow overflow-auto pt-24 pb-10 ${isEventsPage ? 'bg-events-background' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
