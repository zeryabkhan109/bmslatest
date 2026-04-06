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
    question: `Was ist SEO und wie funktioniert es?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 2,
    question: `Warum sollte ich eine SEO Agentur für meine Website beauftragen?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 3,
    question: `Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 4,
    question: `Wie finde ich die richtige SEO Agentur für mein Unternehmen?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 5,
    question: `Was kostet SEO?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 6,
    question: `Warum ist SEO wichtig für mein Unternehmen?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 7,
    question: `Was umfasst die Suchmaschinenoptimierung?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 8,
    question: `Kann SEO auch für lokale Unternehmen in Hamburg helfen?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 9,
    question: `Was ist der Unterschied zwischen OnPage- und OffPage-SEO?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
  },
  {
    id: 10,
    question: `Wie messe ich den Erfolg meiner SEO-Strategie?`,
    answer: `Eine SEO Agentur unterstützt Unternehmen dabei, ihre Website für Suchmaschinen zu optimieren, um bessere Platzierungen in den organischen Suchergebnissen zu erzielen. Dabei kommen verschiedene SEO Optimierungen wie OnPage-Optimierung, OffPage-SEO, technische SEO und Content-Optimierung zum Einsatz. Unsere SEO Agentur entwickelt maßgeschneiderte Lösungen, um deinen organischen Traffic zu steigern und langfristige Ergebnisse zu erzielen.`,
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
  ${open ? "rounded-2xl" : "rounded-2xl"}
  `}
      >
        <span className="flex-1 font-semibold lg:text-2xl md:text-xl text-base md:leading-[140%] leading-[124%] lg:leading-8.25 text-white">
          {item.question}
        </span>
        <span className="relative size-8 flex items-center justify-center">
          <img
            src="images/plus.svg"
            alt="plus icon"
            className={`absolute transition-all duration-300 ease-in-out ${
              open
                ? "rotate-90 opacity-0 scale-75"
                : "rotate-0 opacity-100 scale-100"
            }`}
          />

          <img
            src="images/minus.svg"
            alt="minus icon"
            className={`absolute transition-all duration-300 ease-in-out ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
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
        <div ref={contentRef} className="px-6 pt-4">
          <p className="text-base font-normal leading-5.5 text-white/80">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function RegionalFaq({ className = "" }: { className?: string }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div
      className={`flex flex-col lg:gap-4 md:gap-6 gap-2 xl:gap-6 ${className}`}
    >
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
