"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type CopaProjectImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  preserveFullImage?: boolean;
};

export default function CopaProjectImage({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  preserveFullImage = false,
}: CopaProjectImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer || preserveFullImage) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reducedMotion.matches) return;

    let frameId = 0;
    const update = () => {
      frameId = 0;
      const rect = frame.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = (elementCenter - viewportCenter) / window.innerHeight;
      const offset = Math.max(-16, Math.min(16, distance * -24));
      layer.style.transform = `translate3d(0, ${offset}px, 0) scale(1.025)`;
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
  }, [preserveFullImage]);

  return (
    <div
      ref={frameRef}
      className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(15,23,42,0.16)] motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      <div
        ref={layerRef}
        className="absolute inset-0 motion-reduce:transform-none"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`${imageClassName} ${
            preserveFullImage
              ? ""
              : "transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
          }`}
          priority={priority}
        />
      </div>
    </div>
  );
}
