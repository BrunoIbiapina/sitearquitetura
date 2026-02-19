"use client"

import Image from "next/image"
import { ArrowRight, Ruler, HardHat, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Arquitetura & Design
              </div>
              <h1 className="font-serif text-4xl leading-tight font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
                Arquitetura que une{" "}
                <span className="text-accent">estetica</span>, funcionalidade e{" "}
                <span className="text-accent">personalidade</span>.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                Projetos residenciais e comerciais do conceito a execucao, com
                atencao aos detalhes e foco no seu estilo de vida.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#25D366] px-8 text-base font-semibold text-[#fff] shadow-lg transition-all hover:bg-[#20bd5a] hover:shadow-xl"
              >
                <a
                  href="https://wa.me/5586999224515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Faca seu orcamento
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-full border-border px-8 text-base font-medium text-foreground shadow-sm hover:border-accent hover:text-accent"
              >
                <a href="#portfolio" className="flex items-center gap-2">
                  Ver portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: Ruler, label: "Projetos 3D" },
                { icon: HardHat, label: "Acompanhamento de obra" },
                { icon: Palette, label: "Interiores" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Architect Photo */}
          <div className="relative flex-shrink-0">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent/20" />
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/ftoadelia.jpg"
                    alt="Arquiteta Adélia Ibiapina"
                    width={420}
                    height={520}
                    className="h-auto w-[320px] object-cover lg:w-[420px]"
                    priority
                  />
              </div>
              {/* Mini Card */}
              <div className="absolute -bottom-6 -left-6 max-w-[280px] rounded-xl border border-border bg-card p-4 shadow-xl">
                <p className="font-serif text-base font-semibold text-card-foreground">
                  Adélia Ibiapina
                </p>
                <p className="text-xs font-medium tracking-wide text-accent uppercase">
                  Arquiteta e Urbanista
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {'"'}Acredito em projetos que traduzem quem voce e. Vamos transformar
                  seu espaco?{'"'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
