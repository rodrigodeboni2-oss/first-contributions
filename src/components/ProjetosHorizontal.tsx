"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Projeto } from "@/lib/projetos";

export default function ProjetosHorizontal({ projetos }: { projetos: Projeto[] }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const trilhoRef = useRef<HTMLDivElement>(null);
  const animacaoRef = useRef<number | null>(null);
  const destinoRef = useRef(0);
  const [noInicio, setNoInicio] = useState(true);
  const [noFim, setNoFim] = useState(false);

  useEffect(() => {
    const area = areaRef.current;
    const trilho = trilhoRef.current;
    if (!area || !trilho) return;

    const atualizarLimites = () => {
      setNoInicio(trilho.scrollLeft <= 2);
      setNoFim(trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 2);
    };

    const animarAteDestino = () => {
      const distancia = destinoRef.current - trilho.scrollLeft;
      if (Math.abs(distancia) < 0.5) {
        trilho.scrollLeft = destinoRef.current;
        animacaoRef.current = null;
        atualizarLimites();
        return;
      }

      trilho.scrollLeft += distancia * 0.24;
      animacaoRef.current = requestAnimationFrame(animarAteDestino);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      const fator = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 18
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? trilho.clientWidth
          : 1;
      const deltaVertical = event.deltaY * fator;
      const deltaHorizontal = event.deltaX * fator;
      const delta = Math.abs(deltaVertical) > 0.5 ? deltaVertical : deltaHorizontal;
      if (!delta) return;

      const maximo = Math.max(0, trilho.scrollWidth - trilho.clientWidth);
      const posicaoAtual = trilho.scrollLeft;
      const podeMover = (delta < 0 && posicaoAtual > 2) || (delta > 0 && posicaoAtual < maximo - 2);

      if (!podeMover) return;

      event.preventDefault();
      destinoRef.current = Math.min(
        maximo,
        Math.max(0, (animacaoRef.current === null ? posicaoAtual : destinoRef.current) + delta * 1.15),
      );

      if (animacaoRef.current === null) {
        animacaoRef.current = requestAnimationFrame(animarAteDestino);
      }
    };

    destinoRef.current = trilho.scrollLeft;
    atualizarLimites();
    area.addEventListener("wheel", handleWheel, { passive: false });
    trilho.addEventListener("scroll", atualizarLimites, { passive: true });
    window.addEventListener("resize", atualizarLimites);

    return () => {
      area.removeEventListener("wheel", handleWheel);
      trilho.removeEventListener("scroll", atualizarLimites);
      window.removeEventListener("resize", atualizarLimites);
      if (animacaoRef.current !== null) cancelAnimationFrame(animacaoRef.current);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const trilho = trilhoRef.current;
    if (!trilho || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) {
      return;
    }

    event.preventDefault();
    trilho.scrollBy({
      left: event.key === "ArrowRight" ? trilho.clientWidth * 0.72 : -trilho.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  const mascara = noInicio && noFim
    ? "linear-gradient(to right, #000 0%, #000 100%)"
    : noInicio
      ? "linear-gradient(to right, #000 0%, #000 92%, transparent 100%)"
      : noFim
        ? "linear-gradient(to right, transparent 0%, #000 8%, #000 100%)"
        : "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)";

  return (
    <div ref={areaRef} className="relative -mx-4 mt-8 overflow-hidden md:-mx-8">
      <div
        ref={trilhoRef}
        role="region"
        aria-label="Projetos da Educatec. Use as setas do teclado ou deslize para navegar."
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{ maskImage: mascara, WebkitMaskImage: mascara }}
        className="flex snap-x snap-proximity gap-5 overflow-x-auto px-4 py-6 outline-none [overscroll-behavior-inline:contain] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 md:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {projetos.map((projeto) => (
        <Link
          key={projeto.slug}
          href={`/projetos/${projeto.slug}`}
          className="group flex min-w-[82vw] snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,63,101,0.12)] ring-1 ring-slate-200/70 transition duration-300 hover:z-10 hover:scale-[1.025] hover:shadow-[0_20px_45px_rgba(15,63,101,0.2)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand motion-reduce:transition-none motion-reduce:hover:scale-100 sm:min-w-[360px] lg:min-w-[390px]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-brand-light">
            {projeto.cardImagem ? (
              <Image
                src={projeto.cardImagem.src}
                alt={projeto.cardImagem.alt}
                fill
                sizes="(max-width: 640px) 82vw, 390px"
                className="img-zoom object-cover"
              />
            ) : (
              <div className="flex h-full items-end bg-brand p-6 text-white">
                <p className="font-display text-xl">{projeto.fraseDestaque}</p>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wide">
              <span className={projeto.status === "Em andamento" ? "text-amber-600" : "text-brand"}>
                {projeto.status}
              </span>
              <span className="text-slate-400">{projeto.categorias.join(" · ")}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight text-slate-900">
              {projeto.tituloCurto}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
              {projeto.resumo}
            </p>
            <span className="mt-auto pt-5 text-sm font-semibold text-brand">
              Ver projeto <span aria-hidden="true">→</span>
            </span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
