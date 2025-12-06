import { Experience, Project, Education, Achievement, SocialLink, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Ghanshyam Didwaniya",
  tagline: "Problem-Solving Full-Stack SDE & AI Enthusiast",
  email: "ghanshyamdidwaniya900@gmail.com",
  phone: "+91-7568670249",
  location: "Rajasthan, India",
  summary: "A problem-solving full-stack SDE with a deep enthusiasm for artificial intelligence, dedicated to transforming real-world challenges into innovative, high-impact technological solutions.",
};

export const SKILLS: Skill[] = [
  // AI & LLMs
  { name: "LangChain", category: "AI/ML" },
  { name: "LangGraph", category: "AI/ML" },
  { name: "Gemini", category: "AI/ML" },
  { name: "RAG", category: "AI/ML" },
  { name: "NeMo", category: "AI/ML" },
  { name: "Vector Stores", category: "AI/ML" },
  // Backend
  { name: "FastAPI", category: "Web" },
  { name: "Node.js", category: "Web" },
  { name: "Express.js", category: "Web" },
  { name: "MongoDB", category: "Web" },
  { name: "REST APIs", category: "Web" },
  // Frontend
  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "TypeScript", category: "Web" },
  { name: "HTML/CSS", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  // Dev Tools
  { name: "Docker", category: "Tools" },
  { name: "Grafana", category: "Tools" },
  { name: "InfluxDB", category: "Tools" },
  { name: "n8n", category: "Tools" },
  { name: "Git/GitHub", category: "Tools" },
  { name: "Selenium", category: "Tools" },
  // Languages
  { name: "Python", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "SQL", category: "Languages" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Software Development Engineer Intern",
    company: "AIQuant Technologies Pvt. Ltd.",
    period: "Aug 2025 – Oct 2025",
    description: [
      "Built AI based chatbot for hotel-booking platform using LangChain, LangGraph, Gemini, and FastAPI with structured tool-calling workflows.",
      "Designed multi-step agent logic with memory, validation, and retrieval to reduce hallucinations and improve accuracy.",
      "Engineered real-time FinTech analytics dashboard using n8n, Grafana, and InfluxDB for high-performance wallet tracking.",
      "Automated ETL pipelines and optimized metrics, improving dashboard responsiveness and reliability."
    ],
    skillsUsed: ["LangChain", "LangGraph", "Gemini", "FastAPI", "n8n", "Grafana", "InfluxDB"]
  },
  {
    id: "exp-2",
    role: "AI/ML Research Intern",
    company: "Sarvam.AI",
    period: "Dec 2023 – Jan 2024",
    description: [
      "Curated structured Wikipedia datasets for training of voice based AI models focusing across science and technology domains.",
      "Benchmarked table extractions frameworks and tools like Tabula, Camelot, PyPDF, MS/Table-Transformer for reliable table extraction.",
      "Improved model built using NeMo forced aligner to enhance audio–text alignment accuracy."
    ],
    skillsUsed: ["Python", "NeMo", "Data Processing", "PyPDF", "Deep Learning"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Sudoku Solver Web App",
    type: "Technical",
    period: "Fullstack + AI",
    description: [
      "Built Sudoku solver web-app with an AI based number extraction method from uploaded images for better UX.",
      "Integrated backtracking algorithm into a clean UI."
    ],
    skillsUsed: ["Python", "AI", "Computer Vision", "Backtracking", "Web Dev"]
  },
  {
    id: "proj-2",
    title: "Fake News Detection",
    type: "Technical",
    period: "Machine Learning",
    description: [
      "Trained ML models (LogReg, Random Forest, Gradient Boosting) to classify news articles.",
      "Achieved 85% accuracy using F1 and recall evaluation."
    ],
    skillsUsed: ["Machine Learning", "Random Forest", "Gradient Boosting", "Python"]
  },
  {
    id: "proj-3",
    title: "Cinematic - Retro Movie Picker",
    type: "Technical",
    period: "Web Application",
    link: "https://shyam-gitbot.github.io/cinematic/",
    description: [
      "Engineered a nostalgic 80s CRT-styled movie recommendation engine using the TMDB API and local storage persistence.",
      "Implemented smart filtering to track watched movies and build custom watchlists without backend requirements."
    ],
    skillsUsed: ["JavaScript", "Tailwind CSS", "REST APIs", "UI/UX Design"]
  },
  {
    id: "proj-4",
    title: "Minimal URL Shortener",
    type: "Technical",
    period: "Web Utility",
    link: "https://shyam-gitbot.github.io/URL-shortner/",
    description: [
      "Developed a sleek, dark-themed URL shortener using the is.gd API with an automatic client-side fallback algorithm.",
      "Implemented session-based hash mapping for offline support, clipboard integration, and robust error handling."
    ],
    skillsUsed: ["JavaScript", "HTML/CSS", "REST APIs", "Git/GitHub"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Dual Degree (BS + MS), Biotechnology",
    institution: "Indian Institute of Technology Madras",
    score: "CGPA: 7.87/10",
    year: "2020-2025"
  }
];

// Empty arrays for sections removed from the new resume
export const ACHIEVEMENTS: Achievement[] = [];
export const EXTRACURRICULAR: string[] = [];
