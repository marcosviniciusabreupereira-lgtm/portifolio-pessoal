"use client";

import { BookOpen, Cpu, Gamepad2, Music2, LucideIcon } from "lucide-react";
import type { Hobby } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<string, LucideIcon> = { book: BookOpen, cpu: Cpu, gamepad: Gamepad2, music: Music2 };

export function Hobbies({ hobbies }: { hobbies: Hobby[] }) {
  return (
    <section id="sobre" className="section-space border-y border-white/6">
      <div className="container-shell">
        <SectionHeading eyebrow="Pessoa alem do codigo" title="Interesses e hobbies" description="Atividades que me ajudam a manter a curiosidade, a criatividade e o equilibrio no dia a dia." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => {
            const Icon = icons[hobby.icon] ?? Cpu;
            return (
              <Reveal key={hobby.name} delay={index * 0.06}>
                <article className="h-full rounded-3xl border border-white/8 bg-card p-6 transition hover:-translate-y-1 hover:border-cyan-400/20">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/15 to-indigo-400/15 text-cyan-300"><Icon size={21} /></div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{hobby.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{hobby.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
