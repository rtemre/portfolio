import React from "react";
import MailIcon from "../../assets/svgs/mail";
import PhoneIcon from "../../assets/svgs/phone";
import MapPinIcon from "../../assets/svgs/map-pin";
import LinkIcon from "../../assets/svgs/link";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";

function ContactInfo() {
  return (
    <div>
      <h2 className="text-display font-playfair mb-8 text-primary">
        Get in Touch
      </h2>

      <div className="space-y-8">
        {/* Email */}
        <div className="flex items-start">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
            <MailIcon className="w-6 h-6 text-accent" />
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
            <PhoneIcon className="w-6 h-6 text-success" />
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
            <MapPinIcon className="w-6 h-6 text-warning" />
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
            <LinkIcon className="w-6 h-6 text-error" />
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
              <ChevronDownIcon className="w-5 h-5 text-secondary transition-transform duration-300" />
            </button>
            <div className="faq-content hidden mt-2 text-secondary">
              We typically respond to all inquiries within 24 hours during
              business days.
            </div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button className="faq-toggle flex items-center justify-between w-full text-left">
              <span className="font-medium text-primary">
                Do you work with international clients?
              </span>
              <ChevronDownIcon className="w-5 h-5 text-secondary transition-transform duration-300" />
            </button>
            <div className="faq-content hidden mt-2 text-secondary">
              Absolutely! We work with clients worldwide and have extensive
              experience with remote collaboration.
            </div>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button className="faq-toggle flex items-center justify-between w-full text-left">
              <span className="font-medium text-primary">
                What's included in your initial consultation?
              </span>
              <ChevronDownIcon className="w-5 h-5 text-secondary transition-transform duration-300" />
            </button>
            <div className="faq-content hidden mt-2 text-secondary">
              Our free 30-minute consultation covers project goals, timeline
              discussion, and initial recommendations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
