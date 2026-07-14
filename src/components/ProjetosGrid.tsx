import Image from "next/image";
import Link from "next/link";
import type { Projeto } from "@/lib/projetos";

export default function ProjetosGrid({ projetos }: { projetos: Projeto[] }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-12">{projetos.map((p) => <Link key={p.slug} href={`/projetos/${p.slug}`} className={`${p.cardSpan} group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}><div className={`relative ${p.cardAspecto} overflow-hidden bg-slate-200`}>{p.cardImagem && <Image src={p.cardImagem.src} alt={p.cardImagem.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />}</div><div className="p-6"><div className="flex flex-wrap gap-2">{p.categorias.map((c) => <span key={c} className="text-xs font-bold uppercase tracking-wider text-amber-700">{c}</span>)}</div><h2 className="mt-3 font-serif text-2xl font-bold text-slate-950">{p.tituloCurto}</h2><p className="mt-3 line-clamp-3 leading-7 text-slate-600">{p.resumo}</p><p className="mt-5 font-bold text-slate-950">Conheça o projeto →</p></div></Link>)}</div>;
}
