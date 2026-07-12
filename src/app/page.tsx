import Image from "next/image";
import Link from "next/link";

const areas = [
  {
    title: "Consultoria Educacional",
    desc: "Planos municipais de educação, diagnósticos, observatórios e monitoramento de indicadores.",
    icon: "📚",
  },
  {
    title: "Gestão e Desenvolvimento Institucional",
    desc: "Reestruturação organizacional, governança e articulação entre governos, universidades e escolas.",
    icon: "🏛️",
  },
  {
    title: "Formação e Desenvolvimento",
    desc: "Formação de gestores e conselheiros, cursos, oficinas, conferências e palestras.",
    icon: "🎓",
  },
  {
    title: "Eventos Esportivos, Culturais e Educacionais",
    desc: "Da concepção à execução: circuitos, clínicas, arenas, fóruns e congressos, com prestação de contas.",
    icon: "🏅",
  },
];

const projetos = [
  {
    titulo: "II Verão Costa a Costa",
    resumo:
      "Organização e produção das etapas do circuito esportivo e cultural em 6 cidades do litoral baiano — quase 25 mil participantes.",
    imagem: "https://educatec-jvvgqsglz-myselfandi1.vercel.app/images/eventos/verao-costa-a-costa-volei-praia.jpg",
    href: "/projetos/verao-costa-a-costa",
  },
  {
    titulo: "Minas Urbano",
    resumo:
      "Produção de eventos e ativações do maior programa de esportes urbanos do país, previsto para 48 municípios de Minas Gerais.",
    imagem: "https://educatec-jvvgqsglz-myselfandi1.vercel.app/images/eventos/minas-urbano-abertura.png",
    href: "/projetos/minas-urbano",
  },
  {
    titulo: "Tour Bahia — Esporte Educacional",
    resumo:
      "Organização das etapas que levaram basquete 3x3 e clínicas esportivas a 6.688 estudantes em 4 municípios baianos.",
    imagem: null,
    href: "/projetos/tour-bahia",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-brand to-brand-light/40 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-20 md:flex-row md:py-28">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-200">
              Educatec — Soluções em Educação · desde 2007
            </p>
            <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Experiência que planeja. Gestão que transforma. Projetos que
              acontecem.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky-100">
              A Educatec desenvolve soluções completas em educação, gestão,
              esporte, cultura e eventos para governos, instituições e
              organizações. Da concepção à execução, unimos planejamento,
              conhecimento técnico e experiência pública para transformar
              desafios em resultados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projetos"
                className="rounded-full bg-white px-6 py-3 font-semibold text-brand transition hover:bg-sky-100"
              >
                Veja nossos projetos
              </Link>
              <Link
                href="/contato"
                className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Solicite uma proposta
              </Link>
            </div>
          </div>
          <div className="hidden shrink-0 rounded-3xl bg-white p-10 shadow-2xl md:block">
            <Image
              src="/images/logo-educatec.png"
              alt="Educatec — Soluções em Educação"
              width={378}
              height={252}
              className="h-44 w-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl text-slate-900 md:text-4xl">
          Áreas de atuação
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Atuamos do diagnóstico à entrega: identificamos problemas, concebemos
          projetos, executamos ações e prestamos contas.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl">{area.icon}</div>
              <h3 className="mt-4 font-semibold text-slate-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/servicos"
            className="font-semibold text-brand hover:underline"
          >
            Conheça todos os serviços →
          </Link>
        </div>
      </section>

      {/* Copa do Mundo Feminina FIFA 2027 */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid overflow-hidden rounded-3xl bg-slate-900 md:grid-cols-2">
          <div className="relative min-h-64">
            <Image
              src="https://educatec-jvvgqsglz-myselfandi1.vercel.app/images/eventos/copa-feminina-contagem-regressiva-dique-tororo.png"
              alt="Evento de contagem regressiva de 1 ano para a Copa do Mundo Feminina FIFA 2027, em Salvador, com a campanha As Mulheres Mudam o Jogo"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
              Rumo a 2027
            </p>
            <h2 className="mt-2 font-display text-3xl">
              Copa do Mundo Feminina FIFA 2027
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              O Brasil sediará a Copa do Mundo Feminina FIFA 2027 — e Salvador
              está entre as cidades-sede, com jogos na Arena Fonte Nova. A
              Educatec participa da agenda de preparação e mobilização na
              Bahia, com a experiência de quem esteve à frente da Secretaria de
              Estado para a Copa do Mundo FIFA 2014.
            </p>
            <Link
              href="/projetos/copa-feminina-2027"
              className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-2.5 font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="bg-brand-light/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center font-display text-3xl text-slate-900 md:text-4xl">
            Projetos em destaque
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Eventos e programas que movimentaram milhares de pessoas na Bahia e
            em Minas Gerais.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projetos.map((p) => (
              <Link
                key={p.titulo}
                href={p.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {p.imagem ? (
                    <Image
                      src={p.imagem}
                      alt={p.titulo}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-dark to-brand-light text-6xl">
                      🏀
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900">{p.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.resumo}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projetos"
              className="font-semibold text-brand hover:underline"
            >
              Ver o portfólio completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl shadow-md md:w-96">
            <Image
              src="https://educatec-jvvgqsglz-myselfandi1.vercel.app/images/ney-campello/ney-campello-retrato-principal.jpg"
              alt="Ney Jorge Campello falando ao microfone em reunião institucional"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-slate-900">
              Liderança com história
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
              A Educatec nasce da trajetória de{" "}
              <strong className="text-slate-800">Ney Jorge Campello</strong> —
              professor, gestor público, consultor e escritor. Ex-Secretário de
              Educação de Salvador, ex-Secretário de Estado para a Copa do
              Mundo FIFA 2014 e atual diretor da Universidade Aberta da
              Associação Comercial da Bahia.
            </p>
            <Link
              href="/ney-campello"
              className="mt-5 inline-block font-semibold text-brand hover:underline"
            >
              Conheça Ney Campello →
            </Link>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-brand">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center text-white">
          <h2 className="font-display text-3xl">
            Vamos construir seu próximo projeto?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sky-100">
            Fale com a Educatec e transforme sua ideia em um evento ou projeto
            estruturado, executável e bem-sucedido.
          </p>
          <a
            href="https://wa.me/5571999816999"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand transition hover:bg-sky-100"
          >
            Chamar no WhatsApp — (71) 99981-6999
          </a>
        </div>
      </section>
    </>
  );
}
