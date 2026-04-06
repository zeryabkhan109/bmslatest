"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  more: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: `Google Ads`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
  },
  {
    id: 2,
    question: `Social Media Marketing`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
  },
  {
    id: 3,
    question: `Videoproduktion`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
  },
  {
    id: 4,
    question: `UI/UX Webdesign`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
  },
  {
    id: 5,
    question: `Conversion Optimierung`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
  },
  {
    id: 6,
    question: `Public Relations`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
  },
  {
    id: 7,
    question: `TV-Werbung`,
    answer: `Mit der Suchmaschinenoptimierung von Benchmark Media Solution wirst du in Hamburg besser gefunden. Wir verbessern deine Rankings bei Google und bringen qualifizierten Traffic auf deine Website. So erreichst du mehr potenzielle Kunden und steigert deinen Umsatz nachhaltig.`,
    more: `Mehr erfahren`,
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
        className={`bg-black-1200 cursor-pointer flex gap-3 items-center px-6 lg:py-4 md:py-4.5 py-5.5 w-full text-left
  transition-all duration-300 ease-in-out hover:bg-black-1300
  ${open ? "rounded-2xl" : "rounded-2xl"}
  `}
      >
        <span className="flex-1 font-semibold md:text-xl text-base leading-[124%] md:leading-8.25 lg:text-2xl text-white-1100">
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
        <div ref={contentRef} className="px-6 pt-4 md:pb-5">
          <p className="md:text-base text-xs font-normal md:leading-5.5 leading-[140%] text-white/80">
            {item.answer}
          </p>
          <Link
            href={"#"}
            className="text-xs mt-4 font-light italic inline-flex items-center underline leading-[140%] text-white-1100"
          >
            {item.more}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HamburgFaq({ className = "" }: { className?: string }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
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
