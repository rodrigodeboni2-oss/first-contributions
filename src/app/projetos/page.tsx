import type { Metadata } from "next";
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
    <div className="w-full overflow-hidden bg-[linear-gradient(160deg,#0d4c82_0%,#1265ab_30%,#5f96c4_62%,#e8f1f9_100%)]">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 md:pb-24 md:pt-20">
        {/* Abertura editorial integrada ao mural */}
        <Reveal className="max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Portfólio
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            Projetos construídos entre educação, gestão, esporte e território.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Conheça experiências em que a Educatec participou da concepção, do
            planejamento, da articulação, da execução ou do acompanhamento,
            conforme o papel desempenhado em cada projeto.
          </p>
        </Reveal>

        {/* Painel e galeria formam uma única composição */}
        <div className="mt-10 md:mt-14">
          <ProjetosGrid projetos={projetos} />
        </div>

        {/* Chamada final integrada ao mesmo fundo */}
        <Reveal className="mt-16 border-t border-brand/15 pt-16 text-center md:mt-20 md:pt-20">
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-slate-900 md:text-4xl">
            Qual projeto sua instituição precisa colocar em prática?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-700">
            Conte o desafio. A Educatec pode ajudar a estruturar o caminho,
            reunir os participantes e acompanhar a execução.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Solicitar proposta
            </Link>
            <a
              href="https://wa.me/5571999816999"
              className="rounded-full border-2 border-brand px-7 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
