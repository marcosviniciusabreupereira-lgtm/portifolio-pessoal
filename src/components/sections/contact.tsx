"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BriefcaseBusiness, GitFork, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { Profile } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  email: z.email("Informe um e-mail valido."),
  subject: z.string().trim().min(3, "Informe o assunto."),
  message: z.string().trim().min(10, "Escreva ao menos 10 caracteres."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact({ profile }: { profile: Profile }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactValues) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Falha ao enviar");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "mt-2 h-12 w-full rounded-xl border border-white/10 bg-background/60 px-4 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10";

  return (
    <section id="contato" className="section-space">
      <div className="container-shell">
        <SectionHeading eyebrow="Contato" title="Vamos conversar" description="Tem uma oportunidade, projeto ou ideia? Entre em contato e responderei o mais breve possivel." />
        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <aside className="h-full rounded-3xl border border-white/8 bg-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground">Canais profissionais</h3>
              <p className="mt-3 leading-7 text-muted">Os links abaixo sao placeholders e podem ser substituidos pelos seus perfis reais.</p>
              <div className="mt-7 space-y-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/6 p-4 text-sm text-muted transition hover:border-cyan-400/20 hover:text-cyan-300"><Mail size={18} /> {profile.email}</a>
                {profile.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/6 p-4 text-sm text-muted transition hover:border-cyan-400/20 hover:text-cyan-300">
                    {social.label === "GitHub" ? <GitFork size={18} /> : <BriefcaseBusiness size={18} />} {social.label}
                  </a>
                ))}
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-white/8 bg-card p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-foreground">Nome
                  <input {...register("name")} className={inputClass} placeholder="Seu nome" aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <span className="mt-1 block text-xs text-rose-400">{errors.name.message}</span> : null}
                </label>
                <label className="text-sm font-medium text-foreground">E-mail
                  <input {...register("email")} type="email" className={inputClass} placeholder="voce@exemplo.com" aria-invalid={Boolean(errors.email)} />
                  {errors.email ? <span className="mt-1 block text-xs text-rose-400">{errors.email.message}</span> : null}
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium text-foreground">Assunto
                <input {...register("subject")} className={inputClass} placeholder="Assunto da mensagem" aria-invalid={Boolean(errors.subject)} />
                {errors.subject ? <span className="mt-1 block text-xs text-rose-400">{errors.subject.message}</span> : null}
              </label>
              <label className="mt-5 block text-sm font-medium text-foreground">Mensagem
                <textarea {...register("message")} className="mt-2 min-h-36 w-full resize-y rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/60 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10" placeholder="Conte um pouco sobre sua proposta..." aria-invalid={Boolean(errors.message)} />
                {errors.message ? <span className="mt-1 block text-xs text-rose-400">{errors.message.message}</span> : null}
              </label>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === "sending"} className="inline-flex h-12 items-center gap-2 rounded-full bg-cyan-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60">
                  {status === "sending" ? "Enviando..." : "Enviar mensagem"} <Send size={16} />
                </button>
                {status === "success" ? <p role="status" className="text-sm text-emerald-400">Mensagem enviada com sucesso.</p> : null}
                {status === "error" ? <p role="alert" className="text-sm text-rose-400">Nao foi possivel enviar. Tente novamente.</p> : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
