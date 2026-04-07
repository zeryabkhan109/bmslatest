"use client";

import { useState } from "react";

interface Benefit {
  length: number;
  title: string;
  description: string;
  description2?: string;
  image: string;
}

const BENEFITS: Benefit[] = [
  {
    title: "Deine SEO Agentur analysiert deine Website und Zielgruppe",
    description:
      "Der erste Schritt im SEO-Prozess ist eine detaillierte Analyse Ihrer Website sowie eine umfassende Zielgruppenanalyse. Eine SEO Agentur untersucht technische Aspekte, bestehende Inhalte und die aktuelle Sichtbarkeit in den Suchmaschinen. Gleichzeitig wird analysiert, wer Ihre potenziellen Kunden sind, welche Suchbegriffe sie verwenden und wie sie Ihre Website finden. Diese Informationen bilden die Grundlage für die Entwicklung einer maßgeschneiderten SEO Optimierung, die perfekt auf Ihre Unternehmensziele abgestimmt ist",
    image: "images/deine-agentur-img1.webp",
    length: 0,
  },
  {
    title:
      "Deine SEO Agentur entwickelt eine maßgeschneiderte SEO-Strategie für dich",
    description:
      "In der zweiten Phase entwickelt die SEO Agentur eine maßgeschneiderte SEO Optimierung, die auf den Ergebnissen der Analyse aufbaut. Diese Strategie beinhaltet die Auswahl der relevanten Keywords, technische Optimierungsmaßnahmen und Content-Strategien, die Ihre Website langfristig an die Spitze der Suchergebnisse bringen. Die Strategie wird individuell auf Ihre B",
    image: "images/deine-agentur-img2.webp",
    length: 0,
  },
  {
    title:
      "Deine SEO Agentur setzt OnPage- und OffPage-Optimierungen gezielt um",
    description:
      "Nach der strategischen Planung erfolgt die Implementierung der SEO-Maßnahmen. Hierzu gehören OnPage-Optimierungen wie die Verbesserung der Seitengeschwindigkeit, die Optimierung von Meta-Tags, die Integration von Keywords in den Content und die Optimierung der Seitenstruktur. Gleichzeitig werden OffPage-Optimierungen durchgeführt, wie der Aufbau von hochwertigen Backlinks und die Erhöhung der Sichtbarkeit in externen Quellen. Diese umfassenden Optimierungen sorgen dafür, dass Ihre Website sowohl technisch als auch inhaltlich optimal aufgestellt ist.",
    image: "images/deine-agentur-img3.webp",
    length: 0,
  },
  {
    title:
      "Deine SEO Agentur überwacht und analysiert deine SEO-Ergebnisse kontinuierlich",
    description:
      "SEO ist ein fortlaufender Prozess, der kontinuierliches Monitoring erfordert. In dieser Phase überwacht die SEO Agentur die Leistung Ihrer Website in den Suchmaschinen, analysiert den Traffic und wertet die Rankings für die relevanten Keywords aus. Anhand dieser Daten wird regelmäßig ein Reporting erstellt, das die Fortschritte und die erzielten Erfolge aufzeigt. So bleiben Sie stets über den Erfolg der SEO-Maßnahmen informiert und können bei Bedarf Anpassungen vornehmen.",
    image: "images/deine-agentur-img4.webp",
    length: 0,
  },
  {
    title: "Deine SEO Agentur skaliert deine Strategie für maximalen Erfolg",
    description:
      "Basierend auf den Erkenntnissen aus dem Monitoring und Reporting wird der SEO-Prozess in der letzten Phase weiter skaliert. Die SEO Agentur passt die Strategien und Maßnahmen an, um das Wachstum Ihrer Website kontinuierlich zu fördern. Durch die Skalierung der erfolgreichen Maßnahmen können Sie langfristig noch mehr organischen Traffic generieren, Ihre Sichtbarkeit weiter steigern und Ihre Position im Wettbewerb stärken.",
    description2:
      "Während SEO eine langfristige Strategie ist, kannst du mit Google Ads schneller Ergebnisse erzielen und sofort die Sichtbarkeit deiner Marke steigern. Klicke hier, um mehr darüber zu erfahren.",
    image: "images/deine-agentur-img5.webp",
    length: 1,
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
                className={`xl:text-2xl text-sm font-semibold leading-4.75 xl:leading-8.25 transition-colors duration-300 ${
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

                {/* Sirf last item ke liye */}
                {i === BENEFITS.length - 1 && benefit.description2 && (
                  <p
                    className={`xl:text-base font-normal text-xs leading-4 xl:leading-5.5 text-grey-1100 italic mt-4 transition-opacity duration-500 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {benefit.description2}
                  </p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="md:w-1/2 w-full relative rounded-2xl md:mt-0 mt-4  overflow-hidden shadow-4xl aspect-4/3">
        {BENEFITS.map((benefit, i) => (
          <img
            key={i}
            src={benefit.image}
            alt={benefit.title}
            className={`absolute inset-0 w-full h-full object-cover shadow-4xl transition-opacity duration-500 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
