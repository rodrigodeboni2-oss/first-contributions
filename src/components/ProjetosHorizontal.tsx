"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Projeto } from "@/lib/projetos";

const COPIAS = [0, 1, 2];

export default function ProjetosHorizontal({ projetos }: { projetos: Projeto[] }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const trilhoRef = useRef<HTMLDivElement>(null);
  const gruposRef = useRef<Array<HTMLDivElement | null>>([]);
  const sobreAreaRef = useRef(false);
  const velocidadeRef = useRef(0);
  const animacaoRef = useRef<number | null>(null);
  const normalizandoRef = useRef(false);

  useEffect(() => {
    const area = areaRef.current;
    const trilho = trilhoRef.current;
    const primeiro = gruposRef.current[0];
    const central = gruposRef.current[1];
    const ultimo = gruposRef.current[2];
    if (!area || !trilho || !primeiro || !central || !ultimo) return;

    const larguraSequencia = () => ultimo.offsetLeft - central.offsetLeft;

    const iniciarNoCentro = () => {
      trilho.scrollLeft = central.offsetLeft;
    };

    const normalizarPosicao = () => {
      if (normalizandoRef.current) return;
      const largura = larguraSequencia();
      if (!largura) return;

      const limiteEsquerdo = central.offsetLeft - largura * 0.55;
      const limiteDireito = central.offsetLeft + largura * 0.55;

      if (trilho.scrollLeft < limiteEsquerdo) {
        normalizandoRef.current = true;
        trilho.scrollLeft += largura;
        normalizandoRef.current = false;
      } else if (trilho.scrollLeft > limiteDireito) {
        normalizandoRef.current = true;
        trilho.scrollLeft -= largura;
        normalizandoRef.current = false;
      }
    };

    const animar = () => {
      if (Math.abs(velocidadeRef.current) < 0.04) {
        velocidadeRef.current = 0;
        animacaoRef.current = null;
        return;
      }

      trilho.scrollLeft += velocidadeRef.current;
      normalizarPosicao();
      velocidadeRef.current *= 0.9;
      animacaoRef.current = requestAnimationFrame(animar);
    };

    const handleWheel = (event: WheelEvent) => {
      const alvoDentro = event.target instanceof Node && area.contains(event.target);
      if ((!sobreAreaRef.current && !alvoDentro) || event.ctrlKey) return;

      const fator = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? trilho.clientWidth
          : 1;
      const vertical = event.deltaY * fator;
      const horizontal = event.deltaX * fator;
      const delta = Math.abs(vertical) > 0.1 ? vertical : horizontal;
      if (Math.abs(delta) < 0.1) return;

      event.preventDefault();
      event.stopPropagation();

      velocidadeRef.current = Math.max(
        -42,
        Math.min(42, velocidadeRef.current + delta * 0.16),
      );

      if (animacaoRef.current === null) {
        animacaoRef.current = requestAnimationFrame(animar);
      }
    };

    const handlePointerEnter = () => {
      sobreAreaRef.current = true;
    };
    const handlePointerLeave = () => {
      sobreAreaRef.current = false;
    };
    const handleResize = () => {
      iniciarNoCentro();
    };

    iniciarNoCentro();
    area.addEventListener("pointerenter", handlePointerEnter);
    area.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });
    window.addEventListener("resize", handleResize);
    trilho.addEventListener("scroll", normalizarPosicao, { passive: true });

    return () => {
      area.removeEventListener("pointerenter", handlePointerEnter);
      area.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("wheel", handleWheel, { capture: true });
      window.removeEventListener("resize", handleResize);
      trilho.removeEventListener("scroll", normalizarPosicao);
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
      left: event.key === "ArrowRight" ? 420 : -420,
      behavior: "smooth",
    });
  };

  return (
    <div ref={areaRef} className="relative -mx-4 mt-8 md:-mx-8">
      <div
        ref={trilhoRef}
        role="region"
        aria-label="Projetos da Educatec. Use as setas do teclado ou deslize para navegar."
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="overflow-x-auto px-4 pb-16 pt-8 outline-none [overscroll-behavior-inline:contain] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 md:px-8 [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,.18) 3%, rgba(0,0,0,.48) 7%, rgba(0,0,0,.78) 11%, #000 17%, #000 83%, rgba(0,0,0,.78) 89%, rgba(0,0,0,.48) 93%, rgba(0,0,0,.18) 97%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,.18) 3%, rgba(0,0,0,.48) 7%, rgba(0,0,0,.78) 11%, #000 17%, #000 83%, rgba(0,0,0,.78) 89%, rgba(0,0,0,.48) 93%, rgba(0,0,0,.18) 97%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-5">
          {COPIAS.map((copia) => (
            <div
              key={copia}
              ref={(elemento) => {
                gruposRef.current[copia] = elemento;
              }}
              aria-hidden={copia === 1 ? undefined : true}
              className="flex gap-5"
            >
              {projetos.map((projeto) => (
                <Link
                  key={`${copia}-${projeto.slug}`}
                  href={`/projetos/${projeto.slug}`}
                  tabIndex={copia === 1 ? undefined : -1}
                  className="group flex w-[82vw] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,63,101,0.12)] ring-1 ring-slate-200/70 transition duration-300 hover:z-10 hover:scale-[1.025] hover:shadow-[0_20px_45px_rgba(15,63,101,0.2)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand motion-reduce:transition-none motion-reduce:hover:scale-100 sm:w-[360px] lg:w-[390px]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-light">
                    {projeto.cardImagem ? (
                      <Image
                        src={projeto.cardImagem.src}
                        alt={copia === 1 ? projeto.cardImagem.alt : ""}
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
          ))}
        </div>
      </div>
    </div>
  );
}
