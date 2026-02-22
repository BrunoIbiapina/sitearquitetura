export type WorkUpdate = {
  id: string;
  date: string;
  title: string;
  description: string;
  photos: string[];
  videos: string[];
};

export type WorkComment = {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  text: string;
  replies?: WorkComment[];
};

export type TimelinePhase = {
  name: string;
  status: "completed" | "in-progress" | "upcoming";
  date?: string;
};

export type OngoingWork = {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  category: string;
  location: string;
  startDate: string;
  estimatedEnd: string;
  progress: number;
  phases: TimelinePhase[];
  updates: WorkUpdate[];
  comments: WorkComment[];
};

export const ongoingWorks: OngoingWork[] = [
  {
    title: "Residencia Lago Azul",
    slug: "residencia-lago-azul",
    description:
      "Construcao de residencia de alto padrao com 420m2, piscina com borda infinita e paisagismo tropical integrado.",
    coverImage: "/images/sala1.png",
    category: "Residencial",
    location: "Teresina - PI",
    startDate: "2025-08-15",
    estimatedEnd: "2026-06-30",
    progress: 45,
    phases: [
      { name: "Fundacao", status: "completed", date: "Set 2025" },
      { name: "Estrutura", status: "completed", date: "Nov 2025" },
      { name: "Alvenaria", status: "in-progress", date: "Jan 2026" },
      { name: "Instalacoes", status: "upcoming", date: "Mar 2026" },
      { name: "Acabamento", status: "upcoming", date: "Mai 2026" },
      { name: "Entrega", status: "upcoming", date: "Jun 2026" },
    ],
    updates: [
      {
        id: "u1",
        date: "2026-02-10",
        title: "Alvenaria do 1o pavimento concluida",
        description:
          "Finalizamos toda a alvenaria do pavimento terreo. As paredes estao prontas para receber o reboco. A equipe segue para o segundo pavimento na proxima semana.",
        photos: ["/images/sala1.png", "/images/sala1.png"],
        videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      },
      {
        id: "u2",
        date: "2026-01-20",
        title: "Laje do 2o pavimento concretada",
        description:
          "Concretagem da laje superior finalizada com sucesso. Utilizamos concreto usinado de alta resistencia. Prazo cumprido conforme cronograma.",
        photos: ["/images/sala1.pn", "/images/sala1.pn"],
        videos: [],
      },
      {
        id: "u3",
        date: "2025-12-05",
        title: "Estrutura metalica da cobertura instalada",
        description:
          "A estrutura metalica que sustenta o telhado foi montada. O desenho permite um vao livre de 12m na sala principal, criando a amplitude desejada no projeto.",
        photos: ["/images/sala1.pn", "/images/sala1.pn"],
        videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      },
    ],
    comments: [
      {
        id: "c1",
        author: "Roberto Lago",
        date: "2026-02-12",
        text: "Impressionante o andamento! A estrutura ficou muito solida. Quando comecam os acabamentos?",
        replies: [
          {
            id: "r1",
            author: "Arq. Adelia",
            date: "2026-02-13",
            text: "Obrigada, Roberto! A previsao para inicio dos acabamentos e marco de 2026. Estamos dentro do cronograma.",
          },
        ],
      },
      {
        id: "c2",
        author: "Ana Paula",
        date: "2026-01-25",
        text: "Que projeto lindo! Adoro acompanhar a evolucao. A laje ficou perfeita.",
      },
    ],
  },
  {
    title: "Clinica Bem Estar",
    slug: "clinica-bem-estar",
    description:
      "Reforma completa de clinica medica com 180m2, incluindo nova recepcao, consultorio premium e sala de procedimentos.",
    coverImage: "/images/sala1.png",
    category: "Comercial",
    location: "Teresina - PI",
    startDate: "2025-11-01",
    estimatedEnd: "2026-04-30",
    progress: 68,
    phases: [
      { name: "Demolicao", status: "completed", date: "Nov 2025" },
      { name: "Estrutura", status: "completed", date: "Dez 2025" },
      { name: "Instalacoes", status: "completed", date: "Jan 2026" },
      { name: "Acabamento", status: "in-progress", date: "Fev 2026" },
      { name: "Mobiliario", status: "upcoming", date: "Mar 2026" },
      { name: "Entrega", status: "upcoming", date: "Abr 2026" },
    ],
    updates: [
      {
        id: "u1",
        date: "2026-02-08",
        title: "Porcelanato da recepcao assentado",
        description:
          "O porcelanato marmorizado da recepcao ja esta assentado. O efeito visual ficou sofisticado e clean, exatamente como no projeto 3D.",
        photos: ["/public/images/sala1.png", "/public/images/sala1.png"],
        videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      },
      {
        id: "u2",
        date: "2026-01-15",
        title: "Instalacao eletrica e hidraulica finalizada",
        description:
          "Todas as instalacoes embutidas foram concluidas e aprovadas na vistoria tecnica. Prontas para o fechamento com gesso.",
        photos: ["/images/project-2.jpg"],
        videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
      },
    ],
    comments: [
      {
        id: "c1",
        author: "Dr. Marcos Pinto",
        date: "2026-02-10",
        text: "A clinica esta ficando linda! O piso da recepcao ficou exatamente como eu imaginava. Parabens pela execucao!",
        replies: [
          {
            id: "r1",
            author: "Arq. Adelia",
            date: "2026-02-10",
            text: "Muito obrigada, Dr. Marcos! Estamos caprichando em cada detalhe. O proximo passo e o forro de gesso com iluminacao embutida.",
          },
        ],
      },
    ],
  },
  {
    title: "Espaco Gourmet Familia Santos",
    slug: "espaco-gourmet-familia-santos",
    description:
      "Construcao de espaco gourmet externo com churrasqueira, forno a lenha, bancada em granito e pergolado em madeira de lei.",
    coverImage: "/images/project-4.jpg",
    category: "Residencial",
    location: "Timon - MA",
    startDate: "2026-01-10",
    estimatedEnd: "2026-05-15",
    progress: 22,
    phases: [
      { name: "Fundacao", status: "completed", date: "Jan 2026" },
      { name: "Alvenaria", status: "in-progress", date: "Fev 2026" },
      { name: "Cobertura", status: "upcoming", date: "Mar 2026" },
      { name: "Acabamento", status: "upcoming", date: "Abr 2026" },
      { name: "Entrega", status: "upcoming", date: "Mai 2026" },
    ],
    updates: [
      {
        id: "u1",
        date: "2026-02-05",
        title: "Inicio da alvenaria",
        description:
          "Comecamos a levantar as paredes do espaco gourmet. A fundacao radier ficou excelente e ja recebemos o material para a alvenaria completa.",
        photos: ["/images/project-4.jpg", "/images/project-1.jpg"],
        videos: [],
      },
    ],
    comments: [],
  },
];

export function getOngoingWorkBySlug(slug: string) {
  return ongoingWorks.find((w) => w.slug === slug);
}
