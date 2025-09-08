import React from "react";
import GraduationCapIcon from "../../assets/svgs/graduation-cap";
import CheckCircleIcon from "../../assets/svgs/check-circle";
import BookOpenIcon from "../../assets/svgs/book-open";

const educationItems = [
  {
    id: 1,
    icon: GraduationCapIcon,
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
    title: "Psychology & Design",
    institution: "University of Design Excellence",
    details: "Bachelor's Degree • 2014-2018",
  },
  {
    id: 2,
    icon: CheckCircleIcon,
    bgColor: "bg-success/10",
    iconColor: "text-success",
    title: "Certified Usability Analyst",
    institution: "Human Factors International",
    details: "CUA Certification • 2020",
  },
  {
    id: 3,
    icon: BookOpenIcon,
    bgColor: "bg-warning/10",
    iconColor: "text-warning",
    title: "Advanced UX Research",
    institution: "Interaction Design Foundation",
    details: "Professional Certificate • 2022",
  },
];
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
          {educationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="card p-6">
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm mb-2">
                  {item.institution}
                </p>
                <p className="text-secondary text-sm">{item.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationCertifications;
