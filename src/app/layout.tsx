import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Educatec — Soluções em Educação",
  description:
    "Soluções completas em educação, gestão, esporte, cultura e eventos. Da concepção à execução, para governos, instituições e organizações.",
};

const nav = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/ney-campello", label: "Ney Campello" },
  { href: "/contato", label: "Contato" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-educatec.png"
                alt="Educatec — Soluções em Educação"
                width={378}
                height={252}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-slate-700">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                className="rounded-full bg-brand px-4 py-1.5 text-white transition-colors hover:bg-brand-dark"
              >
                Solicite uma proposta
              </Link>
            </nav>
          </div>
        </header>

        {/* Botão fixo de WhatsApp — sempre visível para contato rápido */}
        <a
          href="https://wa.me/5571999816999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Educatec no WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe5b]"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-current"
            aria-hidden="true"
          >
            <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.59-1.67a12.74 12.74 0 0 0 6.21 1.61h.01c7.06 0 12.79-5.74 12.79-12.8s-5.74-12.74-12.8-12.74zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91.99 1.04-3.81-.25-.4a10.55 10.55 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.52c0 5.87-4.77 10.55-10.73 10.55zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
          </svg>
        </a>

        <main className="flex-1">{children}</main>

        <footer className="bg-slate-900 text-slate-300">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
            <div>
              <Image
                src="/images/logo-educatec.png"
                alt="Educatec"
                width={378}
                height={252}
                className="mb-3 h-14 w-auto rounded bg-white p-1.5"
              />
              <p className="text-sm leading-relaxed">
                Educatec Planejamento, Gestão e Consultoria Ltda.
                <br />
                Soluções em educação, gestão, esporte, cultura e eventos desde
                2007.
              </p>
            </div>
            <div className="text-sm leading-relaxed">
              <h3 className="mb-3 font-semibold text-white">Contato</h3>
              <p>
                Av. Amarílio Thiago dos Santos, 937, QD E, LT 5, Sala 3
                <br />
                Vila Praiana, Lauro de Freitas/BA — CEP 42704-550
              </p>
              <p className="mt-2">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/5571999816999"
                  className="text-white underline-offset-2 hover:underline"
                >
                  (71) 99981-6999
                </a>
              </p>
            </div>
            <div className="text-sm leading-relaxed">
              <h3 className="mb-3 font-semibold text-white">Navegação</h3>
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Educatec Planejamento, Gestão e
            Consultoria Ltda. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
