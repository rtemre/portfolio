import React from "react";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";

function ContactForm() {
  return (
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
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              className="form-input appearance-none pr-10"
            >
              <option value="">Select project type</option>
              <option value="web-design">Web Design</option>
              <option value="branding">Branding</option>
              <option value="ux-ui">UX/UI Design</option>
              <option value="development">Development</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <ChevronDownIcon className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-primary mb-2"
          >
            Budget Range
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              className="form-input appearance-none pr-10"
            >
              <option value="">Select budget range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <ChevronDownIcon className="w-4 h-4 text-secondary" />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-primary mb-2"
          >
            Timeline
          </label>
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              className="form-input appearance-none pr-10"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-months-plus">6+ months</option>
              <option value="flexible">Flexible</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <ChevronDownIcon className="w-4 h-4 text-secondary" />
            </div>
          </div>
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
            Upload any relevant documents, wireframes, or existing materials
          </p>
        </div>

        <div>
          <label className="flex items-center">
            <input type="checkbox" name="newsletter" className="mr-2" />
            <span className="text-sm text-secondary">
              Subscribe to our newsletter for design insights and updates
            </span>
          </label>
        </div>

        <button type="submit" className="btn-primary w-full text-lg py-4">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
