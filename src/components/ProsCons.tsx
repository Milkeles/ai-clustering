interface ProsConsProps {
  goodFor: string;
  badFor: string;
}

export function ProsCons({ goodFor, badFor }: Readonly<ProsConsProps>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border max-w-4xl my-8">
      <div className="p-6 border-b md:border-b-0 md:border-r border-border">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
          Подходящ за
        </p>
        <p className="text-base text-foreground leading-relaxed">{goodFor}</p>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Ограничения
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          {badFor}
        </p>
      </div>
    </div>
  );
}