import { vizWrapper } from "./shared";

export function GraphViz() {
  const nodes: [number, number][] = [
    [90, 80], [130, 100], [110, 60], [70, 110],
    [380, 90], [420, 110], [400, 60], [440, 80],
    [220, 200], [260, 220], [200, 230], [250, 190],
  ];
  const edgesA: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3]];
  const edgesB: [number, number][] = [[4, 5], [4, 6], [4, 7], [5, 7], [6, 7]];
  const edgesC: [number, number][] = [[8, 9], [8, 10], [9, 11], [10, 11], [8, 11]];
  const bridges: [number, number][] = [[1, 11], [5, 11]];

  return (
    <svg viewBox="0 0 500 280" className={vizWrapper}>
      <title>Граф с три общности и слаби мостове между тях</title>
      {bridges.map(([a, b], i) => (
        <line
          key={`br${i}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--muted-foreground)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.5"
        />
      ))}
      {[...edgesA, ...edgesB, ...edgesC].map(([a, b], i) => (
        <line
          key={`ed${i}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--foreground)"
          strokeWidth="1.2"
          opacity="0.5"
        />
      ))}
      {nodes.slice(0, 4).map(([x, y], i) => (
        <circle key={`na${i}`} cx={x} cy={y} r="5" fill="var(--primary)" />
      ))}
      {nodes.slice(4, 8).map(([x, y], i) => (
        <circle key={`nb${i}`} cx={x} cy={y} r="5" fill="var(--secondary)" />
      ))}
      {nodes.slice(8, 12).map(([x, y], i) => (
        <circle key={`nc${i}`} cx={x} cy={y} r="5" fill="var(--chart-3)" />
      ))}
    </svg>
  );
}