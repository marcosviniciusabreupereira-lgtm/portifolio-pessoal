"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Skills", href: "#skills" },
  { label: "Formacao", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [light, setLight] = useState(false);

  useEffect(() => {
    const shouldLight = localStorage.getItem("theme") === "light";
    document.documentElement.classList.toggle("light", shouldLight);
    queueMicrotask(() => setLight(shouldLight));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    links.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-background/80 backdrop-blur-xl">
      <nav className="container-shell flex h-18 items-center justify-between" aria-label="Navegacao principal">
        <a href="#inicio" className="text-lg font-bold tracking-tight text-foreground" aria-label="Ir para o inicio">
          MV<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  active === id ? "bg-white/8 text-cyan-300" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 grid size-9 place-items-center rounded-full border border-white/10 text-muted transition hover:border-cyan-400/50 hover:text-cyan-300"
            aria-label={light ? "Ativar tema escuro" : "Ativar tema claro"}
          >
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={toggleTheme} className="grid size-10 place-items-center rounded-full border border-white/10" aria-label="Alternar tema">
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-full border border-white/10" aria-label="Abrir menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/6 bg-background px-5 py-4 md:hidden">
          <div className="container-shell grid">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/6 py-3 text-sm text-muted last:border-0">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
