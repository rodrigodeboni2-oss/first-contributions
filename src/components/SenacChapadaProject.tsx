import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

const informacoes = [
  ["Iniciativa", "Educação profissional"],
  ["Parceria institucional", "SENAC e Educatec"],
  ["Região", "Chapada Diamantina"],
  ["Atuação da Educatec", "Planejamento, mobilização e apoio à implantação"],
];

const etapas = [
  {
    numero: "01",
    titulo: "Planejamento e organização",
    texto:
      "Objetivos, responsabilidades e atividades são organizados para dar clareza à implantação e orientar cada etapa do trabalho.",
  },
  {
    numero: "02",
    titulo: "Articulação e mobilização",
    texto:
      "O diálogo aproxima instituições, equipes e participantes, favorecendo uma compreensão compartilhada da proposta.",
  },
  {
    numero: "03",
    titulo: "Apoio às experiências formativas",
    texto:
      "O acompanhamento conecta o planejamento aos encontros e às atividades práticas desenvolvidas ao longo do projeto.",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] ${
        light ? "text-amber-300" : "text-[#0d5b94]"
      }`}
    >
      <span aria-hidden="true" className={`h-px w-9 ${light ? "bg-amber-300" : "bg-amber-400"}`} />
      {children}
    </p>
  );
}

export default function SenacChapadaProject({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="overflow-x-clip bg-[radial-gradient(60%_28%_at_92%_7%,rgba(103,190,225,0.16),transparent_72%),linear-gradient(180deg,#eaf5fb_0%,#ffffff_24%,#edf6fb_52%,#ffffff_76%,#dceef8_100%)] pb-10 text-slate-700">
      {/* 1. Abertura */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="flex min-w-0 items-center justify-center lg:col-span-5">
            <figure className="w-full max-w-[22.5rem]">
              <Image
                src="/images/projetos/senac-chapada/senac-apresentacao-ney.webp"
                alt="Ney Campello apresenta o projeto de educação profissional durante encontro com participantes na Chapada Diamantina."
                width={687}
                height={1222}
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_50px_rgba(15,23,42,0.13)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Apresentação do projeto durante encontro com participantes.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={100}>
            <div className="flex h-full min-h-[34rem] flex-col justify-center rounded-2xl bg-[#101d2d] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-300">
                  {projeto.status}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Educação profissional · Chapada Diamantina
                </span>
              </div>
              <h1 className="mt-7 max-w-[34rem] font-display text-[2.15rem] leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-5xl">
                Formação profissional que aproxima pessoas do mundo do trabalho
              </h1>
              <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.72] text-slate-300 md:text-base">
                Em parceria com o SENAC, a Educatec participa da implantação de uma iniciativa de educação profissional na Chapada Diamantina. O trabalho reúne planejamento, mobilização e apoio às experiências formativas, aproximando qualificação, prática e oportunidades relacionadas à realidade da região.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-7" delay={150}>
          <dl className="grid border-y border-[#0d5b94]/20 sm:grid-cols-2 lg:grid-cols-4">
            {informacoes.map(([rotulo, valor], index) => (
              <div
                key={rotulo}
                className={`py-5 sm:px-5 lg:py-6 ${
                  index > 0 ? "border-t border-[#0d5b94]/15 sm:border-t-0 sm:border-l" : ""
                } ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
              >
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#0d5b94]">
                  {rotulo}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-slate-700">{valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* 2. Propósito e mobilização */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <Eyebrow>Propósito e mobilização</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Formação conectada às oportunidades da região
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.72] text-slate-700 md:text-base">
              <p>
                A educação profissional ganha força quando considera as atividades, os serviços e as possibilidades de trabalho presentes na Chapada Diamantina. Essa conexão ajuda a transformar o aprendizado em uma experiência próxima da vida dos participantes.
              </p>
              <p>
                Antes das atividades formativas, apresentação, escuta e mobilização aproximam pessoas e instituições. Os encontros esclarecem a proposta, acolhem expectativas e criam uma base comum para o desenvolvimento do projeto.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delay={90}>
            <figure className="ml-auto w-full max-w-[36rem]">
              <Image
                src="/images/projetos/senac-chapada/senac-encontro-auditorio.webp"
                alt="Participantes acompanham a apresentação do projeto de educação profissional em um auditório."
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 576px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Apresentação e diálogo sobre formação e oportunidades profissionais.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 3. Atuação da Educatec */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
          <Reveal className="flex min-w-0 justify-center lg:col-span-5">
            <figure className="w-full max-w-[24rem]">
              <Image
                src="/images/projetos/senac-chapada/senac-publico-participante.webp"
                alt="Participantes reunidos em auditório durante uma etapa de mobilização do projeto."
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
            <Eyebrow>Atuação da Educatec</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Da articulação à experiência formativa
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.72] text-slate-700 md:text-base">
              A implantação é acompanhada como um processo integrado, no qual planejamento, diálogo e atividades formativas avançam de maneira coordenada.
            </p>

            <ol className="mt-8 max-w-2xl border-t border-slate-300">
              {etapas.map((etapa) => (
                <li
                  key={etapa.numero}
                  className="grid gap-3 border-b border-slate-300 py-5 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-5"
                >
                  <span className="font-display text-xl text-[#0d5b94]/55">{etapa.numero}</span>
                  <div>
                    <h3 className="font-display text-xl leading-tight text-slate-900 md:text-2xl">
                      {etapa.titulo}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{etapa.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 4. Formação prática */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="min-w-0 lg:col-span-6">
            <Eyebrow>Formação profissional</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] leading-[1.12] text-slate-900 md:text-[2.5rem]">
              Conhecimento aplicado à prática profissional
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.72] text-slate-700 md:text-base">
              <p>
                Em ambientes preparados para a aprendizagem, os participantes desenvolvem técnicas, observam processos e ganham segurança para aplicar os conhecimentos adquiridos em situações reais.
              </p>
              <p>
                Na área de alimentação, a formação dialoga com gastronomia, cultura, serviços, turismo e hospitalidade. A prática fortalece competências profissionais e pode ampliar oportunidades de trabalho, prestação de serviços e geração de renda.
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-6" delay={90}>
            <figure className="ml-auto w-full max-w-[38rem]">
              <Image
                src="/images/projetos/senac-chapada/senac-formacao-gastronomia.webp"
                alt="Participantes com aventais e toucas do SENAC acompanham uma atividade prática em cozinha pedagógica."
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 608px"
                className="h-auto w-full rounded-2xl object-contain shadow-[0_18px_48px_rgba(15,23,42,0.12)]"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Atividade prática de educação profissional na área de alimentação.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 5. Continuidade e chamada final */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-14 md:pb-14 md:pt-20">
        <Reveal>
          <div className="border-y border-slate-300 py-7">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              Instituições relacionadas
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              SENAC Bahia · Educatec · instituições e parceiros locais
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
                Sua instituição também pode transformar formação em oportunidade
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-sky-100 md:text-base">
                A Educatec desenvolve projetos de educação profissional com planejamento, mobilização e articulação institucional, estruturados de acordo com cada organização e com o perfil dos participantes.
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
