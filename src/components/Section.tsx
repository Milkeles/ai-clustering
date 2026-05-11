import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className }: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className="border-t border-border scroll-mt-20 w-full"
    >
      <div
        className={cn(
          "py-24 md:py-32 px-8 md:px-18 lg:px-26 mx-auto max-w-7xl",
          className
        )}
      >
        <p className="text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground mb-6">
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight mb-8 max-w-4xl">
          {title}
        </h2>
        {description && (
          <p className="pb-12 text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}