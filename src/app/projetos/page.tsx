import type { Metadata } from "next";
import ProjetosGrid from "@/components/ProjetosGrid";
import Reveal from "@/components/Reveal";
import ProjectContactCta from "@/components/ProjectContactCta";
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
        <ProjectContactCta
          className="mt-16 md:mt-20"
          variant="portfolio"
          eyebrow="Fale sobre o seu projeto"
          title="Vamos estruturar o próximo projeto da sua instituição?"
          description="Apresente a necessidade diretamente ao Ney Campello e dê o primeiro passo para organizar objetivos, parceiros e execução."
        />
      </div>
    </div>
  );
}
