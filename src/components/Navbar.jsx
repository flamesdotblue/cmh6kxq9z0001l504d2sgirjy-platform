import React from 'react';
import { Search, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500" />
          <span className="text-lg font-semibold tracking-tight">PriceLens</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#compare" className="hover:text-white transition-colors">Compare</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-colors">
            <Search className="h-4 w-4" />
            <span>Quick Search</span>
          </button>
          <button className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
