import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-medium" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-playfair font-bold text-primary hover:text-accent transition-colors duration-300"
          >
            Portfolio<span className="text-accent">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-primary font-medium hover:text-accent transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-secondary font-medium hover:text-accent transition-colors duration-300"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-secondary font-medium hover:text-accent transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/process"
              className="text-secondary font-medium hover:text-accent transition-colors duration-300"
            >
              Process
            </Link>
            <Link
              to="/blog"
              className="text-secondary font-medium hover:text-accent transition-colors duration-300"
            >
              Blog
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-primary hover:text-accent transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-primary font-medium">
                Home
              </Link>
              <Link to="/work" className="text-secondary font-medium">
                Work
              </Link>
              <Link to="/about" className="text-secondary font-medium">
                About
              </Link>
              <Link to="/process" className="text-secondary font-medium">
                Process
              </Link>
              <Link to="/blog" className="text-secondary font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-secondary font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
