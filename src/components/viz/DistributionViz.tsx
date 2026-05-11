import { vizWrapper } from "./shared";

export function DistributionViz() {
  return (
    <svg viewBox="0 0 500 280" className={vizWrapper}>
      <title>Смес от Гаусови разпределения с елиптични контури</title>
      {/* Cluster 1 — horizontal */}
      <ellipse cx="120" cy="90" rx="60" ry="35" fill="var(--primary)" opacity="0.12" stroke="var(--primary)" strokeWidth="1" />
      <ellipse cx="120" cy="90" rx="40" ry="22" fill="var(--primary)" opacity="0.2" stroke="var(--primary)" strokeWidth="1" />
      {/* Cluster 2 — rotated */}
      <ellipse cx="380" cy="100" rx="50" ry="30" fill="var(--secondary)" opacity="0.12" stroke="var(--secondary)" strokeWidth="1" transform="rotate(25 380 100)" />
      <ellipse cx="380" cy="100" rx="34" ry="18" fill="var(--secondary)" opacity="0.2" stroke="var(--secondary)" strokeWidth="1" transform="rotate(25 380 100)" />
      {/* Cluster 3 — elongated */}
      <ellipse cx="250" cy="200" rx="70" ry="28" fill="var(--chart-3)" opacity="0.12" stroke="var(--chart-3)" strokeWidth="1" transform="rotate(-12 250 200)" />
      <ellipse cx="250" cy="200" rx="46" ry="16" fill="var(--chart-3)" opacity="0.22" stroke="var(--chart-3)" strokeWidth="1" transform="rotate(-12 250 200)" />
      {/* Sample points inside each ellipse */}
      {[[100, 85], [130, 95], [115, 75], [145, 85], [95, 100], [125, 82]].map(([x, y], i) => (
        <circle key={`d${i}`} cx={x} cy={y} r="3" fill="var(--primary)" />
      ))}
      {[[365, 95], [395, 105], [380, 85], [400, 115], [370, 110]].map(([x, y], i) => (
        <circle key={`e${i}`} cx={x} cy={y} r="3" fill="var(--secondary)" />
      ))}
      {[[220, 200], [260, 205], [245, 195], [280, 210], [235, 210]].map(([x, y], i) => (
        <circle key={`f${i}`} cx={x} cy={y} r="3" fill="var(--chart-3)" />
      ))}
    </svg>
  );
}