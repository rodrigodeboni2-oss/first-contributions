"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type TourBahiaImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  contain?: boolean;
};

export default function TourBahiaImage({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "object-cover object-center",
  priority = false,
  contain = false,
}: TourBahiaImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer || contain) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches) return;

    let frameId = 0;
    const update = () => {
      frameId = 0;
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const center = rect.top + rect.height / 2;
      const distance = (center - window.innerHeight / 2) / window.innerHeight;
      const offset = Math.max(-10, Math.min(10, distance * -16));
      layer.style.transform = `translate3d(0, ${offset}px, 0) scale(1.02)`;
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [contain]);

  return (
    <div
      ref={frameRef}
      className={`group relative overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_18px_46px_rgba(13,76,130,0.12)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(13,76,130,0.18)] motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      <div
        ref={layerRef}
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={contain ? "object-contain" : imageClassName}
          priority={priority}
        />
      </div>
    </div>
  );
}
