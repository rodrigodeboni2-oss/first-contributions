import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

// Rede de dados/território — SVG decorativo, abstrato e institucional.
function RedeDados({
  className = "",
  tone = "turq",
}: {
  className?: string;
  tone?: "turq" | "white";
}) {
  const color = tone === "white" ? "rgba(255,255,255,0.5)" : "#35c4d4";
  return (
    <svg
      viewBox="0 0 220 160"
      fill="none"
      aria-hidden="true"
      className={`obs-net ${className}`}
      style={{ color }}
    >
      <line x1="18" y1="132" x2="70" y2="70" />
      <line x1="70" y1="70" x2="128" y2="104" />
      <line x1="128" y1="104" x2="190" y2="40" />
      <line x1="70" y1="70" x2="96" y2="20" />
      <line x1="128" y1="104" x2="150" y2="150" />
      <circle className="obs-node" cx="18" cy="132" r="3.5" />
      <circle className="obs-node--turq" cx="70" cy="70" r="4.5" />
      <circle className="obs-node--amber" cx="128" cy="104" r="4" />
      <circle className="obs-node" cx="190" cy="40" r="3" />
      <circle className="obs-node--amber" cx="96" cy="20" r="3" />
      <circle className="obs-node" cx="150" cy="150" r="3" />
    </svg>
  );
}

const IMG = {
  grupo: {
    src: "/images/projetos/observatorio/obs-grupo-oficina.webp",
    alt: "Grupo diverso de participantes reunido na oficina de apresentação do Observatório Educacional, em auditório iluminado",
  },
  cartaz: {
    src: "/images/projetos/observatorio/obs-cartaz-oficina.webp",
    alt: "Cartaz da oficina de apresentação do Observatório Educacional do Beiru/Tancredo Neves, com data 14/05 às 8h30 no Colégio Estadual Zumbi dos Palmares e logos das instituições realizadoras",
  },
  planejamento: {
    src: "/images/projetos/observatorio/obs-reuniao-planejamento.webp",
    alt: "Reunião de trabalho ao redor de uma mesa com materiais impressos e folhetos do Observatório Educacional",
  },
  empreendedora: {
    src: "/images/projetos/observatorio/obs-educacao-empreendedora.webp",
    alt: "Quatro pessoas reunidas em uma sala de articulação educacional, diante de um painel de apresentação",
  },
  retrato: {
    src: "/images/projetos/observatorio/obs-retrato-grupo.webp",
    alt: "Retrato de quatro participantes do Observatório reunidos em uma sala iluminada",
  },
};

const responsabilidades = [
  "Monitoramento de indicadores educacionais",
  "Apoio técnico a secretarias, escolas e instituições",
  "Formação de gestores e conselheiros",
  "Entrevistas, grupos focais e pesquisas qualitativas",
  "Recomendações técnicas e relatórios",
  "Transparência pública e articulação entre governos, universidades, escolas e sociedade civil",
];

const registros = [
  {
    titulo: "Oficina de apresentação no Colégio Estadual Zumbi dos Palmares",
    texto:
      "O ponto de partida foi uma oficina de apresentação e mobilização, que abriu o Observatório ao território e reuniu as pessoas em torno de uma agenda comum.",
  },
  {
    titulo: "Escuta de gestores, professores, estudantes e lideranças",
    texto:
      "Gestores escolares, professores, estudantes, lideranças comunitárias e organizações sociais participaram do encontro — uma escuta que dá base às próximas etapas.",
  },
  {
    titulo: "Reuniões de planejamento e articulação institucional",
    texto:
      "Reuniões de planejamento, de educação empreendedora e de articulação institucional seguem organizando as informações e aproximando os parceiros.",
  },
];

export default function ObservatorioProjeto({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="obs-page">
      {/* ================= 1. ABERTURA ================= */}
      <header className="relative overflow-hidden">
        <RedeDados
          tone="white"
          className="pointer-events-none absolute right-4 top-6 hidden w-72 opacity-60 md:block"
        />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="grid items-stretch gap-6 md:grid-cols-12 md:gap-8">
            {/* Painel institucional (texto primeiro no celular) */}
            <Reveal className="flex flex-col justify-center md:col-span-5">
              <div className="rounded-2xl bg-brand-dark/40 p-7 ring-1 ring-white/15 backdrop-blur-sm md:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-300">
                    {projeto.status}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-sky-200/80">
                    {projeto.categorias.join(" · ")}
                  </span>
                </div>
                <h1 className="mt-5 font-display text-3xl leading-[1.1] text-white md:text-[2.6rem]">
                  {projeto.titulo}
                </h1>
                <p className="mt-4 max-w-prose leading-relaxed text-sky-100/90">
                  {projeto.resumo}
                </p>
                <p className="mt-6 border-l-2 border-amber-400 pl-5 font-display text-lg leading-snug text-white md:text-xl">
                  {projeto.fraseDestaque}
                </p>
              </div>
            </Reveal>

            {/* Fotografia principal — sem cortar participantes */}
            <Reveal className="md:col-span-7" delay={120}>
              <figure className="group h-full">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/15">
                  <Image
                    src={IMG.grupo.src}
                    alt={IMG.grupo.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="img-zoom object-cover"
                    style={{ objectPosition: "center 42%" }}
                  />
                </div>
                <figcaption className="mt-2.5 text-xs text-sky-100/70">
                  Participantes da oficina de apresentação do Observatório
                  Educacional, no Beiru/Tancredo Neves.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ================= 2. INFORMAÇÕES RÁPIDAS ================= */}
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-6 rounded-2xl bg-white/85 px-6 py-6 shadow-sm ring-1 ring-brand/10 backdrop-blur-sm sm:grid-cols-3 md:grid-cols-5 md:gap-x-4 md:px-8">
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

      {/* ================= 3. O TERRITÓRIO COMO PONTO DE PARTIDA ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              O território como ponto de partida
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Antes dos dados, a escuta do bairro
            </h2>
            <div className="mt-6 space-y-5">
              <p className="max-w-prose text-lg leading-relaxed text-slate-700">
                {projeto.contexto[0]}
              </p>
              <p className="max-w-prose text-lg leading-relaxed text-slate-700">
                {projeto.contexto[1]}
              </p>
              <p className="max-w-prose leading-relaxed text-slate-600">
                O Observatório nasce dentro do próprio território — perto das
                escolas, das lideranças e das pessoas que fazem a educação
                acontecer no Beiru/Tancredo Neves.
              </p>
            </div>
          </Reveal>

          {/* Cartaz como peça documental — inteiro e legível */}
          <Reveal className="md:col-span-6" delay={120}>
            <figure className="mx-auto max-w-md">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-brand/10">
                <Image
                  src={IMG.cartaz.src}
                  alt={IMG.cartaz.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-slate-500">
                Cartaz da oficina de apresentação — data, horário, local e
                instituições realizadoras.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ================= 4. DA ESCUTA AO PLANEJAMENTO ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          {/* Composição assimétrica de duas fotos */}
          <Reveal className="order-2 md:order-1 md:col-span-7">
            <div className="grid grid-cols-12 items-end gap-4">
              <figure className="group col-span-7">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                  <Image
                    src={IMG.planejamento.src}
                    alt={IMG.planejamento.alt}
                    fill
                    sizes="(max-width: 768px) 60vw, 34vw"
                    className="img-zoom object-cover"
                    style={{ objectPosition: "center 35%" }}
                  />
                </div>
                <figcaption className="mt-2 text-xs text-slate-500">
                  Reunião de planejamento com materiais impressos do
                  Observatório.
                </figcaption>
              </figure>
              <figure className="group col-span-5 mb-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                  <Image
                    src={IMG.empreendedora.src}
                    alt={IMG.empreendedora.alt}
                    fill
                    sizes="(max-width: 768px) 42vw, 24vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-slate-500">
                  Encontro de articulação e planejamento educacional.
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2 md:col-span-5" delay={100}>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              Da escuta ao planejamento
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Transformar informação em decisão
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-700">
              A escuta do território vira método: reunir dados, produzir
              diagnósticos e organizar as informações que apoiam decisões,
              políticas públicas e projetos sociais.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-slate-600">
              É aí que entram o planejamento técnico, a modelagem de governança
              e a articulação institucional — o trabalho de bastidor que
              sustenta o Observatório.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= 5. COMO O OBSERVATÓRIO SE ESTRUTURA ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3a66] via-brand-dark to-[#0e5091] p-8 text-white md:p-12">
            <RedeDados
              tone="white"
              className="pointer-events-none absolute -right-6 -top-6 w-64 opacity-50"
            />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                Como o Observatório se estrutura
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
                Seis frentes que sustentam o trabalho
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-sky-100/80">
                Da coleta de indicadores à transparência pública, cada frente
                conecta escolas, poder público, universidades e a comunidade.
              </p>

              <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {responsabilidades.map((item, i) => (
                  <li key={item} className="relative pl-12">
                    <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/40 bg-white/5 font-display text-sm text-sky-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`absolute left-[0.9rem] top-9 h-2 w-2 -translate-x-1/2 rounded-full ${
                        i % 2 === 0 ? "bg-[#35c4d4]" : "bg-amber-400"
                      }`}
                    />
                    {i < responsabilidades.length - 1 && (
                      <span className="absolute left-[0.9rem] top-11 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-white/25 to-transparent lg:block" />
                    )}
                    <p className="text-[15px] font-medium leading-relaxed text-sky-50">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= 6. MOBILIZAÇÃO E CONSTRUÇÃO COLETIVA ================= */}
      <section className="mx-auto max-w-6xl px-4 pt-20 md:pt-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              Mobilização e construção coletiva
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Um projeto que se constrói junto
            </h2>
            <figure className="group mt-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10">
                <Image
                  src={IMG.retrato.src}
                  alt={IMG.retrato.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="img-zoom object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-slate-500">
                Mobilização e articulação com participantes do território.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="md:col-span-7" delay={100}>
            <ol className="relative space-y-8">
              {registros.map((r, i) => (
                <li
                  key={r.titulo}
                  className={`relative pl-10 ${
                    i < registros.length - 1 ? "obs-connector pb-2" : ""
                  }`}
                >
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {r.titulo}
                  </h3>
                  <p className="mt-2 max-w-prose leading-relaxed text-slate-600">
                    {r.texto}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-xl bg-white/70 p-5 text-sm leading-relaxed text-slate-600 ring-1 ring-brand/10">
              Por estar <span className="font-medium text-brand">em andamento</span>
              , o Observatório segue em construção — cada oficina, reunião e
              escuta acrescenta uma camada ao trabalho no território.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= 7. ENCERRAMENTO ================= */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 md:pb-24 md:pt-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
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
                <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
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
                Um Observatório assim faz sentido para o seu território?
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
