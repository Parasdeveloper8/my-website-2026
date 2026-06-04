import projectImg1 from "../assets/images/project1.png";
import projectImg2 from "../assets/images/project2.png";
import projectImg3 from "../assets/images/project3.png";
import projectImg4 from "../assets/images/project4.png";
import projectImg5 from "../assets/images/project5.png";

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
    title: "Rao Coaching Center",
    description: "Institute website built using web development technologies, showcasing courses, faculty, and contact information for prospective students.",
    tags: ["HTML","Javascript","tailwindcss","leaflet.js"],
    image: projectImg1,
    github: "#",
    live: "https://raocoachingcenter.com"
  },
  {
    id: 2,
    title: "Revisor",
    description: "A quiz application for your revision with a facility to create flashcards and generate quiz from them.",
    tags: ["Go","Typescript","React","MySQL","Perplexity API","CSS"],
    image: projectImg2,
    github: "https://github.com/Parasdeveloper8/Revisor",
    live: "#"
  },
  {
    id: 3,
    title: "Admin Panel",
    description: "A simple admin panel built with modern web technologies. This project demonstrates CRUD operations , registration , Login features .",
    tags: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "MySQL"],
    image: projectImg3,
    github: "https://github.com/Parasdeveloper8/admin-panel",
    live: "#"
  },
  {
    id: 4,
    title: "Aepay",
    description: "This is a fun project which demonstrates a simple payment system in which you can pay with aadhaar number and fingerprint.",
    tags: ["HTML","CSS","Javascript","TypeScript"],
    image: projectImg4,
    github: "https://github.com/Parasdeveloper8/aepay",
    live: "#"
  },
  {
    id: 5,
    title: "Laboratory",
    description: "This is one of my biggest project and also a fun one . I have integrated everything from social media to mathematics tools in a single place. ",
    tags: ["HTML","CSS","Javascript","TypeScript","Go","Docker","MySQL"],
    image: projectImg5,
    github: "https://github.com/Parasdeveloper8/Laboratory",
    live: "#"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    institute: "Achievers Public Senior Secondary School",
    duration: "2024 - Present",
    level: "Class 11 (PCM)",
    location: "Alwar, Rajasthan, India",
    description: "Currently pursuing higher secondary education with a focus on Physics, Chemistry, and Mathematics."
  },
  {
    id: 2,
    institute: "Manav Bharti School",
    duration: "2014  - 2024",
    level: "LKG - class 8",
    location: "Alwar, Rajasthan, India",
    description: "Completed primary education"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Web Applications",
    description: "Custom-built, high-performance web applications tailored to your business needs.",
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
  linkedin: "https://www.linkedin.com/in/paras-prajapat-7475632a1/", 
};

// Pure, optimized SVG paths for brand icons
export const BRAND_ICONS = {
  github: `M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z`,
  linkedin: `M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z`
};