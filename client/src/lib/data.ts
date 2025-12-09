export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  buttons: { label: string; href: string; variant: "primary" | "outline" }[];
}

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlightTag?: string;
  image?: string;
}

export interface Experience {
  id: string;
  type: "education" | "work";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AboutData {
  bio: string;
  education: string;
  location: string;
  interests: string[];
  stats: { label: string; value: string }[];
}

export const heroData: HeroData = {
  name: "Abhishek Aditya Jeremy",
  title: "Full-Stack Developer & BCA Student",
  tagline: "Crafting digital experiences with code, creativity, and a passion for innovation.",
  buttons: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Contact Me", href: "#contact", variant: "outline" },
  ],
};

export const aboutData: AboutData = {
  bio: "I'm a passionate full-stack developer currently pursuing my BCA degree. I love building modern web applications that combine beautiful design with powerful functionality. My journey in tech started with curiosity and has evolved into a deep passion for creating impactful digital solutions.",
  education: "BCA, Arcade Business College, 2023-26",
  location: "Patna, India",
  interests: ["Web Development", "JavaScript/TypeScript", "React Ecosystem", "Node.js", "DevOps", "UI/UX Design"],
  stats: [
    { label: "Major Projects", value: "2" },
    { label: "Technologies", value: "10+" },
    { label: "Years Coding", value: "5+" },
    
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code",
    items: [
      { name: "JavaScript", level: 90, description: "ES6+, async/await, closures, prototypes" },
      { name: "TypeScript", level: 85, description: "Type safety, generics, interfaces" },
      { name: "Python", level: 75, description: "Scripting, automation, data processing" },
      { name: "Java", level: 70, description: "OOP fundamentals, collections, streams" },
      { name: "C++", level: 65, description: "Data structures, algorithms, memory management" },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "React", level: 90, description: "Hooks, context, component patterns" },
      // { name: "Next.js", level: 85, description: "SSR, SSG, API routes, app router" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first styling, custom configurations" },
      // { name: "Framer Motion", level: 80, description: "Complex animations, gestures, variants" },
      // { name: "Three.js", level: 70, description: "3D graphics, WebGL, shaders" },
    ],
  },
  // {
  //   category: "Backend",
  //   icon: "Server",
  //   items: [
  //     { name: "Node.js", level: 85, description: "Express, APIs, middleware, streams" },
  //     { name: "PostgreSQL", level: 75, description: "Complex queries, optimization, design" },
  //     { name: "MongoDB", level: 70, description: "NoSQL, aggregation, indexing" },
  //     { name: "REST APIs", level: 85, description: "Design, versioning, documentation" },
  //     { name: "GraphQL", level: 65, description: "Schemas, resolvers, Apollo" },
  //   ],
  // },
  // {
  //   category: "Tools & DevOps",
  //   icon: "Settings",
  //   items: [
  //     { name: "Git", level: 90, description: "Version control, branching, collaboration" },
  //     { name: "Docker", level: 70, description: "Containerization, compose, images" },
  //     { name: "Linux", level: 75, description: "CLI, scripting, server management" },
  //     { name: "VS Code", level: 95, description: "Extensions, debugging, workflows" },
  //     { name: "Figma", level: 65, description: "Design collaboration, prototyping" },
  //   ],
  // },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "JournaLog",
    description: "An offline-first personal journal app built with React, TypeScript, and Vite. Saves all data to your browser's localStorage and features a light/dark mode.",
    techStack: ["React", "Vite", "TypeScript"],
    githubUrl: "https://github.com/rogx1ne/journalog",
    liveUrl: "https://logjournal.vercel.app/",
    highlightTag: "Featured",
  },
  
  {
    id: "2",
    title: "Portfolio Website",
    description: "This very portfolio website! Built with Three.js for 3D visuals, Framer Motion for animations, and a Gen-Z dark rave aesthetic.",
    techStack: ["React", "Three.js", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/alexj/portfolio",
    highlightTag: "Latest",
  },
  
];

export const experience: Experience[] = [
  {
    id: "1",
    type: "education",
    title: "Bachelor of Computer Applications",
    organization: "Arcade Business College",
    location: "Patna, India",
    period: "2023 - present",
    description: "Pursuing comprehensive education in computer science fundamentals, programming languages, database management, and software engineering principles.",
  },
  
  {
    id: "4",
    type: "education",
    title: "Higher Secondary Education",
    organization: "St.Xavier's High School",
    location: "Patna, India",
    period: "2019 - 2021",
    description: "Completed HSC with focus on Science stream. First introduction to programming through C++ and basic web development.",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/rogx1ne", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/abhishek-aditya-jeremy-4659982a7", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/abh1ad1", icon: "Twitter" },
  { name: "Email", url: "adityajeremy82@gmail.com", icon: "Mail" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];
