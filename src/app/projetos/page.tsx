import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjetosGrid from "@/components/ProjetosGrid";
import Reveal from "@/components/Reveal";
import { projetos } from "@/lib/projetos";

export const metadata: Metadata = {
  title: "Projetos | Educatec",
  description:
    "Projetos construídos entre educação, gestão, esporte e território — com a participação da Educatec do planejamento ao acompanhamento.",
};

export default function Projetos() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 md:pt-24">
      {/* Hero editorial */}
      <div className="grid items-end gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Portfólio
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-slate-900 md:text-6xl">
            Projetos construídos entre educação, gestão, esporte e território.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-600">
            Conheça experiências em que a Educatec participou da concepção, do
            planejamento, da articulação, da execução ou do acompanhamento,
            conforme o papel desempenhado em cada projeto.
          </p>
        </Reveal>
        <Reveal className="md:col-span-5" delay={120}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/projetos/copa-feminina-2027/ilustracao-copa-feminina-2027.jpg"
              alt="Ilustração temática da Copa do Mundo Feminina 2027"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="bg-white object-contain"
              priority
            />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Ilustração temática da Copa do Mundo Feminina 2027
          </p>
        </Reveal>
      </div>

      {/* Todos os projetos, sem filtros */}
      <div className="mt-20 md:mt-28">
        <ProjetosGrid projetos={projetos} />
      </div>

      {/* CTA */}
      <Reveal className="mt-24">
        <div className="rounded-2xl bg-brand px-8 py-14 text-center text-white md:px-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight md:text-4xl">
            Qual projeto sua instituição precisa colocar em prática?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sky-100">
            Conte o desafio. A Educatec pode ajudar a estruturar o caminho,
            reunir os participantes e acompanhar a execução.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="rounded-full bg-white px-7 py-3 font-semibold text-brand transition hover:bg-sky-100"
            >
              Solicitar proposta
            </Link>
            <a
              href="https://wa.me/5571999816999"
              className="rounded-full border-2 border-white px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
