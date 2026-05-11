import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import reportPdf from "@/assets/clustering-report.pdf";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-8 md:px-18 lg:px-26 py-32 scroll-mt-20 overflow-hidden"
    >
      <HeroBackdrop />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-8">
          Реферат · Машинно обучение без надзор
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-10 max-w-5xl leading-[1.05]">
          Алгоритми за клъстеризация
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Кратко въведение в петте основни подхода, които откриват скрита
          структура в неетикирани данни.
        </p>
        <div className="flex flex-wrap justify-center gap-4 py-4">
          <Button asChild size="lg">
            <a href={reportPdf} download="clustering-report.pdf">
              <HugeiconsIcon icon={Download01Icon} size={18} strokeWidth={2} />
              Изтегли реферата (PDF)
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#introduction">
              Към съдържанието
              <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={2} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  const points = [
    { x: 15, y: 20, color: "var(--primary)", delay: 0 },
    { x: 22, y: 28, color: "var(--primary)", delay: 0.3 },
    { x: 10, y: 30, color: "var(--primary)", delay: 0.6 },
    { x: 18, y: 15, color: "var(--primary)", delay: 0.9 },
    { x: 25, y: 22, color: "var(--primary)", delay: 1.2 },
    { x: 80, y: 25, color: "var(--secondary)", delay: 0.2 },
    { x: 88, y: 18, color: "var(--secondary)", delay: 0.5 },
    { x: 75, y: 30, color: "var(--secondary)", delay: 0.8 },
    { x: 85, y: 32, color: "var(--secondary)", delay: 1.1 },
    { x: 92, y: 26, color: "var(--secondary)", delay: 1.4 },
    { x: 45, y: 80, color: "var(--chart-3)", delay: 0.1 },
    { x: 52, y: 85, color: "var(--chart-3)", delay: 0.4 },
    { x: 48, y: 75, color: "var(--chart-3)", delay: 0.7 },
    { x: 58, y: 82, color: "var(--chart-3)", delay: 1.0 },
    { x: 42, y: 88, color: "var(--chart-3)", delay: 1.3 },
  ];

  return (
    <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true">
      {points.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: p.color,
            animation: `drift 4s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes drift {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(20px, -20px); }
        }
      `}</style>
    </div>
  );
}