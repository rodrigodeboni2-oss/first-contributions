import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectContactCta from "@/components/ProjectContactCta";
import type { Projeto } from "@/lib/projetos";

const base = "/images/projetos/universidade-aberta";

// Colunas clássicas estilizadas — motivo próprio da página, ecoando a
// arquitetura do palácio da Associação Comercial. Abstrato e discreto.
function Colunas({
  className = "",
  tone = "white",
}: {
  className?: string;
  tone?: "white" | "brand";
}) {
  const color = tone === "white" ? "rgba(255,255,255,0.5)" : "rgba(20,64,110,0.4)";
  return (
    <svg
      viewBox="0 0 220 140"
      aria-hidden="true"
      className={`uniacb-cols ${className}`}
      style={{ color }}
    >
      <rect x="24" y="34" width="14" height="86" rx="2" />
      <rect x="66" y="22" width="14" height="98" rx="2" />
      <rect x="108" y="30" width="14" height="90" rx="2" />
      <rect x="150" y="18" width="14" height="102" rx="2" />
      <rect x="12" y="120" width="196" height="4" rx="2" className="uniacb-cap" />
      <rect x="18" y="26" width="26" height="5" rx="2" className="uniacb-cap" />
      <rect x="60" y="14" width="26" height="5" rx="2" className="uniacb-cap" />
      <rect x="102" y="22" width="26" height="5" rx="2" className="uniacb-cap" />
      <rect x="144" y="10" width="26" height="5" rx="2" className="uniacb-gold" />
    </svg>
  );
}

function Foto({
  src,
  alt,
  legenda,
  aspecto = "aspect-[4/3]",
  posicao = "center",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  legenda?: string;
  aspecto?: string;
  posicao?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`group min-w-0 ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(10,42,74,0.16)] ring-1 ring-brand/10 ${aspecto}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="img-zoom object-cover"
          style={{ objectPosition: posicao }}
        />
      </div>
      {legenda && (
        <figcaption className="mt-2.5 text-xs leading-relaxed text-slate-500">
          {legenda}
        </figcaption>
      )}
    </figure>
  );
}

export default function UniAcbProjeto({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="uniacb-page overflow-x-clip">
      {/* ================= 1. HERO ================= */}
      <header className="relative mx-auto max-w-7xl px-4 pt-8 md:pt-12">
        <Colunas className="pointer-events-none absolute right-8 top-4 hidden w-64 md:block" />
        <div className="grid items-stretch gap-5 lg:grid-cols-12">
          <Reveal className="flex min-w-0 lg:col-span-5">
            <div className="uniacb-hero-panel flex w-full flex-col justify-center rounded-[1.75rem] p-7 text-white md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-amber-300/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-200">
                  {projeto.status}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-sky-200">
                  {projeto.categorias.join(" · ")}
                </span>
              </div>
              <span className="mt-8 h-1 w-14 rounded-full bg-[#c9a227]" />
              <h1 className="mt-5 font-display text-3xl leading-[1.06] md:text-4xl lg:text-[2.9rem]">
                {projeto.titulo}
              </h1>
              <p className="mt-4 font-display text-lg leading-snug text-amber-100/90 md:text-xl">
                Educação, inovação e desenvolvimento institucional para
                fortalecer empresas, lideranças e o futuro da Bahia.
              </p>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-200 md:text-base">
                {projeto.resumo}
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={100}>
            <Foto
              src={`${base}/acb-fachada-palacio.webp`}
              alt="Fachada do palácio histórico da Associação Comercial da Bahia, no Comércio, em Salvador"
              legenda="O palácio histórico da Associação Comercial da Bahia, sede da Universidade Aberta."
              aspecto="aspect-[4/3] lg:h-full lg:min-h-[24rem]"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </Reveal>
        </div>

        {/* Quadro resumo */}
        <Reveal className="mt-5" delay={140}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/40 bg-white/35 shadow-[0_14px_36px_rgba(10,42,74,0.12)] backdrop-blur-sm md:grid-cols-5">
            {[
              ["Período", "Desde dezembro de 2024"],
              ["Cliente", "Fundação Paulo Cavalcante"],
              ["Instituição", "Associação Comercial da Bahia"],
              ["Área", projeto.area],
              ["Papel da Educatec", projeto.papel],
            ].map(([rotulo, valor]) => (
              <div key={rotulo} className="bg-white/95 p-5 md:p-6">
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

      {/* ================= 2. EDUCAÇÃO ESTRATÉGICA ================= */}
      <section className="mx-auto mt-14 max-w-7xl px-4 md:mt-20">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Educação estratégica
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Educação que conecta conhecimento e desenvolvimento
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>
                A Universidade Aberta nasce como um ambiente permanente de
                formação voltado ao desenvolvimento econômico, à inovação e à
                qualificação de lideranças empresariais.
              </p>
              <p>
                A Educatec foi responsável pela concepção da proposta
                acadêmica, pela estruturação institucional do projeto e pela
                organização do modelo de funcionamento da Universidade Aberta.
              </p>
            </div>
            <div className="mt-7 rounded-2xl border border-amber-200/70 bg-white/85 p-6 shadow-[0_14px_36px_rgba(10,42,74,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a3841f]">
                Direção-geral
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                Desde dezembro de 2024, o professor Ney Campello exerce a
                função de diretor-geral da Universidade Aberta da Associação
                Comercial da Bahia.
              </p>
            </div>
          </Reveal>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2">
              <Foto
                src={`${base}/acb-ney-painel.webp`}
                alt="Ney Campello fala ao microfone durante painel de debate"
                aspecto="aspect-[3/4] h-full"
                posicao="center 30%"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
            </Reveal>
            <Reveal className="col-span-2 lg:col-span-5 lg:row-span-2" delay={90}>
              <Foto
                src={`${base}/acb-retrato-classico.webp`}
                alt="Ney Campello em ambiente clássico da Associação Comercial da Bahia"
                aspecto="aspect-[4/3] lg:aspect-auto lg:h-full"
                posicao="center 25%"
                sizes="(max-width: 1024px) 100vw, 24vw"
              />
            </Reveal>
          </div>
        </div>
        <p className="mt-3 text-right text-xs leading-relaxed text-slate-500">
          Painéis, debates e a liderança acadêmica do projeto.
        </p>
      </section>

      {/* ================= 3. DA IDEIA À IMPLANTAÇÃO ================= */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:order-1 lg:col-span-7 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="col-span-2 lg:col-span-8 lg:row-span-2">
              <Foto
                src={`${base}/acb-encontro-salao.webp`}
                alt="Grupo reunido no salão histórico da Associação Comercial da Bahia"
                aspecto="aspect-[4/3] h-full"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </Reveal>
            <Reveal className="col-span-2 lg:col-span-4 lg:row-span-2" delay={90}>
              <Foto
                src={`${base}/acb-dia-associativismo.webp`}
                alt="Comemoração do Dia do Associativismo na Associação Comercial da Bahia"
                aspecto="aspect-[4/3] lg:aspect-auto lg:h-full"
                posicao="center 35%"
                sizes="(max-width: 1024px) 100vw, 22vw"
              />
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2 lg:col-span-5" delay={80}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Da concepção à implantação
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Da ideia à implantação
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>
                O trabalho desenvolvido pela Educatec envolveu planejamento
                estratégico, reuniões técnicas, desenho institucional,
                organização da estrutura acadêmica e articulação entre
                empresas, universidades e poder público.
              </p>
              <p>
                Mais do que elaborar um projeto, a Educatec participa da
                construção de uma instituição permanente voltada ao
                fortalecimento do desenvolvimento empresarial da Bahia.
              </p>
            </div>
          </Reveal>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Encontros no salão histórico e agendas do associativismo baiano.
        </p>
      </section>

      {/* ================= 4. PRODUÇÃO INTELECTUAL — faixa profunda ================= */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <Reveal>
          <div className="uniacb-deep relative overflow-hidden rounded-[1.75rem] p-8 text-white md:p-12">
            <Colunas className="pointer-events-none absolute -right-6 bottom-4 w-64 opacity-70" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                Produção intelectual e liderança
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                Conhecimento que se produz e se compartilha
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-sky-100/90">
                A experiência do professor Ney Campello como educador,
                escritor, gestor público e consultor também integra a proposta
                da Universidade Aberta. Livros, palestras, conferências e
                programas de formação ampliam o alcance do projeto.
              </p>
              <p className="mt-4 leading-relaxed text-sky-100/70">
                A Educatec promove espaços permanentes de diálogo entre
                empresas, universidades, gestores públicos e organizações da
                sociedade civil — fortalecendo políticas públicas,
                empreendedorismo, inovação e educação.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= 5. REDES DE COOPERAÇÃO ================= */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Articulação institucional
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Construindo redes de cooperação
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>
                A Universidade Aberta aproxima empresários, universidades,
                governos, instituições e especialistas em um ambiente
                colaborativo de produção de conhecimento.
              </p>
              <p>
                Ao longo da implantação foram realizados encontros, reuniões e
                atividades institucionais que consolidaram a proposta
                acadêmica e fortaleceram parcerias estratégicas — da Expo
                Favela às agendas cívicas da cidade.
              </p>
            </div>
          </Reveal>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:grid-cols-12 lg:grid-rows-2">
            <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2">
              <Foto
                src={`${base}/acb-grupo-institucional.webp`}
                alt="Grupo de representantes institucionais reunido em evento profissional"
                aspecto="aspect-[4/3] h-full"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
            </Reveal>
            <Reveal className="lg:col-span-5" delay={90}>
              <Foto
                src={`${base}/acb-expo-favela.webp`}
                alt="Ney Campello com representante da Expo Favela Bahia"
                posicao="center 30%"
                sizes="(max-width: 1024px) 50vw, 24vw"
              />
            </Reveal>
            <Reveal className="lg:col-span-5" delay={170}>
              <Foto
                src={`${base}/acb-agenda-civica.webp`}
                alt="Registro institucional em evento cívico, com bandeiras ao fundo"
                posicao="center 30%"
                sizes="(max-width: 1024px) 50vw, 24vw"
              />
            </Reveal>
          </div>
        </div>
        <p className="mt-3 text-right text-xs leading-relaxed text-slate-500">
          Expo Favela, agendas cívicas e encontros do associativismo.
        </p>
      </section>

      {/* ================= 6. CONHECIMENTO EM MOVIMENTO ================= */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <Foto
              src={`${base}/acb-congresso-imobiliario.webp`}
              alt="Participantes no 3º Congresso Baiano de Direito Imobiliário"
              legenda="3º Congresso Baiano de Direito Imobiliário — evento com participação na organização."
              aspecto="aspect-[3/4] max-w-md"
              posicao="center 30%"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={80}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Eventos e diálogos
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900 md:text-5xl">
              Conhecimento em movimento
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
              <p>
                A atuação da Educatec também envolve a organização de
                congressos, seminários, encontros técnicos e debates públicos
                voltados ao desenvolvimento urbano, à educação, à inovação e
                ao empreendedorismo.
              </p>
              <p>
                Esses eventos fortalecem o diálogo entre instituições
                públicas, setor produtivo e sociedade — e mantêm a
                Universidade Aberta em movimento permanente.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= 7. ENCERRAMENTO ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 md:pb-24 md:pt-28">
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

        <ProjectContactCta
          className="mt-10"
          variant="institutional"
          eyebrow="Fale sobre o seu projeto"
          title="Sua instituição precisa estruturar uma nova iniciativa de formação?"
          description="Apresente a necessidade ao Ney Campello e converse sobre planejamento, articulação e desenvolvimento do projeto."
        />
      </section>
    </article>
  );
}
