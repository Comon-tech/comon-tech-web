// Web.js

import React from 'react';
//import PortfolioForm from '../Components/PortfolioForm';

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-slate-950 to-fuchsia-900 p-4">
        <div className="container mx-auto">
        <a href="/" className="text-white font-bold text-xl">ComonTech</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-slate-950 to-fuchsia-900 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Your Awesome Events Page</h1>
          <p className="text-lg mb-8">
            Welcome to our community of self-taught developers!
          </p>
          <button className="bg-white text-fuchsia-900 py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-950 to-fuchsia-900 p-4">
        <div className="container mx-auto text-center text-white">
          &copy; 2023 Tech Community. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Events;

