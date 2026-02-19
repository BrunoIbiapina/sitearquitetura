import { MapPin, Ruler, Calendar, Check } from "lucide-react"

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
  return (
    <section className="mt-14 grid gap-10 lg:grid-cols-2">
      {/* Info cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {location && (
          <InfoCard icon={<MapPin className="h-5 w-5" />} label="Local" value={location} />
        )}
        {areaM2 && (
          <InfoCard icon={<Ruler className="h-5 w-5" />} label="Área" value={`${areaM2} m²`} />
        )}
        {year && (
          <InfoCard icon={<Calendar className="h-5 w-5" />} label="Ano" value={year.toString()} />
        )}
      </div>

      {/* Serviços e destaques */}
      <div className="grid gap-8">
        {services?.length ? (
          <ListBlock title="Serviços executados" items={services} />
        ) : null}

        {highlights?.length ? (
          <ListBlock title="Destaques do projeto" items={highlights} />
        ) : null}
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
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-accent">{icon}</div>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="font-semibold text-foreground">{value}</p>
        </div>
      </div>
    </div>
  )
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="font-serif text-lg font-bold">{title}</h3>

      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <Check className="mt-0.5 h-4 w-4 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}