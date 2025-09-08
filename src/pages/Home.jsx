import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/home");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface to-background">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-hero text-primary mb-6">
            Welcome to Strategic Minimalism
          </h1>
          <p className="text-body text-text-secondary mb-8 max-w-lg mx-auto">
            Discover a portfolio where restraint and intentionality create the
            new luxury in digital creative work.
          </p>
          <div className="space-y-4">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <button
                onClick={handleClick}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Enter Portfolio</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
            <p className="text-caption text-text-secondary">
              Redirecting to homepage in <span>{countdown}</span> seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
