import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Serviços | Educatec",
  description:
    "Consultoria educacional, gestão institucional, formação, produção de eventos e coordenação de projetos — do diagnóstico à execução.",
};

const indice = [
  { numero: "01", rotulo: "Consultoria educacional", href: "#consultoria" },
  { numero: "02", rotulo: "Gestão institucional", href: "#gestao" },
  { numero: "03", rotulo: "Formação", href: "#formacao" },
  { numero: "04", rotulo: "Produção de eventos", href: "#eventos" },
  { numero: "05", rotulo: "Coordenação de projetos", href: "#coordenacao" },
];

const etapasFormacao = [
  "Escuta e diagnóstico",
  "Planejamento do conteúdo",
  "Preparação dos materiais",
  "Realização da formação",
  "Avaliação e acompanhamento",
];

export default function Servicos() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#d8e7f3_0%,#eef5fa_18%,#ffffff_48%,#edf5fa_76%,#d4e5f2_100%)]">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-sky-300/35"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M96 12 C90 110 98 180 93 270 S98 430 92 540 S98 720 91 988"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.55"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* A. Hero editorial */}
      <section className="relative bg-[linear-gradient(145deg,#0b3a66_0%,#1265ab_58%,#8db4d4_100%)] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-200">
              O que fazemos
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-6xl">
              Do diagnóstico à execução, projetos que funcionam na prática.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-sky-50">
              A Educatec trabalha com governos, instituições, escolas, empresas
              e organizações sociais na criação, estruturação e execução de
              projetos. A atuação pode começar no diagnóstico, passar pelo
              planejamento, pela articulação dos parceiros e pela formação das
              equipes, e seguir até a operação, o acompanhamento dos resultados
              e a entrega dos relatórios.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#consultoria"
                className="rounded-full bg-white px-6 py-3 font-semibold text-brand transition hover:bg-sky-100"
              >
                Conheça os serviços
              </a>
              <Link
                href="/contato"
                className="rounded-full border border-white/75 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Fale com a Educatec
              </Link>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <div className="relative min-h-[390px] overflow-hidden rounded-[2rem_2rem_0_2rem] shadow-[0_28px_70px_rgba(4,31,57,0.3)] md:min-h-[540px]">
              <Image
                src="/images/servicos/abertura-equipe-institucional.webp"
                alt="Equipe reunida em ambiente institucional"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-sky-100/75">
              Equipe reunida em ambiente institucional
            </p>
          </Reveal>
        </div>
      </section>

      {/* B. Navegação rápida (sticky no desktop) */}
      <nav
        aria-label="Índice de serviços"
        className="sticky top-[73px] z-40 border-y border-white/70 bg-white/90 shadow-[0_10px_30px_rgba(13,76,130,0.08)] backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-4 py-4">
          {indice.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-editorial shrink-0 text-sm font-medium text-slate-600 hover:text-brand"
            >
              <span className="mr-1.5 text-xs font-bold text-brand">
                {item.numero}
              </span>
              {item.rotulo}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 md:pb-28">
        {/* D. 01 — Consultoria educacional */}
        <section id="consultoria" className="scroll-mt-36 pt-14 md:pt-20">
          <div className="grid gap-10 rounded-[2rem_2rem_2rem_0] bg-white/90 p-6 shadow-[0_24px_65px_rgba(15,63,101,0.12)] ring-1 ring-white md:grid-cols-12 md:gap-14 md:p-10">
            <Reveal className="md:col-span-5">
              <p className="font-display text-6xl text-sky-100 md:text-7xl">
                01
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand">
                Educação
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
                Consultoria e planejamento educacional
              </h2>
              <p className="mt-4 font-display text-xl text-brand-dark">
                Da leitura dos dados à decisão que muda a rede.
              </p>
              <p className="mt-5 max-w-prose leading-relaxed text-slate-600">
                A Educatec ajuda municípios, instituições, escolas e
                organizações a compreender sua realidade educacional e
                transformar informações em decisões e planos de ação. O
                trabalho combina diagnóstico, leitura de indicadores,
                mobilização dos participantes e acompanhamento da
                implementação.
              </p>
              <p className="mt-5 text-sm text-slate-500">
                <strong className="text-slate-700">Para quem:</strong>{" "}
                municípios, redes de ensino, escolas, fundações e organizações
                sociais.
              </p>
            </Reveal>
            <Reveal className="md:col-span-7" delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem_1.75rem_0_1.75rem] shadow-[0_20px_50px_rgba(15,63,101,0.16)]">
                <Image
                  src="/images/servicos/consultoria-articulacao-publica.webp"
                  alt="Encontro de articulação pública e institucional"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Encontro de articulação pública e institucional
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  "Diagnósticos",
                  "Planejamento estratégico",
                  "Planos educacionais",
                  "Observatórios",
                  "Metas e indicadores",
                  "Políticas de Cidade Educadora",
                ].map((e) => (
                  <p
                    key={e}
                    className="border-b border-slate-200 pb-2 text-sm text-slate-700"
                  >
                    {e}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Projetos relacionados:{" "}
                <Link
                  href="/projetos/observatorio-educacional"
                  className="link-editorial font-semibold text-brand"
                >
                  Observatório Educacional
                </Link>{" "}
                e{" "}
                <Link
                  href="/projetos/ipecaeta-cidade-educadora"
                  className="link-editorial font-semibold text-brand"
                >
                  Ipecaetá — Cidade Educadora
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* E. 02 — Gestão institucional */}
        <section id="gestao" className="scroll-mt-36 pt-16 md:pt-20">
          <div className="grid items-center gap-10 rounded-[2rem_0_2rem_2rem] bg-[#e7f1f8]/95 p-6 shadow-[0_24px_65px_rgba(15,63,101,0.1)] ring-1 ring-white md:grid-cols-12 md:gap-14 md:p-10">
            <Reveal className="order-2 md:order-1 md:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem_0_1.75rem_1.75rem] shadow-[0_20px_50px_rgba(15,63,101,0.18)] md:aspect-[3/4]">
                <Image
                  src="/images/ney-campello/ney-campello-reuniao-ampliada.jpg"
                  alt="Ney Campello participando de reunião institucional ampliada"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Reunião institucional com gestores e equipes técnicas
              </p>
            </Reveal>
            <Reveal className="order-1 md:order-2 md:col-span-6" delay={80}>
              <p className="font-display text-6xl text-white md:text-7xl">
                02
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand">
                Gestão
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
                Gestão e desenvolvimento institucional
              </h2>
              <p className="mt-4 font-display text-xl text-brand-dark">
                Estrutura clara para instituições que precisam decidir e
                entregar.
              </p>
              <p className="mt-5 max-w-prose leading-relaxed text-slate-600">
                A empresa apoia instituições que precisam estruturar programas,
                responsabilidades, fluxos de trabalho e formas de decisão. O
                serviço reúne análise, planejamento, articulação entre
                parceiros e acompanhamento da implantação.
              </p>
              <p className="mt-5 text-sm text-slate-500">
                Exemplos: Universidade Aberta da Associação Comercial da Bahia
                e{" "}
                <Link
                  href="/projetos/observatorio-educacional"
                  className="link-editorial font-semibold text-brand"
                >
                  Observatório Educacional
                </Link>
                .
              </p>
              <div className="mt-7 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-sky-100 md:p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Como atuamos
                </p>
                <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-slate-700 sm:grid-cols-2">
                  {[
                    "Planejamento estratégico",
                    "Desenho de programas",
                    "Governança",
                    "Responsabilidades",
                    "Fluxos de trabalho",
                    "Instrumentos técnicos",
                    "Articulação institucional",
                  ].map((item) => (
                    <li key={item} className="border-b border-slate-200 pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* F. 03 — Formação */}
        <section id="formacao" className="scroll-mt-36 pt-16 md:pt-20">
          <div className="grid items-center gap-10 rounded-[2rem_2rem_2rem_0] bg-white/90 p-6 shadow-[0_24px_65px_rgba(15,63,101,0.12)] ring-1 ring-white md:grid-cols-12 md:gap-14 md:p-10">
            <Reveal className="md:col-span-5">
              <p className="font-display text-6xl text-sky-100 md:text-7xl">
                03
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand">
                Formação
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
                Formação que parte da realidade de cada equipe
              </h2>
              <p className="mt-5 max-w-prose leading-relaxed text-slate-600">
                A Educatec planeja e realiza cursos, oficinas, encontros e
                processos formativos voltados a gestores, educadores,
                conselheiros, equipes técnicas, estudantes e comunidades. O
                conteúdo e o formato são definidos a partir da necessidade
                concreta de cada instituição.
              </p>
              <p className="mt-5 text-sm text-slate-500">
                Exemplos: Educação Empreendedora / ALI Sebrae, oficinas
                educacionais e formações de gestores e conselheiros escolares.
              </p>
              {/* Linha de processo */}
              <ol className="mt-7 space-y-0">
                {etapasFormacao.map((etapa, i) => (
                  <li key={etapa} className="relative flex gap-4 pb-5">
                    <div className="flex flex-col items-center">
                      <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {i < etapasFormacao.length - 1 && (
                        <span className="w-px flex-1 bg-slate-300" />
                      )}
                    </div>
                    <p className="pt-1 text-sm font-medium text-slate-700">
                      {etapa}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal className="md:col-span-7" delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem_1.75rem_0_1.75rem] shadow-[0_20px_50px_rgba(15,63,101,0.16)]">
                <Image
                  src="/images/servicos/formacao-educacao-empreendedora.webp"
                  alt="Equipe reunida em encontro de Educação Empreendedora"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Encontro de Educação Empreendedora
              </p>
              <blockquote className="mt-6 border-l-2 border-brand pl-6 font-display text-xl leading-snug text-brand-dark md:text-2xl">
                “Educação e cultura são forças transformadoras.”
              </blockquote>
              <p className="mt-2 pl-6 text-xs text-slate-400">
                Ney Campello, em “A Via da Educação e da Poesia”
              </p>
            </Reveal>
          </div>
        </section>

        {/* G. 04 — Produção de eventos */}
        <section id="eventos" className="scroll-mt-36 pt-16 md:pt-20">
          <div className="overflow-hidden rounded-[2rem_2rem_2rem_0] bg-[linear-gradient(145deg,#0b355d_0%,#0d4c82_52%,#1265ab_100%)] p-6 text-white shadow-[0_28px_70px_rgba(8,45,77,0.24)] md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
              <Reveal className="md:col-span-6">
                <p className="font-display text-6xl text-white/20 md:text-7xl">
                  04
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-200">
                  Eventos
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-5xl">
                  Eventos planejados do primeiro cronograma ao relatório final
                </h2>
                <p className="mt-5 leading-relaxed text-sky-50 md:text-lg">
                  A atuação da Educatec vai além da montagem de estruturas. A
                  empresa participa do planejamento, da articulação das etapas,
                  da coordenação das equipes, da operação, do atendimento ao público,
                  do monitoramento e da documentação dos resultados. As ações podem
                  ser desenvolvidas diretamente pela Educatec ou em parceria com
                  governos, confederações, federações, universidades, institutos e
                  empresas especializadas, com o escopo de cada participante
                  definido de acordo com o projeto.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={80}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem_1.75rem_0_1.75rem] shadow-[0_22px_55px_rgba(3,24,43,0.35)]">
                  <Image
                    src="/images/servicos/eventos-esporte-educacional.webp"
                    alt="Estudantes participando de atividade esportiva e educacional"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-3 text-xs text-sky-100/70">
                  Atividade esportiva e educacional com estudantes
                </p>
              </Reveal>
            </div>
            <Reveal className="mt-8" delay={120}>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/20 ring-1 ring-white/15 md:grid-cols-3">
              {[
                {
                  fase: "Antes",
                  itens:
                    "Planejamento · cronograma · articulação local · contratação · comunicação",
                },
                {
                  fase: "Durante",
                  itens:
                    "Operação · credenciamento · equipes · programação · atendimento · logística",
                },
                {
                  fase: "Depois",
                  itens:
                    "Monitoramento · registro · relatórios · resultados · prestação de contas",
                },
              ].map((b) => (
                <div key={b.fase} className="bg-white/10 p-7 backdrop-blur-sm">
                  <p className="font-display text-xl text-amber-300">{b.fase}</p>
                  <p className="mt-3 text-sm leading-relaxed text-sky-50">
                    {b.itens}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-sky-100/80">
              Projetos relacionados:{" "}
              <Link
                href="/projetos/verao-costa-a-costa"
                className="link-editorial font-semibold text-amber-300"
              >
                II Verão Costa a Costa
              </Link>
              ,{" "}
              <Link
                href="/projetos/tour-bahia"
                className="link-editorial font-semibold text-amber-300"
              >
                Tour Bahia
              </Link>{" "}
              e{" "}
              <Link
                href="/projetos/minas-urbano"
                className="link-editorial font-semibold text-amber-300"
              >
                Minas Urbano
              </Link>
            </p>
          </Reveal>
          </div>
        </section>

        {/* H. 05 — Coordenação de projetos */}
        <section id="coordenacao" className="scroll-mt-36 pt-16 md:pt-20">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem_0_2rem_2rem] bg-[linear-gradient(145deg,#152433_0%,#0c3154_100%)] text-white shadow-[0_28px_70px_rgba(8,35,60,0.24)]">
              <div className="grid md:grid-cols-12">
                <div className="p-8 md:col-span-7 md:p-10 lg:p-12">
                  <p className="font-display text-6xl text-white/20 md:text-7xl">
                    05
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-sky-300">
                    Articulação
                  </p>
                  <span className="mt-4 inline-flex rounded-full border border-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-400">
                    Em andamento
                  </span>
                  <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                    Coordenação de projetos com diferentes instituições e
                    equipes
                  </h2>
                  <p className="mt-5 max-w-prose leading-relaxed text-slate-300">
                    Entre as experiências acompanhadas está a proposta de
                    planejamento e preparação para a Copa do Mundo Feminina
                    FIFA 2027 na Bahia, concebida pela Educatec. As atividades
                    vêm sendo desenvolvidas por seu líder empresarial, o
                    professor Ney Campello, por meio de sua atuação como
                    bolsista de um instituto vinculado à Universidade do
                    Paraná. A Educatec não organiza a Copa e não representa a
                    FIFA.
                  </p>
                  <p className="mt-5 text-sm text-slate-400">
                    Exemplo:{" "}
                    <Link
                      href="/projetos/copa-feminina-2027"
                      className="link-editorial font-semibold text-amber-400"
                    >
                      preparação relacionada à Copa do Mundo Feminina de 2027
                    </Link>
                  </p>
                </div>
                <div className="relative aspect-[4/3] md:col-span-5 md:aspect-auto md:min-h-full">
                  <Image
                    src="/images/eventos/copa-feminina-arena-fonte-nova.png"
                    alt="Reunião técnica na Arena Fonte Nova, em Salvador"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[center_60%]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
