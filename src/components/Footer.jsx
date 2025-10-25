import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} PriceLens. Built for modern, minimalist price comparison.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
