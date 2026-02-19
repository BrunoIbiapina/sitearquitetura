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

    //Projetos - Portfolio

    //Projeto 01

    {
        title: "Suíte Particular Resort Bob Z",
        slug: "residencia-vila-nova",
        description:
            "Projeto completo de casa moderna com 280m², integração total dos ambientes e estética contemporânea.",
        tag: "Resort",
        category: "Resort",
        coverImage: "/images/projeto01/maquete1.jpeg",
        images: [
            "/images/projeto01/maquete1.jpeg",
            "/images/projeto01/maquete2.jpeg",
            
        ],
        location: "Cajueiro da Praia - PI",
        areaM2: 40,
        year: 2020,
        services: ["Projeto 3D", "Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 01

        highlights: [
            "Integração sala/cozinha",
            "Iluminação cênica em camadas",
            "Materiais nobres e neutros",
        ],
    },

    //Projeto 02

    {
        title: "Suíte Particular Resort Bob Z",
        slug: "residencia-vila-nova",
        description:
            "Projeto completo de casa moderna com 280m², integração total dos ambientes e estética contemporânea.",
        tag: "Resort",
        category: "Resort",
        coverImage: "/images/projeto01/maquete1.jpeg",
        images: [
            "/images/projeto01/maquete1.jpeg",
            "/images/projeto01/maquete2.jpeg",
            
        ],
        location: "Cajueiro da Praia - PI",
        areaM2: 40,
        year: 2020,
        services: ["Projeto 3D", "Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 02

        highlights: [
            "Integração sala/cozinha",
            "Iluminação cênica em camadas",
            "Materiais nobres e neutros",
        ],
    },

    //Projeto 03

    {
        title: "Suíte Particular Resort Bob Z",
        slug: "residencia-vila-nova",
        description:
            "Projeto completo de casa moderna com 280m², integração total dos ambientes e estética contemporânea.",
        tag: "Resort",
        category: "Resort",
        coverImage: "/images/projeto01/maquete1.jpeg",
        images: [
            "/images/projeto01/maquete1.jpeg",
            "/images/projeto01/maquete2.jpeg",
            
        ],
        location: "Cajueiro da Praia - PI",
        areaM2: 40,
        year: 2020,
        services: ["Projeto 3D", "Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 03

        highlights: [
            "Integração sala/cozinha",
            "Iluminação cênica em camadas",
            "Materiais nobres e neutros",
        ],
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