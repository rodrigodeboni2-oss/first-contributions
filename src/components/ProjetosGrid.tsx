import Image from "next/image";
import Link from "next/link";
import type { Projeto } from "@/lib/projetos";

export default function ProjetosGrid({ projetos }: { projetos: Projeto[] }) {
  return (
    <div>
      {/* Grade assimétrica */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {projetos.map((p) => (
          <Link
            key={p.slug}
            href={`/projetos/${p.slug}`}
            className={`group flex flex-col ${p.cardSpan}`}
          >
            <div
              className={`relative overflow-hidden rounded-xl ${p.cardAspecto}`}
            >
              {p.cardImagem ? (
                <Image
                  src={p.cardImagem.src}
                  alt={p.cardImagem.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="img-zoom object-cover"
                />
              ) : (
                <div
                  className={`flex h-full w-full flex-col justify-between p-6 ${
                    p.slug === "observatorio-educacional"
                      ? "bg-ink text-white"
                      : "bg-brand text-white"
                  }`}
                >
                  <span className="font-display text-5xl leading-none opacity-30">
                    ”
                  </span>
                  <p className="font-display text-xl leading-snug md:text-2xl">
                    {p.fraseDestaque}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-baseline gap-3 pt-4">
              <span
                className={`text-xs font-bold uppercase tracking-wide ${
                  p.status === "Em andamento" ? "text-amber-600" : "text-brand"
                }`}
              >
                {p.status}
              </span>
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {p.categorias.join(" · ")}
              </span>
            </div>
            <h3 className="mt-1 font-display text-2xl text-slate-900">
              {p.tituloCurto}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {p.local} · {p.periodo}
            </p>
            <p className="mt-2 line-clamp-3 max-w-prose text-[15px] leading-relaxed text-slate-600">
              {p.resumo}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Ver projeto
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
