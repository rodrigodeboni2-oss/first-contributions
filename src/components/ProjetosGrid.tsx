"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Projeto } from "@/lib/projetos";

const INTERVALO_MS = 5000;

export default function ProjetosGrid({ projetos }: { projetos: Projeto[] }) {
  const comImagem = projetos.filter((p) => p.cardImagem);
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const reduzMovimento = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduzMovimento.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reduzMovimento.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (pausado || reduzMovimento.current || comImagem.length < 2) return;
    const t = setInterval(
      () => setAtivo((a) => (a + 1) % comImagem.length),
      INTERVALO_MS,
    );
    return () => clearInterval(t);
  }, [pausado, comImagem.length]);

  const destaque = comImagem[ativo];

  return (
    <div className="rounded-[2rem] bg-[linear-gradient(160deg,#0d4c82_0%,#1265ab_30%,#5f96c4_62%,#e8f1f9_100%)] p-4 shadow-[0_30px_80px_rgba(13,76,130,0.25)] sm:p-6 md:p-8">
      {/* ===== Destaque rotativo ===== */}
      <div
        className="group/destaque relative overflow-hidden rounded-3xl"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocus={() => setPausado(true)}
        onBlur={() => setPausado(false)}
      >
        <Link
          href={`/projetos/${destaque.slug}`}
          aria-label={`Ver projeto: ${destaque.titulo}`}
          className="block"
        >
          <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
            {comImagem.map((p, i) => (
              <Image
                key={p.slug}
                src={p.cardImagem!.src}
                alt={i === ativo ? p.cardImagem!.alt : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
                className={`object-cover transition-opacity duration-700 ease-out ${
                  i === ativo ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                    destaque.status === "Em andamento"
                      ? "border-amber-400 text-amber-300"
                      : "border-sky-300 text-sky-200"
                  }`}
                >
                  {destaque.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-sky-200/80">
                  {destaque.categorias.join(" · ")}
                </span>
              </div>
              <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight md:text-4xl">
                {destaque.titulo}
              </h2>
              <p className="mt-2 hidden max-w-2xl text-sm leading-relaxed text-slate-200 md:line-clamp-2 md:block">
                {destaque.resumo}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-transform duration-200 group-hover/destaque:translate-x-1">
                Ver projeto →
              </span>
            </div>
          </div>
        </Link>

        {/* Pontos de navegação */}
        <div className="absolute right-4 top-4 flex gap-2 md:right-6 md:top-6">
          {comImagem.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Mostrar ${p.tituloCurto}`}
              onClick={() => setAtivo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === ativo
                  ? "w-7 bg-amber-400"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Bento grid — todos os projetos, proporção uniforme ===== */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6 lg:grid-cols-3">
        {projetos.map((p) => (
          <Link
            key={p.slug}
            href={`/projetos/${p.slug}`}
            className="group relative overflow-hidden rounded-2xl shadow-[0_12px_35px_rgba(13,76,130,0.18)] outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(13,76,130,0.35)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <div className="relative aspect-[4/3] w-full">
              {p.cardImagem ? (
                <Image
                  src={p.cardImagem.src}
                  alt={p.cardImagem.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
                />
              ) : (
                <div className="flex h-full w-full flex-col justify-between bg-brand p-6 text-white">
                  <span className="font-display text-5xl leading-none opacity-30">
                    ”
                  </span>
                  <p className="font-display text-xl leading-snug">
                    {p.fraseDestaque}
                  </p>
                </div>
              )}

              {/* Camada permanente: título */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent transition-colors duration-300 group-hover:from-slate-950/90 group-hover:via-slate-950/45 group-focus-visible:from-slate-950/90 group-focus-visible:via-slate-950/45" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide ${
                      p.status === "Em andamento"
                        ? "text-amber-300"
                        : "text-sky-200"
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-slate-300/80">
                    {p.categorias.join(" · ")}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-lg leading-snug text-white md:text-xl">
                  {p.tituloCurto}
                </h3>

                {/* Camada revelada no hover */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-200">
                      {p.resumo}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                      Ver projeto →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
