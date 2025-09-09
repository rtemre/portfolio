function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/contact-process-background.jpeg"
          alt="Contact us"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/general-design-image.jpeg";
            e.target.onError = null;
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-hero font-playfair mb-6 animate-fade-in text-white">
          Let us Create Something{" "}
          <span className="text-accent">Extraordinary</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up">
          Ready to transform your vision into reality? Let us discuss your
          project and explore how we can work together to achieve exceptional
          results.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
