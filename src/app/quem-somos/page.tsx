import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quem Somos | Educatec",
  description:
    "Conheça a Educatec: propósito, missão, visão, valores e método de trabalho.",
};

const valores = [
  "Compromisso com a educação pública e o desenvolvimento humano",
  "Planejamento com base em evidências",
  "Ética, transparência e responsabilidade institucional",
  "Inovação aplicada a problemas concretos",
  "Respeito à diversidade e aos territórios",
  "Integração entre educação, esporte e cultura",
  "Qualidade técnica e capacidade de execução",
  "Valorização do diálogo, da participação e da cooperação",
];

const publicos = [
  "Prefeituras e secretarias municipais",
  "Governos estaduais e órgãos federais",
  "Secretarias de Educação, Esporte e Cultura",
  "Escolas, faculdades, universidades e redes de ensino",
  "Associações comerciais e entidades empresariais",
  "Federações e associações esportivas",
  "Organizações sociais, fundações e institutos",
  "Empresas que necessitem de projetos, formação ou eventos",
];

const imagensEmpresa = [
  {
    src: "/images/eventos/forum-esportes-bahia-autoridades.jpg",
    alt: "Equipe e participantes reunidos em atividade institucional",
    legenda: "Articulação institucional e desenvolvimento do esporte",
    figureClass: "md:col-span-7",
    imageClass: "aspect-[16/10]",
  },
  {
    src: "/images/quem-somos/grupo-evento-profissional.webp",
    alt: "Grupo reunido em evento profissional",
    figureClass: "md:col-span-5",
    imageClass: "aspect-[5/4] md:aspect-auto md:h-full",
  },
  {
    src: "/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg",
    alt: "Atividade esportiva em arena de evento",
    legenda: "Produção de eventos esportivos e culturais",
    figureClass: "md:col-span-5",
    imageClass: "aspect-[4/3]",
  },
  {
    src: "/images/eventos/copa-feminina-arena-fonte-nova.png",
    alt: "Reunião técnica na Arena Fonte Nova",
    legenda: "Planejamento e articulação de grandes agendas",
    figureClass: "md:col-span-7",
    imageClass: "aspect-[16/9] md:aspect-auto md:h-full",
  },
  {
    src: "/images/quem-somos/cerimonia-reconhecimento.webp",
    alt: "Cerimônia institucional de reconhecimento e celebração",
    figureClass: "md:col-span-12",
    imageClass: "aspect-[16/7]",
    objectClass: "object-[center_32%]",
  },
];

export default function QuemSomos() {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f5faff_0%,#ffffff_28%,#eef7fc_66%,#ffffff_100%)]">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-sky-300/55"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M97 20 C92 90 98 155 94 225 S98 360 93 445 S98 590 94 690 S98 845 92 980"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-6 lg:block">
              <h1 className="font-display text-4xl text-slate-900 md:text-5xl">
                Quem Somos
              </h1>
              <Image
                src="/images/logo-educatec.png"
                alt="Educatec — Soluções em Educação"
                width={378}
                height={252}
                className="h-20 w-auto lg:mt-5"
              />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A Educatec é uma empresa de planejamento, gestão e consultoria
              que, desde 2007, desenvolve soluções para governos, instituições
              de ensino, organizações sociais, entidades empresariais e
              parceiros privados. Sua atuação abrange a concepção, a
              estruturação, a execução, o monitoramento e a prestação de contas
              de projetos nas áreas de educação, esporte, cultura, formação
              profissional, desenvolvimento institucional e eventos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A empresa combina experiência em gestão pública, planejamento
              educacional, articulação de redes, produção de eventos e formação
              de lideranças. Sua atuação vai além da organização de eventos: a
              Educatec compreende problemas complexos, cria modelos de atuação,
              integra instituições e transforma propostas em soluções completas
              e executáveis. Os projetos são desenvolvidos em cooperação com
              órgãos públicos, instituições de ensino, confederações,
              federações, institutos e empresas especializadas, sempre com
              responsabilidades e vínculos institucionais apresentados com
              clareza.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem_2rem_2rem_0] bg-brand-dark shadow-[0_24px_70px_rgba(15,63,101,0.18)] md:min-h-[610px]">
            <Image
              src="/images/quem-somos/grupo-evento-colaborativo.webp"
              alt="Grupo diverso reunido em evento colaborativo da Educatec"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-sky-950/5" />
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Educatec em ação
              </p>
              <h2 className="mt-2 max-w-3xl font-display text-3xl text-slate-900 md:text-4xl">
                Soluções completas em educação, gestão, esporte, cultura e
                eventos
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Cada imagem registra uma frente de trabalho: articulação,
              planejamento, formação e produção de projetos.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-12">
            {imagensEmpresa.map((imagem) => (
              <figure
                key={imagem.src}
                className={`group flex flex-col ${imagem.figureClass}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[1.5rem_1.5rem_1.5rem_0] bg-slate-100 ${imagem.imageClass}`}
                >
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={`img-zoom object-cover ${imagem.objectClass ?? "object-center"}`}
                  />
                </div>
                {imagem.legenda ? (
                  <figcaption className="mt-2 text-xs leading-relaxed text-slate-500">
                    {imagem.legenda}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem_1.75rem_1.75rem_0] bg-white/85 p-7 shadow-[0_18px_45px_rgba(15,63,101,0.08)] ring-1 ring-sky-100">
            <h2 className="text-xl font-bold text-brand-dark">Propósito</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Transformar necessidades públicas e institucionais em projetos
              estruturados, executáveis e socialmente relevantes, utilizando
              educação, esporte, cultura e gestão como instrumentos de
              desenvolvimento humano e territorial.
            </p>
          </div>
          <div className="rounded-[1.75rem_1.75rem_1.75rem_0] bg-brand-light/70 p-7 shadow-[0_18px_45px_rgba(15,63,101,0.08)] ring-1 ring-white/70">
            <h2 className="text-xl font-bold text-brand-dark">Missão</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Promover educação, esporte e cultura como dimensões integradas do
              desenvolvimento, oferecendo planejamento, consultoria, formação e
              execução de projetos capazes de gerar autonomia, desenvolvimento
              sustentável e formação integral.
            </p>
          </div>
          <div className="rounded-[1.75rem_1.75rem_1.75rem_0] bg-white/85 p-7 shadow-[0_18px_45px_rgba(15,63,101,0.08)] ring-1 ring-sky-100">
            <h2 className="text-xl font-bold text-brand-dark">Visão</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Consolidar-se como uma das principais referências da Bahia em
              consultoria educacional, planejamento institucional e produção de
              eventos esportivos e culturais.
            </p>
          </div>
        </section>

        <section className="mt-20 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-display text-3xl text-slate-900">Valores</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {valores.map((v) => (
                <li key={v} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 text-brand">✔</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem_2rem_0_2rem] bg-slate-100 shadow-[0_24px_65px_rgba(15,63,101,0.14)]">
            <Image
              src="/images/quem-somos/mural-aureo-filho.webp"
              alt="Equipe reunida diante do mural colorido de Áureo Filho"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        <section className="mt-20 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem_0_2rem_2rem] bg-slate-100 shadow-[0_24px_65px_rgba(15,63,101,0.14)]">
            <Image
              src="/images/quem-somos/rota-literaria-poesia.webp"
              alt="Apresentação da Rota Literária para estudantes"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-slate-900">
              Para quem trabalhamos
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {publicos.map((p) => (
                <li
                  key={p}
                  className="rounded-full bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm ring-1 ring-sky-100"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
