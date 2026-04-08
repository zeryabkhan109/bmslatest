"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const imgArrow = "images/arw-circle.svg";

const imgSide1 = "images/slide-img1.webp";
const imgSide2 = "images/slide-img2.webp";
const imgSide3 = "images/slide-img3.webp";
const imgSide4 = "images/slide-img4.webp";
const imgSide5 = "images/slide-img5.webp";
const imgSide6 = "images/slide-img6.webp";
const imgSide7 = "images/slide-img7.webp";

interface ServiceCard {
  title: string;
  description: string;
}

interface Service {
  id: number;
  sideImage: string;
  title: string;
  subtitle: string;
  cards: ServiceCard[];
}

const SERVICES: Service[] = [
  {
    id: 1,
    sideImage: imgSide1,
    title: "Suchmaschinenoptimierung (SEO)",
    subtitle:
      "SEO-Strategien deiner Online Marketing Agentur f\u00fcr langfristigen Erfolg",
    cards: [
      {
        title: "Warum deine Online Marketing Agentur auf SEO setzt",
        description:
          "SEO ist der Schl\u00fcssel zu einer nachhaltigen Online-Pr\u00e4senz. Mit effektiven SEO-Strategien sorgt deine Agentur f\u00fcr kontinuierliche Sichtbarkeit und solides Wachstum, um dauerhaft relevante Besucher anzuziehen.",
      },
      {
        title: "On-Page und Off-Page SEO-Strategien",
        description:
          "Mit einer Kombination aus On-Page-SEO f\u00fcr Inhalte und Struktur sowie Off-Page-SEO f\u00fcr Backlinks optimiert deine Agentur deine Website und st\u00e4rkt deine Pr\u00e4senz im Netz.",
      },
      {
        title: "Technische SEO, Content-Optimierung und Meta-Tags",
        description:
          "Technische SEO, schnelle Ladezeiten und Content-Optimierung verbessern das Nutzererlebnis und deine Platzierung in Suchmaschinen. Mithilfe gezielter Keyword-Recherche und optimierter Meta-Tags erh\u00f6ht deine Agentur die Sichtbarkeit deiner Inhalte.",
      },
    ],
  },
  {
    id: 2,
    sideImage: imgSide2,
    title: "Lokales SEO f\u00fcr kleine Unternehmen",
    subtitle:
      "Wie deine Online Marketing Agentur lokales SEO f\u00fcr kleine Unternehmen st\u00e4rkt",
    cards: [
      {
        title:
          "Regionale Sichtbarkeit durch lokales SEO und Google My Business",
        description:
          "Deine Agentur nutzt lokale SEO-Techniken, darunter Google My Business und lokale Verzeichnisse, um deine regionale Auffindbarkeit zu steigern. So werden potenzielle Kunden in deiner N\u00e4he direkt angesprochen.",
      },
      {
        title: "Erfolgreiche lokale Strategien f\u00fcr mehr Kunden vor Ort",
        description:
          "Gezielte lokale SEO-Strategien deiner Agentur st\u00e4rken deine Pr\u00e4senz in der Umgebung und helfen dir, mehr Kunden in deinem Einzugsgebiet zu erreichen.",
      },
      {
        title:
          "Lokales SEO: Wie deine Online Marketing Agentur deine regionale Sichtbarkeit erh\u00f6ht",
        description:
          "Mit lokalem SEO erreichst du gezielt Kunden in deiner Region. Deine Marketing-Agentur entwickelt ma\u00dfgeschneiderte Strategien, die deine Pr\u00e4senz in der Umgebung steigern und dich von der Konkurrenz abheben.",
      },
    ],
  },
  {
    id: 3,
    sideImage: imgSide3,
    title: "Landing Page Optimierung",
    subtitle:
      "Wie deine Online Marketing Agentur Landing Pages f\u00fcr h\u00f6here Conversions optimiert",
    cards: [
      {
        title: "Warum Landing Page Optimierung entscheidend ist",
        description:
          "Gut optimierte Landing Pages sind der Schl\u00fcssel zur Conversion-Steigerung. Deine Agentur sorgt f\u00fcr klare Struktur und relevante Inhalte, die gezielt auf deine Zielgruppe abgestimmt sind.",
      },
      {
        title: "Design, Ladezeit und Call-to-Actions",
        description:
          "Mit schnellem Seitenaufbau und ansprechendem Design schafft deine Agentur Vertrauen. Optimierte Call-to-Actions leiten deine Besucher gezielt zur gew\u00fcnschten Handlung.",
      },
      {
        title: "A/B-Tests und Conversion-Tracking",
        description:
          "Durch A/B-Tests und Conversion-Tracking optimiert deine Agentur kontinuierlich deine Landing Pages, um deine Conversion-Rate zu maximieren und Leads effektiv zu steigern.",
      },
    ],
  },
  {
    id: 4,
    sideImage: imgSide4,
    title: "Conversion-Optimierung (CRO)",
    subtitle:
      "Conversion-Optimierung durch deine Online Marketing Agentur: So steigerst du deine Erfolge",
    cards: [
      {
        title: "Wie deine Agentur die Conversion-Rate verbessert",
        description:
          "Conversion-Optimierung holt das Beste aus deinem Traffic heraus, indem gezielte Ma\u00dfnahmen das Nutzerverhalten analysieren und anpassen.",
      },
      {
        title: "Heatmaps und User-Feedback f\u00fcr effektive Anpassungen",
        description:
          "Deine Agentur nutzt Heatmaps und User-Feedback, um Schwachstellen zu erkennen und Anpassungen vorzunehmen, die die Conversion-Rate steigern.",
      },
      {
        title: "Langfristiger Erfolg durch kontinuierliche Optimierung",
        description:
          "Durch regelm\u00e4\u00dfige Analysen und CRO-Ma\u00dfnahmen sichert deine Agentur den langfristigen Erfolg deiner Website und maximiert deinen Marketing-Erfolg.",
      },
    ],
  },
  {
    id: 5,
    sideImage: imgSide5,
    title: "Pay-per-Click (PPC) und bezahlte Anzeigen",
    subtitle: "Effektive PPC-Kampagnen mit deiner Online Marketing Agentur",
    cards: [
      {
        title: "Gezielte PPC-Kampagnen f\u00fcr mehr Erfolg",
        description:
          "Mit Google Ads, Facebook Ads und anderen PPC-Kampagnen erreicht deine Agentur genau die Nutzer, die deine Produkte oder Dienstleistungen suchen.",
      },
      {
        title: "Maximale Budgetnutzung f\u00fcr hohe Conversions",
        description:
          "Gezielte Strategien sorgen daf\u00fcr, dass dein Budget optimal genutzt wird und der ROI durch A/B-Tests und Anpassungen kontinuierlich maximiert wird.",
      },
      {
        title: "Online Marketing Agentur: PPC und organisches SEO im Vergleich",
        description:
          "W\u00e4hrend organisches SEO langfristige Sichtbarkeit bietet, liefert PPC sofortige Ergebnisse. Deine Online Marketing Agentur hilft dir, die richtige Balance zwischen beiden Ans\u00e4tzen zu finden.",
      },
    ],
  },
  {
    id: 6,
    sideImage: imgSide6,
    title: "Linkbuilding & Backlink-Strategien",
    subtitle:
      "Effektive Linkbuilding-Strategien mit deiner Online Marketing Agentur",
    cards: [
      {
        title: "Warum hochwertige Backlinks entscheidend sind",
        description:
          "Hochwertige Backlinks st\u00e4rken die SEO-Rankings deiner Website und signalisieren Suchmaschinen Relevanz und Vertrauensw\u00fcrdigkeit.",
      },
      {
        title: "Strategien f\u00fcr ein starkes Backlink-Profil",
        description:
          "Mit Content-Marketing und gezieltem Outreach entwickelt deine Agentur eine nachhaltige Linkbuilding-Strategie, um langfristig die Sichtbarkeit zu steigern.",
      },
      {
        title:
          "Wie deine Online Marketing Agentur ein starkes Backlink-Profil aufbaut",
        description:
          "Ein starkes Backlink-Profil entsteht durch Content-Marketing, gezieltes Outreach und strategische Partnerschaften. Deine Online Marketing Agentur hilft dir, wertvolle Inhalte zu erstellen, die andere dazu motivieren, auf deine Website zu verlinken.",
      },
    ],
  },
  {
    id: 7,
    sideImage: imgSide7,
    title: "Lokales Content-Marketing",
    subtitle:
      "Lokales Content-Marketing mit deiner Online Marketing Agentur: Erreiche deine Region effektiv",
    cards: [
      {
        title: "Gezielte regionale Inhalte f\u00fcr lokale Kunden",
        description:
          "Deine Agentur erstellt Inhalte, die spezifisch auf lokale Bed\u00fcrfnisse eingehen und so potenzielle Kunden in deiner Region ansprechen.",
      },
      {
        title: "Maximale Sichtbarkeit durch lokales SEO und Content-Marketing",
        description:
          "Die Kombination aus lokalem SEO und Content-Marketing st\u00e4rkt deine regionale Pr\u00e4senz und sorgt f\u00fcr maximale Sichtbarkeit in deiner Umgebung.",
      },
      {
        title:
          "Deine Marketing-Agentur hilft dir, deine lokale Zielgruppe zu erreichen",
        description:
          "Durch die Entwicklung einer individuellen Content-Marketing-Strategie, die auf deine Region abgestimmt ist, steigert deine Online Marketing Agentur deine lokale Reichweite und generiert qualifizierte Leads.",
      },
    ],
  },
];

function ServiceInfoCard({ card }: { card: ServiceCard }) {
  return (
    <div className="relative flex items-center justify-center bg-[url(/images/card-bg.png)] bg-no-repeat bg-cover py-6 px-4 md:p-6 xl:py-9.75 xl:px-8 rounded-2xl shadow-4xl">
      <div className="relative flex flex-col gap-2 w-full">
        <p className="font-semibold xl:text-base xl:leading-[140%] xl:font-bold text-sm leading-4.75 text-orange-1100 line-clamp-2">
          {card.title}
        </p>
        <p className="font-light xl:text-sm xl:font-normal xl:leading-[124%] text-[10px] leading-sm text-white-1100 line-clamp-4">
          {card.description}
        </p>
      </div>
    </div>
  );
}

function ServiceSlide({ service }: { service: Service }) {
  return (
    <div className="flex gap-8 w-full md:flex-row flex-col h-full md:px-5 2xl:pb-8 pb-4 md:pb-11">
      <div className="rounded-2xl w-full md:px-0 px-4 md:w-1/2 xl:w-[42%]">
        <img
          className="md:h-full object-cover md:w-auto w-full object-center shadow-4xl rounded-2xl  h-41.5"
          src={service.sideImage}
          alt={service.title}
        />
      </div>
      <div className="flex flex-col gap-6 md:px-0 px-4 w-full md:w-1/2 xl:w-[58%]">
        <div className="flex gap-6 items-end w-full">
          <div className="flex flex-col gap-3 flex-1 text-white-1100">
            <p className="font-semibold md:text-2xl text-lg leading-5.5 md:leading-8.25 text-white-1100 ">
              {service.title}
            </p>
            <p className="font-normal text-sm leading-4.25 text-white-1100">
              {service.subtitle}
            </p>
          </div>
          <Link
            href="/"
            className="border border-grey-1100 border-solid hidden xl:flex items-center w-10 h-10 justify-center rounded-full"
          >
            <img
              src={imgArrow}
              alt="arrow"
              className="w-4.5 h-4.75  rotate-300"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:gap-3 w-full">
          {service.cards.map((card, i) => (
            <ServiceInfoCard key={i} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSlider({
  className = "",
}: {
  className?: string;
}) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current || !prevBtnRef.current || !nextBtnRef.current)
      return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation],
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      navigation: {
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
      },
      on: {
        slideChange(s) {
          setActiveIndex(s.realIndex);
        },
      },
    });

    swiperInstanceRef.current = swiper;
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div className={`relative flex items-center gap-8 ${className}`}>
      <button
        ref={prevBtnRef}
        aria-label="Previous service"
        className=" absolute cursor-pointer size-10 3xl:-left-20 -left-10 top-0 rounded-full hidden 2xl:flex items-center justify-center transition-opacity hover:opacity-70 disabled:opacity-30"
      >
        <img
          src={imgArrow}
          alt="Previous"
          className="w-4.5 h-4.75  rotate-180"
        />
      </button>

      <div ref={swiperRef} className="swiper flex-1 overflow-hidden">
        <div className="swiper-wrapper">
          {SERVICES.map((service) => (
            <div key={service.id} className="swiper-slide">
              <ServiceSlide service={service} />
            </div>
          ))}
        </div>
      </div>

      <button
        ref={nextBtnRef}
        aria-label="Next service"
        className="absolute cursor-pointer 3xl:-right-20 -right-10 top-0 size-10  rounded-full hidden 2xl:flex items-center justify-center transition-opacity hover:opacity-70 disabled:opacity-30"
      >
        <img
          src={imgArrow}
          alt="Next"
          className="w-4.5 h-4.75 object-contain"
        />
      </button>

      <div className="absolute -bottom-2 xs:-bottom-1 lg:bottom-7 left-1/2 2xl:hidden -translate-x-1/2 flex items-center gap-4 xs:gap-5 md:gap-7.5">
        {SERVICES.map((_, i) => (
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
  );
}
