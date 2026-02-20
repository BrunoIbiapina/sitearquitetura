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
        slug: "resort-bob-z",
        description:
            "Esse projeto apresenta um quarto de hotel/pousada de alto padrão com estética praiana contemporânea, combinando conforto, sofisticação e forte conexão com a paisagem externa.",
        tag: "Resort",
        category: "Resort",
        coverImage: "/images/projeto01/maquete1.jpeg",
        images: [
            "/images/projeto01/maquete1.jpeg",
            "/images/projeto01/maquete2.jpeg",
            "/images/projeto01/foto02.jpeg",
            "/images/projeto01/foto03.jpeg",
            "/images/projeto01/foto04.jpeg",
            "/images/projeto01/foto05.jpeg",
            "/images/projeto01/foto06.jpeg",
            "/images/projeto01/foto07.jpeg",
            
        ],
        location: "Cajueiro da Praia - PI",
        areaM2: 32.80,
        year: 2024,
        services: [ "Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 01

        highlights: [
            "Integração sala/cozinha",
            "Iluminação cênica em camadas",
            "Materiais nobres e neutros",
        ],
    },

    //Projeto 02

    
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