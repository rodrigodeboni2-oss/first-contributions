import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjeto, projetos } from "@/lib/projetos";

export function generateStaticParams() {
  return projetos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  return projeto ? { title: `${projeto.titulo} | Educatec`, description: projeto.resumo } : {};
}

export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  if (!projeto) notFound();

  return (
    <main className="bg-[#faf8f4] text-slate-800">
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-10">
        <Link href="/projetos" className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">← Todos os projetos</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">{projeto.categorias.map((c) => <span key={c} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">{c}</span>)}</div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-950 md:text-6xl">{projeto.titulo}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{projeto.resumo}</p>
          </div>
          {projeto.hero && <figure><div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl"><Image src={projeto.hero.src} alt={projeto.hero.alt} fill priority className="object-cover" /></div>{projeto.hero.legenda && <figcaption className="mt-3 text-sm text-slate-500">{projeto.hero.legenda}</figcaption>}</figure>}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
          {[['Período', projeto.periodo], ['Território', projeto.local], ['Área', projeto.area], ['Papel', projeto.papel], ['Status', projeto.status]].map(([k,v]) => <div key={k}><p className="text-xs font-bold uppercase tracking-widest text-amber-700">{k}</p><p className="mt-2 text-sm leading-6 text-slate-700">{v}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h2 className="font-serif text-3xl font-bold text-slate-950">Contexto</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">{projeto.contexto.map((p) => <p key={p}>{p}</p>)}</div>
        <blockquote className="my-12 border-l-4 border-amber-500 bg-amber-50 px-7 py-6 font-serif text-2xl font-semibold leading-9 text-slate-900">{projeto.fraseDestaque}</blockquote>
        <div className="grid gap-10 md:grid-cols-2">
          <div><h2 className="font-serif text-2xl font-bold text-slate-950">Responsabilidades</h2><ul className="mt-5 space-y-3">{projeto.responsabilidades.map((x) => <li key={x} className="flex gap-3 leading-7"><span className="text-amber-600">●</span>{x}</li>)}</ul></div>
          <div><h2 className="font-serif text-2xl font-bold text-slate-950">O que foi realizado</h2><ul className="mt-5 space-y-3">{projeto.realizado.map((x) => <li key={x} className="flex gap-3 leading-7"><span className="text-amber-600">●</span>{x}</li>)}</ul></div>
        </div>
        {projeto.resultados.length > 0 && <div className="mt-14 grid gap-5 sm:grid-cols-2">{projeto.resultados.map((r) => <div key={r.numero+r.legenda} className="rounded-2xl bg-slate-950 p-7 text-white"><p className="text-4xl font-bold text-amber-400">{r.numero}</p><p className="mt-2 text-slate-300">{r.legenda}</p></div>)}</div>}
        {projeto.blocoExtra && <div className="mt-14 rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-serif text-2xl font-bold">{projeto.blocoExtra.titulo}</h2><p className="mt-4 leading-8 text-slate-700">{projeto.blocoExtra.texto}</p></div>}
      </section>

      {projeto.corpo.length > 0 && <section className="bg-slate-950 py-16 text-white"><div className="mx-auto max-w-7xl px-6 lg:px-10"><h2 className="font-serif text-3xl font-bold">Registros do projeto</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projeto.corpo.map((foto, i) => <figure key={foto.src} className={i === 0 ? "sm:col-span-2" : ""}><div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800"><Image src={foto.src} alt={foto.alt} fill className="object-cover transition duration-500 hover:scale-105" /></div>{foto.legenda && <figcaption className="mt-3 text-sm leading-6 text-slate-300">{foto.legenda}</figcaption>}</figure>)}</div></div></section>}

      {projeto.noticia && <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Notícia do projeto</p><h2 className="mt-3 font-serif text-3xl font-bold">{projeto.noticia.titulo}</h2><div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">{projeto.noticia.paragrafos.map((p) => <p key={p}>{p}</p>)}</div></section>}

      <section className="border-t border-slate-200 bg-white"><div className="mx-auto max-w-5xl px-6 py-12 lg:px-10"><h2 className="text-sm font-bold uppercase tracking-widest text-amber-700">Instituições e parceiros</h2><p className="mt-4 leading-8 text-slate-700">{projeto.instituicoes}</p>{projeto.aviso && <p className="mt-8 rounded-2xl bg-slate-100 p-6 text-sm leading-7 text-slate-600"><strong>Aviso institucional:</strong> {projeto.aviso}</p>}</div></section>
    </main>
  );
}
