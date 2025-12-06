export interface Skill {
  name: string;
  category: 'Languages' | 'AI/ML' | 'Web' | 'Tools';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skillsUsed: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  period: string;
  description: string[];
  skillsUsed: string[];
  link?: string;
  type: 'Technical' | 'Research';
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}