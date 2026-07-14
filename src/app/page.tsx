import Image from "next/image";
import Link from "next/link";
import ProjetosGrid from "@/components/ProjetosGrid";
import { projetos } from "@/lib/projetos";

const areas = ["Consultoria educacional", "Gestão e desenvolvimento institucional", "Formação e desenvolvimento", "Eventos esportivos, culturais e educacionais", "Tecnologia e dados"];

export default function Home() {
  return <main className="bg-[#faf8f4] text-slate-800">
    <section className="mx-auto grid min-h-[72vh] max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
      <div><p className="text-sm font-bold uppercase tracking-[.22em] text-amber-700">Educatec Planejamento, Gestão e Consultoria Ltda.</p><h1 className="mt-5 font-serif text-5xl font-bold leading-[1.08] text-slate-950 md:text-7xl">Experiência que planeja. Gestão que transforma. Projetos que acontecem.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">A Educatec desenvolve soluções completas em educação, gestão, esporte, cultura e eventos para governos, instituições e organizações. Da concepção à execução, unimos planejamento, conhecimento técnico e experiência pública para transformar desafios em resultados.</p><div className="mt-9 flex flex-wrap gap-4"><Link href="/servicos" className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white">Conheça nossas soluções</Link><Link href="/projetos" className="rounded-full border border-slate-300 px-6 py-3 font-bold">Veja projetos e experiências</Link></div></div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl"><Image src="/images/projetos/cidade-educadora/08-celebracao.webp" alt="Projeto Cidade Educadora em Ipecaetá" fill priority className="object-cover" /></div>
    </section>
    <section className="bg-slate-950 py-16 text-white"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="text-sm font-bold uppercase tracking-[.2em] text-amber-400">Soluções completas</p><div className="mt-8 grid gap-px overflow-hidden rounded-3xl bg-slate-700 sm:grid-cols-2 lg:grid-cols-5">{areas.map((a, i) => <div key={a} className="bg-slate-950 p-6"><span className="text-sm text-amber-400">0{i+1}</span><h2 className="mt-4 font-serif text-xl font-bold">{a}</h2></div>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10"><div className="flex items-end justify-between gap-6"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-amber-700">Projetos</p><h2 className="mt-3 font-serif text-4xl font-bold text-slate-950">Experiências em destaque</h2></div><Link href="/projetos" className="hidden font-bold sm:block">Ver todos →</Link></div><div className="mt-10"><ProjetosGrid projetos={projetos.slice(0, 3)} /></div></section>
    <section className="bg-amber-500"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center lg:px-10"><div><h2 className="font-serif text-4xl font-bold text-slate-950">Transforme uma necessidade em projeto.</h2><p className="mt-3 text-lg text-slate-800">Solicite uma proposta ou converse com a Educatec.</p></div><Link href="/contato" className="rounded-full bg-slate-950 px-7 py-3 font-bold text-white">Converse com a Educatec</Link></div></section>
  </main>;
}
