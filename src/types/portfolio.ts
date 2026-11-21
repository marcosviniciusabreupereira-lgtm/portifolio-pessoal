export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  description: string;
  location: string;
  email: string;
  availability: string;
  resumeUrl: string;
  avatarUrl: string;
  socials: SocialLink[];
};

export type Skill = {
  name: string;
  description: string;
  icon: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Education = {
  institution: string;
  course: string;
  degree: string;
  startDate: string;
  endDate: string;
  status: "Concluido" | "Em andamento";
  description: string;
};

export type Certificate = {
  name: string;
  institution: string;
  issueDate: string;
  url: string;
};

export type Project = {
  name: string;
  description: string;
  problem: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
};

export type Hobby = {
  name: string;
  description: string;
  icon: string;
};
