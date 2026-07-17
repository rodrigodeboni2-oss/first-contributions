import ProjetosHorizontal from "@/components/ProjetosHorizontal";
import { projetos } from "@/lib/projetos";

export default function EducatecEmAcao() {
  return (
    <section className="mt-20 md:mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Educatec em ação
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl text-slate-900 md:text-4xl">
            Soluções completas em educação, gestão, esporte, cultura e eventos
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-slate-500">
          Cada imagem registra uma frente de trabalho: articulação,
          planejamento, formação e produção de projetos.
        </p>
      </div>

      <ProjetosHorizontal projetos={projetos} />
    </section>
  );
}
