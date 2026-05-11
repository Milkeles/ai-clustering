import { vizWrapper } from "./shared";

export function HierarchicalViz() {
  return (
    <svg viewBox="0 0 500 280" className={vizWrapper}>
      <title>Дендрограма от агломеративно клъстеризиране</title>
      <g stroke="var(--foreground)" strokeWidth="1.5" fill="none">
        <path d="M 60 240 L 60 200 L 100 200 L 100 240" />
        <path d="M 140 240 L 140 210 L 180 210 L 180 240" />
        <path d="M 80 200 L 80 160 L 160 160 L 160 210" />
        <path d="M 240 240 L 240 220 L 280 220 L 280 240" />
        <path d="M 320 240 L 320 215 L 360 215 L 360 240" />
        <path d="M 260 220 L 260 175 L 340 175 L 340 215" />
        <path d="M 120 160 L 120 100 L 300 100 L 300 175" />
        <path d="M 400 240 L 400 130 L 210 130 L 210 100" />
      </g>
      {[60, 100, 140, 180, 240, 280, 320, 360, 400].map((x, i) => (
        <circle key={i} cx={x} cy="248" r="3.5" fill="var(--primary)" />
      ))}
    </svg>
  );
}