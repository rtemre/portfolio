import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ContactHero, ContactForm, ContactInfo } from "../components/contact";

function Contact() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <ContactHero />
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
