"use client";

import Image from "next/image";
import { ArrowDown, BriefcaseBusiness, Download, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import type { Profile } from "@/types/portfolio";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="inicio" className="relative flex min-h-[760px] items-center overflow-hidden pt-18">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute left-[12%] top-28 size-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-10 right-[8%] size-80 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="container-shell relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
            {profile.availability}
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">{profile.role}</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[76px]">
            Ola, eu sou{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">{profile.headline}</p>
          <p className="mt-4 max-w-xl leading-7 text-muted">{profile.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="inline-flex h-12 items-center gap-2 rounded-full bg-cyan-400 px-5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
              Ver projetos <ArrowDown size={17} />
            </a>
            <a href={profile.resumeUrl} download className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 px-5 text-sm font-semibold text-foreground transition hover:border-cyan-400/50 hover:text-cyan-300">
              <Download size={17} /> Baixar curriculo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {profile.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-full border border-white/10 text-muted transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300" aria-label={social.label}>
                {social.label === "GitHub" ? <GitFork size={18} /> : <BriefcaseBusiness size={18} />}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[470px]" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <div className="absolute -inset-5 rounded-[38px] border border-cyan-400/10 rotate-3" />
          <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/10 bg-card p-3 shadow-2xl">
            <Image src={profile.avatarUrl} alt={`Retrato profissional de ${profile.name}`} fill priority sizes="(max-width: 1024px) 70vw, 470px" className="object-cover p-3" />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-card/90 px-4 py-3 backdrop-blur-xl sm:-left-8">
            <p className="text-[11px] uppercase tracking-wider text-muted">Localizacao</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
