import { WhatsAppFAB } from "@/components/WhatsAppFAB"
import { Instagram, Linkedin, Facebook } from "lucide-react"

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Servicos", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="font-serif text-base font-bold text-primary-foreground">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base leading-tight font-semibold text-foreground">
                Arq. Adélia
              </span>
              <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Ibiapina
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Arq. Adélia Ibiapina — Todos os direitos reservados."}
          </p>
        </div>
      </div>
      <WhatsAppFAB />
    </footer>
  )
}
