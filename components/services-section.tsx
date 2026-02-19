"use client"

import { PenTool, Sofa, MessageSquare, HardHat, ArrowRight } from "lucide-react"


const services = [
  {
    icon: PenTool,
    title: "Projeto Arquitetonico",
    description:
      "Desenvolvimento completo do projeto, da concepcao ao detalhamento tecnico, com plantas, cortes e fachadas em 3D.",
    color: "bg-[#06b6d4]/10 text-[#06b6d4]",
  },
  {
    icon: Sofa,
    title: "Design de Interiores",
    description:
      "Criacao de ambientes que refletem sua personalidade. Escolha de materiais, mobiliario, cores e iluminacao.",
    color: "bg-[#ec4899]/10 text-[#ec4899]",
  },
  {
    icon: MessageSquare,
    title: "Consultoria",
    description:
      "Orientacao profissional para pequenas mudancas ou decisoes pontuais no seu espaco. Pratico e acessivel.",
    color: "bg-[#f59e0b]/10 text-[#f59e0b]",
  },
  {
    icon: HardHat,
    title: "Acompanhamento de Obra",
    description:
      "Supervisao tecnica para garantir que o projeto saia do papel exatamente como planejado, com qualidade e prazo.",
    color: "bg-[#22c55e]/10 text-[#22c55e]",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
            Servicos
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Como posso ajudar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ofereco solucoes completas para transformar seus espacos, do projeto ao
            acompanhamento final da obra.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:p-8"
            >
              <div
                className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${service.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contato"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all group-hover:gap-2.5"
                >
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
