import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectDetails from "@/components/ProjectDetails";
import { getPortfolioItemBySlug } from "@/data/portfolio";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default async function PortfolioDetalhe({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Sticky navbar */}
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Voltar</span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <p className="text-xs font-medium text-muted-foreground">
              {item.tag}
              <span className="mx-1.5 text-border">/</span>
              {item.category}
            </p>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6">
        {/* Hero section */}
        <header className="pt-14 pb-2">
          {/* Tag badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              {item.tag}
            </span>
            <div className="h-1 w-1 rounded-full bg-border" />
            <span className="text-xs text-muted-foreground">
              {item.category}
            </span>
            {item.year && (
              <>
                <div className="h-1 w-1 rounded-full bg-border" />
                <span className="text-xs text-muted-foreground">
                  {item.year}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            {item.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            {item.description}
          </p>

          {/* Subtle decorative line */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <div className="h-px flex-1 bg-border/50" />
          </div>
        </header>

        {/* Gallery */}
        <ProjectGallery
          title={item.title}
          images={item.images}
          autoPlay
          intervalMs={3200}
          heightClassName="h-[260px] sm:h-[380px] lg:h-[500px]"
        />

        {/* Details */}
        <ProjectDetails
          location={item.location}
          areaM2={item.areaM2}
          year={item.year}
          services={item.services}
          highlights={item.highlights}
        />

        {/* CTA Footer */}
        <section className="mt-20 mb-16">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Gostou deste projeto?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Entre em contato para discutir o seu.
                </p>
              </div>
              <Link
                href="https://wa.me/5586999886678"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Fale conosco
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
