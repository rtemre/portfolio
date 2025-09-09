import { ContactHero, ContactForm, ContactInfo } from "../components/contact";

function Contact() {
  return (
    <div>
      <ContactHero />
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
