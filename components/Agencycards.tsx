"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Benefit {
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  action: string;
}

const BENEFITS: Benefit[] = [
  {
    title:
      "Wie deine SEO Agentur in Hamburg deine Website in einen Vertriebskanal verwandelt",
    description:
      "SEO ist mehr als nur Sichtbarkeit – es ist ein Vertriebskanal, der rund um die Uhr für dich arbeitet. Mit gezielter Suchmaschinenoptimierung sorgt deine SEO Agentur in Hamburg dafür, dass deine Website potenzielle Kunden und Leads anzieht, während du dich auf dein Kerngeschäft konzentrierst.",
    description2:
      "Durch effektive SEO-Maßnahmen wird deine Website bei relevanten Suchanfragen sichtbar und liefert dir kontinuierlich qualifizierte Anfragen. Besonders in Hamburg, wo die Konkurrenz in vielen Branchen groß ist, verschafft dir eine strategische Suchmaschinenoptimierung einen entscheidenden Vorteil.Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    description3:
      "Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    action: "Jetzt anfragen",
  },
  {
    title: "SEO Ergebnisse, die wirken",
    description:
      "SEO ist mehr als nur Sichtbarkeit – es ist ein Vertriebskanal, der rund um die Uhr für dich arbeitet. Mit gezielter Suchmaschinenoptimierung sorgt deine SEO Agentur in Hamburg dafür, dass deine Website potenzielle Kunden und Leads anzieht, während du dich auf dein Kerngeschäft konzentrierst.",
    description2:
      "Durch effektive SEO-Maßnahmen wird deine Website bei relevanten Suchanfragen sichtbar und liefert dir kontinuierlich qualifizierte Anfragen. Besonders in Hamburg, wo die Konkurrenz in vielen Branchen groß ist, verschafft dir eine strategische Suchmaschinenoptimierung einen entscheidenden Vorteil.Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    description3:
      "Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    action: "Jetzt anfragen",
  },
  {
    title: "Klare Berichte für deinen SEO Erfolg",
    description:
      "SEO ist mehr als nur Sichtbarkeit – es ist ein Vertriebskanal, der rund um die Uhr für dich arbeitet. Mit gezielter Suchmaschinenoptimierung sorgt deine SEO Agentur in Hamburg dafür, dass deine Website potenzielle Kunden und Leads anzieht, während du dich auf dein Kerngeschäft konzentrierst.",
    description2:
      "Durch effektive SEO-Maßnahmen wird deine Website bei relevanten Suchanfragen sichtbar und liefert dir kontinuierlich qualifizierte Anfragen. Besonders in Hamburg, wo die Konkurrenz in vielen Branchen groß ist, verschafft dir eine strategische Suchmaschinenoptimierung einen entscheidenden Vorteil.Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    description3:
      "Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    action: "Jetzt anfragen",
  },
  {
    title: "Nachhaltige SEO-Investitionen",
    description:
      "SEO ist mehr als nur Sichtbarkeit – es ist ein Vertriebskanal, der rund um die Uhr für dich arbeitet. Mit gezielter Suchmaschinenoptimierung sorgt deine SEO Agentur in Hamburg dafür, dass deine Website potenzielle Kunden und Leads anzieht, während du dich auf dein Kerngeschäft konzentrierst.",
    description2:
      "Durch effektive SEO-Maßnahmen wird deine Website bei relevanten Suchanfragen sichtbar und liefert dir kontinuierlich qualifizierte Anfragen. Besonders in Hamburg, wo die Konkurrenz in vielen Branchen groß ist, verschafft dir eine strategische Suchmaschinenoptimierung einen entscheidenden Vorteil.Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    description3:
      "Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    action: "Jetzt anfragen",
  },
  {
    title: "Alles für SEO aus einer Hand",
    description:
      "SEO ist mehr als nur Sichtbarkeit – es ist ein Vertriebskanal, der rund um die Uhr für dich arbeitet. Mit gezielter Suchmaschinenoptimierung sorgt deine SEO Agentur in Hamburg dafür, dass deine Website potenzielle Kunden und Leads anzieht, während du dich auf dein Kerngeschäft konzentrierst.",
    description2:
      "Durch effektive SEO-Maßnahmen wird deine Website bei relevanten Suchanfragen sichtbar und liefert dir kontinuierlich qualifizierte Anfragen. Besonders in Hamburg, wo die Konkurrenz in vielen Branchen groß ist, verschafft dir eine strategische Suchmaschinenoptimierung einen entscheidenden Vorteil.Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    description3:
      "Ob dein Fokus auf Neukundengewinnung oder Umsatzsteigerung liegt – mit der richtigen Suchmaschinenoptimierung wird deine Website zu einem unschlagbaren Vertriebspartner. Verlasse dich auf die Expertise deiner SEO Agentur, um dieses Potenzial optimal auszuschöpfen.",
    action: "Jetzt anfragen",
  },
];

export default function AdvantageCards({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className={` ${className}`}>
      <div className="flex flex-col w-full">
        {BENEFITS.map((benefit, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left w-full md:p-6 lg:p-4 px-4 py-6  rounded-2xl transition-all duration-300 cursor-pointer ${
              active === i ? "bg-white/10" : "bg-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center justify-between">
              <p
                className={`xl:text-2xl lg:text-sm md:text-xl text-base font-semibold leading-[140%] xl:leading-8.25 transition-colors duration-300 ${
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
                  className={`font-normal text-xs leading-[140%] text-grey-1100 mt-4 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {benefit.description}
                </p>
                <p
                  className={`font-normal text-xs leading-[140%] text-grey-1100  mt-4 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {benefit.description2}
                </p>
                <p
                  className={`font-normal text-xs leading-[140%] text-grey-1100 mt-4 transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {benefit.description3}
                </p>
                <Link
                  href={"#"}
                  className="text-white-1100 mt-4 font-normal md:text-base text-sm md:w-auto w-full leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                >
                  {benefit.action}
                </Link>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
