import React from "react";
import GraduationCapIcon from "../../assets/svgs/graduation-cap";
import CheckCircleIcon from "../../assets/svgs/check-circle";
import BookOpenIcon from "../../assets/svgs/book-open";

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
              <GraduationCapIcon className="w-8 h-8 text-accent" />
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
              <CheckCircleIcon className="w-8 h-8 text-success" />
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
              <BookOpenIcon className="w-8 h-8 text-warning" />
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
