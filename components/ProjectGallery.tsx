"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Maximize2,
  X,
} from "lucide-react";

type Props = {
  title: string;
  images: string[];
  autoPlay?: boolean;
  intervalMs?: number;
  heightClassName?: string;
};

export default function ProjectGallery({
  title,
  images,
  autoPlay = true,
  intervalMs = 3500,
  heightClassName = "h-[280px] sm:h-[380px] lg:h-[480px]",
}: Props) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images],
  );

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [lightbox, setLightbox] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  const total = safeImages.length;
  const current = safeImages[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    if (!playing || total <= 1 || lightbox) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [playing, total, intervalMs, lightbox]);

  useEffect(() => {
    if (index > total - 1) setIndex(0);
  }, [total, index]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  const onPointerDown = (clientX: number) => {
    startX.current = clientX;
    deltaX.current = 0;
  };
  const onPointerMove = (clientX: number) => {
    if (startX.current == null) return;
    deltaX.current = clientX - startX.current;
  };
  const onPointerUp = () => {
    if (startX.current == null) return;
    const dx = deltaX.current;
    startX.current = null;
    deltaX.current = 0;
    if (Math.abs(dx) < 50) return;
    if (dx > 0) goPrev();
    else goNext();
  };

  if (total === 0) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 p-16 text-sm text-muted-foreground">
        Nenhuma imagem disponivel.
      </div>
    );
  }

  return (
    <>
      <section className="mt-10">
        {/* Header row */}
        <div className="flex items-end justify-between gap-4 mb-4">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-lg font-semibold tracking-tight text-foreground">
              Galeria
            </h2>
            <div className="h-px flex-1 min-w-8 bg-border" />
            <span className="text-xs tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {total > 1 && (
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={playing ? "Pausar autoplay" : "Iniciar autoplay"}
              >
                {playing ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
              </button>
            )}
            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Tela cheia"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
            <div className="mx-1 h-4 w-px bg-border" />
            <button
              type="button"
              onClick={goPrev}
              disabled={total <= 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={total <= 1}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-30"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel card */}
        <div className="group overflow-hidden rounded-xl border border-border shadow-sm">
          {/* Main image */}
          <div
            className={`relative w-full ${heightClassName} cursor-grab bg-muted select-none active:cursor-grabbing`}
            onMouseDown={(e) => onPointerDown(e.clientX)}
            onMouseMove={(e) => onPointerMove(e.clientX)}
            onMouseUp={onPointerUp}
            onMouseLeave={onPointerUp}
            onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
            onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
            onTouchEnd={onPointerUp}
            role="group"
            aria-label="Carrossel de imagens do projeto"
          >
            {current ? (
              <Image
                key={`${current}-${index}`}
                src={current}
                alt={`${title} - imagem ${index + 1}`}
                fill
                priority
                className="object-cover animate-in fade-in duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1100px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                Imagem invalida
              </div>
            )}

            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />

            {/* Hover arrows on image */}
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-white"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 hover:bg-white"
                  aria-label="Proxima"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>

          {/* Bottom bar: progress + thumbnails */}
          {total > 1 && (
            <div className="border-t border-border bg-card/80 px-4 py-3">
              {/* Thin progress line */}
              <div className="mb-3 h-[2px] w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto">
                {safeImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`relative h-12 w-[72px] flex-shrink-0 overflow-hidden rounded-md border transition-all duration-200 ${
                      i === index
                        ? "border-accent ring-1 ring-accent/30"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                    aria-label={`Ir para imagem ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`Miniatura ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox fullscreen */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-label="Visualizar imagem em tela cheia"
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Nav */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-5 top-1/2 z-10 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-5 top-1/2 z-10 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Proxima"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative h-[85vh] w-[92vw] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {current && (
              <Image
                key={`lightbox-${current}-${index}`}
                src={current}
                alt={`${title} - imagem ${index + 1}`}
                fill
                className="object-contain animate-in fade-in zoom-in-95 duration-300"
                sizes="92vw"
              />
            )}
          </div>

          {/* Counter pill */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium tabular-nums text-white/80 backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}
