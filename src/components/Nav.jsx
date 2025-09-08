import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

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
              className={`font-medium relative transition-all duration-300 ${
                isActive("/")
                  ? "text-primary"
                  : "text-secondary hover:text-accent"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                  isActive("/") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              to="/work"
              className={`font-medium relative transition-all duration-300 ${
                isActive("/work")
                  ? "text-primary"
                  : "text-secondary hover:text-accent"
              }`}
            >
              Work
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                  isActive("/work") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              to="/about"
              className={`font-medium relative transition-all duration-300 ${
                isActive("/about")
                  ? "text-primary"
                  : "text-secondary hover:text-accent"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                  isActive("/about") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              to="/process"
              className={`font-medium relative transition-all duration-300 ${
                isActive("/process")
                  ? "text-primary"
                  : "text-secondary hover:text-accent"
              }`}
            >
              Process
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                  isActive("/process") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              to="/blog"
              className={`font-medium relative transition-all duration-300 ${
                isActive("/blog")
                  ? "text-primary"
                  : "text-secondary hover:text-accent"
              }`}
            >
              Blog
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                  isActive("/blog") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              to="/contact"
              className={`font-medium relative transition-all duration-300 ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-secondary hover:text-accent"
              }`}
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                  isActive("/contact") ? "w-full" : "w-0"
                }`}
              ></span>
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
              <Link
                to="/"
                className={`font-medium relative ${
                  isActive("/")
                    ? "text-primary"
                    : "text-secondary hover:text-accent"
                } transition-all duration-300`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                    isActive("/") ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <Link
                to="/work"
                className={`font-medium relative ${
                  isActive("/work")
                    ? "text-primary"
                    : "text-secondary hover:text-accent"
                } transition-all duration-300`}
              >
                Work
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                    isActive("/work") ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <Link
                to="/about"
                className={`font-medium relative ${
                  isActive("/about")
                    ? "text-primary"
                    : "text-secondary hover:text-accent"
                } transition-all duration-300`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                    isActive("/about") ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <Link
                to="/process"
                className={`font-medium relative ${
                  isActive("/process")
                    ? "text-primary"
                    : "text-secondary hover:text-accent"
                } transition-all duration-300`}
              >
                Process
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                    isActive("/process") ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <Link
                to="/blog"
                className={`font-medium relative ${
                  isActive("/blog")
                    ? "text-primary"
                    : "text-secondary hover:text-accent"
                } transition-all duration-300`}
              >
                Blog
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                    isActive("/blog") ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <Link
                to="/contact"
                className={`font-medium relative ${
                  isActive("/contact")
                    ? "text-primary"
                    : "text-secondary hover:text-accent"
                } transition-all duration-300`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full ${
                    isActive("/contact") ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
