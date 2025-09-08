export const articles = [
  {
    id: 1,
    category: "design-process",
    image: {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "UX research methods",
      fallback:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    badge: {
      text: "Design Process",
      bgColor: "bg-success/10",
      textColor: "text-success",
    },
    date: "January 10, 2025",
    title: "The Psychology of User Experience Design",
    description:
      "How cognitive biases and psychological principles can inform better design decisions and create more intuitive user experiences.",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "tools-resources",
    image: {
      src: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      alt: "Design tools comparison",
      fallback:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    badge: {
      text: "Tools & Resources",
      bgColor: "bg-warning/10",
      textColor: "text-warning",
    },
    date: "January 8, 2025",
    title: "Figma vs. Adobe XD: A 2025 Comparison",
    description:
      "An in-depth analysis of the leading design tools, comparing features, performance, and workflow integration for modern design teams.",
    readTime: "12 min read",
  },
  {
    id: 3,
    category: "case-studies",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "E-commerce redesign case study",
      fallback:
        "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    badge: {
      text: "Case Study Deep-Dive",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
    date: "January 5, 2025",
    title: "E-commerce Redesign: From 2% to 8% Conversion",
    description:
      "A detailed breakdown of how strategic UX improvements and data-driven design decisions quadrupled conversion rates.",
    readTime: "15 min read",
  },
];

export const categories = [
  {
    id: 1,
    category: "all",
    label: "All Posts",
    isActive: true,
  },
  {
    id: 2,
    category: "design-process",
    label: "Design Process",
    isActive: false,
  },
  {
    id: 3,
    category: "industry-trends",
    label: "Industry Trends",
    isActive: false,
  },
  {
    id: 4,
    category: "case-studies",
    label: "Case Study Deep-Dives",
    isActive: false,
  },
  {
    id: 5,
    category: "tools-resources",
    label: "Tools & Resources",
    isActive: false,
  },
  {
    id: 6,
    category: "professional-dev",
    label: "Professional Development",
    isActive: false,
  },
];
