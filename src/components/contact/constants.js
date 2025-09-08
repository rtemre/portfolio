import MailIcon from "../../assets/svgs/mail";
import PhoneIcon from "../../assets/svgs/phone";
import MapPinIcon from "../../assets/svgs/map-pin";
import LinkIcon from "../../assets/svgs/link";

export const contactInfo = [
  {
    id: 1,
    icon: MailIcon,
    bgColor: "bg-accent/10",
    iconColor: "text-accent",
    title: "Email",
    type: "link",
    content: {
      href: "mailto:hello@portfolio.com",
      text: "hello@portfolio.com",
    },
    subtitle: "Response within 24 hours",
  },
  {
    id: 2,
    icon: PhoneIcon,
    bgColor: "bg-success/10",
    iconColor: "text-success",
    title: "Phone",
    type: "link",
    content: { href: "tel:+1234567890", text: "+1 (234) 567-890" },
    subtitle: "Available Monday-Friday, 9 AM - 5 PM EST",
  },
  {
    id: 3,
    icon: MapPinIcon,
    bgColor: "bg-warning/10",
    iconColor: "text-warning",
    title: "Location",
    type: "text",
    content: "San Francisco, CA\nRemote collaboration worldwide",
  },
  {
    id: 4,
    icon: LinkIcon,
    bgColor: "bg-error/10",
    iconColor: "text-error",
    title: "Connect",
    type: "links",
    content: [
      { text: "LinkedIn", href: "#" },
      { text: "Twitter", href: "#" },
      { text: "Dribbble", href: "#" },
    ],
  },
];

export const faqs = [
  {
    id: 1,
    question: "What's your typical response time?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days.",
  },
  {
    id: 2,
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We work with clients worldwide and have extensive experience with remote collaboration.",
  },
  {
    id: 3,
    question: "What's included in your initial consultation?",
    answer:
      "Our free 30-minute consultation covers project goals, timeline discussion, and initial recommendations.",
  },
];
