import Link from "next/link";
import type { Projeto } from "@/lib/projetos";
import CopaProjectImage from "@/components/CopaProjectImage";
import Reveal from "@/components/Reveal";

const imageBase = "/images/projetos/copa-feminina-2027";

export default function CopaFemininaProject({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="overflow-x-clip bg-[linear-gradient(180deg,#eef6fc_0%,#ffffff_34%,#f5f9fc_72%,#ffffff_100%)] pb-16 md:pb-20">
      <header className="mx-auto max-w-7xl px-4 pt-8 md:pt-12">
        <div className="grid items-stretch gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <CopaProjectImage
              src={`${imageBase}/capa-contagem-regressiva-2027.webp`}
              alt="Grupo reunido no evento de contagem regressiva de um ano para a Copa do Mundo Feminina FIFA 2027, em Salvador"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="aspect-[16/9] h-full min-h-64"
              imageClassName="object-cover"
              priority
            />
            {projeto.hero?.legenda && (
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {projeto.hero.legenda}
              </p>
            )}
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-300">
                    {projeto.status}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-sky-200">
                    {projeto.categorias.join(" · ")}
                  </span>
                </div>
                <h1 className="mt-6 font-display text-4xl leading-[1.04] md:text-5xl">
                  {projeto.titulo}
                </h1>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-300 md:text-base">
                  {projeto.resumo}
                </p>
              </div>
              <p className="mt-8 border-l-2 border-amber-400 pl-4 font-display text-xl leading-snug text-sky-100">
                {projeto.fraseDestaque}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5" delay={140}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm md:grid-cols-5">
            {[
              ["Período", projeto.periodo],
              ["Território", projeto.local],
              ["Área", projeto.area],
              ["Papel da Educatec", projeto.papel],
              ["Status", projeto.status],
            ].map(([rotulo, valor]) => (
              <div key={rotulo} className="bg-white p-5 md:p-6">
                <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  {rotulo}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-slate-800">
                  {valor}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </header>

      <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Salvador, cidade-sede
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Contexto e preparação
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {[
                projeto.contexto[0],
                projeto.contexto[1],
                projeto.contexto[3],
              ].map((paragrafo) => (
                <p
                  key={paragrafo.slice(0, 44)}
                  className="text-[15px] leading-relaxed text-slate-700"
                >
                  {paragrafo}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="lg:sticky lg:top-28">
              <CopaProjectImage
                src={`${imageBase}/arena-fonte-nova-grupo.webp`}
                alt="Grupo de mulheres reunido no gramado da Arena Fonte Nova durante agenda de preparação para 2027"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="aspect-[3/4]"
                imageClassName="object-contain"
                preserveFullImage
              />
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Agenda na Arena Fonte Nova, palco dos jogos em Salvador.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Preparação e articulação
              </p>
              <h2 className="mt-3 font-display text-3xl text-slate-900 md:text-5xl">
                Da proposta às agendas técnicas
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Responsabilidades e atividades apresentadas lado a lado para
              aproximar cada registro de seu contexto.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <CopaProjectImage
              src={`${imageBase}/arena-fonte-nova-liderancas.webp`}
              alt="Grupo de lideranças femininas reunido na Arena Fonte Nova"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[3/4]"
              imageClassName="object-contain"
              preserveFullImage
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="h-full rounded-2xl bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-10">
              <h3 className="font-display text-2xl text-slate-900 md:text-3xl">
                Papel e responsabilidades
              </h3>
              <ul className="mt-6 grid gap-3 md:grid-cols-2 md:gap-x-8">
                {projeto.responsabilidades.map((responsabilidade) => (
                  <li
                    key={responsabilidade}
                    className="flex items-start gap-3 border-b border-slate-100 pb-3 text-sm leading-relaxed text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {responsabilidade}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={60}>
            <div className="h-full rounded-2xl bg-brand-dark p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] md:p-10">
              <h3 className="font-display text-2xl md:text-3xl">
                O que foi realizado
              </h3>
              <ol className="mt-6 space-y-4">
                {projeto.realizado.map((atividade, indice) => (
                  <li key={atividade} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-amber-300">
                      {String(indice + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-sky-50">
                      {atividade}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <CopaProjectImage
              src={`${imageBase}/politicas-esportivas-dialogo.webp`}
              alt="Representantes reunidos no Fórum de Esportes da Bahia durante agenda de diálogo sobre políticas esportivas"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[3/4]"
              imageClassName="object-contain"
              preserveFullImage
            />
          </Reveal>
        </div>
      </section>

      {projeto.blocoExtra && (
        <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-24">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <CopaProjectImage
                  src={`${imageBase}/forum-esportes-bahia.webp`}
                  alt="Ney Campello e participantes do Fórum de Esportes da Bahia"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="aspect-[3/4]"
                  imageClassName="object-contain"
                  preserveFullImage
                />
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-sky-100 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:col-span-7 md:p-10">
                <span className="h-1 w-14 rounded-full bg-amber-400" />
                <h2 className="mt-6 font-display text-3xl leading-tight text-slate-900 md:text-4xl">
                  {projeto.blocoExtra.titulo}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-700">
                  {projeto.blocoExtra.texto}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-6" delay={80}>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="flex flex-col justify-center rounded-2xl bg-[linear-gradient(135deg,#0c5a93,#12386b)] p-7 text-white lg:col-span-5 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
                  Mobilização da Bahia
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  Articulação entre lideranças e agendas esportivas
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-sky-50">
                  {projeto.contexto[2]}
                </p>
              </div>
              <div className="lg:col-span-7">
                <CopaProjectImage
                  src={`${imageBase}/bahia-destaque-esporte.webp`}
                  alt="Lideranças reunidas no Fórum de Esportes da Bahia"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="aspect-[4/3] lg:aspect-[16/10]"
                  imageClassName="object-contain"
                  preserveFullImage
                />
              </div>
            </div>
          </Reveal>
        </section>
      )}

      <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-20">
        <Reveal>
          <div className="border-y border-slate-200 py-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Instituições relacionadas
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              {projeto.instituicoes}
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {relacionado && (
            <Reveal>
              <Link
                href={`/projetos/${relacionado.slug}`}
                className="group flex h-full items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Próximo projeto
                  </p>
                  <p className="mt-2 font-display text-2xl text-slate-900">
                    {relacionado.tituloCurto}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {relacionado.resumo}
                  </p>
                </div>
                <span className="shrink-0 text-2xl text-brand transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </Link>
            </Reveal>
          )}

          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between gap-7 rounded-2xl bg-ink p-7 text-white">
              <div>
                <h2 className="font-display text-2xl md:text-3xl">
                  Um projeto assim faz sentido para a sua instituição?
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Fale com a Educatec e conte o seu desafio.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
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
      </section>
    </article>
  );
}
