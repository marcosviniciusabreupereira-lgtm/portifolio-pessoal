import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "Projeto Plataforma",
    description: "Aplicacao web ficticia para demonstrar uma plataforma moderna de gestao.",
    problem: "Centralizar processos dispersos em uma experiencia simples e colaborativa.",
    image: "/project-placeholder.svg",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    features: ["Dashboard responsivo", "Autenticacao", "Relatorios e filtros"],
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com",
  },
  {
    name: "Aplicacao Mobile",
    description: "Produto placeholder voltado ao acompanhamento de tarefas e metas.",
    problem: "Ajudar pessoas a organizar a rotina de maneira visual e objetiva.",
    image: "/project-placeholder.svg",
    category: "Mobile",
    technologies: ["React", "TypeScript", "Firebase"],
    features: ["Sincronizacao em nuvem", "Notificacoes", "Painel de progresso"],
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    name: "API de Dados",
    description: "Servico ficticio para coleta, organizacao e consulta de dados.",
    problem: "Disponibilizar dados consistentes por meio de uma API segura.",
    image: "/project-placeholder.svg",
    category: "Backend",
    technologies: ["Node.js", "PostgreSQL", "Docker"],
    features: ["Documentacao OpenAPI", "Cache", "Monitoramento"],
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
];
