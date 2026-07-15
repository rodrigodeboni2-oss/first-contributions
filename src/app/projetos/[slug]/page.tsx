import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProjeto, projetos } from "@/lib/projetos";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  if (!projeto) return { title: "Projeto | Educatec" };
  return {
    title: `${projeto.tituloCurto} | Educatec`,
    description: projeto.resumo,
  };
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  if (!projeto) notFound();

  const relacionado = getProjeto(projeto.relacionado);
  const [imagemDois, imagemTres] = projeto.corpo;
  const totalImagens = (projeto.hero ? 1 : 0) + projeto.corpo.length;
  const paginaCompacta = totalImagens <= 2;
  const paginaCompleta = totalImagens >= 6;

  return (
    <article className={paginaCompacta ? "pb-16" : "pb-24"}>
      {/* 1. Hero */}
      {projeto.hero ? (
        <div
          className={`relative w-full ${
            paginaCompacta
              ? "aspect-[4/3] md:aspect-[5/2]"
              : "aspect-[16/10] md:aspect-[16/9]"
          }`}
        >
          <Image
            src={projeto.hero.src}
            alt={projeto.hero.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div
          className={`px-4 ${
            paginaCompacta ? "py-16 md:py-20" : "py-24 md:py-32"
          } ${
            projeto.slug === "observatorio-educacional"
              ? "bg-ink"
              : "bg-brand"
          }`}
        >
          <p className="mx-auto max-w-4xl text-center font-display text-3xl leading-snug text-white md:text-5xl">
            {projeto.fraseDestaque}
          </p>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4">
        {/* Título e etiquetas */}
        <Reveal className={paginaCompacta ? "mt-8 md:mt-10" : "mt-10 md:mt-14"}>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                projeto.status === "Em andamento"
                  ? "border-amber-500 text-amber-600"
                  : "border-brand text-brand"
              }`}
            >
              {projeto.status}
            </span>
            <span className="text-sm uppercase tracking-wide text-slate-400">
              {projeto.categorias.join(" · ")}
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] text-slate-900 md:text-6xl">
            {projeto.titulo}
          </h1>
          {projeto.hero?.legenda && (
            <p className="mt-3 text-sm text-slate-400">
              {projeto.hero.legenda}
            </p>
          )}
        </Reveal>

        {/* 2. Informações rápidas */}
        <Reveal className={paginaCompacta ? "mt-8" : "mt-10"}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-slate-200 py-8 md:grid-cols-5">
            {[
              ["Período", projeto.periodo],
              ["Território", projeto.local],
              ["Área", projeto.area],
              ["Papel da Educatec", projeto.papel],
              ["Status", projeto.status],
            ].map(([rotulo, valor]) => (
              <div key={rotulo}>
                <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  {rotulo}
                </dt>
                <dd className="mt-1.5 text-sm font-medium leading-snug text-slate-800">
                  {valor}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* 3. Contexto + frase destaque */}
        <div
          className={`grid gap-10 md:grid-cols-12 md:gap-14 ${
            paginaCompacta ? "mt-10" : "mt-14"
          }`}
        >
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-3xl text-slate-900 md:text-4xl">
              Contexto
            </h2>
            <div className="mt-6 space-y-5">
              {projeto.contexto.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="max-w-prose text-lg leading-relaxed text-slate-700"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <p
              className={`border-l-2 border-brand pl-6 font-display text-2xl leading-snug text-brand-dark md:text-3xl ${
                paginaCompacta ? "md:mt-10" : "md:mt-16"
              }`}
            >
              {projeto.fraseDestaque}
            </p>
          </Reveal>
        </div>

        {/* Imagem 2 — depois do contexto */}
        {imagemDois && (
          <Reveal className={paginaCompacta ? "mt-10" : "mt-14"}>
            <div
              className={`relative overflow-hidden rounded-xl ${
                paginaCompacta
                  ? "aspect-[16/9] md:aspect-[21/9]"
                  : "aspect-[16/9] md:aspect-[16/10]"
              }`}
            >
              <Image
                src={imagemDois.src}
                alt={imagemDois.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
            {imagemDois.legenda && (
              <p className="mt-2 text-xs text-slate-400">
                {imagemDois.legenda}
              </p>
            )}
          </Reveal>
        )}

        {/* 4. Papel da Educatec */}
        <div
          className={`grid gap-10 md:grid-cols-12 md:gap-14 ${
            paginaCompacta ? "mt-12" : "mt-16"
          }`}
        >
          <Reveal className="md:col-span-5">
            <div className="rounded-xl bg-paper p-8">
              <h2 className="font-display text-2xl text-slate-900">
                Papel e responsabilidades
              </h2>
              <ul className="mt-5 space-y-3">
                {projeto.responsabilidades.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            {projeto.blocoExtra && (
              <div className="mt-6 rounded-xl border border-slate-200 p-8">
                <h3 className="font-display text-xl text-slate-900">
                  {projeto.blocoExtra.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {projeto.blocoExtra.texto}
                </p>
              </div>
            )}
          </Reveal>

          {/* 5. O que foi realizado + imagem 3 */}
          <Reveal className="md:col-span-7" delay={100}>
            <h2 className="font-display text-3xl text-slate-900">
              O que foi realizado
            </h2>
            <ul className="mt-6 space-y-4">
              {projeto.realizado.map((r) => (
                <li
                  key={r}
                  className="border-b border-slate-200 pb-4 text-lg leading-relaxed text-slate-700"
                >
                  {r}
                </li>
              ))}
            </ul>
            {imagemTres && (
              <div className="mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={imagemTres.src}
                    alt={imagemTres.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                {imagemTres.legenda && (
                  <p className="mt-2 text-xs text-slate-400">
                    {imagemTres.legenda}
                  </p>
                )}
              </div>
            )}
          </Reveal>
        </div>

        {/* 6. Resultados */}
        {projeto.resultados.length > 0 && (
          <Reveal className={paginaCompacta ? "mt-14" : "mt-20"}>
            <div className="border-y border-slate-200 py-12">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Resultados
              </p>
              <div className="mt-8 grid grid-cols-2 gap-10 md:flex md:flex-wrap md:gap-20">
                {projeto.resultados.map((r) => (
                  <div key={r.legenda}>
                    <p className="font-display text-5xl text-brand md:text-7xl">
                      {r.numero}
                    </p>
                    <p className="mt-2 max-w-40 text-sm leading-snug text-slate-600">
                      {r.legenda}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Galeria adicional: cresce somente quando há acervo suficiente */}
        {projeto.corpo.length > 2 && (
          <Reveal className="mt-14">
            <div
              className={`grid gap-6 ${
                paginaCompleta ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {projeto.corpo.slice(2).map((img) => (
                <figure key={img.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {img.legenda && (
                    <figcaption className="mt-2 text-xs text-slate-400">
                      {img.legenda}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Reveal>
        )}

        {/* 8. Instituições */}
        <Reveal className={paginaCompacta ? "mt-12" : "mt-16"}>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Instituições relacionadas
          </p>
          <p className="mt-2 max-w-prose text-slate-700">
            {projeto.instituicoes}
          </p>
        </Reveal>

        {/* 9. Projeto relacionado */}
        {relacionado && (
          <Reveal className={paginaCompacta ? "mt-12" : "mt-16"}>
            <Link
              href={`/projetos/${relacionado.slug}`}
              className="group flex flex-col justify-between gap-4 rounded-xl border border-slate-200 p-8 transition-colors duration-200 hover:border-brand md:flex-row md:items-center"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Próximo projeto
                </p>
                <p className="mt-2 font-display text-2xl text-slate-900">
                  {relacionado.tituloCurto}
                </p>
                <p className="mt-1 max-w-prose text-sm text-slate-500">
                  {relacionado.resumo}
                </p>
              </div>
              <span className="shrink-0 text-2xl text-brand transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        )}

        {/* 10. Contato */}
        <Reveal className={paginaCompacta ? "mt-12" : "mt-16"}>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink p-10 text-white md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">
                Um projeto assim faz sentido para a sua instituição?
              </h2>
              <p className="mt-2 text-slate-300">
                Fale com a Educatec e conte o seu desafio.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Link
                href="/contato"
                className="rounded-full bg-white px-6 py-2.5 font-semibold text-ink transition hover:bg-slate-200"
              >
                Solicitar proposta
              </Link>
              <a
                href="https://wa.me/5571999816999"
                className="rounded-full border border-white px-6 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
