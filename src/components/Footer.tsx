import { Logo } from "@/components/Logo";
import reportPdf from "@/assets/clustering-report.pdf";


const navLinks = [
  { label: "Въведение", href: "#introduction" },
  { label: "Семейства", href: "#centroid" },
  { label: "Демо", href: "#demos" },
  { label: "Сравнение", href: "#comparison" },
  { label: "Източници", href: "#references" },
];

const externalLinks = [
  { label: "GitHub", href: "https://github.com/milkeles" },
  { label: "LinkedIn", href: "https://linkedin.com/in/milkeles" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Branding */}
        <div className="flex flex-col items-start gap-3">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Кратко въведение в петте основни семейства алгоритми за
            клъстеризация.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-1">
            Навигация
          </p>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact + social */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-1">
            Връзка
          </p>
          <a
            href="mailto:hristo@fervorgames.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hristo@fervorgames.com
          </a>
          <div className="flex gap-4 mt-1">
            {externalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hristo Hristov.
        </p>
        <a href={reportPdf} download="clustering-report.pdf"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          Изтегли реферата (PDF)
        </a>
      </div>
    </footer>
  );
}