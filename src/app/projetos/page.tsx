import type { Metadata } from "next";
import ProjetosGrid from "@/components/ProjetosGrid";
import { projetos } from "@/lib/projetos";

export const metadata: Metadata = { title: "Projetos | Educatec", description: "Projetos e experiências da Educatec em educação, gestão, esporte, cultura e eventos." };

export default function ProjetosPage() {
  return <main className="bg-[#faf8f4] px-6 py-16 text-slate-800 lg:px-10"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-amber-700">Projetos e experiências</p><h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold text-slate-950 md:text-6xl">Planejamento que se transforma em ação.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Conheça iniciativas estruturadas e acompanhadas pela Educatec e por seus profissionais, com responsabilidades e vínculos institucionais apresentados com clareza.</p><div className="mt-12"><ProjetosGrid projetos={projetos} /></div></div></main>;
}
