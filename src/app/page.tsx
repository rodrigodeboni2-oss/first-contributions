import Image from "next/image";
import Link from "next/link";
import AreasAtuacaoMural from "@/components/AreasAtuacaoMural";

const projetos = [
  {
    titulo: "II Verão Costa a Costa",
    resumo:
      "Participação na coordenação, organização e produção de uma das etapas do circuito esportivo e cultural.",
    imagem: "/images/eventos/verao-costa-a-costa-oficial-hero-2024.jpg",
    href: "/projetos/verao-costa-a-costa",
  },
  {
    titulo: "Minas Urbano",
    resumo:
      "Coordenação do projeto durante os três primeiros meses, com atuação do professor Ney Campello em parceria.",
    imagem: "/images/eventos/minas-urbano-abertura.png",
    href: "/projetos/minas-urbano",
  },
  {
    titulo: "Tour Bahia — Esporte Educacional",
    resumo:
      "Desenvolvimento e organização das etapas em parceria, com 6.688 estudantes e atletas atendidos.",
    imagem: "/images/projetos/tour-bahia/tour-bahia-esporte-educacional.webp",
    href: "/projetos/tour-bahia",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(145deg,#0d4c82_0%,#1265ab_22%,#9dbbd5_52%,#edf3f8_78%,#ffffff_100%)]">
      {/* Hero */}
      <section className="text-white">
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
                Veja projetos e experiências
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
        <AreasAtuacaoMural />
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
              src="/images/eventos/copa-feminina-contagem-regressiva-dique-tororo.png"
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
              Salvador é uma das cidades-sede da Copa do Mundo Feminina FIFA
              2027. A Educatec participa da agenda de planejamento, preparação
              e mobilização na Bahia por meio do seu líder empresarial, o
              professor Ney Campello.
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
      </div>

      {/* Projetos em destaque */}
      <section className="bg-brand-light/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center font-display text-3xl text-slate-900 md:text-4xl">
            Projetos em destaque
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Experiências em educação, gestão, esporte e desenvolvimento
            territorial realizadas na Bahia e em Minas Gerais.
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
              src="/images/ney-campello/ney-campello-retrato-principal.jpg"
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
              A atuação da Educatec se apoia na trajetória de{" "}
              <strong className="text-slate-800">Ney Jorge Campello</strong> —
              professor, gestor público, consultor e escritor. Ex-secretário de
              Educação de Salvador, ex-secretário de Estado para os Assuntos da
              Copa do Mundo FIFA 2014 e diretor-geral da Universidade Aberta da
              Associação Comercial da Bahia desde a sua fundação.
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
            Converse com a Educatec — (71) 99981-6999
          </a>
        </div>
      </section>
    </>
  );
}
