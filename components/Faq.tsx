"use client";

import { useRef, useEffect, useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: `Was macht eine SEO Agentur genau?`,
    answer: `Eine SEO-Agentur optimiert Ihre Website, damit sie in Suchmaschinen wie Google besser gefunden wird. Dazu gehören technische Optimierungen, Content-Erstellung, Keyword-Analyse und der Aufbau von Backlinks.`,
  },
  {
    id: 2,
    question: `Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?`,
    answer: `In der Regel sind erste Ergebnisse nach 3–6 Monaten sichtbar. Nachhaltige und deutliche Verbesserungen zeigen sich oft erst nach 6–12 Monaten, da SEO ein langfristiger Prozess ist.`,
  },
  {
    id: 3,
    question: `Was unterscheidet SEO von Google Ads?`,
    answer: `SEO sorgt für organische, also unbezahlte Sichtbarkeit in Suchergebnissen und wirkt langfristig. Google Ads sind bezahlte Anzeigen, die sofort sichtbar sind, aber nur so lange laufen, wie das Budget vorhanden ist.`,
  },
  {
    id: 4,
    question: `Wie wähle ich die richtigen Keywords für meine SEO Optimierung aus?`,
    answer: `Die Keyword-Auswahl basiert auf Suchvolumen, Wettbewerb und Relevanz für Ihr Angebot.`,
  },
  {
    id: 5,
    question: `Wie viel kostet SEO pro Monat?`,
    answer: `Die Kosten variieren je nach Umfang und Zielen.`,
  },
];

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={onToggle}
        className={`bg-black-1200 cursor-pointer flex gap-3 items-center px-6 py-4 w-full text-left
  transition-all duration-300 ease-in-out hover:bg-black-1300
  ${open ? "rounded-t-2xl rounded-b-none" : "rounded-2xl"}
  `}
      >
        <span className="flex-1 font-semibold text-base leading-4.75 md:leading-8.25 md:text-2xl text-white">
          {item.question}
        </span>

        <span className="size-8 flex items-center justify-center">
          <img
            src={open ? "images/minus.svg" : "images/plus.svg"}
            alt={open ? "minus icon" : "plus icon"}
            className="transition-all duration-300"
          />
        </span>
      </button>

      <div
        style={{
          maxHeight: height,
          opacity: open ? 1 : 0,
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div
          ref={contentRef}
          className="px-6 pt-3 pb-5 bg-black-1200 rounded-b-2xl"
        >
          <p className="text-base font-normal leading-5.5 text-white/80">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQs({ className = "" }: { className?: string }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className={`flex flex-col gap-4 xl:gap-6 ${className}`}>
      {FAQS.map((item) => (
        <FaqRow
          key={item.id}
          item={item}
          open={activeId === item.id}
          onToggle={() =>
            setActiveId((prev) => (prev === item.id ? null : item.id))
          }
        />
      ))}
    </div>
  );
}
