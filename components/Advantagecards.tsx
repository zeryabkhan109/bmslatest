"use client";

import { useState } from "react";

interface Benefit {
  title: string;
  description: string;
  image: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "Mehr Kundenanfragen",
    description:
      "Eine erhöhte Sichtbarkeit sorgt für mehr qualifizierte Leads und potenzielle Neukunden.",
    image: "images/advantage-img1.webp",
  },
  {
    title: "Umsatzwachstum",
    description:
      "Durch gezielte Online-Marketing-Maßnahmen steigern wir deinen Umsatz nachhaltig und messbar.",
    image: "images/advantage-img2.webp",
  },
  {
    title: "Wettbewerbsvorteil",
    description:
      "Hebe dich von der Konkurrenz ab und positioniere dich als erste Wahl in deiner Branche.",
    image: "images/advantage-img3.webp",
  },
  {
    title: "Attraktivität als Arbeitgeber",
    description:
      "Eine starke Online-Präsenz hilft dir, qualifizierte Fachkräfte auf dich aufmerksam zu machen.",
    image: "images/advantage-img4.webp",
  },
  {
    title: "Nachhaltiger Erfolg",
    description:
      "Langfristige Strategien sorgen für kontinuierliches Wachstum – weit über kurzfristige Kampagnen hinaus.",
    image: "images/advantage-img5.webp",
  },
];

export default function AdvantageCards({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`md:flex items-stretch block justify-between md:flex-row flex-col gap-8 ${className}`}
    >
      <div className="flex flex-col md:w-1/2 w-full">
        {BENEFITS.map((benefit, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left w-full md:p-6 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
              active === i ? "bg-white/10" : "bg-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center justify-between">
              <p
                className={`xl:text-2xl text-sm xl:font-semibold md:tracking-normal -tracking-[0.14px] md:font-bold font-semibold leading-4.25 md:leading-4.75 xl:leading-8.25 transition-colors duration-300 ${
                  active === i ? "text-orange-1100" : "text-white/50"
                }`}
              >
                {benefit.title}
              </p>

              <img
                src="images/drop-arw.svg"
                alt="arrow"
                className={`w-5 h-5 transition-transform duration-300 ${
                  active === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className="grid transition-all duration-500 ease-in-out"
              style={{ gridTemplateRows: active === i ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`xl:text-base font-normal text-xs leading-4 xl:leading-5.5 text-grey-1100 mt-4 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="md:w-1/2 w-full relative rounded-2xl md:mt-0 mt-4 overflow-hidden shadow-4xl aspect-4/3">
        {BENEFITS.map((benefit, i) => (
          <div key={i} className="absolute inset-0 w-full h-full">
            <img
              src={benefit.image}
              alt={benefit.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
