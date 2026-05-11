import { vizWrapper } from "./shared";

export function DensityViz() {
  return (
    <svg viewBox="0 0 500 280" className={vizWrapper}>
      <title>Два полумесеца плюс шум — каноничният DBSCAN пример</title>
      {/* Top half-moon */}
      {Array.from({ length: 20 }, (_, i) => {
        const t = (Math.PI * i) / 19;
        const x = 180 + 100 * Math.cos(t);
        const y = 130 - 60 * Math.sin(t);
        return <circle key={`g${i}`} cx={x} cy={y} r="3.5" fill="var(--primary)" />;
      })}
      {/* Bottom half-moon */}
      {Array.from({ length: 20 }, (_, i) => {
        const t = (Math.PI * i) / 19;
        const x = 280 + 100 * Math.cos(-t);
        const y = 170 - 60 * Math.sin(-t);
        return <circle key={`h${i}`} cx={x} cy={y} r="3.5" fill="var(--secondary)" />;
      })}
      {/* Noise points */}
      {[[60, 40], [440, 60], [40, 240], [460, 220], [420, 30], [80, 260], [460, 140], [50, 140]].map(
        ([x, y], i) => (
          <circle key={`n${i}`} cx={x} cy={y} r="3" fill="var(--muted-foreground)" opacity="0.6" />
        )
      )}
    </svg>
  );
}