import ChartBarIcon from "../../assets/svgs/chart-bar";
import UxUiDesignIcon from "../../assets/svgs/ux-ui-design";
import FrontendDevelopmentIcon from "../../assets/svgs/frontend-development";
import CollaborativeIcon from "../../assets/svgs/collaborative";

export const tools = [
  {
    id: 1,
    icon: ChartBarIcon,
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
    iconSize: "w-8 h-8",
    title: "Research & Strategy",
    tools: ["Google Analytics", "Hotjar", "Miro", "Notion"],
  },
  {
    id: 2,
    icon: UxUiDesignIcon,
    bgColor: "bg-success/10",
    iconColor: "text-success",
    iconSize: "w-8 h-8",
    title: "Design",
    tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
  },
  {
    id: 3,
    icon: FrontendDevelopmentIcon,
    bgColor: "bg-warning/10",
    iconColor: "text-warning",
    iconSize: "w-8 h-8",
    title: "Development",
    tools: ["VS Code", "Git & GitHub", "Netlify", "Vercel"],
  },
  {
    id: 4,
    icon: CollaborativeIcon,
    bgColor: "bg-error/10",
    iconColor: "text-error",
    iconSize: "w-6 h-6",
    title: "Collaboration",
    tools: ["Slack", "Zoom", "Loom", "Calendly"],
  },
];

export const phases = [
  {
    id: 1,
    number: 1,
    bgColor: "bg-accent",
    textColor: "text-accent",
    barColor: "bg-accent",
    isReversed: false,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "/images/healthcare-brand-identity.jpeg",
      alt: "Discovery and strategy phase",
      fallback: "/images/contact-process-background.jpeg",
    },
    title: "Discovery & Strategy",
    description:
      "Understanding your business, users, and market landscape to establish a solid foundation for success.",
    timeline: "1-2 weeks",
    details: {
      activities: [
        "Stakeholder interviews",
        "Competitive analysis",
        "User research & personas",
        "Business goal alignment",
        "Technical requirements",
      ],
      deliverables: [
        "Project brief document",
        "User persona profiles",
        "Competitive landscape",
        "Technical specification",
        "Project roadmap",
      ],
      involvement: {
        percentage: 90,
        description: "High collaboration required for insights and feedback",
      },
    },
  },
  {
    id: 2,
    number: 2,
    bgColor: "bg-success",
    textColor: "text-success",
    barColor: "bg-success",
    isReversed: true,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "/images/healthcare-brand-identity.jpeg",
      alt: "Planning and architecture phase",
      fallback: "/images/healthcare-brand-identity.jpeg",
    },
    title: "Planning & Architecture",
    description:
      "Structuring information and user flows to create intuitive navigation and optimal user experiences.",
    timeline: "1-2 weeks",
    details: {
      activities: [
        "Site mapping & structure",
        "User flow diagrams",
        "Wireframe creation",
        "Content strategy",
        "Technical architecture",
      ],
      deliverables: [
        "Site map & user flows",
        "Wireframe prototypes",
        "Content strategy document",
        "Technical architecture",
        "Design system foundation",
      ],
      involvement: {
        percentage: 70,
        description: "Regular reviews and approval checkpoints",
      },
    },
  },
  {
    id: 3,
    number: 3,
    bgColor: "bg-warning",
    textColor: "text-warning",
    barColor: "bg-warning",
    isReversed: false,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "/images/modern-web-design.jpeg",
      alt: "Design and iteration phase",
      fallback: "/images/healthcare-brand-identity.jpeg",
    },
    title: "Design & Prototyping",
    description:
      "Crafting pixel-perfect designs and interactive prototypes that bring your vision to life.",
    timeline: "2-3 weeks",
    details: {
      activities: [
        "High-fidelity design",
        "Interactive prototyping",
        "Usability testing",
        "Design iteration",
        "Accessibility audit",
      ],
      deliverables: [
        "High-fidelity mockups",
        "Interactive prototypes",
        "Usability test reports",
        "Design specifications",
        "Accessibility compliance",
      ],
      involvement: {
        percentage: 60,
        description: "Feedback sessions and design reviews",
      },
    },
  },
  {
    id: 4,
    number: 4,
    bgColor: "bg-error",
    textColor: "text-error",
    barColor: "bg-error",
    isReversed: true,
    containerClass: "mb-16 md:mb-20",
    image: {
      src: "/images/typography-guide.jpeg",
      alt: "Development and implementation phase",
      fallback: "/images/modern-web-design.jpeg",
    },
    title: "Development & Implementation",
    description:
      "Transforming designs into functional, performant, and accessible digital experiences.",
    timeline: "3-4 weeks",
    details: {
      activities: [
        "Frontend development",
        "CMS integration",
        "Performance optimization",
        "Quality assurance testing",
        "Cross-browser compatibility",
      ],
      deliverables: [
        "Functional website",
        "CMS setup & training",
        "Performance reports",
        "Testing documentation",
        "Code documentation",
      ],
      involvement: {
        percentage: 40,
        description: "Progress updates and milestone reviews",
      },
    },
  },
  {
    id: 5,
    number: 5,
    bgColor: "bg-primary",
    textColor: "text-primary",
    barColor: "bg-primary",
    isReversed: false,
    containerClass: "",
    image: {
      src: "/images/typography-guide.jpeg",
      alt: "Launch and optimization phase",
      fallback: "/images/typography-guide.jpeg",
    },
    title: "Launch & Optimization",
    description:
      "Deploying your project and providing ongoing support to ensure continued success and growth.",
    timeline: "1 week + ongoing",
    details: {
      activities: [
        "Production deployment",
        "Analytics setup",
        "Performance monitoring",
        "User behavior analysis",
        "Ongoing optimization",
      ],
      deliverables: [
        "Live website",
        "Analytics dashboard",
        "Maintenance guide",
        "Performance baseline",
        "Support documentation",
      ],
      involvement: {
        percentage: 50,
        description: "Launch coordination and ongoing collaboration",
      },
    },
  },
];
