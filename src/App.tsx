import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { CardGrid } from "@/components/CardGrid";
import { ProsCons } from "@/components/ProsCons";
import { ComparisonTable } from "@/components/ComparisonTable";
import { families, demos, comparisonRows, references } from "@/content";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />

        {/* INTRODUCTION */}
        <Section
          id="introduction"
          eyebrow="Въведение"
          title="Задачата"
          description="Намиране на групи в данни без етикети."
        >
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Клъстеризацията се използва в машинното обучение без надзор
              за групиране на неетикирани данни. Клъстеризирането
              има няколко основни приложения: сегментация на клиенти,
              сегментация на изображения, организиране на документи, откриване
              на аномалии и изследване на нови набори от данни.
            </p>
            <p>
              Изборът между алгоритмите рядко зависи от приложната област. Той
              зависи от <em>геометрията</em> на структурата. Това може да се определи
              като си отговорим на няколко основни въпроса -
              сферични ли са клъстерите или с произволна форма? Подобни по
              размер или силно небалансирани? Знаем ли броя им предварително?
              Шумът проблем ли е или просто несъществен? Има ли йерархия в данните?
            </p>
            <p>
              Тази страница обяснява през петте основни семейства алгоритми,
              какво всяко прави добре и къде не се представя добре.
            </p>
          </div>
        </Section>

        {/* FAMILIES */}
        {families.map(({ id, eyebrow, title, description, paragraphs, goodFor, badFor, reference, Viz }) => (
          <Section
            key={id}
            id={id}
            eyebrow={eyebrow}
            title={title}
            description={description}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Viz />

            <ProsCons goodFor={goodFor} badFor={badFor} />

            <p className="text-sm text-muted-foreground mt-8 italic">{reference}</p>
          </Section>
        ))}

        {/* DEMOS */}
        <Section
          id="demos"
          eyebrow="Демонстрации"
          title="Опитай в действие"
          description="Най-чистият начин да изградиш интуиция е да поиграеш с алгоритмите."
        >
          <CardGrid columns={3}>
            {demos.map(({ title, blurb, source, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start justify-between gap-3">
                      <span>{title}</span>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={20}
                        strokeWidth={2}
                        className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                      />
                    </CardTitle>
                    <CardDescription>{blurb}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                      {source}
                    </p>
                  </CardFooter>
                </Card>
              </a>
            ))}
          </CardGrid>
        </Section>

        {/* COMPARISON */}
        <Section
          id="comparison"
          eyebrow="Сравнение"
          title="На пръв поглед"
          description="Кога кое семейство си струва."
        >
          <ComparisonTable rows={comparisonRows} />
        </Section>

        {/* REFERENCES */}
        <Section
          id="references"
          eyebrow="Източници"
          title="Литература"
          description="Оригиналните публикации зад всяко семейство."
        >
          <ol className="max-w-3xl space-y-4 text-sm text-muted-foreground leading-relaxed list-decimal pl-5">
            {references.map((r, i) => (
              <li key={i} className="pl-2">
                {r}
              </li>
            ))}
          </ol>
        </Section>
      </main>
      <Footer />
    </>
  );
}