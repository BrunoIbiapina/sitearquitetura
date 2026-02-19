"use client"

import { Star, Quote } from "lucide-react"
import Image from 'next/image'

// Cards Testemunhais Clientes

const testimonials = [
  {
    name: "Mariana Silva",
    text: "A Carolina transformou nosso apartamento num espaco dos sonhos. Cada detalhe foi pensado com muito carinho e profissionalismo. Superou todas as expectativas!",
    rating: 5, // Estrelas da avaiação 
    project: "Apartamento - Itaim Bibi",
    video: "https://www.youtube.com/watch?v=SEU_VIDEO_ID1", // Exemplo, pode remover se não tiver vídeo
    photo: 'images/ftoadelia.jpg'
  },
  {
    name: "Ricardo & Fernanda",
    text: "Do primeiro encontro ate a entrega, o processo foi impecavel. O projeto 3D nos ajudou muito a visualizar o resultado final. Recomendamos de olhos fechados.",
    rating: 5,
    project: "Casa - Alphaville",
    video: "https://www.youtube.com/watch?v=SEU_VIDEO_ID1",
    photo: 'images/ftoadelia.jpg'
  },
  {
    name: "Dr. Paulo Menezes",
    text: "Meu consultorio ficou moderno e acolhedor ao mesmo tempo. Os pacientes sempre elogiam o ambiente. Investimento que valeu cada centavo.",
    rating: 5,
    project: "Consultorio - Vila Olimpia",
    video: "https://www.youtube.com/watch?v=SEU_VIDEO_ID2",
    photo: 'images/ftoadelia.jpg'
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-accent uppercase">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            O que dizem nossos clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A satisfação dos nossos clientes é a melhor prova do nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:p-8"            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-accent/20" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>


              {/* Text + Video Icon */}
              <div className="mb-6 flex items-start gap-2">
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {'"'}{testimonial.text}{'"'}
                </p>
                {testimonial.video && (
                  <button
                    type="button"
                    aria-label="Ver depoimento em vídeo"
                    title="Ver depoimento em vídeo"
                    onClick={() => window.open(testimonial.video, '_blank', 'noopener')}
                    className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="5" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M10 9.5L14 11.5L10 13.5V9.5Z" fill="currentColor" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Author */}
              <div className="mt-auto border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-accent/10 ring-2 ring-accent/10">
                    {testimonial.photo ? (
                      <Image
                        src={testimonial.photo}
                        alt={`Foto de ${testimonial.name}`}
                        fill
                        className="object-cover"
                        sizes="40px"
                        priority={false}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-serif text-sm font-bold text-accent">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
