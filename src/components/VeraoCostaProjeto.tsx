import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

// Linha da costa — motivo visual próprio: uma ondulação com pontos
// marcando as etapas do circuito pelo litoral. Abstrato e institucional.
function LinhaDaCosta({
  className = "",
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "white";
}) {
  const color =
    tone === "white" ? "rgba(255,255,255,0.55)" : "rgba(13,126,168,0.45)";
  return (
    <svg
      viewBox="0 0 320 90"
      aria-hidden="true"
      className={`vcc-coast ${className}`}
      style={{ color }}
    >
      <path d="M6 64 C 40 30, 70 78, 104 52 S 168 22, 200 48 S 262 76, 312 34" />
      <circle className="vcc-dot vcc-dot--amber" cx="6" cy="64" r="4" />
      <circle className="vcc-dot vcc-dot--turq" cx="104" cy="52" r="3.5" />
      <circle className="vcc-dot vcc-dot--amber" cx="200" cy="48" r="4" />
      <circle className="vcc-dot vcc-dot--turq" cx="262" cy="60" r="3" />
      <circle className="vcc-dot vcc-dot--amber" cx="312" cy="34" r="3.5" />
    </svg>
  );
}

const IMG = {
  arena: {
    src: "/images/projetos/verao-costa-a-costa/vcc-arena-oficial.webp",
    alt: "Jovens jogando futevôlei na arena de praia do II Verão Costa a Costa",
  },
  portal: {
    src: "/images/projetos/verao-costa-a-costa/vcc-portal-credenciamento.webp",
    alt: "Portal de entrada do II Verão Costa a Costa à noite, com a tenda de credenciamento e a sinalização de entrada gratuita",
  },
  futevolei: {
    src: "/images/projetos/verao-costa-a-costa/vcc-futevolei-acao.webp",
    alt: "Atleta em ação durante disputa de futevôlei no II Verão Costa a Costa",
  },
  volei: {
    src: "/images/projetos/verao-costa-a-costa/vcc-volei-jovens.webp",
    alt: "Jovens participando de atividade de vôlei na arena do II Verão Costa a Costa",
  },
};

export default function VeraoCostaProjeto({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="vcc-page">
      {/* ================= 1. ABERTURA ================= */}
      <header className="relative overflow-hidden">
        <LinhaDaCosta className="pointer-events-none absolute right-6 top-8 hidden w-80 md:block" />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
            {/* Painel institucional (texto primeiro no celular) */}
            <Reveal className="md:col-span-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
                  {projeto.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  {projeto.categorias.join(" · ")}
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl leading-[1.06] text-slate-900 md:text-[3.4rem]">
                {projeto.titulo}
              </h1>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-slate-600">
                {projeto.resumo}
              </p>
              <p className="mt-7 border-l-2 border-amber-400 pl-5 font-display text-2xl leading-snug text-brand-dark md:text-[1.7rem]">
                {projeto.fraseDestaque}
              </p>
            </Reveal>

            {/* Fotografia principal — arena de praia */}
            <Reveal className="md:col-span-6" delay={120}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-brand/10">
                  <Image
                    src={IMG.arena.src}
                    alt={IMG.arena.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-slate-500">
                  Arena de esportes de praia do II Verão Costa a Costa.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ================= 2. INFORMAÇÕES RÁPIDAS ================= */}
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-6 rounded-2xl bg-white/90 px-6 py-6 shadow-sm ring-1 ring-brand/10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-4 md:px-8">
            {[
              ["Período", projeto.periodo],
              ["Território", projeto.local],
              ["Área", projeto.area],
              ["Papel da Educatec", projeto.papel],
              ["Status", projeto.status],
            ].map(([rotulo, valor], i, arr) => (
              <div
                key={rotulo}
                className={
                  i < arr.length - 1
                    ? "md:border-r md:border-brand/10 md:pr-4"
                    : ""
                }
              >
                <dt className="text-[11px] font-bold uppercase tracking-wide text-brand">
                  {rotulo}
                </dt>
                <dd className="mt-1.5 text-sm font-medium leading-snug text-ink">
                  {valor}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* ================= 3. O CIRCUITO ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              O circuito
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Uma temporada inteira pelo litoral da Bahia
            </h2>
            <div className="mt-6 space-y-5">
              <p className="max-w-prose text-lg leading-relaxed text-slate-700">
                {projeto.contexto[0]}
              </p>
              <p className="max-w-prose leading-relaxed text-slate-600">
                {projeto.contexto[1]}
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-6" delay={100}>
            <div className="vcc-deep relative overflow-hidden rounded-3xl p-8 text-white md:p-10">
              <LinhaDaCosta
                tone="white"
                className="pointer-events-none absolute -right-8 bottom-2 w-72 opacity-70"
              />
              <p className="relative max-w-prose text-lg leading-relaxed text-sky-50/95">
                {projeto.contexto[2]}
              </p>
              <p className="relative mt-4 max-w-prose leading-relaxed text-sky-100/75">
                Esporte, cultura e lazer na mesma arena — com a praia como
                palco e a comunidade como protagonista.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= 4. OPERAÇÃO — do credenciamento à arena ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="order-2 md:order-1 md:col-span-5">
            <figure className="group">
              <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                <Image
                  src={IMG.portal.src}
                  alt={IMG.portal.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="img-zoom object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-slate-500">
                Portal de entrada e credenciamento do II Verão Costa a Costa,
                com entrada gratuita.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="order-1 md:order-2 md:col-span-7" delay={100}>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              A operação
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Do credenciamento à arena
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-700">
              {projeto.contexto[3]}
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-slate-600">
              É a parte do evento que o público quase não vê: estrutura
              montada, equipes orientadas, credenciamento organizado e portões
              abertos gratuitamente para a cidade.
            </p>
            <ul className="mt-8 space-y-3">
              {projeto.realizado.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================= 5. A ARENA EM MOVIMENTO ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            A arena em movimento
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Esporte de praia para atletas, estudantes e famílias
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-12 items-start gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                <Image
                  src={IMG.futevolei.src}
                  alt={IMG.futevolei.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="img-zoom object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-slate-500">
                Futevôlei em disputa durante a etapa do circuito.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:mt-12" delay={100}>
            <figure className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                <Image
                  src={IMG.volei.src}
                  alt={IMG.volei.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="img-zoom object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs text-slate-500">
                Participação juvenil nas atividades esportivas da arena.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ================= 6. PAPEL DA EDUCATEC ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <Reveal>
          <div className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-brand/10 md:p-12">
            <div className="grid gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-7">
                <p className="text-xs font-bold uppercase tracking-widest text-brand">
                  Papel da Educatec
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
                  Coordenação, organização e produção
                </h2>
                <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {projeto.responsabilidades.map((item, i) => (
                    <li key={item} className="relative pl-12">
                      <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-brand/25 bg-brand-light/60 font-display text-sm text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`absolute left-[0.9rem] top-9 h-2 w-2 -translate-x-1/2 rounded-full ${
                          i % 2 === 0 ? "bg-amber-400" : "bg-[#35c4d4]"
                        }`}
                      />
                      <p className="text-[15px] font-medium leading-relaxed text-slate-700">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col justify-center md:col-span-5">
                {projeto.resultados[0] && (
                  <div className="rounded-2xl bg-brand-light/50 p-8 text-center">
                    <p className="font-display text-6xl text-brand md:text-7xl">
                      {projeto.resultados[0].numero}
                    </p>
                    <p className="mx-auto mt-3 max-w-52 text-sm leading-snug text-slate-600">
                      {projeto.resultados[0].legenda}
                    </p>
                  </div>
                )}
                <p className="mt-6 text-sm leading-relaxed text-slate-500">
                  Atuação desenvolvida pelo professor Ney Campello em parceria
                  com a CBDE e a MCS, conforme o escopo definido para a etapa.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= 7. ENCERRAMENTO ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 md:pb-24 md:pt-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Instituições relacionadas
          </p>
          <p className="mt-2 max-w-prose text-lg text-white/90">
            {projeto.instituicoes}
          </p>
        </Reveal>

        {relacionado && (
          <Reveal className="mt-10">
            <Link
              href={`/projetos/${relacionado.slug}`}
              className="group flex flex-col justify-between gap-4 rounded-2xl bg-white/10 p-8 ring-1 ring-white/15 backdrop-blur-sm transition-colors duration-200 hover:bg-white/15 md:flex-row md:items-center"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  Próximo projeto
                </p>
                <p className="mt-2 font-display text-2xl text-white">
                  {relacionado.tituloCurto}
                </p>
                <p className="mt-1 max-w-prose text-sm text-sky-100/70">
                  {relacionado.resumo}
                </p>
              </div>
              <span className="shrink-0 text-2xl text-amber-400 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        )}

        <Reveal className="mt-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-8 shadow-lg md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Um circuito assim faz sentido para o seu território?
              </h2>
              <p className="mt-2 text-slate-600">
                Fale com a Educatec e conte o seu desafio.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Link
                href="/contato"
                className="rounded-full bg-brand px-6 py-2.5 font-semibold text-white transition hover:bg-brand-dark"
              >
                Solicitar proposta
              </Link>
              <a
                href="https://wa.me/5571999816999"
                className="rounded-full border border-brand px-6 py-2.5 font-semibold text-brand transition hover:bg-brand-light"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
