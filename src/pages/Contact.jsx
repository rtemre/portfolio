import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Contact us"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                e.target.onError = null;
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-hero font-playfair mb-6 animate-fade-in text-white">
              Let's Create Something{" "}
              <span className="text-accent">Extraordinary</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
              Ready to transform your vision into reality? Let's discuss your
              project and explore how we can work together to achieve
              exceptional results.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-display font-playfair mb-8 text-primary">
                  Start the Conversation
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="form-input"
                    >
                      <option value="">Select project type</option>
                      <option value="web-design">Web Design</option>
                      <option value="branding">Branding</option>
                      <option value="ux-ui">UX/UI Design</option>
                      <option value="development">Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Budget Range
                    </label>
                    <select id="budget" name="budget" className="form-input">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="form-input"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      required
                      className="form-input"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="projectBrief"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Project Brief (Optional)
                    </label>
                    <input
                      type="file"
                      id="projectBrief"
                      name="projectBrief"
                      className="form-input"
                      accept=".pdf,.doc,.docx,.zip"
                    />
                    <p className="text-sm text-secondary mt-1">
                      Upload any relevant documents, wireframes, or existing
                      materials
                    </p>
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        className="mr-2"
                      />
                      <span className="text-sm text-secondary">
                        Subscribe to our newsletter for design insights and
                        updates
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-display font-playfair mb-8 text-primary">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@portfolio.com"
                        className="text-secondary hover:text-accent transition-colors duration-300"
                      >
                        hello@portfolio.com
                      </a>
                      <p className="text-sm text-secondary mt-1">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-success"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                        Phone
                      </h3>
                      <a
                        href="tel:+1234567890"
                        className="text-secondary hover:text-accent transition-colors duration-300"
                      >
                        +1 (234) 567-890
                      </a>
                      <p className="text-sm text-secondary mt-1">
                        Available Monday-Friday, 9 AM - 5 PM EST
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-warning"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                        Location
                      </h3>
                      <p className="text-secondary">
                        San Francisco, CA
                        <br />
                        Remote collaboration worldwide
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-error"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                        Connect
                      </h3>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="text-secondary hover:text-accent transition-colors duration-300"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="#"
                          className="text-secondary hover:text-accent transition-colors duration-300"
                        >
                          Twitter
                        </a>
                        <a
                          href="#"
                          className="text-secondary hover:text-accent transition-colors duration-300"
                        >
                          Dribbble
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="font-playfair text-xl font-semibold mb-6 text-primary">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <button className="faq-toggle flex items-center justify-between w-full text-left">
                        <span className="font-medium text-primary">
                          What's your typical response time?
                        </span>
                        <svg
                          className="w-5 h-5 text-secondary transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div className="faq-content hidden mt-2 text-secondary">
                        We typically respond to all inquiries within 24 hours
                        during business days.
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <button className="faq-toggle flex items-center justify-between w-full text-left">
                        <span className="font-medium text-primary">
                          Do you work with international clients?
                        </span>
                        <svg
                          className="w-5 h-5 text-secondary transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div className="faq-content hidden mt-2 text-secondary">
                        Absolutely! We work with clients worldwide and have
                        extensive experience with remote collaboration.
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-4">
                      <button className="faq-toggle flex items-center justify-between w-full text-left">
                        <span className="font-medium text-primary">
                          What's included in your initial consultation?
                        </span>
                        <svg
                          className="w-5 h-5 text-secondary transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div className="faq-content hidden mt-2 text-secondary">
                        Our free 30-minute consultation covers project goals,
                        timeline discussion, and initial recommendations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
