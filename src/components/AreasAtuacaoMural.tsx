"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

const areas = [
  {
    title: "Consultoria Educacional",
    desc: "Planos municipais de educação, diagnósticos, observatórios e monitoramento de indicadores.",
    image: "/images/areas/consultoria-educacional.webp",
    alt: "Equipe do projeto Ipecaetá Cidade Educadora",
    layout: "md:col-span-5",
    radius: "rounded-[2rem_5rem_2rem_2rem]",
    position: "center 44%",
  },
  {
    title: "Gestão e Desenvolvimento Institucional",
    desc: "Reestruturação organizacional, governança e articulação entre governos, universidades e escolas.",
    image: "/images/areas/gestao-desenvolvimento-institucional.webp",
    alt: "Profissionais reunidos em congresso institucional",
    layout: "md:col-span-7",
    radius: "rounded-[5rem_2rem_2rem_2rem]",
    position: "center 28%",
  },
  {
    title: "Formação e Desenvolvimento",
    desc: "Formação de gestores e conselheiros, cursos, oficinas, conferências e palestras.",
    image: "/images/areas/formacao-desenvolvimento.webp",
    alt: "Grupo reunido em atividade de formação e desenvolvimento",
    layout: "md:col-span-7",
    radius: "rounded-[2rem_2rem_5rem_2rem]",
    position: "center 38%",
  },
  {
    title: "Eventos Esportivos, Culturais e Educacionais",
    desc: "Da concepção à execução: circuitos, clínicas, arenas, fóruns e congressos, com prestação de contas.",
    image: "/images/areas/eventos-esportivos-culturais-educacionais.webp",
    alt: "Crianças, educadores e equipe reunidos em uma quadra esportiva",
    layout: "md:col-span-5",
    radius: "rounded-[2rem_2rem_2rem_5rem]",
    position: "center 46%",
  },
];

function moveCard(event: PointerEvent<HTMLElement>) {
  if (event.pointerType === "touch") return;

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  card.style.setProperty("--rotate-x", `${-y * 4}deg`);
  card.style.setProperty("--rotate-y", `${x * 5}deg`);
  card.style.setProperty("--image-x", `${-x * 12}px`);
  card.style.setProperty("--image-y", `${-y * 10}px`);
  card.style.setProperty("--text-x", `${x * 4}px`);
  card.style.setProperty("--text-y", `${y * 3}px`);
}

function resetCard(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  card.style.setProperty("--rotate-x", "0deg");
  card.style.setProperty("--rotate-y", "0deg");
  card.style.setProperty("--image-x", "0px");
  card.style.setProperty("--image-y", "0px");
  card.style.setProperty("--text-x", "0px");
  card.style.setProperty("--text-y", "0px");
}

export default function AreasAtuacaoMural() {
  return (
    <div className="relative mt-10">
      <div className="relative grid gap-3 md:grid-cols-12 md:gap-5">
        {areas.map((area) => (
          <article
            key={area.title}
            tabIndex={0}
            onPointerMove={moveCard}
            onPointerLeave={resetCard}
            className={`group relative min-h-72 overflow-hidden bg-slate-900 shadow-lg outline-none transition-[transform,box-shadow] duration-300 ease-out hover:z-10 hover:shadow-2xl focus-visible:z-10 focus-visible:ring-4 focus-visible:ring-amber-300 motion-reduce:transform-none ${area.layout} ${area.radius}`}
            style={{
              transform:
                "perspective(1100px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) translateY(-2px)",
            }}
          >
            <div
              className="absolute -inset-4 transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transform-none"
              style={{
                transform:
                  "translate3d(var(--image-x, 0px), var(--image-y, 0px), 0)",
              }}
            >
              <Image
                src={area.image}
                alt={area.alt}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
                style={{ objectPosition: area.position }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand/30 transition-colors duration-500 group-hover:from-slate-950 group-hover:via-brand-dark/55 group-hover:to-sky-400/15" />
            <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-white/40 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

            <div
              className="relative flex min-h-72 flex-col justify-end p-7 text-left text-white transition-transform duration-300 ease-out md:p-9 motion-reduce:transform-none"
              style={{
                transform:
                  "translate3d(var(--text-x, 0px), var(--text-y, 0px), 0)",
              }}
            >
              <span className="mb-4 h-1 w-12 rounded-full bg-amber-300 transition-all duration-300 group-hover:w-20" />
              <h3 className="max-w-xl font-display text-2xl leading-tight md:text-3xl">
                {area.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-sky-50 md:text-base">
                {area.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
