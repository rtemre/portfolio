import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ChevronDownIcon from "../assets/svgs/chevron-down";
import { slides } from "./constants.jsx";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/fallback-image.jpeg";
              }}
            />
            <div className="absolute inset-0 bg-primary/60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-hero font-playfair mb-6 animate-fade-in text-white drop-shadow-lg">
          Where{" "}
          <span className="text-accent drop-shadow-lg">Invisible Design</span>
          <br />
          Becomes Extraordinary
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up drop-shadow-md">
          Crafting digital experiences that seamlessly blend aesthetic
          excellence with strategic thinking, creating portfolios that do not
          just showcase work—they tell compelling stories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Link to="/work" className="btn-primary text-lg px-8 py-4">
            Explore My Work
          </Link>
          <Link
            to="/about"
            className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
          >
            Learn About Me
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronDownIcon className="w-6 h-6" />
      </div>
    </section>
  );
}

export default Hero;
