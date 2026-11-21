import { Award, CalendarDays, ExternalLink, GraduationCap } from "lucide-react";
import type { Certificate, Education } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection({ education, certificates }: { education: Education[]; certificates: Certificate[] }) {
  return (
    <section id="formacao" className="section-space border-y border-white/6">
      <div className="container-shell">
        <SectionHeading eyebrow="Tragetoria" title="Formacao e certificados" description="Minha base academica e aprendizado continuo em tecnologia." />
        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="space-y-4">
            {education.map((item, index) => (
              <Reveal key={`${item.institution}-${item.course}`} delay={index * 0.08}>
                <article className="relative rounded-3xl border border-white/8 bg-card p-6 sm:p-7">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300"><GraduationCap size={22} /></div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">{item.status}</p>
                      <h3 className="mt-1 text-xl font-semibold text-foreground">{item.course}</h3>
                      <p className="mt-1 text-sm text-muted">{item.institution} - {item.degree}</p>
                    </div>
                  </div>
                  <p className="leading-7 text-muted">{item.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-muted"><CalendarDays size={16} /> {item.startDate} - {item.endDate}</div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-3xl border border-white/8 bg-card p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3"><Award className="text-cyan-300" size={20} /><h3 className="font-semibold text-foreground">Certificacoes</h3></div>
              <div className="space-y-3">
                {certificates.map((certificate) => (
                  <a key={certificate.name} href={certificate.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/6 p-4 transition hover:border-cyan-400/20">
                    <div>
                      <h4 className="font-medium text-foreground">{certificate.name}</h4>
                      <p className="mt-1 text-sm text-muted">{certificate.institution} - {certificate.issueDate}</p>
                    </div>
                    <ExternalLink size={17} className="shrink-0 text-muted transition group-hover:text-cyan-300" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
