import { MapPin, Ruler, Calendar, Check, Sparkles, Layers } from "lucide-react"

type ProjectDetailsProps = {
  location?: string
  areaM2?: number
  year?: number
  services?: string[]
  highlights?: string[]
}

export default function ProjectDetails({
  location,
  areaM2,
  year,
  services,
  highlights,
}: ProjectDetailsProps) {
  const hasInfo = location || areaM2 || year
  const hasServices = services && services.length > 0
  const hasHighlights = highlights && highlights.length > 0

  if (!hasInfo && !hasServices && !hasHighlights) return null

  return (
    <section className="mt-16">
      {/* Section divider */}
      <div className="flex items-center gap-6 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/70">
          Detalhes do Projeto
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Info cards row */}
      {hasInfo && (
        <div className="grid gap-3 sm:grid-cols-3 mb-8">
          {location && (
            <InfoCard icon={<MapPin className="h-4 w-4" />} label="Localizacao" value={location} />
          )}
          {areaM2 && (
            <InfoCard
              icon={<Ruler className="h-4 w-4" />}
              label="Area Total"
              value={`${areaM2.toLocaleString("pt-BR")} m\u00B2`}
            />
          )}
          {year && (
            <InfoCard icon={<Calendar className="h-4 w-4" />} label="Ano" value={year.toString()} />
          )}
        </div>
      )}

      {/* Two-column content */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Highlights */}
        {hasHighlights && (
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-foreground">Destaques</h3>
                <p className="text-[11px] text-muted-foreground">O que torna este projeto unico</p>
              </div>
            </div>

            <ul className="space-y-1">
              {highlights!.map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Services */}
        {hasServices && (
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                  <Layers className="h-3.5 w-3.5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground">Servicos</h3>
                  <p className="text-[11px] text-muted-foreground">Escopo do projeto</p>
                </div>
              </div>
              <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {services!.length}
              </span>
            </div>

            <div className="space-y-1">
              {services!.map((item, i) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/50"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-muted text-[10px] font-bold tabular-nums text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

      <div className="flex items-center gap-3.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-foreground">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
            {label}
          </p>
          <p className="mt-0.5 text-base font-bold tracking-tight text-foreground">{value}</p>
        </div>
      </div>
    </div>
  )
}
