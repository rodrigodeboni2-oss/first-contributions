import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

const informacoes = [
  ["Período", "A partir de 2022"],
  ["Região", "Municípios participantes da Bahia"],
  ["Área", "Educação, inovação e articulação institucional"],
  ["Papel da Educatec", "Organização, planejamento e articulação das atividades"],
  ["Status", "Participação realizada"],
];

const frentes = [
  {
    numero: "01",
    titulo: "Organização do projeto",
    texto:
      "Colaboração com o planejamento e a estruturação das atividades realizadas nos municípios participantes.",
  },
  {
    numero: "02",
    titulo: "Articulação institucional",
    texto:
      "Apoio ao diálogo entre equipes, instituições de ensino, representantes locais e coordenação.",
  },
  {
    numero: "03",
    titulo: "Acompanhamento das agendas",
    texto:
      "Participação em reuniões, encontros e atividades relacionadas ao andamento do projeto.",
  },
  {
    numero: "04",
    titulo: "Integração das ações",
    texto:
      "Organização de informações e orientações entre os diferentes municípios envolvidos.",
  },
  {
    numero: "05",
    titulo: "Apoio às equipes locais",
    texto:
      "Suporte institucional aos profissionais responsáveis pela realização das atividades.",
  },
  {
    numero: "06",
    titulo: "Alinhamento das informações",
    texto:
      "Contribuição para acompanhar e organizar as diferentes etapas do trabalho.",
  },
];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] ${
        light ? "text-amber-300" : "text-[#0d5b94]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-9 ${light ? "bg-amber-300" : "bg-amber-400"}`}
      />
      {children}
    </p>
  );
}

export default function AliEducacaoProject({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article
      className="overflow-x-clip bg-[#e7f3f9] pb-10 text-slate-700"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #d7edf8 0%, #fdfefe 17%, #e4f3f9 34%, #ffffff 51%, #dfeff8 69%, #fbfdfe 85%, #d6ecf7 100%)",
      }}
    >
      {/* 1. Abertura */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="flex min-w-0 items-center justify-center lg:col-span-5">
            <figure className="w-full max-w-[22.5rem]">
              <Image
                src="/images/projetos/ali-educacao-empreendedora/ali-apresentacao-ney.webp"
                alt="Professor Ney Campello durante uma atividade relacionada ao ALI Educação Empreendedora na Bahia."
                width={687}
                height={1222}
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_50px_rgba(15,23,42,0.13)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Professor Ney Campello durante atividade relacionada ao projeto na Bahia.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={100}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-[#101d2d] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:p-10 lg:min-h-[34rem] lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-300">
                  {projeto.status}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Educação · Inovação · Bahia
                </span>
              </div>
              <h1 className="mt-7 max-w-[34rem] font-display text-[2.15rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-5xl">
                ALI — Educação Empreendedora
              </h1>
              <p className="mt-5 max-w-[31rem] font-display text-xl leading-snug text-sky-100 md:text-2xl">
                Organização e articulação para aproximar educação e inovação nas regiões da Bahia.
              </p>
              <p className="mt-6 max-w-[31rem] text-[15px] leading-[1.72] text-slate-300 md:text-base">
                O ALI — Educação Empreendedora é uma iniciativa do Sebrae. Na Bahia, a Educatec apoiou a organização e a articulação das atividades desenvolvidas nos municípios participantes, contribuindo para integrar equipes, instituições e diferentes regiões do estado.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-7" delay={150}>
          <dl className="grid border-y border-[#0d5b94]/20 sm:grid-cols-2 lg:grid-cols-5">
            {informacoes.map(([rotulo, valor], index) => (
              <div
                key={rotulo}
                className={`py-5 sm:px-5 lg:py-6 ${
                  index > 0
                    ? "border-t border-[#0d5b94]/15 sm:border-t-0 sm:border-l"
                    : ""
                } ${index === 2 || index === 4 ? "sm:border-l-0 lg:border-l" : ""}`}
              >
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#0d5b94]">
                  {rotulo}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-slate-700">
                  {valor}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* 2. Contexto */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <Eyebrow>Educação e inovação</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Inovação integrada ao cotidiano das escolas
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.72] text-slate-700 md:text-base">
              <p>
                O projeto foi desenvolvido para estimular novas formas de pensar e organizar as práticas educacionais, envolvendo gestores, professores, equipes pedagógicas, estudantes e representantes das comunidades escolares.
              </p>
              <p>
                Na Bahia, a realização das atividades em diferentes municípios exigiu organização, diálogo institucional e integração entre os profissionais envolvidos. A Educatec colaborou com esse processo, apoiando agendas e aproximações necessárias para uma atuação coordenada.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delay={90}>
            <figure className="ml-auto w-full max-w-[36rem]">
              <Image
                src="/images/projetos/ali-educacao-empreendedora/ali-encontro-auditorio.webp"
                alt="Participantes acompanham uma apresentação durante uma das atividades do projeto na Bahia."
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 576px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Encontro relacionado ao desenvolvimento das atividades na Bahia.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 3. Papel da Educatec e frentes de atuação */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
          <Reveal className="flex min-w-0 justify-center lg:col-span-5">
            <figure className="w-full max-w-[24rem]">
              <Image
                src="/images/projetos/ali-educacao-empreendedora/ali-publico-participante.webp"
                alt="Participantes reunidos durante uma etapa de aproximação e mobilização do projeto."
                width={960}
                height={1280}
                sizes="(max-width: 1024px) 100vw, 384px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Participantes reunidos durante uma etapa de aproximação.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={90}>
            <Eyebrow>Atuação institucional</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Planejamento, organização e articulação
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-[1.72] text-slate-700 md:text-base">
              <p>
                A Educatec ajudou a aproximar profissionais e instituições, organizar agendas, alinhar informações e acompanhar o andamento das atividades nos municípios participantes.
              </p>
              <p>
                O trabalho foi conduzido de maneira colaborativa e em conformidade com a metodologia e as orientações do Sebrae Bahia, fortalecendo a integração sem substituir as responsabilidades das demais instituições envolvidas.
              </p>
            </div>

            <ol className="mt-8 max-w-2xl border-t border-slate-300">
              {frentes.map((frente) => (
                <li
                  key={frente.numero}
                  className="grid gap-3 border-b border-slate-300 py-5 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-5"
                >
                  <span className="font-display text-xl text-[#0d5b94]/55">
                    {frente.numero}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight text-slate-900 md:text-2xl">
                      {frente.titulo}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                      {frente.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 4. Organização nas regiões */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <Eyebrow>Presença na Bahia</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Uma atuação integrada e sensível a cada realidade
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.72] text-slate-700 md:text-base">
              <p>
                A realização de uma iniciativa educacional em diferentes regiões da Bahia exige uma visão integrada e, ao mesmo tempo, atenta às características de cada localidade. Os municípios possuem estruturas, equipes e necessidades próprias.
              </p>
              <p>
                A Educatec apoiou a organização das atividades considerando essas diferenças, contribuindo para manter o alinhamento geral do projeto e facilitar a comunicação entre gestores, profissionais da educação, representantes institucionais e equipes locais.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delay={90}>
            <figure className="ml-auto w-full max-w-[36rem]">
              <Image
                src="/images/projetos/ali-educacao-empreendedora/ali-atividade-formativa.webp"
                alt="Participantes acompanham uma atividade formativa em um ambiente preparado para aprendizagem."
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 576px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Atividade formativa acompanhada por participantes.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 5. Experiência de Ney Campello */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <figure className="w-full max-w-[36rem]">
              <Image
                src="/images/projetos/ali-educacao-empreendedora/ali-educacao-empreendedora.webp"
                alt="Ney Campello e profissionais reunidos em uma agenda de Educação Empreendedora do Sebrae."
                width={1448}
                height={1086}
                sizes="(max-width: 1024px) 100vw, 576px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Agenda de Educação Empreendedora com a participação de Ney Campello.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delay={90}>
            <Eyebrow>Experiência e liderança</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Educação, gestão e articulação institucional
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.72] text-slate-700 md:text-base">
              <p>
                A participação da Educatec ocorreu por meio do professor Ney Campello, profissional com extensa trajetória em planejamento educacional, gestão pública, desenvolvimento institucional e coordenação de projetos.
              </p>
              <p>
                No ALI — Educação Empreendedora, essa experiência contribuiu para aproximar planejamento, inovação e realidade educacional, apoiando a organização das atividades e o diálogo entre os diferentes profissionais e instituições envolvidos.
              </p>
            </div>
            <blockquote className="mt-8 max-w-xl border-l-2 border-amber-400 pl-6 font-display text-2xl leading-snug text-[#0d4f86] md:text-[1.75rem]">
              Educação, inovação e organização trabalhando juntas para fortalecer as escolas e transformar realidades.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 6. Instituições, próximo projeto e chamada final */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-14 md:pb-14 md:pt-20">
        <Reveal>
          <div className="border-y border-slate-300 py-7">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              Instituições relacionadas
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Sebrae Bahia · Educatec · Secretarias Municipais de Educação · Instituições públicas de ensino · Equipes gestoras e pedagógicas
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600">
              O ALI — Educação Empreendedora é uma iniciativa do Sebrae. A Educatec participou como apoiadora da organização e da articulação institucional do projeto na Bahia, por meio do professor Ney Campello.
            </p>
          </div>
        </Reveal>

        {relacionado && relacionado.cardImagem && (
          <Reveal className="mt-8" delay={70}>
            <Link
              href={`/projetos/${relacionado.slug}`}
              className="group grid items-center gap-6 border-b border-slate-300 pb-8 transition-colors hover:border-[#0d5b94] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)_auto]"
            >
              <Image
                src={relacionado.cardImagem.src}
                alt={relacionado.cardImagem.alt}
                width={640}
                height={360}
                sizes="(max-width: 640px) 100vw, 288px"
                className="h-auto w-full max-w-[18rem] rounded-xl object-contain"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Próximo projeto
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-slate-900">
                  {relacionado.tituloCurto}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {relacionado.resumo}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="text-2xl text-[#0d5b94] transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              >
                →
              </span>
            </Link>
          </Reveal>
        )}

        <Reveal className="mt-10" delay={110}>
          <div className="rounded-2xl bg-[linear-gradient(135deg,#082f55_0%,#0d4f86_55%,#1265ab_100%)] px-7 py-10 text-white shadow-[0_24px_65px_rgba(5,42,76,0.24)] md:px-10 md:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <Eyebrow light>Converse com a Educatec</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-[2rem] leading-[1.1] text-white md:text-[2.5rem]">
                Transforme planejamento em projetos que aproximam pessoas e instituições
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-sky-100 md:text-base">
                A Educatec desenvolve soluções em educação, gestão e articulação institucional para empresas, governos e organizações.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0 lg:flex-col">
              <Link
                href="/contato"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60 motion-reduce:transition-none"
              >
                Solicitar proposta
              </Link>
              <a
                href="https://wa.me/5571999816999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-center font-bold text-[#082f55] transition hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 motion-reduce:transition-none"
              >
                Falar com a Educatec
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
