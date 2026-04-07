"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SLIDE_IMAGES = [
  "images/case-study-img1.webp",
  "images/case-study-img2.webp",
  "images/case-study-img3.webp",
  "images/case-study-img4.webp",
  "images/case-study-img5.webp",
];

interface CaseStudy {
  image: string;
  title: string;
  branche: string;
  service: string;
  herausforderungen: string;
  massnahmen: string;
  massnahmenLabel?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    image: SLIDE_IMAGES[0],
    title: "Mit SEO und Digital Marketing zu +352% Umsatzsteigerung!",
    branche: "Nachhaltige Pflegeprodukte.",
    service: "SEO",
    herausforderungen:
      "Niedrige Sichtbarkeit in Suchmaschinen, wenig organischer Traffic, was zu geringen Verkaufszahlen führte",
    massnahmenLabel: "Content-Maßnahmen:",
    massnahmen:
      "Erstellung zielgruppenspezifischer Landingpages und informativer Blogartikel, Aufbau qualitativ hochwertiger Backlinks durch Partnerschaften mit relevanten Akteuren, Verbesserung der Website-Struktur und Optimierung der Ladezeiten für mobile Nutzer, Durchführung einer umfassenden Keyword-Analyse",
  },
  {
    image: SLIDE_IMAGES[1],
    title: "267% mehr Anfragen durch lokales SEO und Online Marketing!",
    branche: "Gebäudereinigung",
    service: "Local SEO",
    herausforderungen:
      "Geringe lokale Sichtbarkeit, wenige Kundenanfragen über die Website.",
    massnahmenLabel: "Content-Maßnahmen:",
    massnahmen:
      "Erstellung lokaler Landingpages für verschiedene Dienstleistungen und Regionen, Generierung von Backlinks durch lokale Partnerschaften und Verzeichniseinträge, Optimierung des Online-Profils, Anpassung der Inhalte basierend auf lokalen Suchanfragen.",
  },
  {
    image: SLIDE_IMAGES[2],
    title: "15 zusätzliche Aufträge pro Monat durch Google Ads Marketing!",
    branche: "Kfz-Gutachter",
    service: "Google Ads und Meta Ads",
    herausforderungen:
      "Abhängigkeit von Empfehlungen mit unregelmäßigen Anfragen, Bedarf an verbesserter Sichtbarkeit in der Region.",
    massnahmenLabel: "Google Ads Maßnahmen:",
    massnahmen:
      "Optimierte Google Ads für lokale Suchanfragen, Zielgerichtete Anzeigen mit relevanten Angeboten, Geografische Zielgruppen- und Bidding-Strategien, Laufende Analyse und Anpassung zur Optimierung der Klickkosten",
  },
  {
    image: SLIDE_IMAGES[3],
    title:
      "113 neue Kundenanfragen pro Monat dank SEO Marketing und Videoproduktion",
    branche: "Maschinenbauunternehmen",
    service: "SEO und Social Media",
    herausforderungen:
      "Schwierigkeiten bei der Gewinnung neuer Klienten, kaum Sichtbarkeit in den Suchmaschinen.",
    massnahmenLabel: "Content-Maßnahmen:",
    massnahmen:
      "Erstellung von Blogartikeln zu relevanten Themen und FAQs für Patienten, Aufbau von Backlinks durch Kooperationen mit zahnmedizinischen Partnern, Erklärvideos und Patientenbewertungen, Fokus auf lokale Suchbegriffe.",
  },
  {
    image: SLIDE_IMAGES[4],
    title:
      "Alle offenen Stellen innerhalb von 3 Monaten besetzt dank SEO und Vorstellungsvideo!",
    branche: "Zahnarztpraxis",
    service: "SEO und Videoproduktion",
    herausforderungen:
      "Schwierigkeiten, qualifizierte Fachkräfte zu finden, offene Stellen blieben unbesetzt, was zu Engpässen führte.",
    massnahmenLabel: "Content-Maßnahmen:",
    massnahmen: `Suchmaschinenoptimierte Stellenanzeigen auf der Karriereseite, relevante Suchbegriffe wie \u201eZahnmedizinische Fachangestellte [Stadtname]\u201c, kurze Videos mit Einblicken in den Praxisalltag und das Team, Backlink-Strategie mit Jobportalen und branchenspezifischen Plattformen`,
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="flex gap-5 md:items-end items-start h-full md:pr-4 md:px-0 px-4 md:flex-row flex-col">
      <div className="relative rounded-xl overflow-hidden md:w-94.75 w-full h-65 md:h-81.25  flex items-center justify-center  shadow-4xl px-5 py-5 md:py-10 xl:py-7 bg-[url(/images/case-studybg.png)] bg-no-repeat bg-cover">
        <img
          src={study.image}
          alt={study.title}
          className="w-full xl:h-62.25 object-cover h-54.5 md:h-60.25 "
        />
      </div>

      <div className="flex flex-col flex-1 gap-4 text-white-1100 lg:max-w-full max-w-full md:max-w-75.75">
        <p className="text-base font-bold leading-5.5">{study.title}</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold leading-5.5">Branche:</p>
            <p className="text-[10px] font-light leading-[1.4]">
              {study.branche}
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold leading-5.5">Service:</p>
            <p className="text-[10px] font-light leading-[1.4]">
              {study.service}
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold leading-5.5">
              Herausforderungen:
            </p>
            <p className="text-[10px] font-light leading-[1.4]">
              {study.herausforderungen}
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold leading-5.5">
              {study.massnahmenLabel ?? "Content-Maßnahmen:"}
            </p>
            <p className="text-[10px] font-light leading-[1.4]">
              {study.massnahmen}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSlider({
  className = "",
}: {
  className?: string;
}) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation],
      direction: "horizontal",
      slidesPerView: 1.5,
      spaceBetween: 88,
      on: {
        slideChange(s) {
          setActiveIndex(s.realIndex);
        },
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        1200: { slidesPerView: 1.6, spaceBetween: 60 },
        1600: { slidesPerView: 1.6 },
      },
    });

    swiperInstanceRef.current = swiper;
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={swiperRef} className="swiper caseStudySwiper overflow-visible!">
        <div className="swiper-wrapper md:p-5">
          {CASE_STUDIES.map((study, i) => (
            <div key={i} className="swiper-slide">
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 xl:hidden">
        <div className="flex items-center gap-7.5 ">
          {CASE_STUDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperInstanceRef.current?.slideToLoop(i)}
              className="h-0.5 w-8 rounded-full transition-all duration-300"
              style={
                activeIndex === i
                  ? {
                      backgroundImage:
                        "linear-gradient(-90deg, #89520e 0%, #ef8f19 54%, #89520e 100%)",
                    }
                  : { backgroundColor: "#dcdcdc" }
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
