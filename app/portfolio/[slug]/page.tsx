import { notFound } from "next/navigation"
// Update the import path to match the actual location and filename of ProjectGallery
import ProjectGallery from "@/components/ProjectGallery"
import ProjectDetails from "@/components/ProjectDetails"
import { getPortfolioItemBySlug } from "@/data/portfolio"

export default async function PortfolioDetalhe({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const item = getPortfolioItemBySlug(slug)
    if (!item) return notFound()

    return (
        <main className="mx-auto max-w-6xl px-6 py-10">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                {item.tag} • {item.category}
            </p>

            <h1 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
                {item.title}
            </h1>

            <p className="mt-4 text-muted-foreground leading-relaxed">
                {item.description}
            </p>

            {/* ✅ Galeria premium */}
            <ProjectGallery
                title={item.title}
                images={item.images}
                autoPlay
                intervalMs={3200}
                heightClassName="h-[260px] sm:h-[360px] lg:h-[440px]"
            />
            <ProjectDetails
                location={item.location}
                areaM2={item.areaM2}
                year={item.year}
                services={item.services}
                highlights={item.highlights}
            />
        </main>
    )
}