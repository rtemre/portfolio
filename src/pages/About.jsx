import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {
  AboutHero,
  OriginStory,
  ProfessionalTimeline,
  DesignPhilosophy,
  SkillsCompetencies,
  EducationCertifications,
} from "../components/about";

function About() {
  return (
    <div className="bg-background text-text-primary">
      <Nav />
      <main className="pt-20">
        <AboutHero />
        <OriginStory />
        <ProfessionalTimeline />
        <DesignPhilosophy />
        <SkillsCompetencies />
        <EducationCertifications />
      </main>
      <Footer />
    </div>
  );
}

export default About;
