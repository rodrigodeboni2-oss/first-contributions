import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ney Campello | Educatec",
  description: "Conheça Ney Jorge Campello: professor, gestor público, consultor, escritor e fundador da Educatec.",
};

const trajetoria = [
  ["1983–1988", "Vereador de Salvador", "Eleito em 1982 como o vereador mais jovem entre as capitais brasileiras"],
  ["1995–2006", "Subsecretário de Educação e Cultura de Salvador", "Em diferentes períodos"],
  ["2006–2007", "Secretário de Educação e Cultura de Salvador", "Premiado 2 anos consecutivos como Personalidade Educacional na Bahia"],
  ["2009–2014", "Secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014", "Governo do Estado da Bahia"],
  ["2015", "Secretário de Ações Estratégicas", "Prefeitura de Lauro de Freitas"],
  ["2017", "Vice-Presidente Nacional de Agências e Varejo", "Empresa Brasileira de Correios e Telégrafos"],
  ["2017–2019", "Superintendente de Educação Básica", "Secretaria da Educação do Estado da Bahia"],
  ["Atualmente", "Diretor-Geral da Universidade Aberta", "Associação Comercial da Bahia"],
] as const;

const formacao = [
  "Mestre em Administração Profissional — UFBA (2000)",
  "Bacharel em Direito — UFBA (1992)",
  "Estudos de doutoramento em Administração Pública na Universidad Complutense de Madrid — Diploma de Estudios Avanzados (2003)",
  "Graduando em Filosofia — Centro Universitário Internacional Uninter",
];

function Foto({ src, alt, legenda, className, imageClassName = "object-cover", sizes }: { src: string; alt: string; legenda: string; className: string; imageClassName?: string; sizes: string }) {
  return (
    <figure className="group">
      <div className={`relative overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10 ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className={`img-zoom ${imageClassName}`} />
      </div>
      <figcaption className="mt-2 text-xs text-slate-500">{legenda}</figcaption>
    </figure>
  );
}

export default function NeyCampello() {
  return (
    <div className="ney-page overflow-x-clip">
      <header className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">Líder empresarial</p>
            <h1 className="mt-2 font-display text-4xl text-white md:text-6xl">Ney Jorge Campello</h1>
            <p className="mt-3 text-lg text-sky-100/90">Professor, gestor público, consultor, escritor e poeta</p>
            <p className="mt-6 max-w-prose leading-relaxed text-sky-50/95">Da Ribeira para a vida pública, da sala de aula para a gestão de grandes projetos, Ney Jorge Campello construiu uma trajetória guiada pela convicção de que educação, cultura e esporte transformam pessoas e territórios. Reuniu décadas de experiência em redes educacionais, planejamento, formação e articulação institucional.</p>
            <p className="mt-4 max-w-prose leading-relaxed text-sky-100/80">Desde 2007, a Educatec transforma essa experiência em planejamento, consultoria e projetos estruturados. Hoje, Ney Campello é diretor-geral da Universidade Aberta da Associação Comercial da Bahia e atua na articulação de projetos com governos, universidades e entidades esportivas.</p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <figure className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_28px_70px_rgba(4,31,57,0.35)] ring-1 ring-white/15 md:aspect-[3/4]">
                <Image src="/images/ney-campello/ney-campello-retrato-principal.jpg" alt="Ney Jorge Campello falando ao microfone em reunião institucional" fill priority sizes="(max-width: 768px) 100vw, 40vw" className="img-zoom object-cover object-[center_30%]" />
              </div>
              <figcaption className="mt-2.5 text-xs text-sky-100/70">Ney Campello em reunião institucional.</figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl text-ink md:text-4xl">Trajetória</h2>
            <div className="mt-8 space-y-0">
              {trajetoria.map(([periodo, cargo, detalhe], index) => (
                <div key={cargo} className="relative flex gap-6 pb-8">
                  <div className="flex flex-col items-center"><span className="z-10 h-4 w-4 rounded-full border-4 border-brand bg-white" />{index < trajetoria.length - 1 && <span className="w-0.5 flex-1 bg-brand/20" />}</div>
                  <div className="-mt-1"><p className="text-sm font-bold uppercase tracking-wide text-brand">{periodo}</p><p className="font-semibold text-slate-900">{cargo}</p><p className="text-sm text-slate-600">{detalhe}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={100}>
            <figure className="group lg:sticky lg:top-28">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-md ring-1 ring-brand/10"><Image src="/images/ney-campello/ney-campello-trajetoria-publica.png" alt="Ney Campello discursando ao púlpito, com as bandeiras do Brasil e da Bahia" fill sizes="(max-width: 1024px) 100vw, 40vw" className="img-zoom object-cover object-left" /></div>
              <figcaption className="mt-2.5 text-xs text-slate-500">Registro da trajetória pública — décadas dedicadas à educação, ao esporte e à cultura.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
        <Reveal>
          <div className="ney-copa rounded-[2rem] p-6 md:p-12">
            <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full bg-brand-light/70 px-5 py-2"><span className="text-xs font-bold uppercase tracking-wide text-brand">2009–2014</span><span className="text-xs text-slate-600">Secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014 · Governo do Estado da Bahia</span></div>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight text-ink md:text-5xl">A Bahia na Copa do Mundo FIFA 2014</h2>
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="space-y-5 text-[15px] leading-relaxed text-slate-700 md:text-base lg:col-span-7">
                <p>Entre 2009 e 2014, Ney Campello exerceu o cargo de Secretário de Estado para os Assuntos da Copa do Mundo FIFA 2014 na Bahia. À frente da Secopa, participou da coordenação estratégica da preparação do estado para receber um dos maiores eventos esportivos do mundo.</p>
                <p>Sua atuação envolveu a articulação entre Governo do Estado, Prefeitura de Salvador, Governo Federal, FIFA, Comitê Organizador Local e diferentes áreas da administração pública. O trabalho integrou planejamento, acompanhamento de prazos, preparação da Arena Fonte Nova, mobilidade, segurança, turismo, qualificação profissional, comunicação e organização da operação durante o Mundial.</p>
                <p>Mais do que um evento esportivo, Ney Campello defendia a Copa como uma oportunidade de desenvolvimento, modernização da infraestrutura, capacitação de pessoas e projeção internacional da Bahia.</p>
              </div>
              <Reveal className="lg:col-span-5" delay={100}><Foto src="/images/ney-campello/copa/copa-gramado-fonte-nova.webp" alt="Ney Campello com autoridades no gramado da Arena Fonte Nova" legenda="Agenda institucional no gramado da Arena Fonte Nova." className="aspect-[4/3]" sizes="(max-width: 1024px) 100vw, 40vw" /></Reveal>
            </div>
            <blockquote className="mx-auto mt-10 max-w-3xl border-l-2 border-amber-400 pl-6 font-display text-2xl leading-snug text-brand-dark md:text-3xl">“Temos que ver a Copa como um veículo de transformação da realidade social, política e econômica do país.”</blockquote>
            <Reveal className="mt-10"><Foto src="/images/ney-campello/copa/copa-intercambio-internacional.webp" alt="Ney Campello em visita ao centro de treinamento da seleção alemã durante a Copa do Mundo FIFA 2014" legenda="Intercâmbio internacional durante a Copa do Mundo FIFA 2014." className="aspect-[16/9] md:aspect-[21/9]" sizes="(max-width: 768px) 100vw, 1100px" /></Reveal>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <Reveal className="order-2 grid grid-cols-2 gap-4 lg:order-1 lg:col-span-7">
                <Foto src="/images/ney-campello/copa/copa-visita-tecnica-capacetes.webp" alt="Visita técnica às obras da Arena Fonte Nova, com participantes de capacete" legenda="Visita técnica às obras da Arena Fonte Nova." className="aspect-[4/3]" sizes="(max-width: 1024px) 50vw, 28vw" />
                <Foto src="/images/ney-campello/copa/copa-maquete-arena.webp" alt="Apresentação da maquete da nova Arena Fonte Nova em agenda institucional" legenda="Apresentação da maquete da nova Arena Fonte Nova." className="aspect-[4/3]" imageClassName="object-cover object-[center_35%]" sizes="(max-width: 1024px) 50vw, 28vw" />
              </Reveal>
              <Reveal className="order-1 lg:order-2 lg:col-span-5" delay={80}><p className="max-w-prose text-[15px] leading-relaxed text-slate-600 md:text-base">Durante sua gestão, acompanhou o processo de preparação da nova Arena Fonte Nova, participou de reuniões institucionais, visitas técnicas e intercâmbios internacionais e coordenou a integração entre os órgãos envolvidos na realização do evento.</p></Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal><h2 className="font-display text-3xl text-ink md:text-4xl">Formação acadêmica</h2><ul className="mt-6 space-y-3">{formacao.map((item) => <li key={item} className="flex items-start gap-3 text-slate-700"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{item}</li>)}</ul></Reveal>
          <Reveal delay={100}><div className="rounded-3xl bg-white/85 p-8 shadow-sm ring-1 ring-brand/10"><h2 className="font-display text-3xl text-ink md:text-4xl">O educador poeta</h2><p className="mt-4 leading-relaxed text-slate-700">Depois dos 60 anos, publicou seu primeiro livro de poemas, <strong>Tricô</strong>, premiado por uma academia literária paulista. É membro titular da Academia de Letras e Ciências do Grande Oriente do Brasil — Bahia e da Academia Baiana de Cultura.</p><blockquote className="mt-6 border-l-4 border-amber-400 pl-4 font-display text-xl italic leading-snug text-brand-dark">“Importa tecer, não importa quando.”</blockquote></div></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-24 md:pt-24">
        <Reveal><h2 className="font-display text-3xl text-white md:text-4xl">Entrevistas e presença na mídia</h2></Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Reveal><a href="https://letsgobahia.com.br/noticia/business/da-educacao-e-da-poesia-trilha-que-escolhi" target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transform-none"><div className="relative aspect-[16/9] overflow-hidden"><Image src="/images/ney-campello/a-via-educacao-poesia.webp" alt="Capa do artigo A Via da Educação e da Poesia: a Trilha que Escolhi, por Ney Campello" fill sizes="(max-width: 768px) 100vw, 50vw" className="img-zoom object-cover object-[center_18%]" /></div><div className="flex flex-1 flex-col p-7"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Let&apos;s Go Bahia · Perfil autobiográfico</p><h3 className="mt-3 font-display text-2xl leading-snug text-slate-900">A Via da Educação e da Poesia: a Trilha que Escolhi</h3><p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">Ney Campello percorre sua formação na educação pública, a entrada na vida política, a experiência em gestão e sua relação com a literatura e a poesia.</p><span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">Ler na Let&apos;s Go Bahia <span className="transition-transform duration-200 group-hover:translate-x-1">→</span></span></div></a></Reveal>
          <Reveal delay={100}><a href="https://globoplay.globo.com/v/7213204/" target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transform-none"><div className="relative aspect-[16/9] overflow-hidden"><Image src="/images/ney-campello/ney-campello-entrevista-tv.png" alt="Ney Campello em entrevista ao Jornal da Manhã, em estúdio de televisão" fill sizes="(max-width: 768px) 100vw, 50vw" className="img-zoom object-cover" /></div><div className="flex flex-1 flex-col p-7"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Jornal da Manhã · Entrevista em TV</p><h3 className="mt-3 font-display text-2xl leading-snug text-slate-900">Entrevista ao Jornal da Manhã sobre o ordenamento da rede estadual</h3><p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">Na condição de superintendente da educação, Ney Campello participou do Jornal da Manhã para explicar o processo de ordenamento da rede estadual e a desativação de prédios onde funcionavam algumas unidades escolares.</p><span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand">Assistir no Globoplay <span className="transition-transform duration-200 group-hover:translate-x-1">→</span></span></div></a></Reveal>
        </div>
        <Reveal className="mt-12"><div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-8 shadow-lg md:flex-row md:items-center md:p-10"><div><h2 className="font-display text-2xl text-ink md:text-3xl">Experiência a serviço do seu projeto</h2><p className="mt-2 max-w-prose text-slate-600">A trajetória de Ney Campello e a experiência da Educatec contribuem para transformar ideias em projetos estruturados e executáveis.</p></div><a href="https://wa.me/5571999816999" className="shrink-0 rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark">Fale com a Educatec</a></div></Reveal>
      </section>
    </div>
  );
}
