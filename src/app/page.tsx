import { BackToTop } from "@/components/back-to-top";
import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Hobbies } from "@/components/sections/hobbies";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { certificates, education } from "@/data/education";
import { hobbies } from "@/data/hobbies";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <Skills categories={skillCategories} />
        <EducationSection education={education} certificates={certificates} />
        <Projects projects={projects} />
        <Hobbies hobbies={hobbies} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t border-white/6 py-8">
        <div className="container-shell flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {profile.name}</p>
          <p>Desenvolvido com Next.js e TypeScript</p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}
