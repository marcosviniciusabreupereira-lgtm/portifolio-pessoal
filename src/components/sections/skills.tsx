"use client";

import { Atom, Box, Code2, Database, GitBranch, Layers3, LayoutTemplate, Palette, LucideIcon } from "lucide-react";
import type { SkillCategory } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<string, LucideIcon> = {
  atom: Atom,
  box: Box,
  code: Code2,
  database: Database,
  git: GitBranch,
  layers: Layers3,
  layout: LayoutTemplate,
  palette: Palette,
};

export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow="Competencias" title="Tecnologias que domino" description="Um conjunto de ferramentas e conhecimentos que utilizo para transformar requisitos em produtos digitais consistentes." />
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.08}>
              <div className="h-full rounded-3xl border border-white/8 bg-card p-5 sm:p-6">
                <h3 className="mb-5 text-lg font-semibold text-foreground">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const Icon = icons[skill.icon] ?? Code2;
                    return (
                      <div key={skill.name} className="group rounded-2xl border border-white/6 bg-background/40 p-4 transition hover:-translate-y-1 hover:border-cyan-400/20">
                        <div className="flex items-start gap-3">
                          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon size={19} /></div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="font-semibold text-foreground">{skill.name}</h4>
                              <span className="text-xs text-muted">{skill.level}%</span>
                            </div>
                            <p className="mt-1 text-sm leading-6 text-muted">{skill.description}</p>
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/6">
                              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" style={{ width: `${skill.level}%` }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
