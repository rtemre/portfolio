import React from "react";

function EducationCertifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Education & Certifications
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Formal education and continuous learning that shaped my design
            foundation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="card p-6">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
              Psychology & Design
            </h3>
            <p className="text-secondary text-sm mb-2">
              University of Design Excellence
            </p>
            <p className="text-secondary text-sm">
              Bachelor's Degree • 2014-2018
            </p>
          </div>

          {/* Certifications */}
          <div className="card p-6">
            <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
              Certified Usability Analyst
            </h3>
            <p className="text-secondary text-sm mb-2">
              Human Factors International
            </p>
            <p className="text-secondary text-sm">CUA Certification • 2020</p>
          </div>

          {/* Continuous Learning */}
          <div className="card p-6">
            <div className="w-16 h-16 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-warning"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
              Advanced UX Research
            </h3>
            <p className="text-secondary text-sm mb-2">
              Interaction Design Foundation
            </p>
            <p className="text-secondary text-sm">
              Professional Certificate • 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationCertifications;
