import { vizWrapper } from "./shared";

export function CentroidViz() {
  const c1 = [[80, 60], [110, 80], [90, 95], [120, 65], [100, 75], [75, 85], [115, 100], [95, 55]];
  const c2 = [[380, 70], [410, 85], [395, 100], [420, 65], [400, 90], [375, 75], [430, 95]];
  const c3 = [[230, 200], [260, 215], [245, 195], [275, 210], [250, 225], [225, 210]];
  const centroids: [number, number][] = [[100, 80], [400, 85], [248, 210]];

  return (
    <svg viewBox="0 0 500 280" className={vizWrapper}>
      <title>Три изпъкнали клъстера с центроиди</title>
      {c1.map(([x, y], i) => (
        <circle key={`a${i}`} cx={x} cy={y} r="4" fill="var(--primary)" opacity="0.75" />
      ))}
      {c2.map(([x, y], i) => (
        <circle key={`b${i}`} cx={x} cy={y} r="4" fill="var(--secondary)" opacity="0.75" />
      ))}
      {c3.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r="4" fill="var(--chart-3)" opacity="0.75" />
      ))}
      {centroids.map(([x, y], i) => (
        <g key={`x${i}`} stroke="var(--foreground)" strokeWidth="2.5">
          <line x1={x - 7} y1={y - 7} x2={x + 7} y2={y + 7} />
          <line x1={x + 7} y1={y - 7} x2={x - 7} y2={y + 7} />
        </g>
      ))}
    </svg>
  );
}