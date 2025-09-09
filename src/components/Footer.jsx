import React from "react";
import { Link } from "react-router-dom";
import {
  socialLinks,
  quickLinks,
  contactLinks,
  footerBottomLinks,
} from "./constants.jsx";

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
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-primary">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              {contactLinks.map((link, index) => {
                if (link.isText) {
                  return (
                    <li key={index} className="text-secondary">
                      {link.label}
                    </li>
                  );
                }

                if (link.to) {
                  return (
                    <li key={index}>
                      <Link
                        to={link.to}
                        className="text-secondary hover:text-accent transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm">
            © 2025 Portfolio Reimagined. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerBottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-secondary hover:text-accent text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
