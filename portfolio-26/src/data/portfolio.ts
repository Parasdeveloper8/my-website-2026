import { Code2, Globe } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

export interface EducationItem {
  id: number;
  institute: string;
  duration: string;
  level: string;
  location: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: 'web-app' | 'website';
  pricing: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "QuantumSaaS Dashboard",
    description: "A premium analytics dashboard built for tracking fast-moving data. Features glassmorphism components and lightning-fast state updates.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/project1.jpg",
    github: "https://github.com/paras-prajapat",
    live: "#"
  },
  {
    id: 2,
    title: "Apex Engine API",
    description: "A scalable, high-performance backend architecture optimized for lightning-fast database transactions and user management systems.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    image: "/images/project2.jpg",
    github: "https://github.com/paras-prajapat",
    live: "#"
  },
  {
    id: 3,
    title: "Stellar Landing Page",
    description: "A dark-themed, ultra-premium landing page designed specifically for high-conversion tech startups and SaaS platforms.",
    tags: ["React", "Tailwind CSS", "PostCSS"],
    image: "/images/project3.jpg",
    github: "https://github.com/paras-prajapat",
    live: "#"
  },
  {
    id: 4,
    title: "Nexus Realtime Chat",
    description: "A secure, instant communication app optimizing data packets and using WebSockets for instantaneous messaging.",
    tags: ["React", "TypeScript", "WebSockets", "Tailwind"],
    image: "/images/project4.jpg",
    github: "https://github.com/paras-prajapat",
    live: "#"
  },
  {
    id: 5,
    title: "Vortex E-Commerce Site",
    description: "A completely responsive storefront focusing on minimal layouts, fast image load balancing, and elegant transitions.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/project5.jpg",
    github: "https://github.com/paras-prajapat",
    live: "#"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    institute: "Higher Secondary Institution",
    duration: "2024 - Present",
    level: "Class 11 (Science & Technology)",
    location: "Alwar, Rajasthan, India",
    description: "Actively balancing rigorous engineering coursework with live freelance architectures and advanced software design principles."
  },
  {
    id: 2,
    institute: "Secondary Education Campus",
    duration: "2022 - 2024",
    level: "Class 9 - Class 10",
    location: "Alwar, Rajasthan, India",
    description: "Transitioned from algorithmic logic building to professional application architecture. Delivered original projects to local clients."
  }
];

export const SERVICES: Service[] = [
  {
    title: "Web Applications",
    description: "Complex corporate dashboards, rich user interfaces, custom states, and deep interactive logical layers engineered natively in React.",
    iconName: "web-app",
    pricing: "Contact Me for Pricing"
  },
  {
    title: "Websites",
    description: "Stunning, lightweight, fully optimized responsive landing pages and web showcases mirroring modern tech founder aesthetics.",
    iconName: "website",
    pricing: "Contact Me for Pricing"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Parasdeveloper8",
  linkedin: "https://linkedin.com/in/your-username", // Replace with your actual username
};

// Pure, optimized SVG paths for brand icons
export const BRAND_ICONS = {
  github: `M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z`,
  linkedin: `M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z`
};