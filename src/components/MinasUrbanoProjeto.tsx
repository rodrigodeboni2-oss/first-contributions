import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

const IMG = {
  abertura: "/images/projetos/minas-urbano/mu-abertura.webp",
  unidade: "/images/projetos/minas-urbano/mu-unidade-movel.webp",
  equipe: "/images/projetos/minas-urbano/mu-equipe-tecnica.webp",
  breaking: "/images/projetos/minas-urbano/mu-breaking.webp",
  jovens: "/images/projetos/minas-urbano/mu-atividade-jovens.webp",
  cerimonia: "/images/projetos/minas-urbano/mu-cerimonia.webp",
};

function TracadoUrbano({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 210"
      fill="none"
      aria-hidden="true"
      className={`mu-route ${className}`}
    >
      <path d="M12 42H118V12M118 42H228V96H308" />
      <path d="M42 198V124H174V72H276V18" />
      <path d="M8 156H92V92H250V198" />
      <circle cx="118" cy="42" r="4" />
      <circle cx="228" cy="96" r="4" />
      <circle cx="92" cy="124" r="4" />
      <circle cx="174" cy="72" r="4" />
      <circle cx="250" cy="156" r="4" />
    </svg>
  );
}

export default function MinasUrbanoProjeto({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="mu-page overflow-x-clip">
      <header className="mu-hero relative overflow-hidden">
        <TracadoUrbano className="pointer-events-none absolute -right-8 top-8 hidden w-80 opacity-40 md:block" />
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:pb-18 md:pt-16">
          <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            <Reveal className="order-1 lg:col-span-5">
              <div className="mu-hero-panel flex h-full flex-col justify-between rounded-[1.75rem] p-7 text-white md:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-amber-300/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-200">
                      {projeto.status}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
                      {projeto.categorias.join(" · ")}
                    </span>
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                    Esporte urbano · espaço público
                  </p>
                  <h1 className="mt-3 font-display text-5xl leading-[0.98] md:text-6xl">
                    {projeto.titulo}
                  </h1>
                  <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-sky-50/90 md:text-base">
                    {projeto.resumo}
                  </p>
                </div>
                <p className="mt-9 border-l-2 border-amber-400 pl-5 font-display text-xl leading-snug text-white md:text-2xl">
                  {projeto.fraseDestaque}
                </p>
              </div>
            </Reveal>

            <Reveal className="order-2 lg:col-span-7" delay={100}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-[0_24px_70px_rgba(8,45,78,0.22)]">
                  <Image
                    src={IMG.abertura}
                    alt="Abertura de uma etapa do Minas Urbano em arena esportiva"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                  Abertura de etapa do programa em Minas Gerais.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="mt-6" delay={140}>
            <dl className="mu-facts grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-5">
              {[
                ["Período", projeto.periodo],
                ["Território", projeto.local],
                ["Área", projeto.area],
                ["Papel da Educatec", projeto.papel],
                ["Status", projeto.status],
              ].map(([rotulo, valor]) => (
                <div key={rotulo} className="bg-white/95 p-5 md:p-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                    {rotulo}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug text-ink">
                    {valor}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-18 md:py-26">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              O programa
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              A arena chega. A cidade entra em movimento.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>{projeto.contexto[0]}</p>
              <p>{projeto.contexto[1]}</p>
              <p className="text-[15px] text-slate-600">
                A ocupação esportiva aproxima as comunidades das modalidades e
                integra atividade, formação e legado nos espaços públicos.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={100}>
            <figure className="lg:pl-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
                <Image
                  src={IMG.unidade}
                  alt="Unidade móvel identificada com a comunicação do Minas Urbano"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Estrutura móvel utilizada na realização das ações do programa.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mu-team-band relative overflow-hidden py-18 md:py-26">
        <TracadoUrbano className="pointer-events-none absolute -left-12 bottom-4 w-80 opacity-20" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-1 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Quem faz acontecer
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              Articulação técnica em cada etapa
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>{projeto.contexto[2]}</p>
              <p className="text-[15px] text-slate-600">
                A coordenação inicial conectou planejamento, parceiros e
                profissionais envolvidos na execução das atividades.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-brand/15 bg-white/80 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Delimitação da atuação
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-brand-dark">
                Coordenação durante os três primeiros meses.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-2 lg:col-span-7" delay={100}>
            <figure className="mx-auto max-w-[34rem] lg:mr-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-sky-50 shadow-[0_24px_70px_rgba(13,76,130,0.2)]">
                <Image
                  src={IMG.equipe}
                  alt="Cinco profissionais reunidos diante de um muro azul-claro com vasos de plantas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Equipe técnica em uma das ações do programa.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-18 md:py-26">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-12 md:grid-rows-2">
            <figure className="group md:col-span-8 md:row-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-slate-900 md:h-full md:aspect-auto md:min-h-[42rem]">
                <Image
                  src={IMG.breaking}
                  alt="Atleta executa movimento de breaking em arena do Minas Urbano"
                  fill
                  sizes="(max-width: 768px) 100vw, 67vw"
                  className="mu-image object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500 md:hidden">
                Breaking: esporte urbano, cultura e formação em movimento.
              </figcaption>
            </figure>

            <figure className="group md:col-span-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.6rem] bg-slate-200">
                <Image
                  src={IMG.jovens}
                  alt="Jovens participam de atividade esportiva em uma etapa do Minas Urbano"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="mu-image object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Atividade com jovens em uma das etapas do programa.
              </figcaption>
            </figure>

            <figure className="group md:col-span-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.6rem] bg-slate-200">
                <Image
                  src={IMG.cerimonia}
                  alt="Participantes reunidos durante abertura de uma etapa do Minas Urbano"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="mu-image object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Registro da abertura de uma etapa do programa.
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="mt-10 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Esporte urbano em cena
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              Modalidades, encontros e espaços ocupados
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={80}>
            <p className="text-base leading-relaxed text-slate-600">
              Arenas, oficinas, demonstrações e atividades educativas formam
              uma programação que aproxima esporte e vida urbana.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mu-deep relative overflow-hidden py-18 text-white md:py-26">
        <TracadoUrbano className="pointer-events-none absolute right-0 top-0 w-96 opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
              Papel e responsabilidades
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
              Coordenação inicial com escopo definido
            </h2>
          </Reveal>

          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {projeto.responsabilidades.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <li className="mu-responsibility h-full rounded-2xl p-7">
                  <span className="font-display text-4xl text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 text-base leading-relaxed text-sky-50">
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-14 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
                O que foi realizado
              </p>
              <ul className="mt-5 space-y-4">
                {projeto.realizado.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-white/10 pb-4 text-base leading-relaxed text-sky-50"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={100}>
              {projeto.resultados.map((resultado) => (
                <div
                  key={resultado.legenda}
                  className="rounded-[1.75rem] bg-amber-400 p-8 text-brand-dark shadow-[0_20px_60px_rgba(0,0,0,0.16)]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em]">
                    Resultado em destaque
                  </p>
                  <p className="mt-5 font-display text-6xl leading-none md:text-7xl">
                    {resultado.numero}
                  </p>
                  <p className="mt-3 max-w-xs text-sm font-semibold leading-relaxed">
                    {resultado.legenda}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mu-closing py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                Instituições relacionadas
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-sky-50/90">
                {projeto.instituicoes}
              </p>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={80}>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                {relacionado && (
                  <Link
                    href={`/projetos/${relacionado.slug}`}
                    className="mu-closing-link group rounded-2xl p-6 transition hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                      Projeto relacionado
                    </span>
                    <span className="mt-2 flex items-center justify-between gap-5 font-display text-2xl">
                      {relacionado.tituloCurto}
                      <span aria-hidden="true" className="text-amber-300">
                        →
                      </span>
                    </span>
                  </Link>
                )}
                <Link
                  href="/contato"
                  className="rounded-full bg-amber-400 px-7 py-4 text-center font-semibold text-brand-dark transition hover:bg-amber-300"
                >
                  Converse com a Educatec
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </article>
  );
}
