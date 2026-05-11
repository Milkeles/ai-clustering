interface ComparisonRow {
  family: string;
  shape: string;
  noise: string;
  picksK: string;
  scales: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export function ComparisonTable({ rows }: Readonly<ComparisonTableProps>) {
  return (
    <div className="overflow-x-auto border border-border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="py-4 px-4 font-bold tracking-wider uppercase text-xs">
              Вид алгоритъм
            </th>
            <th className="py-4 px-4 font-bold tracking-wider uppercase text-xs">
              Форма
            </th>
            <th className="py-4 px-4 font-bold tracking-wider uppercase text-xs">
              Справяне с шум
            </th>
            <th className="py-4 px-4 font-bold tracking-wider uppercase text-xs">
              Автоматичен брой клъстери
            </th>
            <th className="py-4 px-4 font-bold tracking-wider uppercase text-xs">
              Добро мащабиране
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.family} className="border-t border-border">
              <td className="py-4 px-4 font-medium">{r.family}</td>
              <td className="py-4 px-4 text-muted-foreground">{r.shape}</td>
              <td className="py-4 px-4 text-muted-foreground">{r.noise}</td>
              <td className="py-4 px-4 text-muted-foreground">{r.picksK}</td>
              <td className="py-4 px-4 text-muted-foreground">{r.scales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}