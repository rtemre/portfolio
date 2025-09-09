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
    <div>
      <AboutHero />
      <OriginStory />
      <ProfessionalTimeline />
      <DesignPhilosophy />
      <SkillsCompetencies />
      <EducationCertifications />
    </div>
  );
}

export default About;
