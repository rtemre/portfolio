import UxUiDesignIcon from "../assets/svgs/ux-ui-design";
import FrontendDevelopmentIcon from "../assets/svgs/frontend-development";
import BrandStrategyIcon from "../assets/svgs/brand-strategy";

export const clients = [
  "TechCorp",
  "StartupXYZ",
  "DataCorp",
  "Enterprise",
  "Creative Co",
  "Marketing Pro",
];

export const posts = [
  {
    id: 1,
    image: "/images/design-trends-showcase.jpeg",
    date: "January 15, 2025",
    title: "Design Trends Shaping 2025",
    excerpt:
      "Exploring the intersection of AI, accessibility, and human-centered design in the coming year.",
    link: "/blog",
  },
  {
    id: 2,
    image: "/images/design-process-hero.jpeg",
    date: "January 10, 2025",
    title: "The Psychology of User Experience",
    excerpt:
      "How cognitive biases and psychological principles can inform better design decisions.",
    link: "/blog",
  },
  {
    id: 3,
    image: "/images/design-process-hero.jpeg",
    date: "January 5, 2025",
    title: "Building a Portfolio That Tells Stories",
    excerpt:
      "Moving beyond galleries to create portfolios that demonstrate process and thinking.",
    link: "/blog",
  },
];

export const projects = [
  {
    id: 1,
    image: "/images/ecommerce-platform.jpeg",
    title: "E-commerce Platform Redesign",
    description:
      "Complete UX overhaul resulting in 40% increase in conversion rates",
    client: "TechCorp • 2024",
    tags: ["UX/UI Design", "Frontend Dev"],
    link: "/work",
  },
  {
    id: 2,
    image: "/images/healthcare-brand-identity.jpeg",
    title: "FinTech Mobile App",
    description: "User-centered design for complex financial workflows",
    client: "StartupXYZ • 2024",
    tags: ["Mobile Design", "User Research"],
    link: "/work",
  },
  {
    id: 3,
    image: "/images/design-process-hero.jpeg",
    title: "Brand Identity System",
    description:
      "Complete rebrand including logo, guidelines, and digital assets",
    client: "Creative Agency • 2024",
    tags: ["Brand Strategy", "Visual Identity"],
    link: "/work",
  },
  {
    id: 4,
    image: "/images/analytics-dashboard.jpeg",
    title: "Analytics Dashboard",
    description: "Complex data visualization made intuitive and actionable",
    client: "DataCorp • 2024",
    tags: ["Data Viz", "Dashboard Design"],
    link: "/work",
  },
  {
    id: 5,
    image: "/images/typography-guide.jpeg",
    title: "Corporate Website Redesign",
    description: "Modern, accessible design with improved user journey",
    client: "Enterprise Inc • 2024",
    tags: ["Web Design", "Accessibility"],
    link: "/work",
  },
  {
    id: 6,
    image: "/images/design-process-hero.jpeg",
    title: "Digital Marketing Campaign",
    description: "Multi-channel campaign design with cohesive visual strategy",
    client: "Marketing Pro • 2024",
    tags: ["Campaign Design", "Visual Strategy"],
    link: "/work",
  },
];

export const slides = [
  {
    image: "/images/modern-web-design.jpeg",
    alt: "Modern web design showcase",
  },
  {
    image: "/images/general-design-image.jpeg",
    alt: "UX design process",
  },
  {
    image: "/images/design-process-hero.jpeg",
    alt: "Brand strategy development",
  },
];

export const routes = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/process", label: "Process" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export const skills = [
  {
    icon: <UxUiDesignIcon className="w-12 h-12 text-accent" />,
    title: "UX/UI Design",
    percentage: 95,
    description:
      "User-centered design with focus on accessibility and conversion optimization",
  },
  {
    icon: <FrontendDevelopmentIcon className="w-12 h-12 text-success" />,
    title: "Frontend Development",
    percentage: 90,
    description:
      "Modern web technologies with performance and accessibility best practices",
  },
  {
    icon: <BrandStrategyIcon className="w-12 h-12 text-warning" />,
    title: "Brand Strategy",
    percentage: 85,
    description:
      "Strategic thinking that aligns creative vision with business objectives",
  },
];
