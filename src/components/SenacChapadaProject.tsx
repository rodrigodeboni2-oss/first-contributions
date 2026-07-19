import Image from "next/image";
import Link from "next/link";
import ProjectContactCta from "@/components/ProjectContactCta";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

const informacoes = [
  ["Iniciativa", "Educação profissional"],
  ["Parceria institucional", "SENAC e Educatec"],
  ["Região", "Chapada Diamantina"],
  ["Atuação da Educatec", "Planejamento, mobilização e apoio à implantação"],
  ["Foco", "Formação e oportunidades de trabalho"],
];

const frentes = [
  {
    titulo: "Planejamento da iniciativa",
    texto:
      "A Educatec contribui para transformar objetivos institucionais em uma sequência organizada de etapas, atividades e responsabilidades. O planejamento oferece direção ao processo de implantação e mantém coerência entre a proposta de formação, os públicos envolvidos e os resultados pretendidos.",
  },
  {
    titulo: "Articulação institucional",
    texto:
      "A implantação depende da colaboração entre o SENAC, a Educatec, as instituições participantes e as equipes envolvidas. A articulação organiza esse diálogo e cria condições para que decisões, informações e atividades avancem de maneira coordenada.",
  },
  {
    titulo: "Mobilização e aproximação",
    texto:
      "A apresentação da proposta e a comunicação com estudantes, profissionais e comunidades ampliam o entendimento sobre a iniciativa. A Educatec apoia essa aproximação e favorece uma participação mais consciente dos públicos envolvidos.",
  },
  {
    titulo: "Apoio às experiências formativas",
    texto:
      "O trabalho acompanha a passagem do planejamento para a prática, apoiando encontros, atividades e experiências de aprendizagem relacionadas às oportunidades profissionais da Chapada Diamantina.",
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
      className={`flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.23em] ${
        light ? "text-amber-300" : "text-[#0b558d]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-9 ${light ? "bg-amber-300" : "bg-amber-500"}`}
      />
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
    <article className="overflow-x-clip bg-[radial-gradient(90%_38%_at_86%_4%,rgba(66,203,224,0.18),transparent_65%),linear-gradient(180deg,#0b3f70_0%,#176aa4_12%,#6da9cf_25%,#d8eaf5_40%,#f8fbfd_58%,#eaf3f9_76%,#0c477e_100%)] pb-8 text-slate-700 md:pb-10">
      {/* 1. Abertura e informações essenciais */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-4 h-80 w-80 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-12 top-24 hidden h-36 w-36 rounded-full border border-amber-300/25 md:block"
        />

        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 md:pb-16 md:pt-16">
          <div className="grid items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
            <Reveal className="flex min-w-0 lg:col-span-5">
              <div className="flex h-full w-full flex-col justify-center rounded-[2rem_2rem_0.65rem_2rem] bg-[#071f35]/90 p-7 text-white shadow-[0_26px_70px_rgba(4,27,47,0.28)] ring-1 ring-white/15 backdrop-blur-md md:p-9 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-300/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-amber-300">
                    {projeto.status}
                  </span>
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-sky-100/75">
                    Educação profissional · Chapada Diamantina
                  </span>
                </div>

                <span aria-hidden="true" className="mt-7 h-1 w-14 rounded-full bg-amber-300" />
                <h1 className="mt-5 font-display text-[clamp(2.45rem,4.5vw,4.65rem)] leading-[1.01] tracking-[-0.025em] text-white">
                  Formação profissional que aproxima pessoas do mundo do trabalho
                </h1>

                <div className="mt-7 space-y-4 text-[0.92rem] leading-[1.75] text-sky-50/85 md:text-base">
                  <p>
                    A Educatec participa, em parceria com o SENAC, da implantação de uma iniciativa de educação profissional na Chapada Diamantina. O trabalho reúne planejamento, mobilização, diálogo com instituições e apoio às experiências formativas, aproximando a qualificação das necessidades concretas das pessoas e das oportunidades existentes na região.
                  </p>
                  <p>
                    Mais do que oferecer conteúdos técnicos, a iniciativa fortalece uma trajetória de aprendizagem conectada ao trabalho, à autonomia e à geração de renda. A formação funciona como ponte entre os conhecimentos desenvolvidos pelos participantes e as possibilidades econômicas, culturais e turísticas da Chapada Diamantina.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="min-w-0 lg:col-span-7" delay={90}>
              <figure className="group h-full">
                <div className="relative aspect-[4/5] h-full min-h-[38rem] overflow-hidden rounded-[2rem_2rem_2rem_0.65rem] bg-[#0b3557] shadow-[0_28px_75px_rgba(5,38,65,0.3)] ring-1 ring-white/20">
                  <Image
                    src="/images/projetos/senac-chapada/senac-apresentacao-ney.webp"
                    alt="Ney Campello apresenta a iniciativa de educação profissional durante encontro com participantes na Chapada Diamantina."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-[center_43%] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#071f35]/30 to-transparent"
                  />
                </div>
                <figcaption className="mt-2.5 text-xs leading-relaxed text-sky-50/70">
                  Apresentação da iniciativa durante encontro com participantes.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="mt-5" delay={150}>
            <dl className="grid gap-y-5 rounded-[1.4rem] bg-white/90 px-6 py-6 shadow-[0_18px_42px_rgba(6,43,73,0.16)] ring-1 ring-white/60 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0 lg:px-8">
              {informacoes.map(([rotulo, valor], index) => (
                <div
                  key={rotulo}
                  className={
                    index < informacoes.length - 1
                      ? "lg:border-r lg:border-[#0d5b94]/15 lg:pr-5"
                      : ""
                  }
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#0d5b94]">
                    {rotulo}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-snug text-slate-700">
                    {valor}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 2. Propósito, mobilização e participação */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:mt-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-5">
            <Eyebrow>O propósito · Mobilização e participação</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
              O encontro que transforma uma proposta em experiência compartilhada
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-[1.78] text-slate-700 md:text-base">
              <p>
                A educação profissional ganha força quando reconhece o contexto em que as pessoas vivem, trabalham e constroem seus projetos de futuro. Na Chapada Diamantina, essa aproximação conecta a formação a atividades presentes na economia da região, como alimentação, serviços, turismo, hospitalidade e empreendedorismo.
              </p>
              <p>
                A implantação começa antes das atividades em sala de aula. Ela exige apresentação clara, escuta, aproximação com os participantes e diálogo com as instituições envolvidas para que a proposta seja compreendida e faça sentido para diferentes trajetórias.
              </p>
              <p>
                Os encontros criam espaços para compartilhar objetivos e expectativas. Essa etapa fortalece a participação, estabelece uma base de confiança e aproxima conhecimento técnico, prática e oportunidades profissionais.
              </p>
              <p>
                A Educatec organiza esse processo conectando planejamento e comunicação, para que a iniciativa seja percebida como uma oportunidade concreta de aprendizagem, autonomia e construção de novos caminhos.
              </p>
            </div>
            <p className="mt-7 border-l-2 border-amber-400 pl-5 font-display text-xl leading-snug text-[#0a3d66] md:text-2xl">
              Mais do que apresentar uma proposta, mobilizar é fazer com que cada participante reconheça nela uma possibilidade real de futuro.
            </p>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={90}>
            <figure className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.2rem_0.7rem_2.2rem_2.2rem] bg-sky-100 shadow-[0_24px_62px_rgba(8,47,85,0.18)] ring-1 ring-white/70">
                <Image
                  src="/images/projetos/senac-chapada/senac-encontro-auditorio.webp"
                  alt="Público acompanha a apresentação da iniciativa de educação profissional em um auditório."
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#d8eaf5]/35 to-transparent"
                />
              </div>
              <figcaption className="mt-2.5 border-l-2 border-amber-400 pl-3 text-xs leading-relaxed text-slate-600">
                Apresentação da iniciativa e diálogo sobre formação e oportunidades profissionais.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 3. Atuação da Educatec */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="order-2 min-w-0 lg:order-1 lg:col-span-5">
            <figure className="group h-full">
              <div className="relative aspect-[3/4] h-full min-h-[42rem] overflow-hidden rounded-[0.7rem_2.2rem_2.2rem_2.2rem] bg-sky-100 shadow-[0_24px_62px_rgba(8,47,85,0.16)] ring-1 ring-white/80">
                <Image
                  src="/images/projetos/senac-chapada/senac-publico-participante.webp"
                  alt="Participantes reunidos em auditório durante uma etapa de mobilização da iniciativa."
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                />
              </div>
              <figcaption className="mt-2.5 text-xs leading-relaxed text-slate-600">
                Participantes reunidos durante uma das etapas de mobilização e aproximação.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="order-1 min-w-0 lg:order-2 lg:col-span-7" delay={90}>
            <div className="h-full rounded-[2rem_2rem_0.65rem_2rem] bg-white/74 p-7 shadow-[0_20px_52px_rgba(8,47,85,0.1)] ring-1 ring-white/80 backdrop-blur-sm md:p-10 lg:p-12">
              <Eyebrow>Papel da Educatec</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
                Da articulação à experiência formativa
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-[1.78] text-slate-700">
                A Educatec acompanha a implantação como um processo integrado. Planejamento, articulação, mobilização e apoio às atividades avançam de forma coordenada para aproximar objetivos institucionais, participantes e oportunidades profissionais.
              </p>

              <ol className="mt-9 border-l border-[#0d5b94]/20 pl-8 md:pl-10">
                {frentes.map((frente, index) => (
                  <li key={frente.titulo} className="relative pb-8 last:pb-0">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[2.36rem] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-white md:-left-[2.86rem] ${
                        index % 2 === 0 ? "bg-amber-400" : "bg-[#1f8bc2]"
                      }`}
                    />
                    <div className="grid gap-2 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-5">
                      <span className="font-display text-4xl leading-none text-[#0d5b94]/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl leading-tight text-[#082f55] md:text-2xl">
                          {frente.titulo}
                        </h3>
                        <p className="mt-2 text-[0.92rem] leading-[1.72] text-slate-600">
                          {frente.texto}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Formação prática e caminhos profissionais */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-5">
            <Eyebrow>Formação profissional</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
              Conhecimento aplicado que pode abrir novos caminhos
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-[1.78] text-slate-700 md:text-base">
              <p>
                A prática ocupa uma posição central na educação profissional porque transforma conteúdos em experiências concretas. Em ambientes preparados para a aprendizagem, os participantes desenvolvem técnicas, observam processos e constroem maior segurança para aplicar os conhecimentos adquiridos.
              </p>
              <p>
                Na área de alimentação, essa relação ganha importância especial. Gastronomia, cultura, serviços, turismo e hospitalidade fazem parte da dinâmica econômica da Chapada Diamantina e demandam profissionais preparados para oferecer experiências de qualidade.
              </p>
              <p>
                O desenvolvimento de conhecimentos técnicos pode ampliar a preparação para oportunidades de trabalho e prestação de serviços, fortalecendo habilidades práticas, responsabilidade profissional e confiança para enfrentar novos desafios.
              </p>
              <p>
                A aprendizagem também pode contribuir para aprimorar iniciativas já existentes e estimular novos serviços ou pequenos negócios. Ao relacionar técnica e realidade econômica, a formação favorece escolhas profissionais mais conscientes e possibilidades sustentáveis de geração de renda.
              </p>
            </div>
            <p className="mt-7 border-l-2 border-amber-400 pl-5 font-display text-xl leading-snug text-[#0a3d66] md:text-2xl">
              A formação aproxima técnica, identidade cultural e possibilidades profissionais, permitindo que o aprendizado dialogue com situações reais.
            </p>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={90}>
            <figure className="group">
              <div className="relative aspect-[16/10] min-h-[31rem] overflow-hidden rounded-[2.2rem_2.2rem_0.7rem_2.2rem] bg-sky-100 shadow-[0_26px_68px_rgba(8,47,85,0.18)] ring-1 ring-white/80">
                <Image
                  src="/images/projetos/senac-chapada/senac-formacao-gastronomia.webp"
                  alt="Participantes com aventais e toucas do SENAC acompanham uma atividade prática em cozinha pedagógica."
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                />
              </div>
              <figcaption className="mt-2.5 border-l-2 border-amber-400 pl-3 text-xs leading-relaxed text-slate-600">
                Atividade prática de educação profissional na área de alimentação.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 5. Instituições, próximo projeto e chamada comercial */}
      <section className="mx-auto mt-16 max-w-7xl px-4 pb-12 md:mt-24 md:pb-16">
        <div className="rounded-[2.5rem_2.5rem_0.8rem_2.5rem] bg-[#062c50]/92 p-6 text-white shadow-[0_30px_80px_rgba(4,31,54,0.3)] ring-1 ring-white/15 backdrop-blur-sm md:p-10 lg:p-12">
          <Reveal className="grid gap-7 border-b border-white/15 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <Eyebrow light>Instituições relacionadas</Eyebrow>
            <div>
              <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
                Experiência em formação e apoio à implantação
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-[1.75] text-sky-50/85 md:text-lg">
                A iniciativa reúne a experiência do SENAC Bahia em educação profissional e a atuação da Educatec em planejamento, mobilização, articulação institucional e apoio à implantação. A apresentação destaca as organizações cuja participação está confirmada.
              </p>
              <p className="mt-5 font-display text-2xl text-amber-300">
                {projeto.instituicoes}
              </p>
            </div>
          </Reveal>

          {relacionado && relacionado.cardImagem && (
            <Reveal className="mt-10" delay={90}>
              <Link
                href={`/projetos/${relacionado.slug}`}
                className="group grid overflow-hidden rounded-[2rem_2rem_0.65rem_2rem] bg-white/10 ring-1 ring-white/15 transition duration-300 hover:-translate-y-1 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transform-none motion-reduce:transition-none md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]"
              >
                <div className="relative aspect-[16/10] min-h-56 overflow-hidden md:aspect-auto">
                  <Image
                    src={relacionado.cardImagem.src}
                    alt={relacionado.cardImagem.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-[#062c50]/25"
                  />
                </div>
                <div className="flex items-center justify-between gap-7 p-7 md:p-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                      Próximo projeto
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-white md:text-3xl">
                      {relacionado.tituloCurto}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sky-100/75">
                      {relacionado.resumo}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-3xl text-amber-300 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <ProjectContactCta
            className="mt-10"
            variant="institutional"
            eyebrow="Converse com a Educatec"
            title="Sua instituição também pode transformar formação em oportunidade"
            description="A Educatec desenvolve iniciativas de educação profissional que combinam planejamento, mobilização, articulação institucional e apoio à implantação. Cada trabalho é estruturado de acordo com as necessidades da instituição, o perfil dos participantes e as oportunidades relacionadas ao projeto."
          />
        </div>
      </section>
    </article>
  );
}
