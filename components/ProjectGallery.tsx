"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

type Props = {
  title: string
  images: string[]
  autoPlay?: boolean
  intervalMs?: number
  heightClassName?: string // permite ajustar altura do carrossel pela página
}

export default function ProjectGallery({
  title,
  images,
  autoPlay = true,
  intervalMs = 3500,
  heightClassName = "h-[280px] sm:h-[380px] lg:h-[480px]",
}: Props) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  )

  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(autoPlay)
  const startX = useRef<number | null>(null)
  const deltaX = useRef<number>(0)

  const total = safeImages.length
  const current = safeImages[index]

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  // Autoplay
  useEffect(() => {
    if (!playing || total <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [playing, total, intervalMs])

  // Se images mudar e ficar menor
  useEffect(() => {
    if (index > total - 1) setIndex(0)
  }, [total, index])

  // Swipe (touch/mouse)
  const onPointerDown = (clientX: number) => {
    startX.current = clientX
    deltaX.current = 0
  }

  const onPointerMove = (clientX: number) => {
    if (startX.current == null) return
    deltaX.current = clientX - startX.current
  }

  const onPointerUp = () => {
    if (startX.current == null) return
    const dx = deltaX.current
    startX.current = null
    deltaX.current = 0

    // limiar
    if (Math.abs(dx) < 50) return
    if (dx > 0) goPrev()
    else goNext()
  }

  if (total === 0) {
    return (
      <div className="mt-6 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        Nenhuma imagem disponível.
      </div>
    )
  }

  return (
    <section className="mt-8">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-xl font-bold">Galeria</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            {index + 1} de {total}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Autoplay */}
          {total > 1 && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium shadow-sm transition hover:bg-muted"
              aria-label={playing ? "Pausar autoplay" : "Iniciar autoplay"}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {playing ? "Pausar" : "Play"}
            </button>
          )}

          {/* Prev/Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="h-10 w-10 rounded-full border border-border bg-card shadow-sm transition hover:bg-muted disabled:opacity-50"
              disabled={total <= 1}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="mx-auto h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goNext}
              className="h-10 w-10 rounded-full border border-border bg-card shadow-sm transition hover:bg-muted disabled:opacity-50"
              disabled={total <= 1}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="mx-auto h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div
          className={`relative w-full ${heightClassName} bg-muted`}
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
              key={current}
              src={current}
              alt={`${title} - imagem ${index + 1}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1100px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Imagem inválida: verifique o caminho no data/portfolio.ts
            </div>
          )}

          {/* Gradient overlay sutil */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 p-4">
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-accent" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}