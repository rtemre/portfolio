import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Skills from "../components/Skills";
import ClientLogos from "../components/ClientLogos";
import BlogPreview from "../components/BlogPreview";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Homepage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute("href"));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <Hero />

        {/* Personal Introduction */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-display font-playfair mb-8 text-primary">
              Design Philosophy
            </h2>
            <p className="text-xl text-secondary leading-relaxed mb-6">
              I believe that great design is invisible until it's extraordinary.
              In today's digital landscape, a portfolio must be more than a
              gallery—it's a living testament to craft, attention to detail, and
              user-centered thinking.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My approach balances creative expression with technical precision,
              demonstrating that beautiful design and flawless functionality are
              not mutually exclusive but essential partners.
            </p>
          </div>
        </section>

        <FeaturedWork />
        <Skills />
        <ClientLogos />
        <BlogPreview />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
