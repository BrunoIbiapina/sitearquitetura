"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Projetos que inspiram
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Cada projeto e unico. Conhcca alguns dos nossos trabalhos mais
            recentes e veja como transformamos espacos.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <PortfolioCard key={item.title + idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: (typeof portfolioItems)[number] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.coverImage}
          alt={item.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-primary/40 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-lg">
            <ArrowUpRight className="h-5 w-5 text-foreground" />
          </div>
        </div>
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-card-foreground shadow-sm backdrop-blur-sm">
            {item.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-xs font-medium tracking-wide text-accent uppercase">
          {item.category}
        </p>
        <h3 className="font-serif text-lg font-semibold text-card-foreground">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
            Ver projeto
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
