import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Projeto } from "@/lib/projetos";

const IMG = {
  abertura: "/images/projetos/minas-urbano/mu-abertura.webp",
  unidade: "/images/projetos/minas-urbano/mu-unidade-movel.webp",
  equipe: "/images/projetos/minas-urbano/mu-equipe-tecnica.webp",
  breaking: "/images/projetos/minas-urbano/mu-breaking.webp",
  jovens: "/images/projetos/minas-urbano/mu-atividade-jovens.webp",
  cerimonia: "/images/projetos/minas-urbano/mu-cerimonia.webp",
};

function TracadoUrbano({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 210"
      fill="none"
      aria-hidden="true"
      className={`mu-route ${className}`}
    >
      <path d="M12 42H118V12M118 42H228V96H308" />
      <path d="M42 198V124H174V72H276V18" />
      <path d="M8 156H92V92H250V198" />
      <circle cx="118" cy="42" r="4" />
      <circle cx="228" cy="96" r="4" />
      <circle cx="92" cy="124" r="4" />
      <circle cx="174" cy="72" r="4" />
      <circle cx="250" cy="156" r="4" />
    </svg>
  );
}

function FotoEditorial({
  src,
  alt,
  legenda,
  sizes = "(max-width: 1024px) 100vw, 48vw",
  portrait = false,
  position = "center",
}: {
  src: string;
  alt: string;
  legenda: string;
  sizes?: string;
  portrait?: boolean;
  position?: string;
}) {
  return (
    <figure>
      <div
        className={`mu-photo relative overflow-hidden rounded-[1.75rem] bg-sky-50 ${
          portrait ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="mu-image object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
        {legenda}
      </figcaption>
    </figure>
  );
}

export default function MinasUrbanoProjeto({
  projeto,
  relacionado,
}: {
  projeto: Projeto;
  relacionado: Projeto | null;
}) {
  return (
    <article className="mu-page overflow-x-clip pb-8 md:pb-10">
      <header className="mu-hero relative overflow-hidden">
        <TracadoUrbano className="pointer-events-none absolute -right-8 top-8 hidden w-80 opacity-30 md:block" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 md:pb-18 md:pt-16">
          <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            <Reveal className="order-1 lg:col-span-5">
              <div className="mu-hero-panel flex h-full flex-col justify-between rounded-[1.75rem] p-7 text-white md:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-amber-300/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-200">
                      {projeto.status}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-sky-100/80">
                      {projeto.categorias.join(" · ")}
                    </span>
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                    Esporte urbano · espaço público
                  </p>
                  <h1 className="mt-3 font-display text-5xl leading-[0.98] md:text-6xl">
                    {projeto.titulo}
                  </h1>
                  <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-sky-50/90 md:text-base">
                    {projeto.resumo}
                  </p>
                </div>
                <p className="mt-9 border-l-2 border-amber-400 pl-5 font-display text-xl leading-snug text-white md:text-2xl">
                  {projeto.fraseDestaque}
                </p>
              </div>
            </Reveal>

            <Reveal className="order-2 lg:col-span-7" delay={100}>
              <figure>
                <div className="mu-photo relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-200">
                  <Image
                    src={IMG.abertura}
                    alt="Abertura de uma etapa do Minas Urbano em arena esportiva"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    style={{ objectPosition: "center 46%" }}
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-sky-950/65">
                  Abertura de etapa do programa em Minas Gerais.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal className="mt-6" delay={140}>
            <dl className="mu-facts grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-5">
              {[
                ["Período", projeto.periodo],
                ["Território", projeto.local],
                ["Área", projeto.area],
                ["Papel da Educatec", projeto.papel],
                ["Status", projeto.status],
              ].map(([rotulo, valor]) => (
                <div key={rotulo} className="bg-white/90 p-5 backdrop-blur-sm md:p-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                    {rotulo}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug text-ink">
                    {valor}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto mt-14 max-w-7xl px-4 md:mt-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-1 lg:order-2 lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Contexto e organização
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              A arena chega. A cidade entra em movimento.
            </h2>
            <div className="mu-copy mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>{projeto.contexto[0]}</p>
              <p>
                Ao reunir estruturas móveis e uma programação que circula por
                diferentes regiões, o programa leva a prática esportiva para
                perto de quem participa. Arenas, oficinas e demonstrações se
                complementam em uma experiência que combina movimento,
                orientação e presença nos espaços de convivência.
              </p>
              <p>{projeto.contexto[1]}</p>
              <p>
                A revitalização das quadras públicas amplia essa proposta: além
                das ações realizadas durante as etapas, permanece um espaço que
                pode continuar acolhendo a prática esportiva e a comunidade.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-2 lg:order-1 lg:col-span-6" delay={100}>
            <FotoEditorial
              src={IMG.unidade}
              alt="Unidade móvel identificada com a comunicação do Minas Urbano"
              legenda="Estrutura móvel utilizada na realização das ações do programa."
              position="center 52%"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-1 lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Quem faz acontecer
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Articulação técnica em cada etapa
            </h2>
            <div className="mu-copy mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>{projeto.contexto[2]}</p>
              <p>
                Nesse período inicial, a coordenação aproximou planejamento,
                parceiros e profissionais envolvidos na execução. A articulação
                técnica ajudou a organizar o acompanhamento das atividades e a
                conectar as responsabilidades previstas para o começo do
                programa.
              </p>
              <p>
                Essa participação possui um recorte preciso: refere-se aos três
                primeiros meses do Minas Urbano. A delimitação preserva com
                clareza o papel desenvolvido pelo professor Ney Campello e as
                parcerias que sustentaram essa etapa inicial.
              </p>
            </div>
            <div className="mu-callout mt-8 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Delimitação da atuação
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-brand-dark">
                Coordenação durante os três primeiros meses.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-2 lg:col-span-6" delay={100}>
            <div className="mx-auto max-w-[34rem] lg:mr-0">
              <FotoEditorial
                src={IMG.equipe}
                alt="Cinco profissionais reunidos diante de um muro azul-claro com vasos de plantas"
                legenda="Equipe técnica em uma das ações do programa."
                portrait
                position="center 48%"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-1 lg:order-2 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Modalidades e experiência urbana
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              Diferentes práticas, um mesmo espaço de encontro
            </h2>
            <div className="mu-copy mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>
                Skate, basquete 3x3, BMX, escalada e breaking compõem o universo
                esportivo apresentado pelo Minas Urbano. São modalidades que
                dialogam diretamente com a cidade e encontram nas arenas um
                ambiente preparado para aproximação, prática e demonstração.
              </p>
              <p>
                As oficinas e atividades educativas acrescentam orientação à
                experiência. Já as demonstrações tornam os movimentos e as
                possibilidades de cada modalidade mais próximos de crianças,
                adolescentes e comunidades que acompanham a programação.
              </p>
              <p>
                Assim, a arena itinerante não funciona apenas como cenário: ela
                organiza o encontro entre esporte e vida urbana, valorizando a
                ocupação ativa de praças, quadras e outros espaços públicos.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-2 lg:order-1 lg:col-span-7" delay={100}>
            <FotoEditorial
              src={IMG.breaking}
              alt="Atleta executa movimento de breaking em arena do Minas Urbano"
              legenda="Breaking: esporte urbano, cultura e formação em movimento."
              sizes="(max-width: 1024px) 100vw, 58vw"
              position="center 46%"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-1 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
              Participação e convivência
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              O esporte urbano perto de quem participa
            </h2>
            <div className="mu-copy mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <p>
                A programação aproxima crianças, adolescentes e comunidades de
                práticas esportivas que fazem parte da paisagem urbana. O
                contato com diferentes modalidades amplia as formas de entrar
                em movimento e de reconhecer os espaços públicos como lugares
                de participação.
              </p>
              <p>
                Oficinas, demonstrações e atividades educativas criam momentos
                complementares: observar, compreender e experimentar. Essa
                combinação reforça a dimensão formativa do programa sem separar
                a aprendizagem da vivência esportiva.
              </p>
              <p>
                Ao ocupar quadras e áreas de convivência com uma programação
                organizada, o Minas Urbano conecta esporte, comunidade e cidade
                em torno de uma experiência compartilhada.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-2 lg:col-span-7" delay={100}>
            <FotoEditorial
              src={IMG.jovens}
              alt="Jovens participam de atividade esportiva em uma etapa do Minas Urbano"
              legenda="Atividade com jovens em uma das etapas do programa."
              sizes="(max-width: 1024px) 100vw, 58vw"
              position="center 46%"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24">
        <div className="mu-final-panel relative overflow-hidden rounded-[2rem] p-6 md:p-10 lg:p-12">
          <TracadoUrbano className="pointer-events-none absolute -right-16 -top-8 w-96 opacity-10" />
          <div className="relative grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="order-2 lg:order-1 lg:col-span-5">
              <FotoEditorial
                src={IMG.cerimonia}
                alt="Participantes reunidos durante abertura de uma etapa do Minas Urbano"
                legenda="Participantes reunidos na abertura de uma etapa do programa."
                position="center 42%"
              />

              {projeto.resultados.map((resultado) => (
                <div key={resultado.legenda} className="mu-result mt-6 rounded-2xl p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    Resultado registrado
                  </p>
                  <div className="mt-4 flex items-end gap-4">
                    <p className="font-display text-5xl leading-none text-brand-dark md:text-6xl">
                      {resultado.numero}
                    </p>
                    <p className="max-w-[13rem] pb-1 text-sm font-semibold leading-snug text-slate-700">
                      {resultado.legenda}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="order-1 lg:order-2 lg:col-span-7" delay={80}>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-700">
                Coordenação, responsabilidades e legado
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Um trabalho inicial com escopo definido
              </h2>
              <div className="mu-copy mt-7 space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                <p>
                  A participação na coordenação concentrou-se no começo do
                  projeto e reuniu acompanhamento, articulação e organização das
                  etapas iniciais. O trabalho preservou a conexão entre o que
                  havia sido planejado e as responsabilidades compartilhadas
                  com os parceiros responsáveis pela realização.
                </p>
                <p>
                  Ao mesmo tempo, o programa associa a realização das atividades
                  a um legado concreto nos espaços públicos: a revitalização de
                  quadras amplia as condições para que esses locais permaneçam
                  vinculados à prática esportiva depois das ações itinerantes.
                </p>
              </div>

              <ol className="mt-8 grid gap-3 sm:grid-cols-3">
                {projeto.responsabilidades.map((item, index) => (
                  <li key={item} className="mu-responsibility rounded-2xl p-5">
                    <span className="font-display text-3xl text-amber-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-5 text-sm leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-brand/15 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  O que foi realizado
                </p>
                <ul className="mt-5 space-y-3">
                  {projeto.realizado.map((item) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-slate-700 md:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 grid gap-5 border-t border-brand/15 pt-7 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    Instituições relacionadas
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {projeto.instituicoes}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {relacionado && (
                    <Link
                      href={`/projetos/${relacionado.slug}`}
                      className="mu-related group rounded-2xl p-5 transition hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                        Projeto relacionado
                      </span>
                      <span className="mt-2 flex items-center justify-between gap-5 font-display text-xl text-brand-dark">
                        {relacionado.tituloCurto}
                        <span aria-hidden="true" className="text-amber-600">
                          →
                        </span>
                      </span>
                    </Link>
                  )}
                  <Link
                    href="/contato"
                    className="rounded-full bg-brand px-7 py-4 text-center font-semibold text-white transition hover:bg-brand-dark"
                  >
                    Converse com a Educatec
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </article>
  );
}
