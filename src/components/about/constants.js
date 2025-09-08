export const technicalSkills = [
  {
    id: 1,
    title: "UX Research & Strategy",
    percentage: 95,
    color: "accent",
    delay: 0,
    description:
      "User interviews, usability testing, journey mapping, persona development",
  },
  {
    id: 2,
    title: "UI Design & Prototyping",
    percentage: 92,
    color: "success",
    delay: 200,
    description: "Figma, Sketch, Adobe Creative Suite, interactive prototyping",
  },
  {
    id: 3,
    title: "Frontend Development",
    percentage: 88,
    color: "warning",
    delay: 400,
    description: "HTML, CSS, JavaScript, React basics, responsive design",
  },
  {
    id: 4,
    title: "Design Systems",
    percentage: 90,
    color: "accent",
    delay: 600,
    description:
      "Component libraries, style guides, design tokens, documentation",
  },
];

export const softSkills = [
  {
    id: 1,
    title: "Communication & Presentation",
    percentage: 96,
    color: "success",
    delay: 800,
    description:
      "Stakeholder management, design storytelling, workshop facilitation",
  },
  {
    id: 2,
    title: "Strategic Problem Solving",
    percentage: 94,
    color: "accent",
    delay: 1000,
    description: "Systems thinking, constraint navigation, creative ideation",
  },
  {
    id: 3,
    title: "Cross-functional Collaboration",
    percentage: 93,
    color: "warning",
    delay: 1200,
    description:
      "Agile methodologies, developer handoff, product strategy alignment",
  },
  {
    id: 4,
    title: "Mentorship & Leadership",
    percentage: 89,
    color: "success",
    delay: 1400,
    description: "Junior designer guidance, design critique, knowledge sharing",
  },
];

export const timelineItems = [
  {
    id: 1,
    period: "2024 - Present",
    title: "Senior UX Designer",
    description:
      "Leading design strategy for enterprise SaaS platform serving 50,000+ users",
    achievements: [
      "Redesigned core user flows, improving task completion by 40%",
      "Established design system adopted across 3 product teams",
      "Mentored junior designers in user research methodologies",
    ],
    isReversed: false,
  },
  {
    id: 2,
    period: "2022 - 2024",
    title: "Product Designer",
    description:
      "Drove user experience for fintech startup from MVP to Series A",
    achievements: [
      "Conducted user research with 200+ participants",
      "Designed mobile app achieving 4.8 App Store rating",
      "Collaborated with engineering on technical feasibility",
    ],
    isReversed: true,
  },
  {
    id: 3,
    period: "2020 - 2022",
    title: "UX/UI Designer",
    description:
      "Specialized in e-commerce optimization for mid-market retailers",
    achievements: [
      "Increased conversion rates by average of 35% across clients",
      "Developed accessibility-first design approach",
      "Built relationships with cross-functional stakeholders",
    ],
    isReversed: false,
  },
  {
    id: 4,
    period: "2018 - 2020",
    title: "Junior Designer",
    description:
      "Foundation years learning design principles and user research",
    achievements: [
      "Mastered design tools and prototyping workflows",
      "Contributed to 15+ client projects across industries",
      "Developed passion for data-driven design decisions",
    ],
    isReversed: true,
  },
];

export const paragraphs = [
  "My journey into design began unexpectedly during my psychology studies, where I became fascinated by how people interact with digital interfaces. What started as a side project—redesigning my university's confusing course registration system—revealed my passion for solving complex problems through thoughtful design.",
  "That first project taught me that great design isn't just about making things look beautiful; it's about understanding human behavior, anticipating needs, and creating experiences that feel effortless. This realization shifted my entire career trajectory from psychology to design, but the foundation of understanding human behavior remains central to everything I create.",
  "Today, I bring this psychological insight to every project, ensuring that aesthetic decisions are grounded in user research and that every interaction serves a purpose in the broader user journey.",
];

import GraduationCapIcon from "../../assets/svgs/graduation-cap";
import CheckCircleIcon from "../../assets/svgs/check-circle";
import BookOpenIcon from "../../assets/svgs/book-open";

export const educationItems = [
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

import HumanCenteredIcon from "../../assets/svgs/human-centered";
import CollaborativeIcon from "../../assets/svgs/collaborative";
import SystematicIcon from "../../assets/svgs/systematic";

export const philosophyItems = [
  {
    id: 1,
    icon: HumanCenteredIcon,
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
    title: "Human-Centered",
    description:
      "Every design decision starts with understanding user needs, behaviors, and pain points. Research informs aesthetics, not the other way around.",
  },
  {
    id: 2,
    icon: CollaborativeIcon,
    bgColor: "bg-success/10",
    iconColor: "text-success",
    title: "Collaborative",
    description:
      "Great design emerges from diverse perspectives. I believe in co-creation with stakeholders, developers, and users throughout the process.",
  },
  {
    id: 3,
    icon: SystematicIcon,
    bgColor: "bg-warning/10",
    iconColor: "text-warning",
    title: "Systematic",
    description:
      "Scalable design systems ensure consistency while allowing for creative expression. Structure enables innovation, not restricts it.",
  },
];
