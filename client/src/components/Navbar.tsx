import { useState } from 'react';
import { Link } from 'wouter';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-poppins text-2xl font-bold text-[var(--primary)] flex items-center">
              <img src="https://res.cloudinary.com/dxxz4qcy9/image/upload/v1742484768/avinya_2k25_uhhptt.png" alt="Avinya Logo" className="h-10 w-10 mr-2 " />
              <span className="text-[var(--accent)]">Avinya</span>
            </Link>

          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium hover:text-[var(--primary)] transition duration-300">Home</a>
            <a href="#about" className="font-medium hover:text-[var(--primary)] transition duration-300">About</a>
            <a href="#events" className="font-medium hover:text-[var(--primary)] transition duration-300">Events</a>
            <a href="#schedule" className="font-medium hover:text-[var(--primary)] transition duration-300">Schedule</a>
            <a href="#faq" className="font-medium hover:text-[var(--primary)] transition duration-300">FAQ</a>
            <a href="#register" className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-full font-medium transition duration-300">Register Now</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-[var(--primary)]"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--primary)] hover:text-white transition duration-300">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--primary)] hover:text-white transition duration-300">About</a>
          <a href="#events" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--primary)] hover:text-white transition duration-300">Events</a>
          <a href="#schedule" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--primary)] hover:text-white transition duration-300">Schedule</a>
          <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[var(--primary)] hover:text-white transition duration-300">FAQ</a>
          <a href="#register" className="block px-3 py-2 bg-[var(--primary)] text-white rounded-md text-base font-medium hover:bg-[var(--primary-dark)] transition duration-300">Register Now</a>
        </div>
      </div>
    </nav>
  );
}
