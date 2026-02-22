"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight, HardHat } from "lucide-react";
import { ongoingWorks } from "@/data/ongoing-works";

export function OngoingWorksSection() {
  return (
    <section id="obras" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <HardHat className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Em andamento
            </span>
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Obras em Andamento
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Acompanhe em tempo real a evolucao dos nossos projetos.
            Transparencia e qualidade em cada etapa da construcao.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ongoingWorks.map((work) => (
            <Link
              key={work.slug}
              href={`/obras/${work.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={work.coverImage}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Progress overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-card-foreground backdrop-blur-sm">
                    {work.category}
                  </span>
                </div>

                {/* Progress circle */}
                <div className="absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-card/90 backdrop-blur-sm">
                  <span className="text-sm font-bold text-accent tabular-nums">
                    {work.progress}%
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {work.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {work.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {work.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Prev.{" "}
                    {new Date(work.estimatedEnd).toLocaleDateString("pt-BR", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Progresso</span>
                    <span className="font-semibold tabular-nums text-foreground">
                      {work.progress}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700"
                      style={{ width: `${work.progress}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:gap-3">
                  <span>Ver andamento</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
