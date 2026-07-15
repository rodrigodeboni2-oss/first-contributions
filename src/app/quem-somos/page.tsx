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
  },
  {
    src: "/images/eventos/minas-urbano-unidade-movel.png",
    alt: "Unidade móvel de ação esportiva e educacional",
    legenda: "Estrutura itinerante para ações nos territórios",
  },
  {
    src: "/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg",
    alt: "Atividade esportiva em arena de evento",
    legenda: "Produção de eventos esportivos e culturais",
  },
  {
    src: "/images/eventos/copa-feminina-arena-fonte-nova.png",
    alt: "Reunião técnica na Arena Fonte Nova",
    legenda: "Planejamento e articulação de grandes agendas",
  },
];

export default function QuemSomos() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h1 className="font-display text-4xl text-slate-900 md:text-5xl">Quem Somos</h1>
        <Image
          src="/images/logo-educatec.png"
          alt="Educatec — Soluções em Educação"
          width={378}
          height={252}
          className="h-20 w-auto"
        />
      </div>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
        A Educatec é uma empresa de planejamento, gestão e consultoria que,
        desde 2007, desenvolve soluções para governos, instituições de ensino,
        organizações sociais, entidades empresariais e parceiros privados. Sua
        atuação abrange a concepção, a estruturação, a execução, o monitoramento
        e a prestação de contas de projetos nas áreas de educação, esporte,
        cultura, formação profissional, desenvolvimento institucional e
        eventos.
      </p>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
        A empresa combina experiência em gestão pública, planejamento
        educacional, articulação de redes, produção de eventos e formação de
        lideranças. Sua atuação vai além da organização de eventos: a Educatec
        compreende problemas complexos, cria modelos de atuação, integra
        instituições e transforma propostas em soluções completas e
        executáveis. Os projetos são desenvolvidos em cooperação com órgãos
        públicos, instituições de ensino, confederações, federações, institutos
        e empresas especializadas, sempre com responsabilidades e vínculos
        institucionais apresentados com clareza.
      </p>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Educatec em ação
            </p>
            <h2 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">
              Soluções completas em educação, gestão, esporte, cultura e eventos
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500">
            Cada imagem registra uma frente de trabalho: articulação,
            planejamento, formação e produção de projetos.
          </p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imagensEmpresa.map((imagem) => (
            <figure key={imagem.src} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="img-zoom object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs leading-relaxed text-slate-500">
                {imagem.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-brand-light/70 p-7">
          <h2 className="text-xl font-bold text-brand-dark">Propósito</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Transformar necessidades públicas e institucionais em projetos
            estruturados, executáveis e socialmente relevantes, utilizando
            educação, esporte, cultura e gestão como instrumentos de
            desenvolvimento humano e territorial.
          </p>
        </div>
        <div className="rounded-2xl bg-brand-light/70 p-7">
          <h2 className="text-xl font-bold text-brand-dark">Missão</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Promover educação, esporte e cultura como dimensões integradas do
            desenvolvimento, oferecendo planejamento, consultoria, formação e
            execução de projetos capazes de gerar autonomia, desenvolvimento
            sustentável e formação integral.
          </p>
        </div>
        <div className="rounded-2xl bg-brand-light/70 p-7">
          <h2 className="text-xl font-bold text-brand-dark">Visão</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Consolidar-se como uma das principais referências da Bahia em
            consultoria educacional, planejamento institucional e produção de
            eventos esportivos e culturais.
          </p>
        </div>
      </div>

      <h2 className="mt-16 font-display text-3xl text-slate-900">Valores</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {valores.map((v) => (
          <li key={v} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 text-brand">✔</span>
            {v}
          </li>
        ))}
      </ul>

      <h2 className="mt-16 font-display text-3xl text-slate-900">
        Para quem trabalhamos
      </h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {publicos.map((p) => (
          <li
            key={p}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
