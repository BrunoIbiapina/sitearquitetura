export type PortfolioTestimonial = {
    name: string
    role?: string
    rating: number // 1 a 5
    text: string
    date?: string
}

export type PortfolioBeforeAfter = {
    before: string
    after: string
    label?: string
}

export type PortfolioItem = {
    title: string
    slug: string
    description: string
    tag: string
    category: string
    coverImage: string
    images: string[]
    location?: string
    areaM2?: number
    year?: number
    services?: string[]
    highlights?: string[]
    testimonials?: PortfolioTestimonial[]
    beforeAfter?: PortfolioBeforeAfter[]
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: "Residencia Vila Nova",
        slug: "residencia-vila-nova",
        description:
            "Projeto completo de casa moderna com 280m², integração total dos ambientes e estética contemporânea.",
        tag: "Residencial",
        category: "Casa",
        coverImage: "/images/sala1.png",
        images: [
            "/images/sala1.png",
            "/images/sala2.png",
            "/images/sala1.png",
            "/images/sala2.png",
            "/images/sala1.png",
            "/images/sala2.png",
        ],
        location: "Teresina - PI",
        areaM2: 280,
        year: 2025,
        services: ["Projeto 3D", "Interiores", "Iluminação", "Marcenaria sob medida"],
        highlights: [
            "Integração sala/cozinha",
            "Iluminação cênica em camadas",
            "Materiais nobres e neutros",
        ],
        testimonials: [
            {
                name: "Mariana Silva",
                role: "Cliente",
                rating: 5,
                text: "Ficou impecável. A casa ganhou leveza, elegância e funcionalidade. Superou expectativas.",
                date: "2025-11-10",
            },
        ],
    },
    {
        title: "Apartamento Jardins",
        slug: "apartamento-jardins",
        description:
            "Reforma e design de interiores para apartamento de alto padrão, com soluções inteligentes e atemporais.",
        tag: "Residencial",
        category: "Apartamento",
        coverImage: "/images/sala2.png",
        images: ["/images/sala2.png", "/images/sala1.png"],
        location: "São Paulo - SP",
        areaM2: 120,
        year: 2024,
        services: ["Reforma", "Interiores", "Mobiliário", "Paleta e materiais"],
        highlights: ["Sala ampla e clean", "Marcenaria elegante", "Texturas suaves"],
    },
    {
        title: "Boutique Conceito",
        slug: "boutique-conceito",
        description:
            "Loja de moda com design exclusivo, iluminação cenográfica e experiência premium de compra.",
        tag: "Comercial",
        category: "Loja / Comercial",
        coverImage: "/images/sala2.png",
        images: [
            "/images/sala2.png",
            "/images/sala1.png",
            "/images/sala2.png",
            "/images/sala1.png",
            "/images/sala2.png",
            "/images/sala1.png",
        ],
        location: "Fortaleza - CE",
        year: 2025,
        services: ["Layout comercial", "Iluminação", "Vitrine", "Projeto 3D"],
        highlights: ["Vitrine impactante", "Percurso de loja fluido", "Luz focada nos produtos"],
    },
]

export function getPortfolioItemBySlug(slug: string) {
    return portfolioItems.find((item) => item.slug === slug)
}

export function getRelatedPortfolioItems(slug: string) {
    const current = getPortfolioItemBySlug(slug)
    if (!current) return []
    return portfolioItems
        .filter((p) => p.slug !== slug)
        .filter((p) => p.tag === current.tag || p.category === current.category)
        .slice(0, 3)
}