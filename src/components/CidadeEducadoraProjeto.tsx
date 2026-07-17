import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

// Círculos concêntricos — motivo visual próprio: a cidade que educa em ondas,
// ecoando as cores das redes de Cidades Educadoras. Abstrato e institucional.
function Ondas({
  className = "",
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "white";
}) {
  const color = tone === "white" ? "rgba(255,255,255,0.45)" : "rgba(18,101,171,0.35)";
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={`ce-rings ${className}`}
      style={{ color }}
    >
      <circle cx="100" cy="100" r="34" strokeWidth="1" />
      <circle cx="100" cy="100" r="62" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="90" strokeWidth="0.6" />
      <circle className="ce-dot ce-dot--green" cx="100" cy="38" r="4" />
      <circle className="ce-dot ce-dot--amber" cx="162" cy="100" r="4.5" />
      <circle className="ce-dot ce-dot--red" cx="100" cy="190" r="3.5" />
      <circle className="ce-dot ce-dot--turq" cx="66" cy="100" r="3.5" />
    </svg>
  );
}

const IMG = {
  cerimonia: {
    src: "/images/projetos/cidade-educadora/ce-cerimonia-reconhecimento.webp",
    alt: "Entrega do certificado de reconhecimento da rede de Cidades Educadoras a representantes de Ipecaetá, em cerimônia oficial",
  },
  congresso: {
    src: "/images/projetos/cidade-educadora/ce-congresso-rede.webp",
    alt: "Grupo de participantes reunido em congresso das redes de Cidades Educadoras",
  },
  mural: {
    src: "/images/projetos/cidade-educadora/ce-mural-escolar.webp",
    alt: "Grupo diante de mural escolar colorido durante agenda de mobilização educacional",
  },
  reuniao: {
    src: "/images/projetos/cidade-educadora/ce-reuniao-equipe.webp",
    alt: "Reunião de articulação com equipe escolar em sala com mobiliário azul",
  },
  selfie: {
    src: "/images/projetos/cidade-educadora/ce-selfie-sala-aula.webp",
    alt: "Registro com educadores em sala de aula durante o trabalho de mobilização",
  },
};

export default function CidadeEducadoraProjeto({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="ce-page">
      {/* ================= 1. ABERTURA ================= */}
      <header className="relative overflow-hidden">
        <Ondas className="pointer-events-none absolute -left-16 top-10 hidden w-72 md:block" />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
            {/* Painel institucional (texto primeiro no celular) */}
            <Reveal className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
                  {projeto.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-400">
                  {projeto.categorias.join(" · ")}
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl leading-[1.08] text-slate-900 md:text-[3.2rem]">
                {projeto.titulo}
              </h1>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-slate-600">
                {projeto.resumo}
              </p>
              <p className="mt-7 border-l-2 border-[#3ab076] pl-5 font-display text-2xl leading-snug text-brand-dark md:text-[1.7rem]">
                {projeto.fraseDestaque}
              </p>
            </Reveal>

            {/* Fotografia principal — cerimônia do reconhecimento */}
            <Reveal className="md:col-span-5" delay={120}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg ring-1 ring-brand/10">
                  <Image
                    src={IMG.cerimonia.src}
                    alt={IMG.cerimonia.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="img-zoom object-cover"
                    style={{ objectPosition: "center 55%" }}
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-slate-500">
                  Entrega do certificado de reconhecimento da rede de Cidades
                  Educadoras.
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

      {/* ================= 3. O RECONHECIMENTO INTERNACIONAL ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="order-2 md:order-1 md:col-span-5">
            <figure className="group">
              <div className="relative aspect-[3/4] max-w-md overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                <Image
                  src={IMG.congresso.src}
                  alt={IMG.congresso.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="img-zoom object-cover"
                  style={{ objectPosition: "center 40%" }}
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-slate-500">
                Participação em encontro das redes de Cidades Educadoras.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="order-1 md:order-2 md:col-span-7" delay={100}>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              O reconhecimento internacional
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              A única entre 417 cidades baianas
            </h2>
            <div className="mt-6 space-y-5">
              <p className="max-w-prose text-lg leading-relaxed text-slate-700">
                {projeto.contexto[0]}
              </p>
              <p className="max-w-prose leading-relaxed text-slate-600">
                O reconhecimento foi celebrado com a entrega do certificado da
                rede a representantes do município — o resultado de um processo
                conduzido passo a passo, da candidatura à filiação.
              </p>
            </div>
            {projeto.resultados[0] && (
              <div className="mt-8 inline-flex items-baseline gap-4 rounded-2xl bg-white/90 px-7 py-5 shadow-sm ring-1 ring-brand/10">
                <span className="font-display text-5xl text-brand md:text-6xl">
                  {projeto.resultados[0].numero}
                </span>
                <span className="max-w-56 text-sm leading-snug text-slate-600">
                  {projeto.resultados[0].legenda}
                </span>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ================= 4. O QUE É UMA CIDADE EDUCADORA ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <Reveal>
          <div className="ce-deep relative overflow-hidden rounded-3xl p-8 text-white md:p-12">
            <Ondas
              tone="white"
              className="pointer-events-none absolute -right-14 -bottom-14 w-72 opacity-70"
            />
            <div className="relative max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                O conceito
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                {projeto.blocoExtra?.titulo}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-sky-100/90">
                {projeto.blocoExtra?.texto}
              </p>
              <p className="mt-4 leading-relaxed text-sky-100/75">
                É essa visão que orienta o trabalho em Ipecaetá: a cidade
                inteira — e não apenas a escola — assumindo o compromisso de
                educar.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= 5. A CIDADE QUE EDUCA NA PRÁTICA ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              A cidade que educa na prática
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Perto das escolas e de quem educa
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-700">
              {projeto.contexto[1]}
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-slate-600">
              Esse trabalho acontece perto de quem educa: nas escolas, com as
              equipes e nos espaços públicos do município, transformando o
              conceito em agenda concreta.
            </p>
            <ul className="mt-8 space-y-3">
              {projeto.realizado.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3ab076]" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Mural assimétrico — escolas e equipes */}
          <Reveal className="md:col-span-7" delay={100}>
            <div className="grid grid-cols-12 gap-4">
              <figure className="group col-span-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                  <Image
                    src={IMG.mural.src}
                    alt={IMG.mural.alt}
                    fill
                    sizes="(max-width: 768px) 55vw, 30vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-slate-500">
                  Mobilização e presença nas escolas.
                </figcaption>
              </figure>
              <div className="col-span-6 flex flex-col justify-center gap-4">
                <figure className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                    <Image
                      src={IMG.reuniao.src}
                      alt={IMG.reuniao.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 26vw"
                      className="img-zoom object-cover"
                      style={{ objectPosition: "center 35%" }}
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-slate-500">
                    Articulação e escuta com as equipes escolares.
                  </figcaption>
                </figure>
                <figure className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                    <Image
                      src={IMG.selfie.src}
                      alt={IMG.selfie.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 26vw"
                      className="img-zoom object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-slate-500">
                    Encontro com educadores durante a mobilização.
                  </figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= 6. RESPONSABILIDADES ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <Reveal>
          <div className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-brand/10 md:p-12">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              Papel da Educatec
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Da candidatura à agenda municipal
            </h2>
            <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {projeto.responsabilidades.map((item, i) => (
                <li key={item} className="relative pl-12">
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-brand/25 bg-brand-light/60 font-display text-sm text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`absolute left-[0.9rem] top-9 h-2 w-2 -translate-x-1/2 rounded-full ${
                      i % 2 === 0 ? "bg-[#3ab076]" : "bg-amber-400"
                    }`}
                  />
                  <p className="text-[15px] font-medium leading-relaxed text-slate-700">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* ================= 7. ENCERRAMENTO ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 md:pb-24 md:pt-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
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
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
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
                Sua cidade também pode ser uma Cidade Educadora?
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
