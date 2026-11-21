import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seu Nome Completo | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional com projetos, habilidades, formação acadêmica e informações de contato.",
  keywords: ["desenvolvedor full stack", "portfólio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Seu Nome Completo" }],
  openGraph: {
    title: "Seu Nome Completo | Desenvolvedor Full Stack",
    description:
      "Conheça projetos, competências e trajetória profissional em desenvolvimento de software.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
