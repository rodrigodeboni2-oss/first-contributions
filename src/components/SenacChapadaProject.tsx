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
      "A Educatec contribui para transformar objetivos institucionais em uma sequência organizada de etapas, atividades e responsabilidades. O planejamento oferece direção ao processo de implantação e ajuda a manter coerência entre a proposta de formação, os públicos envolvidos e os resultados pretendidos.",
  },
  {
    titulo: "Articulação institucional",
    texto:
      "A implantação depende da colaboração entre o SENAC, a Educatec, as instituições participantes e as equipes envolvidas. A articulação organiza esse diálogo, aproxima diferentes responsabilidades e cria condições para que decisões, informações e atividades avancem de maneira coordenada.",
  },
  {
    titulo: "Mobilização e aproximação com os participantes",
    texto:
      "A apresentação da proposta e a comunicação com estudantes, profissionais e comunidades ajudam a ampliar o entendimento sobre a iniciativa. A Educatec apoia essa aproximação, favorecendo uma participação mais consciente e uma relação mais direta entre a formação oferecida e as expectativas dos públicos envolvidos.",
  },
  {
    titulo: "Apoio às experiências formativas",
    texto:
      "O trabalho acompanha a passagem do planejamento para a prática, apoiando encontros, atividades e experiências de aprendizagem. Essa atuação busca manter a formação relacionada às oportunidades profissionais da Chapada Diamantina e às possibilidades de trabalho, prestação de serviços, turismo, hospitalidade e geração de renda.",
  },
];

const possibilidades = [
  {
    titulo: "Qualificação e inserção profissional",
    texto:
      "O desenvolvimento de conhecimentos técnicos pode ampliar a preparação dos participantes para oportunidades de trabalho e prestação de serviços. A formação também fortalece habilidades práticas, responsabilidade profissional e maior segurança para enfrentar novos desafios.",
  },
  {
    titulo: "Empreendedorismo e geração de renda",
    texto:
      "A aprendizagem pode contribuir para o aprimoramento de iniciativas já existentes e estimular a criação de novos serviços ou pequenos negócios. Ao relacionar técnica e realidade econômica, o projeto favorece escolhas profissionais mais conscientes e sustentáveis.",
  },
  {
    titulo: "Gastronomia, turismo e hospitalidade",
    texto:
      "A Chapada Diamantina reúne atividades culturais, turísticas e de atendimento que demandam profissionais preparados. A formação ligada à alimentação e à hospitalidade pode valorizar saberes locais, qualificar serviços e fortalecer experiências oferecidas a moradores e visitantes.",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] ${
        light ? "text-amber-300" : "text-[#0d5b94]"
      }`}
    >
      <span aria-hidden="true" className={`h-px w-9 ${light ? "bg-amber-300" : "bg-amber-500"}`} />
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
    <article className="overflow-x-clip bg-[#f7f9fb] text-slate-700">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#f7fbff_0%,#ffffff_52%,#eef6fb_100%)]">
        <div aria-hidden="true" className="absolute -left-36 top-28 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div aria-hidden="true" className="absolute right-0 top-0 h-80 w-80 rounded-bl-full bg-amber-200/20" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:py-20 lg:grid-cols-[minmax(0,1.18fr)_minmax(300px,0.72fr)] lg:gap-16 lg:py-24">
          <Reveal>
            <Eyebrow>Educação profissional · Chapada Diamantina</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.75rem,6vw,5.65rem)] leading-[0.98] tracking-[-0.035em] text-[#082f55]">
              Formação profissional que aproxima pessoas do mundo do trabalho
            </h1>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.85] text-slate-600 md:text-lg">
              <p>
                A Educatec participa, em parceria com o SENAC, da implantação de uma iniciativa de educação profissional na Chapada Diamantina. O trabalho reúne planejamento, mobilização, diálogo com instituições e apoio às experiências formativas, criando condições para que a qualificação profissional se aproxime das necessidades concretas das pessoas e das oportunidades existentes na região.
              </p>
              <p>
                Mais do que oferecer conteúdos técnicos, a iniciativa fortalece uma trajetória de aprendizagem conectada ao trabalho, à autonomia e à geração de renda. A formação passa a funcionar como uma ponte entre os conhecimentos desenvolvidos pelos participantes e as possibilidades econômicas, culturais e turísticas presentes na Chapada Diamantina.
              </p>
            </div>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-[29rem] lg:mx-0 lg:justify-self-end">
            <figure>
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem_2.5rem_0.8rem_2.5rem] bg-sky-100 shadow-[0_30px_80px_rgba(8,47,85,0.2)] ring-1 ring-[#0d5b94]/10">
                <Image
                  src="/images/projetos/senac-chapada/senac-apresentacao-ney.webp"
                  alt="Ney Campello apresenta a iniciativa de educação profissional durante encontro com participantes na Chapada Diamantina."
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 420px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 border-l-2 border-amber-400 pl-3 text-xs leading-relaxed text-slate-500">
                Apresentação da iniciativa durante encontro com participantes.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-label="Informações essenciais" className="border-y border-sky-100 bg-white">
        <Reveal className="mx-auto max-w-6xl px-4 py-8 md:py-10">
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">
            {informacoes.map(([rotulo, valor]) => (
              <div key={rotulo} className="border-l border-sky-200 pl-4">
                <dt className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#0d5b94]">{rotulo}</dt>
                <dd className="mt-2 text-sm font-medium leading-relaxed text-slate-700">{valor}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.8rem_2.8rem_0.8rem_2.8rem] bg-[linear-gradient(135deg,#062c50_0%,#0a4778_58%,#0d5b94_100%)] px-6 py-12 text-white shadow-[0_28px_75px_rgba(5,42,76,0.24)] md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -right-10 top-14 h-48 w-48 rounded-full border border-amber-300/30" />
            <div aria-hidden="true" className="absolute bottom-10 right-16 hidden h-px w-56 rotate-[-28deg] bg-gradient-to-r from-transparent via-sky-200/30 to-amber-300/50 md:block" />
            <div className="relative max-w-4xl">
              <Eyebrow light>O propósito</Eyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.08] text-white md:text-5xl">
                Educação profissional conectada às oportunidades da Chapada Diamantina
              </h2>
              <div className="mt-8 grid gap-6 text-base leading-[1.85] text-sky-50/90 lg:grid-cols-3 lg:gap-8">
                <p>
                  A educação profissional produz resultados mais consistentes quando reconhece o contexto em que as pessoas vivem, trabalham e constroem seus projetos de futuro. Na Chapada Diamantina, essa aproximação permite relacionar a formação a atividades presentes na vida econômica da região, incluindo alimentação, serviços, turismo, hospitalidade e empreendedorismo.
                </p>
                <p>
                  A proposta combina conhecimento técnico, prática e articulação institucional. Dessa forma, os participantes não encontram apenas uma atividade de aprendizagem, mas uma oportunidade de desenvolver competências que podem fortalecer sua inserção profissional, ampliar sua autonomia e estimular novas possibilidades de geração de renda.
                </p>
                <p>
                  A implantação do Polo representa a construção de um ambiente contínuo de qualificação. Um espaço capaz de aproximar pessoas, instituições e oportunidades, valorizando experiências locais e ampliando o acesso a conhecimentos aplicáveis ao cotidiano profissional.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>Mobilização e participação</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
                O encontro que transforma uma proposta em experiência compartilhada
              </h2>
            </div>
            <div className="space-y-5 text-base leading-[1.85] text-slate-600">
              <p>
                A implantação de uma iniciativa de educação profissional começa antes das atividades em sala de aula. Ela exige apresentação clara, escuta, aproximação com os participantes e diálogo com as instituições envolvidas. A mobilização ajuda a tornar a proposta compreensível e permite que estudantes, profissionais e comunidades reconheçam como a formação pode contribuir para suas trajetórias.
              </p>
              <p>
                Os encontros realizados na Chapada Diamantina criam espaços para apresentar objetivos, compartilhar expectativas e aproximar diferentes públicos. Essa etapa fortalece a participação e estabelece uma base de confiança para o desenvolvimento das atividades formativas.
              </p>
              <p>
                A Educatec contribui para organizar esse processo de aproximação, conectando planejamento e comunicação. O objetivo é fazer com que a iniciativa seja percebida não como uma ação isolada, mas como uma oportunidade concreta de aprendizagem, desenvolvimento profissional e construção de novos caminhos.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12 grid items-start gap-6 lg:grid-cols-[1.58fr_0.72fr] lg:gap-8">
            <figure>
              <div className="relative aspect-video overflow-hidden rounded-[2.3rem_0.8rem_2.3rem_2.3rem] bg-slate-100 shadow-[0_18px_45px_rgba(8,47,85,0.12)]">
                <Image
                  src="/images/projetos/senac-chapada/senac-encontro-auditorio.webp"
                  alt="Público acompanha a apresentação da iniciativa de educação profissional em um auditório."
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Apresentação da iniciativa e diálogo sobre formação e oportunidades profissionais.
              </figcaption>
            </figure>
            <figure className="lg:pt-16">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[0.8rem_2.3rem_2.3rem_2.3rem] bg-slate-100 shadow-[0_18px_45px_rgba(8,47,85,0.12)]">
                <Image
                  src="/images/projetos/senac-chapada/senac-publico-participante.webp"
                  alt="Participantes reunidos em auditório durante uma etapa de mobilização da iniciativa."
                  fill
                  sizes="(max-width: 1024px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Participantes reunidos durante uma das etapas de mobilização e aproximação.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Formação profissional</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
              Conhecimento aplicado à realidade da região
            </h2>
            <div className="mt-7 space-y-5 text-base leading-[1.85] text-slate-600">
              <p>
                A prática ocupa uma posição central na educação profissional porque transforma conteúdos em experiências concretas. Em ambientes preparados para a aprendizagem, os participantes desenvolvem técnicas, observam processos, experimentam soluções e constroem maior segurança para aplicar os conhecimentos adquiridos.
              </p>
              <p>
                Na área de alimentação, essa relação entre conhecimento e prática ganha importância especial. A gastronomia está ligada à cultura, aos serviços, ao turismo e à hospitalidade, atividades que fazem parte da dinâmica econômica da Chapada Diamantina. A formação pode contribuir tanto para a inserção profissional quanto para o aperfeiçoamento de pequenos negócios e iniciativas empreendedoras.
              </p>
              <p>
                Ao aproximar técnica, identidade cultural e possibilidades de trabalho, a atividade formativa amplia a compreensão sobre o valor profissional da gastronomia. O aprendizado passa a dialogar com situações reais e com oportunidades que podem ser desenvolvidas pelos próprios participantes.
              </p>
            </div>
          </div>
          <figure>
            <div className="relative aspect-video overflow-hidden rounded-[2.6rem_2.6rem_0.8rem_2.6rem] bg-slate-100 shadow-[0_24px_60px_rgba(8,47,85,0.16)]">
              <Image
                src="/images/projetos/senac-chapada/senac-formacao-gastronomia.webp"
                alt="Participantes com aventais e toucas do SENAC acompanham uma atividade prática em cozinha pedagógica."
                fill
                sizes="(max-width: 1024px) 100vw, 690px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 border-l-2 border-amber-400 pl-3 text-xs leading-relaxed text-slate-500">
              Atividade prática de educação profissional na área de alimentação.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="bg-[#eaf4fa] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="rounded-[2.8rem_2.8rem_0.8rem_2.8rem] bg-white px-6 py-12 shadow-[0_24px_65px_rgba(8,47,85,0.1)] ring-1 ring-[#0d5b94]/10 md:px-12 md:py-16">
              <Eyebrow>Papel da Educatec</Eyebrow>
              <h2 className="mt-5 max-w-3xl font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
                Planejamento, mobilização e apoio à implantação
              </h2>
              <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
                {frentes.map((frente, index) => (
                  <li key={frente.titulo} className="group relative border-l border-sky-200 pb-2 pl-16">
                    <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d5b94] font-display text-sm text-white shadow-[0_8px_20px_rgba(13,91,148,0.22)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className={`absolute -left-1 top-14 h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-amber-400" : "bg-emerald-400"}`} />
                    <h3 className="font-display text-2xl leading-tight text-[#082f55]">{frente.titulo}</h3>
                    <p className="mt-4 text-[0.95rem] leading-[1.8] text-slate-600">{frente.texto}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="max-w-4xl">
            <Eyebrow>Possibilidades abertas pela formação</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-[1.08] text-[#082f55] md:text-5xl">
              Aprendizagem que pode criar novos caminhos profissionais
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-[1.85] text-slate-600 md:text-lg">
              A implantação do Polo busca ampliar o acesso à qualificação e fortalecer competências relacionadas às atividades econômicas da Chapada Diamantina. Essa jornada abre possibilidades construídas ao longo da formação, respeitando o ritmo de cada participante e o amadurecimento da iniciativa.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {possibilidades.map((item, index) => (
              <Reveal key={item.titulo}>
                <article className="group h-full rounded-[2rem_2rem_0.6rem_2rem] border border-sky-100 bg-[#f8fbfd] p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_45px_rgba(8,47,85,0.1)] motion-reduce:transform-none motion-reduce:transition-none md:p-8">
                  <span className="font-display text-5xl text-sky-200">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-[#082f55]">{item.titulo}</h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.8] text-slate-600">{item.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062c50] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="grid gap-8 border-b border-white/15 pb-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Instituições relacionadas</h2>
            <div>
              <p className="max-w-3xl text-lg leading-[1.75] text-sky-50/90">
                A iniciativa reúne a experiência do SENAC Bahia em educação profissional e a atuação da Educatec em planejamento, mobilização, articulação institucional e apoio à implantação. A apresentação institucional destaca, neste momento, as organizações cuja participação está confirmada.
              </p>
              <p className="mt-6 font-display text-2xl text-white">{projeto.instituicoes}</p>
            </div>
          </Reveal>

          {relacionado && (
            <Reveal className="mt-12">
              <Link
                href={`/projetos/${relacionado.slug}`}
                className="group grid overflow-hidden rounded-[2.2rem_2.2rem_0.7rem_2.2rem] bg-white/10 ring-1 ring-white/15 transition duration-300 hover:-translate-y-1 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transform-none motion-reduce:transition-none md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]"
              >
                {relacionado.cardImagem && (
                  <div className="relative aspect-[16/10] min-h-56 md:aspect-auto">
                    <Image
                      src={relacionado.cardImagem.src}
                      alt={relacionado.cardImagem.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 430px"
                      className="object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#062c50]/25" />
                  </div>
                )}
                <div className="flex items-center justify-between gap-8 p-7 md:p-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Próximo projeto</p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-white md:text-3xl">{relacionado.tituloCurto}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sky-100/75">{relacionado.resumo}</p>
                  </div>
                  <span aria-hidden="true" className="shrink-0 text-3xl text-amber-300 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                </div>
              </Link>
            </Reveal>
          )}

          <ProjectContactCta
            className="mt-12"
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
