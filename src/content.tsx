import { CentroidViz } from "@/components/viz/CentroidViz";
import { DistributionViz } from "@/components/viz/DistributionViz";
import { DensityViz } from "@/components/viz/DensityViz";
import { HierarchicalViz } from "@/components/viz/HierarchicalViz";
import { GraphViz } from "@/components/viz/GraphViz";
import type { ComponentType } from "react";

export type Family = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  paragraphs: string[];
  goodFor: string;
  badFor: string;
  reference: string;
  Viz: ComponentType;
};

export const families: Family[] = [
  {
    id: "centroid",
    eyebrow: "01 — Центроидни",
    title: "Минимизиране до център",
    description: "Всеки клъстер се представя от центроид. Точките се групират по най-близък център.",
    paragraphs: [
      "k-means (Lloyd, 1957/1982; MacQueen, 1967) редува присвояване на точки и обновяване на центроиди като средни стойности. Сложност: O(nkd).",
      "Подходящ за изпъкнали и балансирани клъстери. Чувствителен към шум и начална инициализация. Изисква предварително k.",
    ],
    goodFor: "Големи данни с изпъкнали, сходни по размер клъстери. Бърза обработка.",
    badFor: "Шум, сложни форми, неизвестно k.",
    reference: "Lloyd (1982); MacQueen (1967).",
    Viz: CentroidViz,
  },
  {
    id: "distribution",
    eyebrow: "02 — Разпределения",
    title: "Смес от вероятностни модели",
    description: "Данните се моделират като смеси от разпределения (GMM).",
    paragraphs: [
      "Gaussian Mixture Models използват Expectation-Maximization (Dempster et al., 1977) за оценка на параметри.",
      "Позволяват елиптични и припокриващи се клъстери с вероятностно присвояване.",
      "Ограничения: Гаусово предположение, висока сложност при голяма размерност, локални оптимуми.",
    ],
    goodFor: "Елиптични, припокриващи се клъстери. Вероятностни резултати.",
    badFor: "Негладки форми, висока размерност.",
    reference: "Dempster et al. (1977); McLachlan & Peel (2000).",
    Viz: DistributionViz,
  },
  {
    id: "density",
    eyebrow: "03 — Плътност",
    title: "Гъсти региони",
    description: "Клъстери са области с висока плътност, разделени от шум.",
    paragraphs: [
      "DBSCAN (Ester et al., 1996) използва ε и minPts за откриване на ядра и шум.",
      "HDBSCAN (Campello et al., 2013) премахва нуждата от глобален ε чрез йерархия на плътност.",
    ],
    goodFor: "Произволни форми, шум, неизвестен брой клъстери.",
    badFor: "Висока размерност, различни плътности (DBSCAN).",
    reference: "Ester et al. (1996); Campello et al. (2013).",
    Viz: DensityViz,
  },
  {
    id: "hierarchical",
    eyebrow: "04 — Йерархични",
    title: "Дърво от клъстери",
    description: "Създава се дендрограма от постепенно сливане на групи.",
    paragraphs: [
      "Агломеративните методи сливат най-близки клъстери според критерии (Ward, single, complete).",
      "Не изискват предварително k, но са O(n²–n³) и чувствителни към ранни грешки.",
    ],
    goodFor: "Малки данни, йерархична структура.",
    badFor: "Големи данни, шум.",
    reference: "Ward (1963).",
    Viz: HierarchicalViz,
  },
  {
    id: "graph",
    eyebrow: "05 — Графови",
    title: "Спектрална клъстеризация",
    description: "Клъстерите се извличат от спектъра на граф на сходство.",
    paragraphs: [
      "Лапласиан L = D − W се използва за спектрално вграждане (Shi & Malik, 2000; Ng et al., 2001).",
      "След вграждане се прилага k-means. Подходящо за сложни форми като пръстени.",
    ],
    goodFor: "Сложни форми, графови и изображенски данни.",
    badFor: "Големи плътни графи, скъпо изчисление.",
    reference: "Shi & Malik (2000); Ng et al. (2001).",
    Viz: GraphViz,
  },
];

export const demos = [
  {
    title: "Визуализация на K-means",
    blurb:
      "Стъпка по стъпка с няколко набора от данни, включително случаите, в които алгоритъмът се проваля. Класиката на Naftali Harris от 2014.",
    source: "naftaliharris.com",
    href: "https://www.naftaliharris.com/blog/visualizing-k-means-clustering/",
  },
  {
    title: "Визуализация на DBSCAN",
    blurb:
      "Плътностните клъстери растат от ядрени точки на живо, с контроли за ε и minPts.",
    source: "naftaliharris.com",
    href: "https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/",
  },
  {
    title: "Сравнение в scikit-learn",
    blurb:
      "Всички основни алгоритми върху шест форми набори от данни. Каноничната референтна снимка.",
    source: "scikit-learn.org",
    href: "https://scikit-learn.org/stable/auto_examples/cluster/plot_cluster_comparison.html",
  },
];

export const comparisonRows = [
  {
    family: "Центроидни (k-means)",
    shape: "Изпъкнала, подобен размер",
    noise: "Не",
    picksK: "Не",
    scales: "Да",
  },
  {
    family: "Базирани на разпределения (GMM)",
    shape: "Елиптична",
    noise: "Меко",
    picksK: "Чрез BIC / AIC",
    scales: "Умерено",
  },
  {
    family: "Базирани на плътност (DBSCAN/HDBSCAN)",
    shape: "Произволна",
    noise: "Да",
    picksK: "Да",
    scales: "Умерено",
  },
  {
    family: "Йерархични",
    shape: "Зависи от свързването",
    noise: "Не",
    picksK: "Не (дърво)",
    scales: "Не (≲ 10⁵)",
  },
  {
    family: "Графови (спектрални)",
    shape: "Произволна",
    noise: "Не",
    picksK: "Евристика на спектъра",
    scales: "Не (плътни)",
  },
];

export const references = [
  'S. P. Lloyd, "Least squares quantization in PCM," IEEE Transactions on Information Theory, vol. 28, no. 2, pp. 129–137, 1982.',
  'J. MacQueen, "Some methods for classification and analysis of multivariate observations," in Proc. 5th Berkeley Symposium on Mathematical Statistics and Probability, vol. 1, pp. 281–297, 1967.',
  'A. P. Dempster, N. M. Laird, and D. B. Rubin, "Maximum likelihood from incomplete data via the EM algorithm," Journal of the Royal Statistical Society, Series B, vol. 39, no. 1, pp. 1–38, 1977.',
  "G. J. McLachlan and D. Peel, Finite Mixture Models. New York: Wiley, 2000.",
  'M. Ester, H.-P. Kriegel, J. Sander, and X. Xu, "A density-based algorithm for discovering clusters in large spatial databases with noise," in Proc. KDD-96, pp. 226–231, 1996.',
  'R. J. G. B. Campello, D. Moulavi, and J. Sander, "Density-based clustering based on hierarchical density estimates," in Proc. PAKDD, pp. 160–172, 2013.',
  'J. H. Ward, "Hierarchical grouping to optimize an objective function," Journal of the American Statistical Association, vol. 58, no. 301, pp. 236–244, 1963.',
  'J. Shi and J. Malik, "Normalized cuts and image segmentation," IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 22, no. 8, pp. 888–905, 2000.',
  'A. Y. Ng, M. I. Jordan, and Y. Weiss, "On spectral clustering: Analysis and an algorithm," in Advances in Neural Information Processing Systems 14, pp. 849–856, 2001.',
];