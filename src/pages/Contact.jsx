import React from "react";
import { ContactHero, ContactForm, ContactInfo } from "../components/contact";

function Contact() {
  return (
    <>
      <ContactHero />
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
