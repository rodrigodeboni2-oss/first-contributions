import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ney Campello | Educatec",
  description:
    "Conheça Ney Jorge Campello: professor, gestor público, consultor, escritor e fundador da Educatec.",
};

const trajetoria = [
  {
    periodo: "1983–1988",
    cargo: "Vereador de Salvador",
    detalhe: "Eleito em 1982 como o vereador mais jovem entre as capitais brasileiras",
  },
  {
    periodo: "1995–2006",
    cargo: "Subsecretário de Educação e Cultura de Salvador",
    detalhe: "Em diferentes períodos",
  },
  {
    periodo: "2006–2007",
    cargo: "Secretário de Educação e Cultura de Salvador",
    detalhe: "Premiado 2 anos consecutivos como Personalidade Educacional na Bahia",
  },
  {
    periodo: "2009–2014",
    cargo: "Secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014",
    detalhe: "Governo do Estado da Bahia",
  },
  {
    periodo: "2015",
    cargo: "Secretário de Ações Estratégicas",
    detalhe: "Prefeitura de Lauro de Freitas",
  },
  {
    periodo: "2017",
    cargo: "Vice-Presidente Nacional de Agências e Varejo",
    detalhe: "Empresa Brasileira de Correios e Telégrafos",
  },
  {
    periodo: "2017–2019",
    cargo: "Superintendente de Educação Básica",
    detalhe: "Secretaria da Educação do Estado da Bahia",
  },
  {
    periodo: "Atualmente",
    cargo: "Diretor-Geral da Universidade Aberta",
    detalhe: "Associação Comercial da Bahia",
  },
];

const formacao = [
  "Mestre em Administração Profissional — UFBA (2000)",
  "Bacharel em Direito — UFBA (1992)",
  "Estudos de doutoramento em Administração Pública na Universidad Complutense de Madrid — Diploma de Estudios Avanzados (2003)",
  "Graduando em Filosofia — Centro Universitário Internacional Uninter",
];

const galeria = [
  {
    src: "/images/ney-campello/ney-campello-retrato-principal.jpg",
    alt: "Ney Campello falando ao microfone em reunião institucional",
  },
  {
    src: "/images/ney-campello/ney-campello-reuniao-institucional.jpg",
    alt: "Ney Campello em reunião de trabalho institucional",
  },
  {
    src: "/images/ney-campello/ney-campello-reuniao-tecnica-com-equipe.jpg",
    alt: "Ney Campello em reunião técnica",
  },
  {
    src: "/images/ney-campello/ney-campello-reuniao-ampliada.jpg",
    alt: "Reunião ampliada com a participação de Ney Campello",
  },
  {
    src: "/images/ney-campello/ney-campello-entrevista-tv.png",
    alt: "Ney Campello em entrevista em estúdio de televisão",
  },
  {
    src: "/images/ney-campello/ney-campello-trajetoria-publica.png",
    alt: "Registro histórico da trajetória pública de Ney Campello",
  },
];

export default function NeyCampello() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      {/* Hero */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Fundador e liderança
          </p>
          <h1 className="mt-2 font-display text-4xl text-slate-900 md:text-5xl">
            Ney Jorge Campello
          </h1>
          <p className="mt-2 text-lg text-slate-500">
            Professor, gestor público, consultor, escritor e poeta
          </p>
          <p className="mt-6 leading-relaxed text-slate-700">
            Da Ribeira para a vida pública, da sala de aula para a gestão de
            grandes projetos, Ney Jorge Campello construiu uma trajetória
            guiada pela convicção de que educação, cultura e esporte
            transformam pessoas e territórios. Professor, consultor, gestor
            público, escritor e poeta, reuniu décadas de experiência em redes
            educacionais, planejamento, formação e articulação institucional.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            A Educatec nasce dessa trajetória: uma empresa criada para colocar
            conhecimento, experiência e capacidade de execução a serviço de
            governos, instituições e comunidades.
          </p>
        </div>
        <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-lg md:h-96">
          <Image
            src="/images/ney-campello/ney-campello-retrato-principal.jpg"
            alt="Ney Jorge Campello falando ao microfone em reunião institucional"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Trajetória */}
      <div className="mt-20 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl text-slate-900">Trajetória</h2>
          <div className="mt-8 space-y-0">
            {trajetoria.map((t, i) => (
              <div key={t.cargo} className="relative flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <span className="z-10 h-4 w-4 rounded-full border-4 border-brand bg-white" />
                  {i < trajetoria.length - 1 && (
                    <span className="w-0.5 flex-1 bg-slate-200" />
                  )}
                </div>
                <div className="-mt-1">
                  <p className="text-sm font-bold uppercase tracking-wide text-brand">
                    {t.periodo}
                  </p>
                  <p className="font-semibold text-slate-900">{t.cargo}</p>
                  <p className="text-sm text-slate-600">{t.detalhe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/ney-campello/ney-campello-trajetoria-publica.png"
              alt="Registro histórico da trajetória pública de Ney Campello"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm italic text-slate-500">
            Décadas de vida pública dedicadas à educação, ao esporte e à
            cultura.
          </p>
          <div className="relative h-64 overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/ney-campello/ney-campello-reuniao-institucional.jpg"
              alt="Ney Campello em reunião de trabalho institucional"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Atuação institucional */}
      <h2 className="mt-16 font-display text-3xl text-slate-900">
        Atuação institucional
      </h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
        Da direção da Universidade Aberta da Associação Comercial da Bahia à
        articulação de projetos com governos, universidades e entidades
        esportivas, Ney Campello atua na construção de pontes entre
        instituições — sempre com a educação como eixo central.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/ney-campello/ney-campello-reuniao-ampliada.jpg"
            alt="Reunião ampliada com a participação de Ney Campello"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/ney-campello/ney-campello-reuniao-tecnica-com-equipe.jpg"
            alt="Ney Campello em reunião técnica"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Entrevistas e presença na mídia */}
      <h2 className="mt-16 font-display text-3xl text-slate-900 md:text-4xl">
        Entrevistas e presença na mídia
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Cartão 1 — Let's Go Bahia */}
        <a
          href="https://letsgobahia.com.br/noticia/business/da-educacao-e-da-poesia-trilha-que-escolhi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 transition-colors duration-200 hover:border-brand"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/ney-campello/ney-campello-reuniao-ampliada.jpg"
              alt="Ney Campello em pose reflexiva"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="img-zoom object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Let&apos;s Go Bahia · Perfil autobiográfico
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-slate-900">
              A Via da Educação e da Poesia: a Trilha que Escolhi
            </h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
              Ney Campello percorre sua formação na educação pública, a entrada
              na vida política, a experiência em gestão e sua relação com a
              literatura e a poesia.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">
              Ler na Let&apos;s Go Bahia
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </a>

        {/* Cartão 2 — Jornal da Manhã / Globoplay */}
        <a
          href="https://globoplay.globo.com/v/7213204/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 transition-colors duration-200 hover:border-brand"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/ney-campello/ney-campello-entrevista-tv.png"
              alt="Ney Campello em entrevista ao Jornal da Manhã, em estúdio de televisão"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="img-zoom object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Jornal da Manhã · Entrevista em TV
            </p>
            <h3 className="mt-3 font-display text-2xl leading-snug text-slate-900">
              Entrevista ao Jornal da Manhã sobre o ordenamento da rede
              estadual
            </h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
              Na condição de superintendente da educação, Ney Campello
              participou do Jornal da Manhã para explicar o processo de
              ordenamento da rede estadual e a desativação de prédios onde
              funcionavam algumas unidades escolares.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">
              Assistir no Globoplay
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </a>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {/* Formação */}
        <div>
          <h2 className="font-display text-3xl text-slate-900">
            Formação acadêmica
          </h2>
          <ul className="mt-6 space-y-3">
            {formacao.map((f) => (
              <li key={f} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 text-brand">🎓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Escritor */}
        <div className="rounded-3xl bg-brand-light/70 p-8">
          <h2 className="font-display text-3xl text-slate-900">
            O educador poeta
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Depois dos 60 anos, publicou seu primeiro livro de poemas,{" "}
            <strong>Tricô</strong>, premiado por uma academia literária
            paulista. É membro titular da Academia de Letras e Ciências do
            Grande Oriente do Brasil — Bahia e da Academia Baiana de Cultura.
          </p>
          <blockquote className="mt-6 border-l-4 border-brand pl-4 text-lg italic text-slate-700">
            “Importa tecer, não importa quando.”
          </blockquote>
        </div>
      </div>

      {/* Galeria */}
      <h2 className="mt-16 font-display text-3xl text-slate-900">Galeria</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {galeria.map((img) => (
          <div
            key={img.src}
            className="relative h-52 overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-slate-200 p-10 text-center md:flex-row md:text-left">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/ney-campello/ney-campello-reuniao-ampliada.jpg"
            alt="Ney Campello em pose reflexiva"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl text-slate-900">
            Experiência a serviço do seu projeto
          </h2>
          <p className="mt-2 text-slate-600">
            A trajetória de Ney Campello e a equipe da Educatec estão prontas
            para transformar a sua ideia em um projeto estruturado e bem
            executado.
          </p>
          <a
            href="https://wa.me/5571999816999"
            className="mt-4 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            Fale com a Educatec
          </a>
        </div>
      </div>
    </div>
  );
}
