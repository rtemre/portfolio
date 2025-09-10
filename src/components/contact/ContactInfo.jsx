import { ChevronDownIcon } from "../../assets/svgIcons";
import { contactInfo, faqs } from "./constants";

function ContactInfo() {
  return (
    <div>
      <h2 className="text-display font-playfair mb-8 text-primary">
        Get in Touch
      </h2>

      <div className="space-y-8">
        {contactInfo.map((info) => {
          const IconComponent = info.icon;
          return (
            <div key={info.id} className="flex items-start">
              <div
                className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mr-4`}
              >
                <IconComponent className={`w-6 h-6 ${info.iconColor}`} />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                  {info.title}
                </h3>
                {info.type === "link" && (
                  <a
                    href={info.content.href}
                    className="text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {info.content.text}
                  </a>
                )}
                {info.type === "text" && (
                  <p className="text-secondary">
                    {info.content.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < info.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
                {info.type === "links" && (
                  <div className="flex space-x-4">
                    {info.content.map((link) => (
                      <a
                        key={link.text}
                        href={link.href}
                        className="text-secondary hover:text-accent transition-colors duration-300"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
                {info.subtitle && (
                  <p className="text-sm text-secondary mt-1">{info.subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h3 className="font-playfair text-xl font-semibold mb-6 text-primary">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 pb-4">
              <button className="faq-toggle flex items-center justify-between w-full text-left">
                <span className="font-medium text-primary">{faq.question}</span>
                <ChevronDownIcon className="w-5 h-5 text-secondary transition-transform duration-300" />
              </button>
              <div className="faq-content hidden mt-2 text-secondary">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
