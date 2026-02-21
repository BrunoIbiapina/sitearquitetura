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
        services: ["Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 01

        highlights: [
            "Integração sala/cozinha",
            "Iluminação cênica em camadas",
            "Materiais nobres e neutros",
        ],
    },

    //Projeto 02

    {
        title: "CASA C/M 01",
        slug: "casa-01-campo-maior",
        description:
            "Este projeto apresenta uma residência contemporânea de dois pavimentos implantada em terreno em declive, com forte valorização da volumetria limpa, integração visual e iluminação cênica.",
        tag: "Residencial",
        category: "Residencial",
        coverImage: "/images/projeto02/casa01.jpeg",
        images: [
            "/images/projeto02/casa01.jpeg",
            "/images/projeto02/casa02.jpeg",

        ],
        location: "Campo Maior - PI",
        areaM2: 246.08,
        year: 2019,
        services: ["Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 02

        highlights: [
            "Acesso social elevado, valorizando a entrada principal",
            "Implantação inteligente no terreno inclinado",
            "Integração entre interior e exterior",
            "Área gourmet elevada como protagonista",
            "Iluminação cênica sofisticada",
            "Paisagismo funcional e decorativo",
        ],
        
    },
    // PROJETO 03
    {
        title: "CASA C/M 02",
        slug: "casa-02-campomaior",
        description:
            "Este projeto apresenta uma residência contemporânea de dois pavimentos implantada em terreno em declive, com forte valorização da volumetria limpa, integração visual e iluminação cênica.",
        tag: "Residencial",
        category: "Residencial",
        coverImage: "/images/projeto03/foto02.jpeg",
        images: [
            "/images/projeto03/foto01.jpeg",
            "/images/projeto03/foto02.jpeg",
            "/images/projeto03/foto03.jpeg",
            "/images/projeto03/foto04.jpeg",
            "/images/projeto03/foto05.jpeg",
            "/images/projeto03/foto06.jpeg",
            "/images/projeto03/foto07.jpeg",


        ],
        location: "Campo Maior - PI",
        areaM2: 1191.45,
        year: 2011,
        services: ["Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 03

        highlights: [
            "Acesso social elevado, valorizando a entrada principal",
            "Implantação inteligente no terreno inclinado",
            "Integração entre interior e exterior",
            "Área gourmet elevada como protagonista",
            "Iluminação cênica sofisticada",
            "Paisagismo funcional e decorativo",
        ],
        
    },

    // PROJETO 04
    {
        title: "LOJA G/F 01",
        slug: "loja-g-f-01",
        description:
            "Projeto de design de interiores para uma confeitaria moderna, com uma estética suave e orgânica. O ambiente utiliza uma paleta de cores em tons de verde sálvia, madeira clara e terracota.",
        tag: "Comercial",
        category: "Comercial",
        coverImage: "/images/projeto04/foto01.jpeg",
        images: [
            "/images/projeto04/foto01.jpeg",
            "/images/projeto04/foto02.jpeg",
            "/images/projeto04/foto03.jpeg",
            "/images/projeto04/foto04.jpeg",
            "/images/projeto04/foto05.jpeg",
            "/images/projeto04/foto06.jpeg",
            


        ],
        location: "Teresina - PI",
        areaM2: 48.35,
        year: 2025,
        services: ["Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 04

        highlights: [
            "Balcão Central",
            "Mesas e Assentos",
            "Prateleiras e Nichos",
            "Iluminação e Revestimentos",
            "Lustres",
            "Atmosfera Geral",
        ],
        
    },
    // PROJETO 05
    {
        title: "CASA C/M 03",
        slug: "casa-03-campomaior",
        description:
            "Projeto de design de interiores para uma confeitaria moderna, com uma estética suave e orgânica. O ambiente utiliza uma paleta de cores em tons de verde sálvia, madeira clara e terracota.",
        tag: "Residencial",
        category: "Residencial",
        coverImage: "/images/projeto05/foto01.jpeg",
        images: [
            "/images/projeto05/foto01.jpeg",
            
            
        ],
        location: "Teresina - PI",
        areaM2: 48.35,
        year: 2025,
        services: ["Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 05

        highlights: [
            "Balcão Central",
            "Mesas e Assentos",
            "Prateleiras e Nichos",
            "Iluminação e Revestimentos",
            "Lustres",
            "Atmosfera Geral",
        ],
        
    },

    // PROJETO 06
    {
        title: "CLINICA ODONTOLOGIA - C/M",
        slug: "clinica-01-campomaior",
        description:
            "O projeto apresenta uma clínica OFTALMOLOGICA contemporânea com linguagem arquitetônica sofisticada, forte identidade visual e proposta acolhedora.",
        tag: "Comercial",
        category: "Comercial",
        coverImage: "/images/projeto06/foto01.jpeg",
        images: [
            "/images/projeto06/foto01.jpeg",
            
            
        ],
        location: "Campo Maior - PI",
        areaM2: 46.14,
        year: 2021,
        services: ["Interiores", "Iluminação", "Marcenaria sob medida"],

        //Destaques Projeto 06

        highlights: [
            "⁠Elemento Central em Destaque",
            "Revestimento em Porcelanato Marmorizado",
            "⁠Esquadrias em Vidro Amplo",
            "Iluminação e Revestimentos",
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