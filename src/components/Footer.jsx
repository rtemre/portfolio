import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "../assets/svgs/twitter";
import LinkedInIcon from "../assets/svgs/linkedin";
import InstagramIcon from "../assets/svgs/instagram";
import PinterestIcon from "../assets/svgs/pinterest";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-playfair font-bold text-primary mb-4 block"
            >
              Portfolio<span className="text-accent">.</span>
            </Link>
            <p className="text-secondary mb-6 max-w-md">
              Creating digital experiences that seamlessly blend aesthetic
              excellence with strategic thinking, where invisible design becomes
              extraordinary.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/work"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-primary">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@portfolio.com"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  hello@portfolio.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-secondary hover:text-accent transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-secondary">Available for projects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm">
            © 2025 Portfolio Reimagined. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-secondary hover:text-accent text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-secondary hover:text-accent text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-secondary hover:text-accent text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
