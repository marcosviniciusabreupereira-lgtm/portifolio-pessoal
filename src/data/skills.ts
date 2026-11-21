import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens",
    skills: [
      { name: "TypeScript", description: "Tipagem segura e interfaces escalaveis", icon: "code", level: 90 },
      { name: "JavaScript", description: "Experiencia em frontend e backend", icon: "code", level: 88 },
      { name: "HTML & CSS", description: "Estrutura semantica e interfaces responsivas", icon: "layout", level: 92 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Next.js", description: "Aplicacoes modernas com App Router", icon: "layers", level: 90 },
      { name: "React", description: "Componentes reutilizaveis e acessiveis", icon: "atom", level: 92 },
      { name: "Tailwind CSS", description: "Design systems consistentes", icon: "palette", level: 88 },
    ],
  },
  {
    title: "Dados e ferramentas",
    skills: [
      { name: "PostgreSQL", description: "Modelagem e consultas relacionais", icon: "database", level: 80 },
      { name: "Git & GitHub", description: "Controle de versoes e colaboracao", icon: "git", level: 90 },
      { name: "Docker", description: "Ambientes consistentes e reproduziveis", icon: "box", level: 75 },
    ],
  },
];
