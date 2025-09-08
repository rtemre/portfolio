import React from "react";
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
    <>
      <AboutHero />
      <OriginStory />
      <ProfessionalTimeline />
      <DesignPhilosophy />
      <SkillsCompetencies />
      <EducationCertifications />
    </>
  );
}

export default About;
