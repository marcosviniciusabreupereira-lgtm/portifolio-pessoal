"use client";

import Image from "next/image";
import { GitFork, ExternalLink } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects({ projects }: { projects: Project[] }) {
  const categories = ["Todos", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="projetos" className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow="Portfolio" title="Projetos em destaque" description="Uma selecao de projetos placeholder que representa o tipo de trabalho e variedade de tecnologias que desejo apresentar." />
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrar projetos">
          {categories.map((category) => (
            <button key={category} type="button" onClick={() => setActive(category)} className={`rounded-full border px-4 py-2 text-sm transition ${active === category ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300" : "border-white/8 text-muted hover:text-foreground"}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="group h-full overflow-hidden rounded-3xl border border-white/8 bg-card transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-950/20">
                <div className="relative aspect-[1.58] overflow-hidden">
                  <Image src={project.image} alt={`Captura ilustrativa do projeto ${project.name}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">{project.category}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
                  <p className="mt-3 text-sm leading-6 text-muted"><span className="font-semibold text-foreground">Problema:</span> {project.problem}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => <span key={technology} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted">{technology}</span>)}
                  </div>
                  <ul className="mt-4 space-y-1 text-sm text-muted">
                    {project.features.map((feature) => <li key={feature}>• {feature}</li>)}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-cyan-300"><GitFork size={16} /> GitHub</a>
                    {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-cyan-300">Demo <ExternalLink size={16} /></a> : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
