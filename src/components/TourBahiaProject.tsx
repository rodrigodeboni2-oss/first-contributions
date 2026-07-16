import Link from "next/link";
import type { Projeto } from "@/lib/projetos";
import Reveal from "@/components/Reveal";
import TourBahiaImage from "@/components/TourBahiaImage";

const imageBase = "/images/projetos/tour-bahia/editorial";

const detailItems = [
  ["Período", "periodo"],
  ["Território", "local"],
  ["Área", "area"],
  ["Papel da Educatec", "papel"],
  ["Status", "status"],
] as const;

export default function TourBahiaProject({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="overflow-x-clip bg-[linear-gradient(180deg,#0d4c82_0%,#2479b9_12%,#dcecf7_31%,#f7fbfe_54%,#ffffff_78%)] pb-8 md:pb-10">
      <header className="mx-auto max-w-7xl px-4 pt-7 md:pt-11">
        <div className="grid items-stretch gap-5 lg:grid-cols-12">
          <Reveal className="flex min-w-0 lg:col-span-5">
            <div className="flex w-full flex-col justify-center rounded-[1.75rem] bg-ink/95 p-7 text-white shadow-[0_24px_70px_rgba(5,35,58,0.26)] md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-300/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-200">
                  {projeto.status}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-sky-200">
                  {projeto.categorias.join(" · ")}
                </span>
              </div>
              <span className="mt-8 h-1 w-14 rounded-full bg-amber-400" />
              <h1 className="mt-5 font-display text-4xl leading-[1.04] md:text-5xl lg:text-[3.5rem]">
                {projeto.titulo}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200">
                {projeto.resumo}
              </p>
              <p className="mt-8 border-l-2 border-amber-400 pl-5 font-display text-xl leading-snug text-sky-100 md:text-2xl">
                {projeto.fraseDestaque}
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={100}>
            <TourBahiaImage
              src={`${imageBase}/abertura-clinica-esportiva.webp`}
              alt="Estudantes participam de clínica esportiva do Tour Bahia em uma quadra escolar"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="aspect-[4/3] h-full min-h-[22rem] w-full"
              imageClassName="object-cover object-center"
              priority
            />
            <p className="mt-3 text-xs leading-relaxed text-white/80">
              Clínica esportiva do Tour Bahia com estudantes e equipe de orientação.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-5" delay={140}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/40 bg-white/35 shadow-[0_14px_36px_rgba(13,76,130,0.12)] backdrop-blur-sm md:grid-cols-5">
            {detailItems.map(([rotulo, chave]) => (
              <div key={rotulo} className="bg-white/95 p-5 md:p-6">
                <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  {rotulo}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-slate-800">
                  {projeto[chave]}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </header>

      <section className="mx-auto mt-14 max-w-7xl px-4 md:mt-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Contexto e organização
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Esporte educacional perto de quem participa
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>{projeto.contexto[0]}</p>
              <p>
                As clínicas no contraturno e as arenas abertas organizam a
                proposta em momentos complementares de aprendizagem e
                participação.
              </p>
            </div>
            <div className="mt-7 rounded-2xl border border-sky-100 bg-white/85 p-6 shadow-[0_14px_36px_rgba(13,76,130,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Como o projeto se organiza
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {projeto.responsabilidades.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2">
              <TourBahiaImage
                src={`${imageBase}/organizacao-estudantes.webp`}
                alt="Estudantes reunidos para as atividades do Tour Bahia"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="aspect-[3/4] h-full min-h-[28rem] w-full lg:aspect-auto"
                imageClassName="object-cover object-center"
              />
            </Reveal>
            <Reveal className="lg:col-span-5" delay={90}>
              <TourBahiaImage
                src={`${imageBase}/programacao-clinicas-irece.webp`}
                alt="Material de programação das clínicas esportivas do Tour Bahia em Irecê"
                sizes="(max-width: 1024px) 50vw, 24vw"
                className="aspect-[4/5] h-full w-full bg-[#087ab8]"
                contain
              />
            </Reveal>
            <Reveal className="lg:col-span-5" delay={170}>
              <TourBahiaImage
                src={`${imageBase}/estudantes-orientacao.webp`}
                alt="Estudantes recebem orientação antes das atividades esportivas"
                sizes="(max-width: 1024px) 50vw, 24vw"
                className="aspect-[4/5] h-full w-full"
                imageClassName="object-cover object-[center_58%]"
              />
            </Reveal>
          </div>
        </div>
        <p className="mt-3 text-right text-xs leading-relaxed text-slate-500">
          Programação das clínicas e registros de organização das atividades.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:order-1 lg:col-span-7 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="col-span-2 lg:col-span-8 lg:row-span-2">
              <TourBahiaImage
                src={`${imageBase}/grupo-estudantes-quadra.webp`}
                alt="Grupo de estudantes reunido na quadra durante o Tour Bahia"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="aspect-[4/3] h-full min-h-[25rem] w-full lg:aspect-auto"
                imageClassName="object-cover object-center"
              />
            </Reveal>
            <Reveal className="lg:col-span-4" delay={90}>
              <TourBahiaImage
                src={`${imageBase}/clinica-pratica-quadra.webp`}
                alt="Estudantes e profissionais realizam uma prática orientada na quadra"
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="aspect-[4/5] h-full w-full"
                imageClassName="object-cover object-center"
              />
            </Reveal>
            <Reveal className="lg:col-span-4" delay={170}>
              <TourBahiaImage
                src={`${imageBase}/estudante-arremesso.webp`}
                alt="Estudante pratica movimento com bola durante clínica esportiva"
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="aspect-[4/5] h-full w-full"
                imageClassName="object-cover object-[center_42%]"
              />
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2 lg:col-span-5" delay={80}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Realização das atividades
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Da preparação da quadra à experiência coletiva
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>{projeto.contexto[1]}</p>
              <p>{projeto.contexto[2]}</p>
              <p>
                Da preparação das arenas à coordenação das equipes, a execução
                reúne infraestrutura, logística e mobilização dos participantes.
              </p>
            </div>
            <ol className="mt-7 space-y-3">
              {projeto.realizado.map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Participação e experiência educacional
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Aprender, cooperar e entrar em quadra
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-700 md:text-base">
              A participação abrange estudantes das categorias juvenis,
              universitárias e adultas, aproximando prática esportiva,
              disciplina, cooperação e hábitos saudáveis.
            </p>
            <div className="mt-8 rounded-[1.5rem] bg-brand-dark p-7 text-white shadow-[0_18px_48px_rgba(13,76,130,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
                Resultado
              </p>
              {projeto.resultados.map((resultado) => (
                <div key={resultado.legenda} className="mt-4">
                  <p className="font-display text-5xl text-amber-300 md:text-6xl">
                    {resultado.numero}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-sky-50">
                    {resultado.legenda}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-8">
            <Reveal>
              <TourBahiaImage
                src={`${imageBase}/atividade-coletiva.webp`}
                alt="Estudantes participam coletivamente de atividade esportiva"
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="aspect-[16/10] w-full"
                imageClassName="object-cover object-center"
              />
            </Reveal>
            <Reveal delay={100}>
              <TourBahiaImage
                src={`${imageBase}/orientacao-com-bolas.webp`}
                alt="Profissional orienta estudantes durante atividade com bolas"
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="aspect-[16/10] w-full"
                imageClassName="object-cover object-center"
              />
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-8 md:mt-12" delay={140}>
          <TourBahiaImage
            src={`${imageBase}/encerramento-coletivo.webp`}
            alt="Estudantes, profissionais e equipes reunidos no encerramento das atividades do Tour Bahia"
            sizes="100vw"
            className="aspect-[16/9] w-full md:aspect-[21/9]"
            imageClassName="object-cover object-center"
          />
          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="font-display text-2xl leading-snug text-slate-900 md:text-3xl">
              Uma experiência coletiva construída entre escolas, estudantes,
              atletas, profissionais e comunidades do interior da Bahia.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4 md:mt-20">
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
