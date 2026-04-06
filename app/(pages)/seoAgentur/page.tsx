"use client";
import Image from "next/image";
import CtaButton from "@/components/Ctabutton";
import { ServicesOfferedCard } from "@/components/ServicesOfferedCard";
import { ReviewCardGroup } from "@/components/ReviewCardGroup";
import Link from "next/link";
import MeetingEmbed from "@/components/MeetingEmbed";
import SeoArticleSlider from "@/components/SeoArticleSlider";
import Advantagecards2 from "@/components/Advantagecards2";
import Pricingslider from "@/components/Pricingslider";
import { FAQs } from "@/components/Faq";
import ComparisonAccordion from "@/components/ComparisonAccordion";

const data = [
  {
    title:
      "Vergleich: Langfristige SEO-Vorteile vs. kurzfristige PPC-Ergebnisse",
    rows: [
      {
        title: "Langfristige Vorteile",
        seo: {
          text: "Erhöht die Sichtbarkeit in Suchmaschinen nachhaltig",
          positive: true,
        },
        ads: {
          text: "Nach Ende der Kampagne nimmt die Sichtbarkeit ab",
          positive: false,
        },
      },
      {
        title: "Geschwindigkeit der Ergebnisse",
        seo: {
          text: "Es braucht Zeit und Geduld",
          positive: false,
        },
        ads: {
          text: "Schnelle Ergebnisse mit Pay-per-Click",
          positive: true,
        },
      },
      {
        title: "Organische Sichtbarkeit",
        seo: {
          text: "Langfristige Sichtbarkeit auch nach Kampagnenende",
          positive: true,
        },
        ads: {
          text: "Hängt vom Werbebudget ab",
          positive: false,
        },
      },
      {
        title:
          "Beauftragen Sie eine SEO  Agentur mit der Entwicklung einer Strategie",
        seo: {
          text: "Hilfe bei der Entwicklung einer effektiven langfristigen Strategie",
          positive: true,
        },
        ads: {
          text: "Strategien sind oft auf kurzfristige Ergebnisse ausgerichtet",
          positive: false,
        },
      },
    ],
  },
  {
    title:
      "Kostenvergleich: SEO als kosteneffiziente Alternative zu Google Ads",
    rows: [
      {
        title: "Erstinvestition",
        seo: {
          text: "Einmalige Kosten für Erstaktivitäten",
          positive: true,
        },
        ads: {
          text: "Laufende Kosten für jeden Klick",
          positive: false,
        },
      },
      {
        title: "Langfristige Kosteneffizienz",
        seo: {
          text: "Langfristig geringere Kosten",
          positive: true,
        },
        ads: {
          text: "Die Kosten bleiben so lange bestehen, wie die Kampagne läuft",
          positive: false,
        },
      },
      {
        title: "Amortisation der Kosten",
        seo: {
          text: "Sichtbarkeit und organischer Traffic decken schnell die anfänglichen Kosten",
          positive: true,
        },
        ads: {
          text: "Sie müssen ständig für Werbung bezahlen",
          positive: false,
        },
      },
      {
        title: "Beratung durch einen Spezialisten",
        seo: {
          text: "Die Möglichkeit, eine kostengünstige Strategie zu entwickeln",
          positive: true,
        },
        ads: {
          text: "Meist stehen schnelle Ergebnisse im Vordergrund",
          positive: false,
        },
      },
    ],
  },
  {
    title: "Langfristiger ROI: Warum SEO langfristig profitabler ist",
    rows: [
      {
        title: "Langfristige Rentabilität",
        seo: {
          text: "Konstanter organischer Traffic ohne zusätzliche Kosten",
          positive: true,
        },
        ads: {
          text: "Erfordert ständige Investitionen, um die Sichtbarkeit aufrechtzuerhalten",
          positive: false,
        },
      },
      {
        title: "Traffic-Wachstum",
        seo: {
          text: "Traffic wächst im Laufe der Zeit dank organischem Ranking",
          positive: true,
        },
        ads: {
          text: "Traffic-Wachstum stoppt nach Ende der Kampagne",
          positive: false,
        },
      },
      {
        title: "Auswirkungen auf das Nutzervertrauen",
        seo: {
          text: "Hohe organische Positionen erhöhen das Markenvertrauen",
          positive: true,
        },
        ads: {
          text: "Die Sichtbarkeit ist auf bezahlte Ergebnisse beschränkt",
          positive: false,
        },
      },
      {
        title: "Conversions",
        seo: {
          text: "Erhöhte Conversions dank organischer Sichtbarkeit",
          positive: true,
        },
        ads: {
          text: "Conversions hängen vom bezahlten Traffic ab",
          positive: false,
        },
      },
    ],
  },
];

const page = () => {
  return (
    <>
      <section className='bg-[url("/images/seo-agentur-hero-bg.png")] bg-cover bg-bottom relative pt-[188px] md:pt-[204px] xl:pt-[216px] md:pb-[134px] pb-[110px] xl:pb-36'>
        <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
          <div className="text-center max-w-197.5 w-full mx-auto">
            <h1 className="font-sora font-extrabold xl:text-[70px] md:text-[50px] text-[30px] leading-[31px] md:leading-13 xl:leading-[104%] text-white-1100 text-shadow-xl uppercase">
              Erhöhe deine Sichtbarkeit bei Google!
            </h1>
            <h4 className="text-white-1100 max-w-107.5 w-full mx-auto xl:text-[32px] text-2xl leading-7.25 xl:leading-[124%] font-medium mt-4 mb-12">
              Mehr Traffic. Mehr Umsatz. Mit deiner SEO Agentur
            </h4>
            <CtaButton href="/" label="Kostenlose SEO-Analyse anfordern" />
            <p className="text-white-1100 font-normal text-sm leading-[124%] mt-5">
              Finde heraus, wie SEO dein Ranking verbessert.
            </p>
          </div>
        </div>
        <span className="text-gradient2 absolute -bottom-8 left-0 text-center w-full block font-bold xl:text-[155px] md:text-[81px] text-[41px] leading-[42px] md:leading-21 xl:leading-[104%] -tracking-[3px] md:-tracking-[6.48px] xl:tracking-[-12.4px] uppercase">
          SEO-OPTIMIERUNG
        </span>
      </section>
      <section className="xl:pt-48.75 md:py-41 py-22 xl:pb-50">
        <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
          <h2 className="border-b border-solid border-white-1100/40 xl:text-5xl md:text-[32px] text-xl leading-6 md:leading-11 font-bold pb-8 md:pb-10 max-w-294.5 mx-auto w-full md:tracking-normal -tracking-[0.4px] text-white-1100 xl:leading-16.75 text-center">
            Suchmaschinenoptimierung für
            <span className="text-orange-1100 block">
              {" "}
              bessere Sichtbarkeit, mehr Kunden und langfristigen Erfolg{" "}
            </span>
          </h2>
          <div className="xl:mt-22 md:mt-16 mt-12">
            <ServicesOfferedCard />
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-10 relative z-1">
        <div className="max-w-346.25  md:px-10 px-4 pr-0 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 md:mr-0 mr-4 xl:pb-10">
            <h2 className="md:text-[32px] xl:max-w-full md:max-w-166 w-full mx-auto md:font-bold font-semibold xl:font-medium text-white-1100 text-xl leading-6 xl:text-5xl xl:leading-16.75 md:leading-11">
              Lass dich von den Online Marketing Erfahrungen unserer Kunden
              überzeugen!
            </h2>
          </div>
          <ReviewCardGroup />
        </div>
      </section>
      <section className="xl:pt-50 md:pt-41 pt-22">
        <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10">
            <h2 className="xl:text-5xl  md:max-w-166  max-w-[310px] font-bold text-white-1100 md:text-[32px] text-xl leading-6 md:leading-11 xl:leading-[140%] xl:max-w-225 w-full mx-auto">
              <span className="text-orange-1100">Erfolgreiche SEO </span>{" "}
              Betreuung für nachhaltige Ergebnisse
            </h2>
          </div>
        </div>
        <div className='bg-[url("/images/case-bg.png")] bg-cover bg-center md:mt-16 mt-10 xl:mt-22'>
          <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
            <h3 className="xl:text-[32px] md:text-2xl text-lg leading-5.5 md:leading-7.25 text-center font-medium text-white-1100 xl:leading-[124%] max-w-135 w-full mx-auto">
              <span className="text-orange-1100">+ 421%</span> mehr Sichtbarkeit
              dank SEO Agentur und <span className="text-orange-1100">142</span>{" "}
              neue Leads
            </h3>
            <div className="md:grid flex flex-col-reverse md:grid-cols-2 gap-6 md:mt-10 mt-8 xl:mt-22">
              <div className="">
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Branche:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Gebäudereinigung:
                  </p>
                </div>
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Service:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    SEO und Content-Marketing.
                  </p>
                </div>
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Herausforderungen:{" "}
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Kaum organischer Traffic und eine geringe
                    Online-Sichtbarkeit in einem stark lokal und
                    preisgetriebenen Markt, was zu wenigen Anfragen führte.
                  </p>
                </div>
                <div className="">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Content-Maßnahmen:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Entwicklung einer SEO-Strategie, die gezielt lokale
                    Suchanfragen wie „Dachreinigung [Stadt]“ oder
                    „Fassadenreinigung [Stadt]“ adressiert. Optimierung der
                    Service-Seiten, um Dienstleistungen präzise darzustellen,
                    sowie Erstellung von Blog-Artikeln. Aufbau von Backlinks
                    durch Partnerschaften mit lokalen Handwerkerplattformen und
                    Branchenverzeichnissen.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="bg-white-1100 rounded-2xl shadow-4xl xl:py-8 xl:px-10 py-6 px-4">
                  <h4 className="text-black-1100 font-semibold md:text-xl md:leading-7 text-lg leading-5.5 md:tracking-normal -tarcking-[0.18px] xl:text-2xl xl:leading-[140%]">
                    Ergebnisse:
                  </h4>
                  <ul className="md:mt-6 mt-4">
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        <span className="text-orange-1100">+421%</span>{" "}
                        Sichtbarkeit in Suchmaschinen.
                      </p>
                    </li>
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Erhöhung der rankenden Keywords{" "}
                        <span className="text-orange-1100">
                          von 15 auf 159.
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Erhöhung der monatlichen Webseitenbesucher{" "}
                        <span className="text-orange-1100">
                          von ∅ 52 auf ∅ 647.
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Generierung
                        <span className="text-orange-1100">
                          {" "}
                          von ∅ 142
                        </span>{" "}
                        qualifizierten Leads pro Quartal.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="/images/Chart1.svg" alt="Chart 1" />
            </div>
          </div>
        </div>
      </section>
      <div className="xl:px-5 md:px-10 px-4 py-10 md:py-16 xl:py-22">
        <span className="max-w-300 mx-auto w-full h-px bg-white-1100/40 flex items-center"></span>
      </div>
      <section>
        <div className='bg-[url("/images/case2-bg.png")] bg-cover bg-center'>
          <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
            <h3 className="xl:text-[32px] md:text-2xl md:leading-7.25 text-lg leading-5.5 md:tracking-normal -tracking-[0.18px] text-center font-medium text-white-1100 xl:leading-[124%] max-w-187.5 w-full mx-auto">
              <span className="text-orange-1100">+234%</span> mehr Online-Umsatz
              in nur <span className="text-orange-1100">9 Monaten</span> durch
              Suchmaschinenoptimierun
            </h3>
            <div className="md:grid flex flex-col-reverse md:grid-cols-2 gap-6 md:mt-10 mt-8 xl:mt-22">
              <div className="">
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Branche:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Online-Shop für Uhren
                  </p>
                </div>
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Service:{" "}
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    E-Commerce SEO und Conversion Optimierung.
                  </p>
                </div>
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Herausforderungen:{" "}
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Starker Wettbewerb in der Online-Shop-Branche und geringe
                    Sichtbarkeit der Produktseiten.
                  </p>
                </div>
                <div className="">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Content-Maßnahmen:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Fokus auf die Optimierung der Produktseiten durch
                    aussagekräftige Beschreibungen und SEO-gerechte Strukturen.
                    Verbesserung der Ladezeiten, Mobile-Optimierung und
                    Implementierung einer internen Verlinkungsstrategie.
                    Zielgerichtete Keyword-Analyse für trendbasierte Produkte
                    und saisonale Angebote.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="bg-white-1100 rounded-2xl shadow-4xl xl:py-8 xl:px-10 py-6 px-4">
                  <h4 className="text-black-1100 font-semibold md:text-xl md:leading-7 text-lg leading-5.5 md:tracking-normal -tarcking-[0.18px] xl:text-2xl xl:leading-[140%]">
                    Ergebnisse:
                  </h4>
                  <ul className="md:mt-6 mt-4">
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        <span className="text-orange-1100">+234%</span>{" "}
                        Umsatzsteigerung über organischen Traffic.
                      </p>
                    </li>
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        <span className="text-orange-1100">
                          1.128 zusätzliche
                        </span>
                        Verkäufe über SEO-generierte Besucher.
                      </p>
                    </li>
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Erhöhung der rankenden Keywords{" "}
                        <span className="text-orange-1100">
                          von 12 auf 107.
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Steigerung des monatlichen organischen Traffics
                        <span className="text-orange-1100">
                          von 900 auf 3.500 Besuche.
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:-mt-72.5 -mt-40 flex items-center justify-center w-full relative -bottom-17.5">
            <img src="/images/Chart2.png" alt="Chart 2" className="w-full" />
          </div>
        </div>
      </section>
      <div className="px-5 md:py-16 py-10 xl:py-22 mt-17.5">
        <span className="max-w-300 mx-auto w-full h-px bg-white-1100/40 flex items-center"></span>
      </div>
      <section>
        <div className='bg-[url("/images/case3-bg.png")] bg-cover bg-center'>
          <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
            <h3 className="xl:text-[32px] md:text-2xl md:leading-7.25 text-lg leading-5.5 md:tracking-normal -tarcking-[0.18px] text-center font-medium text-white-1100 xl:leading-[124%] max-w-187.5 w-full mx-auto">
              Durch Local SEO-Beratung{" "}
              <span className="text-orange-1100">+377%</span> mehr Anfragen
            </h3>
            <div className="md:grid flex flex-col-reverse md:grid-cols-2 gap-6 md:mt-10 mt-8 xl:mt-22">
              <div className="">
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Branche:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                     Lokale Tischlerei
                  </p>
                </div>
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Service:{" "}
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                     Local SEO und Google My Business Optimierung.
                  </p>
                </div>
                <div className="md:mb-6 mb-4">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Herausforderungen:{" "}
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Geringe Auffindbarkeit in den lokalen Suchergebnissen,
                    mangelnde Präsenz in Google My Business und fehlende
                    Bewertungen.
                  </p>
                </div>
                <div className="">
                  <h4 className="text-white-1100 xl:text-base text-sm md:leading-4.75 leading-4.25 font-bold xl:leading-[140%] mb-2 xl:mb-3">
                    Content-Maßnahmen:
                  </h4>
                  <p className="text-white-1100 xl:text-base text-sm font-normal leading-4.25 xl:leading-[140%]">
                    Optimierung des Google My Business-Profils, um gezielt
                    lokale Suchanfragen abzudecken. Aufbau einer starken
                    Backlink-Strategie durch lokale Verzeichnisse und
                    Kundenbewertungen. Erstellung von lokal relevanten
                    Blogartikeln und Landingpages, die spezifische
                    Dienstleistungen und Gebiete abdecken.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="bg-white-1100 rounded-2xl shadow-4xl xl:py-8 xl:px-10 py-6 px-4">
                  <h4 className="text-black-1100 font-semibold md:text-xl md:leading-7 text-lg leading-5.5 md:tracking-normal -tarcking-[0.18px] xl:text-2xl xl:leading-[140%]">
                    Ergebnisse:
                  </h4>
                  <ul className="md:mt-6 mt-4">
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        <span className="text-orange-1100">+377%</span> Anfragen
                        über organische Suchergebnisse.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Verbesserung der Google My Business-Sichtbarkeit
                        <span className="text-orange-1100">um +254%.</span>
                      </p>
                    </li>
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Erhöhung der rankenden lokalen Keywords{" "}
                        <span className="text-orange-1100">von 6 auf 64.</span>
                      </p>
                    </li>
                    <li className="flex items-start md:gap-4 gap-2 mb-4">
                      <span className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center">
                        <Image
                          src="/images/check-black.svg"
                          alt=""
                          width="18"
                          height="18"
                        />
                      </span>
                      <p className="text-black-1100 xl:text-base font-normal text-sm leading-4.25 xl:leading-[140%] flex-1">
                        Steigerung der Website-Besucher von
                        <span className="text-orange-1100">
                          450 auf 2.100 pro Monat.
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:-mt-72.5 -mt-30 flex items-center justify-center w-full relative -bottom-17.5">
            <img src="/images/Chart3.png" alt="Chart 3" className="w-full" />
          </div>
        </div>
      </section>
      <section className="xl:py-50 xl:pt-[246px] md:pt-50 pt-[130px] md:pb-41 pb-22">
        <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
          <div className="text-center">
            <h3 className="text-white-1100 mb-12 xl:text-[32px] md:text-2xl md:leading-7.25 text-base leading-[19px] font-semibold md:font-medium xl:leading-[124%]">
              Finde heraus, wie das volle Potenzial deiner Website durch eine
              gezielte SEO-Analyse sichtbar wird und mehr{" "}
              <br className="md:hidden block" /> Kunden erreicht!{" "}
              <br className="md:hidden block" />
              <span className="text-orange-1100">
                Lass dir in einer Analyse zeigen, was möglich ist.
              </span>
            </h3>
            <CtaButton href="/" label="Kostenlose SEO Analyse anfordern" />
            <p className="text-white-1100 mt-3 text-xs font-normal leading-[140%]">
              Finde heraus, wie Online-Marketing dir mehr Kunden bringt.
            </p>
          </div>
        </div>
      </section>
      <section className="xl:mb-50 md:mb-41 mb-22 xl:bg-[url('/images/seo-agentur-bg.png')] md:bg-[url('/images/seo-agentur-tablet-bg.png')] bg-[url('/images/seo-agentur-mbl-bg.png')] bg-cover bg-center">
        <div className="max-w-310 md:px-10 px-4 xl:px-5 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10">
            <h2 className="xl:text-5xl md:text-[32px] text-xl leading-6 md:tracking-normal -tracking-[0.4px] md:leading-11 font-bold text-white-1100 xl:leading-[140%] max-w-262.5 w-full mx-auto">
              <span className="text-orange-1100">
                SEO Agentur: <br className="xl:hidden block" />{" "}
              </span>{" "}
              Warum sie dein Schlüssel zu nachhaltigem Wachstum ist
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-12.5 xl:gap-2 md:mt-16 mt-8 xl:mt-22.5">
            <div className="max-w-120.25 w-full">
              <div className="rounded-2xl mb-4 xl:mb-24.75 bg-black-1100 shadow-4xl md:py-4 md:px-5 p-4  xl:p-7 xl:max-w-94.5 md:max-w-[267px] max-w-[228px] w-full ml-auto">
                <h4 className="text-orange-1100 font-semibold md:font-bold text-sm leading-4.25 md:leading-4.75 xl:text-base xl:leading-[140%]">
                  Mehr qualifizierte Leads und Bewerber
                </h4>
                <p className="text-white-1100 font-normal mt-3 text-xs leading-4 xl:mt-4 xl:text-sm xl:leading-[124%]">
                  Durch gezielte Keyword-Optimierung erhältst du organischen
                  Traffic von Nutzern, die aktiv nach deinen Dienstleistungen
                  oder Jobangeboten suchen – das führt zu mehr qualifizierten
                  Anfragen und Bewerbungen.
                </p>
              </div>
              <div className="rounded-2xl mb-4 xl:mb-15.5 bg-black-1100 shadow-4xl md:py-4 md:px-5 p-4  xl:p-7 xl:max-w-94.5 md:max-w-[267px] max-w-[228px] w-full">
                <h4 className="text-orange-1100 font-semibold md:font-bold text-sm leading-4.25 md:leading-4.75 xl:text-base xl:leading-[140%]">
                  Verbesserte lokale Auffindbarkeit
                </h4>
                <p className="text-white-1100 font-normal mt-3 text-xs leading-4 xl:mt-4 xl:text-sm xl:leading-[124%]">
                  Eine SEO Agentur hilft dir mit gezielten lokalen SEO
                  Optimierung-Maßnahmen, Kunden und Mitarbeiter in deiner Region
                  zu erreichen. So steigerst du deine Chancen auf regionale
                  Geschäftsanfragen und Bewerbungen.
                </p>
              </div>
              <div className="rounded-2xl bg-black-1100 shadow-4xl md:py-4 md:px-5 p-4  xl:p-7 xl:max-w-94.5 md:max-w-[267px] max-w-[228px] w-full ml-auto">
                <h4 className="text-orange-1100 font-semibold md:font-bold text-sm leading-4.25 md:leading-4.75 xl:text-base xl:leading-[140%]">
                  Bessere Benutzererfahrung für Kunden und Bewerber
                </h4>
                <p className="text-white-1100 font-normal mt-3 text-xs leading-4 xl:mt-4 xl:text-sm xl:leading-[124%]">
                  Eine SEO-optimierte Website bietet eine benutzerfreundliche
                  Struktur, die potenziellen Kunden und Mitarbeitern
                  gleichermaßen ein nahtloses Erlebnis ermöglicht.
                </p>
              </div>
            </div>
            <div className="max-w-120.25 w-full ml-auto">
              <div className="rounded-2xl mb-4 xl:mb-21.25 bg-black-1100 shadow-4xl md:py-4 md:px-5 p-4  xl:p-7 xl:max-w-94.5 md:max-w-66.75 max-w-57 w-full">
                <h4 className="text-orange-1100 font-semibold md:font-bold text-sm leading-4.25 md:leading-4.75 xl:text-base xl:leading-[140%]">
                  Erhöhte Sichtbarkeit für gezielte Neukunden- und
                  Mitarbeiterakquise
                </h4>
                <p className="text-white-1100 font-normal mt-3 text-xs leading-4 xl:mt-4 xl:text-sm xl:leading-[124%]">
                  SEO steigert deine Sichtbarkeit bei relevanten Suchanfragen,
                  sodass du von potenziellen Kunden und qualifizierten
                  Fachkräften schneller gefunden wirst.
                </p>
              </div>
              <div className="rounded-2xl mb-4 xl:mb-26.75 bg-black-1100 shadow-4xl md:py-4 md:px-5 p-4  xl:p-7 xl:max-w-94.5 md:max-w-66.75 max-w-57 w-full ml-auto">
                <h4 className="text-orange-1100 font-semibold md:font-bold text-sm leading-4.25 md:leading-4.75 xl:text-base xl:leading-[140%]">
                  Stärkeres Vertrauen durch Top-Platzierungen in den
                  Suchmaschinen
                </h4>
                <p className="text-white-1100 font-normal mt-3 text-xs leading-4 xl:mt-4 xl:text-sm xl:leading-[124%]">
                  Websites, die in den organischen Suchergebnissen weit oben
                  erscheinen, wirken vertrauenswürdiger und ziehen mehr
                  hochwertige Kunden sowie talentierte Fachkräfte an.
                </p>
              </div>
              <div className="rounded-2xl bg-black-1100 shadow-4xl md:py-4 md:px-5 p-4  xl:p-7 xl:max-w-94.5 md:max-w-66.75 max-w-57 w-full ">
                <h4 className="text-orange-1100 font-semibold md:font-bold text-sm leading-4.25 md:leading-4.75 xl:text-base xl:leading-[140%]">
                  {" "}
                  Langfristige Kostenersparnis
                </h4>
                <p className="text-white-1100 font-normal mt-3 text-xs leading-4 xl:mt-4 xl:text-sm xl:leading-[124%]">
                   Eine professionelle SEO Optimierung durch deine SEO Agentur
                  ist eine nachhaltige Lösung, die dir kontinuierlichen Traffic
                  bringt – ohne, dass du für jeden Klick erneut zahlen musst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:pb-50 md:pb-41 pb-27">
        <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-10 md:mb-22  xl:mb-16 relative">
            <span className="md:w-191.5  w-full h-37.5 hidden items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h4 className="xl:text-2xl md:text-xl md:leading-7 text-base leading-[19px] max-w-[940px] mx-auto w-full font-semibold leading-8.25 text-white-1100 pb-6">
              <span className="text-orange-1100">
                Möchtest du mehr darüber erfahren,
              </span>{" "}
              wie diese Lösungen dir{" "}
              <span className="xl:inline-block md:block inline-block">
                {" "}
                helfen können{" "}
              </span>{" "}
              und wie du die Vorteile für dein Unternehmen nutzen kannst?
            </h4>
            <p className="text-base font-normal text-white-1100 leading-5.5">
              Vereinbare jetzt dein kostenloses Kennenlerngespräch und lass uns
              gemeinsam deine Ziele erreichen! 
            </p>
          </div>
          <div className="flex md:max-w-135 max-w-full xl:max-w-249.25 xl:flex-row flex-col w-full mx-auto bg-white-1100 rounded-2xl ">
            <div className="bg-white-1100 md:rounded-tl-2xl rounded-t-2xl md:rounded-bl-2xl  xl:py-7.25 py-6 px-6 xl:mx-0 md:mx-auto mx-0 md:w-[42%]  xl:w-[36%] w-full">
              <Link
                href="/"
                className="xl:mb-13.5 mb-9 md:mb-11.25 inline-flex"
              >
                <img
                  src="images/benchmedia.svg"
                  alt=""
                  className="xl:h-auto h-3.25"
                />
              </Link>
              <h3 className="xl:text-xl font-extrabold md:text-[13px] md:leading-4 text-xl leading-6 xl:leading-6 text-orange-1100 uppercase">
                KENNENLERNGESPRÄCH
              </h3>
              <p className="xl:text-xs text-[8px] font-light leading-2.25 xl:leading-3.5 text-black-1200 -tracking-[0.12px] py-2 xl:py-3">
                30 Minuten - Google Meet
              </p>
              <h4 className="text-black-1200 text-[10px] xl:text-base font-bold leading-sm xl:leading-5.5 pb-3 md:pb-1">
                ONLINE MARKETING BERATUNG
              </h4>
              <p className="text-black-1200 xl:text-sm text-[9px] leading-3 font-semibold xl:leading-4.75">
                DU VERDIENST ES, ONLINE SICHTBAR ZU SEIN!
              </p>
              <div className="xl:pt-8 pt-4">
                <p className="xl:text-xs md:text-[8px] md:leading-2.25 text-sm leading-4.5 font-normal xl:leading-3.5 -tracking-[0.12px] pb-4">
                  Im Kennenlerngespräch analysieren wir gemeinsam deine
                  Online-Präsenz und besprechen, wie du deine Reichweite,
                  Sichtbarkeit und den Erfolg steigern kannst.
                </p>
                <p className="xl:text-xs md:text-[8px] md:leading-2.25 text-sm leading-4.5 font-normal xl:leading-3.5 -tracking-[0.12px] pb-4">
                  <span className="text-orange-1100">
                    Wähle einfach deinen Wunschtermin im Kalender aus
                  </span>{" "}
                  und gib deine Kontaktdaten ein. Du erhältst im Anschluss eine
                  E-Mail mit deinem persönlichen Meeting-Link.
                </p>
                <p className="xl:text-xs md:text-[8px] md:leading-2.25 text-sm leading-4.5 font-normal xl:leading-3.5 -tracking-[0.12px]">
                  Wir freuen uns auf unser Treffen!
                </p>
              </div>
            </div>
            <div className="md:w-[64%] w-full xl:mx-0 md:mx-auto mx-0">
              <MeetingEmbed />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden pb-22 md:pb-41 xl:pb-50">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="xl:text-5xl text-xl xl:max-w-full  w-full max-w-full mx-auto text-white-1100 font-bold md:text-[32px] md:leading-11 xl:leading-16.75 leading-6">
              Insider-Wissen von deiner SEO Agentur:
              <span className="text-orange-1100 block">
                Trends und Best Practices
              </span>
            </h2>
            <span className="md:w-191.5 w-full h-37.5 hidden items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-0 left-1/2 -translate-x-1/2 blur-[150px] opacity-50"></span>
          </div>
        </div>
        <div className="xl:pt-22 pt-11">
          <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full ">
            <SeoArticleSlider />
            <div className="text-center pt-8">
              <CtaButton
                href="/"
                label="Alle Artikel ansehen"
                variant="transparent"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[url('/images/Call-to-Action-Banner.png')] bg-cover bg-center pt-8.75 xl:pt-10.25">
        <span className="w-120 hidden h-69.75 absolute top-0 left-0 xl:block rounded-[480px] bg-white-1100 opacity-60 blur-[120px]"></span>
        <div className="flex xl:items-center md:flex-row flex-col-reverse items-center md:items-start 2xl:gap-17.75 gap-10 md:gap-13.75 xl:gap-7.5">
          <div className="md:w-4/12 w-full relative z-1">
            <img
              src="/images/3d-rendring-img.png"
              className="md:max-w-full max-w-[250px]"
              alt="SEO Agentur CTA"
            />
          </div>
          <div className="md:w-8/12 w-full md:px-0 px-4 md:text-left text-center">
            <div className="">
              <h3 className="text-white-1100 max-w-199.75 w-full xl:text-5xl md:text-[29px] md:leading-10 text-xl leading-6 md:tracking-normal -tracking-[0.4px] xl:leading-[124%] font-semibold uppercase mb-3 xl:mb-12">
                Erhalte Antworten auf deine SEO-Fragen – wir beraten dich
                persönlich!
              </h3>
              <CtaButton href="/" label="Fragen oder mehr erfahren?" />
              <p className="text-white-1100 text-xs leading-[140%] font-normal mt-3">
                Nummer eintragen - wir rufen zurück!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:py-50 md:py-41 py-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="xl:text-5xl text-xl md:text-[32px] text-white-1100 font-bold md:leading-11 md:tracking-normal -tracking-[0.4px] xl:leading-16.75 leading-6">
              <span className="text-orange-1100 block">
                SEO Agentur verstehen:{" "}
              </span>
              Grundbegriffe und deren Bedeutung
            </h2>
            <div className="text-center mt-8 xl:mt-12">
              <CtaButton
                href="/"
                label="Kostenloses Kennenlernen"
                variant="transparent"
              />
            </div>
          </div>
          <div className="md:pt-22 pt-8">
            <h4 className="text-white-1100 xl:text-[32px] text-center font-medium md:text-2xl text-lg leading-5.5 md:tracking-normal -tracking-[0.18px] md:leading-7.25 xl:leading-[124%]">
              Was ist SEO? – Die Bedeutung der Suchmaschinenoptimierung erklärt
              von deiner SEO Agentur
            </h4>
            <div className="grid xl:grid-cols-2 xl:gap-8 mt-8 md:mt-16 xl:mt-22">
              <div className="mb-4 md:mb-6 lg:mb-0">
                <div className="bg-black-1200 rounded-2xl shadow-4xl md:px-10 px-4 py-6 md:py-8 mb-4 md:mb-6 lg:mb-8">
                  <h4 className="text-white-1100 md:text-2xl font-semibold md:tracking-normal -tracking-[0.18px] text-lg leading-5.5 md:leading-[140%] mb-4">
                    <span className="text-orange-1100 block">
                      Professionelle Suchmaschinenoptimierung
                    </span>
                    für langfristigen Erfolg und mehr organischen Traffic
                  </h4>
                  <p className="text-white-1100 text-sm font-normal leading-[124%]">
                    SEO (Search Engine Optimization) ist eine wesentliche
                    Methode im digitalen Marketing, die darauf abzielt, die
                    Platzierung deiner SEO optimierten Website in den
                    organischen Suchergebnissen von Suchmaschinen wie Google zu
                    verbessern. Es umfasst verschiedene Strategien, die deinen
                    organischen Traffic erhöhen, ohne für Klicks zu zahlen. Dazu
                    gehören technische Optimierungen, durchdachte
                    Content-Strategien und fortlaufendes Monitoring. Unsere SEO
                    Agentur bietet dir umfassende Lösungen, die alle Bereiche
                    von OnPage- und OffPage-SEO bis hin zu einem technisch SEO
                    optimierten Ansatz abdecken. Mit unserer SEO Agentur stellen
                    wir sicher, dass deine Website langfristig erfolgreich ist
                    und nachhaltig von den Vorteilen der
                    Suchmaschinenoptimierung profitiert.
                  </p>
                </div>
                <div className="bg-black-1200 rounded-2xl shadow-4xl px-4 py-6 md:px-10 md:py-8 xl:h-[calc(100%-460px)]">
                  <h4 className="text-white-1100 md:text-2xl font-semibold md:tracking-normal -tracking-[0.18px] text-lg leading-5.5 md:leading-[140%] mb-4">
                    Die wichtigsten Bestandteile der{" "}
                    <span className="text-orange-1100">SEO</span>
                  </h4>
                  <p className="text-white-1100 mb-4 xl:text-sm font-normal md:text-base md:leading-5.5 text-sm leading-4.25 xl:leading-[124%]">
                    SEO besteht aus mehreren Teilbereichen, die gemeinsam das
                    Ranking deiner Website verbessern. Als SEO Agentur bieten
                    wir dir eine Rundum-Betreuung, die alle Aspekte der
                    Suchmaschinenoptimierung abdeckt:
                  </p>
                  <ul>
                    <li className="flex items-start gap-4 mb-4">
                      <span className="max-w-31.5 w-full text-white-1100 text-sm font-semibold leading-[140%] underline block">
                        OnPage-SEO:
                      </span>
                      <p className="text-white-1100 md:text-base font-normal flex-1 text-sm leading-[17px] md:leading-[140%]">
                        Optimierung von Inhalten, Keywords, Meta-Tags und
                        internen Verlinkungen auf deiner Website.
                      </p>
                    </li>
                    <li className="flex items-start gap-4 mb-4">
                      <span className="max-w-31.5 w-full text-white-1100 text-sm font-semibold leading-[140%] underline block">
                        OffPage-SEO:
                      </span>
                      <p className="text-white-1100 md:text-base font-normal flex-1 text-sm leading-[17px] md:leading-[140%]">
                        Aufbau von Backlinks, um die Autorität deiner Website zu
                        steigern.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="max-w-31.5 w-full text-white-1100 text-sm font-semibold leading-[140%] underline block">
                        Technical-SEO:
                      </span>
                      <p className="text-white-1100 md:text-base font-normal flex-1 text-sm leading-[17px] md:leading-[140%]">
                        Verbesserung der Ladezeiten, URL-Struktur und
                        Mobiloptimierung für beste Performance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4 md:mb-6 lg:mb-0">
                <div className="bg-gradient rounded-2xl shadow-4xl px-4 py-6 md:px-10 md:py-8  mb-4 md:mb-6 lg:mb-8">
                  <h4 className="text-white-1100 md:text-2xl font-semibold md:tracking-normal -tracking-[0.18px] text-lg leading-5.5 md:leading-[140%] mb-4">
                    Wie funktioniert SEO? <br />– Die Funktionsweise erklärt
                  </h4>
                  <p className="text-white-1100 md:text-base font-normal text-sm leading-[17px] md:leading-[140%] mb-4">
                    SEO basiert auf der Optimierung von Inhalten und technischen
                    Aspekten einer Website, um den Anforderungen von
                    Suchmaschinenalgorithmen gerecht zu werden. Google
                    analysiert über 200 Ranking-Faktoren, um zu bestimmen,
                    welche Websites am relevantesten sind. Als erfahrene SEO
                    Agentur verbessern wir gezielt wichtige Faktoren wie die
                    Relevanz deiner Inhalte, die technische Performance,
                    Backlinks und die Benutzererfahrung, um deine Website SEO
                    optimiert nach vorne zu bringen. Unsere SEO Agentur
                    unterstützt dich dabei, alle wichtigen Elemente der
                    Suchmaschinenoptimierung erfolgreich umzusetzen.
                  </p>
                  <h5 className="text-white-1100 text-base font-bold leading-[140%]">
                    Wichtige Ranking-Faktoren:
                  </h5>
                  <ul className="mt-3">
                    <li className="flex items-start gap-4 mb-2">
                      <span className="flex items-center justify-center w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M1 9.80881C3.70134 12.8334 6.32053 15.5562 8.83825 19C11.5756 13.3662 14.3772 7.71278 19 1.59041L17.7544 1C13.851 5.28374 10.8184 9.33867 8.18327 14.1576C6.35082 12.4494 3.38937 10.0321 1.58116 8.79018L1 9.80881Z"
                            fill="#EF8F19"
                          />
                        </svg>
                      </span>
                      <p className="text-white-1100 md:text-base font-normal text-sm leading-[17px] md:leading-[140%]">
                        Inhaltsrelevanz: Google prüft, ob deine Inhalte zur
                        Suchanfrage passen.
                      </p>
                    </li>
                    <li className="flex items-start gap-4 mb-2">
                      <span className="flex items-center justify-center w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M1 9.80881C3.70134 12.8334 6.32053 15.5562 8.83825 19C11.5756 13.3662 14.3772 7.71278 19 1.59041L17.7544 1C13.851 5.28374 10.8184 9.33867 8.18327 14.1576C6.35082 12.4494 3.38937 10.0321 1.58116 8.79018L1 9.80881Z"
                            fill="#EF8F19"
                          />
                        </svg>
                      </span>
                      <p className="text-white-1100 md:text-base font-normal text-sm leading-[17px] md:leading-[140%]">
                        Technische Performance: Schnelle Ladezeiten und
                        Mobilfreundlichkeit sind entscheidend.
                      </p>
                    </li>
                    <li className="flex items-start gap-4 mb-2">
                      <span className="flex items-center justify-center w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M1 9.80881C3.70134 12.8334 6.32053 15.5562 8.83825 19C11.5756 13.3662 14.3772 7.71278 19 1.59041L17.7544 1C13.851 5.28374 10.8184 9.33867 8.18327 14.1576C6.35082 12.4494 3.38937 10.0321 1.58116 8.79018L1 9.80881Z"
                            fill="#EF8F19"
                          />
                        </svg>
                      </span>
                      <p className="text-white-1100 md:text-base font-normal text-sm leading-[17px] md:leading-[140%]">
                        Backlinks: Hochwertige Backlinks signalisieren Vertrauen
                        und Autorität.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="20"
                          viewBox="0 0 19 20"
                          fill="none"
                        >
                          <path
                            d="M1 9.80881C3.70134 12.8334 6.32053 15.5562 8.83825 19C11.5756 13.3662 14.3772 7.71278 19 1.59041L17.7544 1C13.851 5.28374 10.8184 9.33867 8.18327 14.1576C6.35082 12.4494 3.38937 10.0321 1.58116 8.79018L1 9.80881Z"
                            fill="#EF8F19"
                          />
                        </svg>
                      </span>
                      <p className="text-white-1100 md:text-base font-normal text-sm leading-[17px] md:leading-[140%]">
                        Benutzerfreundlichkeit: Eine gute User Experience
                        verbessert das Ranking Ihrer Website.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="bg-black-1200 rounded-2xl shadow-4xl md:px-10 px-4 py-6 md:py-8">
                  <h4 className="text-white-1100 md:text-2xl font-semibold md:tracking-normal -tracking-[0.18px] text-base leading-[22px] md:leading-[140%] mb-4">
                    <span className="text-orange-1100">
                      Wie lange dauert es,
                    </span>{" "}
                    bis SEO-Ergebnisse sichtbar werden?
                  </h4>
                  <p className="text-white-1100 mb-4 text-sm font-normal leading-[124%]">
                    SEO ist eine langfristige Strategie. Es dauert oft mehrere
                    Wochen bis Monate, bis sich sichtbare Ergebnisse zeigen.
                    Faktoren wie die Konkurrenz in Ihrer Branche und die
                    Qualität Ihrer Website beeinflussen den Zeitrahmen. Als SEO
                    Agentur setzen wir auf nachhaltige Strategien, die Ihnen
                    langfristigen Erfolg garantieren. Mit kontinuierlicher
                    Optimierung sorgen wir dafür, dass Ihre Website im
                    Wettbewerb die Nase vorn hat.
                  </p>
                  <p className="text-white-1100 text-sm font-normal leading-[124%]">
                    SEO sorgt für Sichtbarkeit, aber UI/UX Webdesign sorgt
                    dafür, dass Besucher bleiben. Eine ansprechende und
                    benutzerfreundliche Website ist entscheidend für den Erfolg
                    deiner SEO-Strategie.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:mt-8 bg-black-1200 rounded-2xl shadow-4xl px-4 py-6 md:px-10 md:py-8 xl:h-[calc(100%-460px)]">
              <h4 className="text-white-1100 md:text-2xl font-semibold md:tracking-normal -tracking-[0.18px] text-base leading-[22px] md:leading-[140%] mb-4">
                Wie beeinflusst SEO die User Experience?
              </h4>
              <p className="text-white-1100 mb-4 text-sm font-normal leading-[124%]">
                SEO und User Experience (UX) sind eng miteinander verknüpft.
                Google bevorzugt Websites, die nicht nur relevante Inhalte
                bieten, sondern auch benutzerfreundlich sind. Eine positive UX
                führt zu längeren Verweildauern, was wiederum das Ranking
                verbessert. Unsere SEO Agentur sorgt dafür, dass deine Website
                nicht nur SEO optimiert, sondern auch nutzerfreundlich ist.
              </p>
              <ul>
                <li className="flex items-start gap-4 mb-3">
                  <span className="max-w-37.5 w-full text-orange-1100 text-sm font-semibold leading-[140%] block">
                    Mobilfreundlichkeit
                  </span>
                  <p className="text-white-1100 md:text-base font-normal flex-1 text-sm leading-[17px] md:leading-[140%]">
                    Google bevorzugt mobile Webseiten.
                  </p>
                </li>
                <li className="flex items-start gap-4 mb-3">
                  <span className="max-w-37.5 w-full text-orange-1100 text-sm font-semibold leading-[140%] block">
                    Einfache Navigation:
                  </span>
                  <p className="text-white-1100 md:text-base font-normal flex-1 text-sm leading-[17px] md:leading-[140%]">
                    Eine intuitive Menüführung verbessert die User Experience.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="max-w-37.5 w-full text-orange-1100 text-sm font-semibold leading-[140%] block">
                    Schnelle Ladezeiten:
                  </span>
                  <p className="text-white-1100 md:text-base font-normal flex-1 text-sm leading-[17px] md:leading-[140%]">
                    Schnelle Webseiten senken die Absprungrate.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:pb-50 md:pb-41 pb-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="md:text-[32px] md:tracking-normal -tracking-[0.4px] text-xl text-white-1100 font-bold xl:font-medium leading-[124%]">
              <span className="text-orange-1100 xl:block">
                Warum eine SEO Agentur unverzichtbar ist –{" "}
              </span>
              Vorteile der SEO Optimierung für dein Unternehmen
            </h2>
          </div>
          <div className="flex xl:flex-row flex-col-reverse gap-8 md:gap-16 xl:gap-8 mt-8 md:mt-16 xl:mt-22">
            <div className="xl:max-w-93.75 max-w-full w-full">
              <img
                src="/images/trading-img.png"
                alt=""
                className="w-full xl:h-auto h-62 object-cover object-center xl:block hidden rounded-2xl"
              />
              <img
                src="/images/trading-img-tablet.jpg"
                alt=""
                className="w-full xl:h-auto h-62 object-cover object-center xl:hidden block rounded-2xl"
              />
            </div>
            <div className="xl:flex-1 w-full h-160.5 overflow-y-scroll pr-5 md:pr-10 custom-scroll">
              <div className="">
                <div className="xl:mb-8 md:mb-12 mb-6">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Erhöhte Sichtbarkeit durch Suchmaschinenoptimierung
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    Die Sichtbarkeit in den Suchmaschinen ist ein
                    Schlüsselfaktor für den Erfolg jeder Website. Durch
                    professionelle SEO optimiert-Strategien kann deine Seite in
                    den Suchergebnissen weiter oben erscheinen, was dazu führt,
                    dass mehr Nutzer auf deine Inhalte aufmerksam werden. Eine
                    erfahrene SEO Agentur hilft dir dabei, deine Website so zu
                    optimieren, dass sie für relevante Keywords sichtbar ist.
                    Mit einer gezielten Suchmaschinenoptimierung erreichst du
                    mehr potenzielle Kunden und erhöhst die Bekanntheit deiner
                    Marke nachhaltig.
                  </p>
                </div>
                <div className="xl:mb-8 md:mb-12 mb-6">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Steigerung des organischen Traffics durch gezielte
                    SEO-Maßnahmen
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    Organischer Traffic ist einer der wichtigsten Vorteile von
                    SEO. Durch die gezielte Optimierung deiner Website für
                    relevante Keywords können Nutzer deine Inhalte leicht
                    finden, ohne dass laufende Kosten wie bei bezahlten Anzeigen
                    anfallen. Eine SEO Agentur kann die passenden Keywords
                    identifizieren und deine Inhalte so optimieren, dass deine
                    Website langfristig organischen Traffic generiert und
                    Besucher anzieht, die sich wirklich für deine
                    Dienstleistungen interessieren.
                  </p>
                </div>
                <div className="xl:mb-8 md:mb-12 mb-6">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Marketingkosten senken mit einer effizienten SEO-Strategie
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    SEO ist eine kosteneffiziente Marketingstrategie. Während
                    bezahlte Anzeigen kontinuierlich Budget verschlingen, bietet
                    SEO langfristige Ergebnisse ohne wiederkehrende Kosten.
                    Durch die Zusammenarbeit mit einer kompetenten SEO Agentur
                    sparst du Marketingkosten, indem du organischen Traffic auf
                    deine Website lenkst. Dies ermöglicht dir, deine Ressourcen
                    effektiver zu nutzen und auf nachhaltige Besucherströme zu
                    setzen.
                  </p>
                </div>
                <div className="xl:mb-8 md:mb-12 mb-6">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Vertrauen und Glaubwürdigkeit aufbauen durch SEO und
                    Top-Rankings
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    Eine gute SEO Optimierung trägt zum Aufbau von Vertrauen und
                    Glaubwürdigkeit bei. Websites, die organisch auf den
                    vorderen Plätzen in den Suchergebnissen erscheinen, werden
                    von Nutzern als vertrauenswürdig angesehen. Eine
                    professionelle SEO Agentur sorgt dafür, dass Ihre Inhalte
                    sowohl für Suchmaschinen als auch für Nutzer optimiert sind,
                    was langfristig zu einer stärkeren Markenwahrnehmung und
                    höheren Konversionsraten führt.
                  </p>
                </div>
                <div className="xl:mb-8 md:mb-12 mb-6">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Verbesserte Benutzererfahrung dank SEO Optimierung{" "}
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    SEO geht Hand in Hand mit einer positiven Benutzererfahrung
                    (UX). Eine gut optimierte Website lädt schneller, ist
                    mobilfreundlich und bietet eine intuitive Navigation. All
                    diese Faktoren verbessern die User Experience und führen
                    dazu, dass Besucher länger auf deiner Seite bleiben. Eine
                    SEO Agentur kann dir dabei helfen, nicht nur deine
                    Suchmaschinen-Rankings zu verbessern, sondern auch die
                    Benutzerfreundlichkeit deiner Website zu optimieren.
                  </p>
                </div>
                <div className="xl:mb-8 md:mb-12 mb-6">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Wettbewerbsvorteil sichern durch maßgeschneiderte
                    SEO-Strategien
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    In einem umkämpften Marktumfeld ist es entscheidend, sich
                    von der Konkurrenz abzuheben. Unternehmen, die SEO
                    ignorieren, riskieren, hinter ihren Wettbewerbern
                    zurückzufallen. Eine erfahrene SEO Agentur kann dir helfen,
                    deine Konkurrenz zu analysieren und maßgeschneiderte SEO
                    Optimierungen zu entwickeln, die dir dabei helfen, in den
                    Suchergebnissen hervorzuheben und potenzielle Kunden zu
                    gewinnen, bevor es die Konkurrenz tut.
                  </p>
                </div>
                <div className="">
                  <h4 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-4.75 mb-3 md:leading-[140%]">
                    Langfristige SEO-Ergebnisse für nachhaltigen Erfolg
                  </h4>
                  <p className="text-white-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal">
                    Im Gegensatz zu kurzfristigen Marketingstrategien bietet SEO
                    nachhaltige Ergebnisse. Auch wenn SEO ein kontinuierlicher
                    Prozess ist, können die erzielten Ergebnisse langfristig
                    bestehen bleiben, ohne dass stetige Investitionen nötig
                    sind. Eine SEO Agentur entwickelt eine individuelle
                    Strategie, die auf langfristigen Erfolg abzielt, damit deine
                    Website dauerhaft Sichtbarkeit und Traffic erhält, selbst
                    nachdem die anfänglichen Optimierungen abgeschlossen sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[url('/images/call-action-bg.jpg')] bg-cover bg-center pt-10 md:pt-15.25 pb-[287px] xl:py-26">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="">
            <h3 className="text-white-1100 font-semibold md:text-[40px] md:leading-12.25 text-[28px] leading-8.5 xl:text-5xl mb-8 md:mb-12 xl:leading-[124%] uppercase max-w-177.25 w-full">
              Du fragst dich: Ist das überhaupt relevant für mich? Wir zeigen es
              dir
            </h3>
            <CtaButton href="/" label="SEO-Analyse anfordern" />
            <p className="text-white-1100 font-normal mt-3 text-xs leading-[140%]">
              Finde heraus, wie PPC deine Reichweite erhöht.
            </p>
          </div>
        </div>
        <div className="flex flex-col absolute top-auto xl:bottom-auto -bottom-[87px] md:-bottom-21.75 xl:-top-21.5 right-0">
          <img src="/images/spaceMen.png" alt="" className="xl:block hidden" />
          <img
            src="/images/mbl-spaceman.png"
            className="xl:hidden block h-100 object-cover object-center"
            alt=""
          />
        </div>
      </section>
      <section className="relative xl:py-50 md:py-41 py-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="xl:text-5xl md:text-[32px] md:leading-11 text-xl leading-6 text-white-1100 font-medium xl:leading-[124%]">
              <span className="text-orange-1100 block">
                SEO-Techniken und -Strategien
              </span>
              der SEO Agentur
            </h2>
            <CtaButton
              className="mt-10"
              href="/"
              label="Kostenloses Kennenlernen"
              variant="transparent"
            />
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                OnPage SEO Optimierung – Wie deine SEO Agentur dein
                Google-Ranking verbessert
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Effektive Keyword-Recherche und technische
                    OnPage-Optimierung für maximale Sichtbarkeit
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine erfolgreiche SEO-Optimierung beginnt mit einer
                    fundierten Keyword-Recherche, bei der gezielt Suchbegriffe
                    mit hohem Suchvolumen und geringer Konkurrenz identifiziert
                    werden. Durch technische OnPage-Optimierungen wie schnelle
                    Ladezeiten, eine optimierte URL-Struktur und die richtigen
                    Meta-Tags stellt deine SEO Agentur sicher, dass deine
                    Website technisch einwandfrei funktioniert und den
                    Suchmaschinen höchste Relevanz signalisiert.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Content-Optimierung: Hochwertige Inhalte für bessere
                    Rankings und Nutzerbindung
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Die Erstellung von SEO-optimierten Inhalten ist der
                    Schlüssel zu nachhaltigem Erfolg. Deine SEO Agentur
                    entwickelt Texte, Bilder und Videos, die perfekt auf deine
                    Zielgruppe und die Anforderungen der Suchmaschinen
                    abgestimmt sind. So wird die Sichtbarkeit in den
                    Suchergebnissen gesteigert und gleichzeitig Mehrwert für die
                    Nutzer geschaffen.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Interne Verlinkungsstrategien: Optimale Navigation für
                    Nutzer und Suchmaschinen
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine durchdachte interne Verlinkungsstrategie ist
                    essenziell, um eine SEO-optimierte Website zu schaffen. Sie
                    hilft sowohl den Nutzern als auch den Suchmaschinen, sich
                    effizient auf deiner SEO-optimierten Website
                    zurechtzufinden. Deine SEO Agentur stellt sicher, dass eine
                    logische und SEO-optimierte Navigationsstruktur entwickelt
                    wird, die sowohl die Benutzererfahrung verbessert als auch
                    dein Ranking nachhaltig stärkt.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full">
              <img
                src="/images/Onpage-img.jpg"
                alt=""
                className="w-full object-cover object-center xl:block hidden rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img1.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62"
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full order-2">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-4.75 md:text-xl md:leading-7 xl:leading-[140%]">
                OffPage SEO: Steigere deine Autorität durch gezielte Backlinks
                mit einer SEO Agentur
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Erfolgreiches Linkbuilding: Backlinks für bessere
                    Suchmaschinenoptimierung
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Linkbuilding ist ein zentraler Baustein jeder erfolgreichen
                    OffPage-SEO-Optimierung. Es geht darum, qualitativ
                    hochwertige Backlinks von vertrauenswürdigen Websites zu
                    gewinnen. Suchmaschinen bewerten Websites mit starken
                    Backlinks als relevanter und glaubwürdiger, was zu besseren
                    Rankings führt. Deine SEO Agentur entwickelt gezielte
                    Linkbuilding-Strategien, die dir helfen, von relevanten und
                    einflussreichen Websites empfohlen zu werden. Mit den
                    richtigen Links steigerst du deine Autorität und deine
                    Sichtbarkeit in den Suchergebnissen nachhaltig.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Social Signals für SEO: Nutze die Kraft von Social Media mit
                    einer erfahrenen SEO Agentur
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Social Media spielt eine immer größere Rolle für die
                    SEO-Sichtbarkeit. Social Signals, wie Likes, Shares und
                    Kommentare, zeigen Suchmaschinen, dass deine Inhalte
                    relevant und populär sind. Deine SEO Agentur integriert
                    Social Media in deine OffPage-SEO-Optimierung, um deine
                    Reichweite zu vergrößern und deine Markenbekanntheit zu
                    steigern. Die Verbreitung von Inhalten über soziale
                    Netzwerke führt nicht nur zu mehr Traffic, sondern wirkt
                    sich auch positiv auf dein SEO-Ranking aus.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Reputation Management für besseres Ranking: So optimiert
                    deine SEO Agentur deine Online-Reputation
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Ein positives Online-Reputation-Management ist für jedes
                    Unternehmen unerlässlich, um langfristig erfolgreich zu
                    sein. Negative Bewertungen und Kommentare können deinem
                    Image schaden und deine SEO-Sichtbarkeit beeinträchtigen.
                    Deine SEO Agentur hilft dir, eine starke, positive
                    Online-Präsenz aufzubauen, indem sie gezielt auf
                    Kundenfeedback reagiert und proaktiv gute Rezensionen
                    fördert. Ein gutes Reputationsmanagement trägt dazu bei, das
                    Vertrauen der Nutzer zu stärken und dein Ranking in den
                    Suchergebnissen zu verbessern.
                  </p>
                </div>
                <div className="">
                  <p className="text-white-1100 font-light text-xs italic leading-[124%] mt-3 xl:mt-8">
                    Eine starke Reputation ist ebenso entscheidend wie
                    Backlinks. Erfahre mehr über gezielte{" "}
                    <Link href={"#"} className="underline">
                      PR-Maßnahmen,
                    </Link>{" "}
                    die dir helfen, deine Markenbekanntheit weiter auszubauen
                    und Vertrauen zu schaffen.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full order-2 xl:order-1">
              <img
                src="/images/offPage-img.jpg"
                alt=""
                className="w-full object-cover xl:block hidden object-center rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img2.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62 "
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                Technisches SEO mit deiner SEO Agentur: Ladezeiten, Sicherheit &
                mehr
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Mobile- und Website-Optimierung: Mobilfreundliches Design
                    und klare Architektur für SEO-Erfolg
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine mobil-optimierte Website ist entscheidend, da Google
                    mobilefreundliche Seiten bevorzugt und in den Rankings
                    besser bewertet. Deine SEO Agentur sorgt dafür, dass deine
                    Website auf allen Geräten optimal funktioniert, was sowohl
                    die Benutzererfahrung als auch die Suchmaschinenplatzierung
                    verbessert. Zusätzlich wird die Website-Architektur
                    optimiert, damit Inhalte leicht zugänglich sind und die
                    Crawler effizient durch die Seiten navigieren können, was zu
                    einer besseren Indexierbarkeit und Auffindbarkeit deiner
                    Inhalte führt.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Sicherheitsprotokolle und SSL: Vertrauen und Schutz für
                    bessere SEO-Ergebnisse
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Sicherheit ist ein wichtiger Ranking-Faktor in der
                    Suchmaschinenoptimierung. SSL-Zertifikate (HTTPS) schützen
                    nicht nur die Daten der Nutzer, sondern stärken auch das
                    Vertrauen und die Glaubwürdigkeit deiner Website. Deine SEO
                    Agentur hilft dir, die nötigen Sicherheitsmaßnahmen zu
                    implementieren, um deine Website vor Cyberangriffen zu
                    schützen und gleichzeitig deine Platzierung in den
                    Suchergebnissen zu verbessern.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full">
              <img
                src="/images/technisches-img.jpg"
                alt=""
                className="w-full object-cover xl:block hidden object-center rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img3.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62 "
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full order-2">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                Local SEO – Werde lokal gefunden dank professioneller
                SEO-Beratung
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Google My Business Optimierung: Lokale Auffindbarkeit mit
                    deiner SEO Agentur steigern
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine optimierte Google My Business-Eintragung ist
                    entscheidend für Unternehmen, die lokal gefunden werden
                    möchten. Durch die Pflege eines vollständigen und gut
                    strukturierten Google My Business-Profils kannst du
                    sicherstellen, dass dein Unternehmen bei lokalen
                    Suchanfragen, wie z. B. "Dienstleistungen in [Stadtname]"
                    oder "Geschäft in der Nähe", weit oben erscheint. Deine SEO
                    Agentur unterstützt dich bei der Optimierung deines Profils,
                    indem sie relevante Informationen wie Öffnungszeiten,
                    Standort und Kontaktdaten einpflegt und dadurch deine lokale
                    Sichtbarkeit sowie die Interaktionen potenzieller Kunden
                    steigert.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Eintragung in lokale Verzeichnisse: Mehr Reichweite durch
                    gezielte SEO-Strategien
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Um deine lokale SEO-Optimierung zu stärken, ist die
                    Eintragung in relevante lokale Verzeichnisse unerlässlich.
                    Branchenverzeichnisse wie Yelp, Gelbe Seiten oder andere
                    spezialisierte Plattformen bieten dir die Möglichkeit, deine
                    Reichweite zu vergrößern und die Sichtbarkeit deines
                    Unternehmens zu erhöhen. Deine SEO Agentur identifiziert die
                    wichtigsten Verzeichnisse für deine Branche und sorgt dafür,
                    dass deine Unternehmensinformationen korrekt und einheitlich
                    eingetragen werden. Dies stärkt nicht nur deine Position in
                    den Suchmaschinen, sondern erleichtert es auch lokalen
                    Kunden, dein Unternehmen zu finden.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Kundenbewertungen für Local SEO: Vertrauensaufbau und
                    bessere Suchergebnisse
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Kundenbewertungen spielen eine wichtige Rolle im Local SEO,
                    da sie das Vertrauen und die Glaubwürdigkeit deines
                    Unternehmens bei potenziellen Kunden steigern. Positive
                    Bewertungen verbessern nicht nur dein Ranking in den lokalen
                    Suchergebnissen, sondern auch die Wahrscheinlichkeit, dass
                    Nutzer dein Unternehmen auswählen. Deine SEO Agentur hilft
                    dir dabei, Strategien zur Erhöhung deiner Bewertungen zu
                    entwickeln und zeigt dir, wie du auf Bewertungen
                    professionell reagieren kannst, um deine lokale Reputation
                    zu stärken. Authentische, positive Kundenmeinungen sind ein
                    wichtiger Erfolgsfaktor für die lokale Sichtbarkeit.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full order-2 xl:order-1">
              <img
                src="/images/local-seo-img.jpg"
                alt=""
                className="w-full object-cover xl:block hidden object-center rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img4.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62 "
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                E-Commerce SEO: Mehr Verkäufe mithilfe deiner SEO Agentur
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Produkt- und Kategorie-Seitenoptimierung: Sichtbarkeit und
                    Benutzererfahrung durch gezielte Suchmaschinenoptimierung
                    steigern
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Die Optimierung von Produkt- und Kategorie-Seiten ist ein
                    zentraler Bestandteil des E-Commerce SEO. Durch die
                    strategische Platzierung relevanter Keywords und
                    ansprechende Inhalte steigert eine professionelle SEO
                    Agentur die Sichtbarkeit deiner Produkte in Suchmaschinen
                    und sorgt für eine klare, benutzerfreundliche Navigation,
                    die sowohl für Nutzer als auch für Suchmaschinen von Vorteil
                    ist.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Conversion Optimierung im E-Commerce: Mehr Umsatz durch
                    technische und inhaltliche SEO-Maßnahmen
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine gut strukturierte und optimierte Kategorie-Seite ist
                    essenziell für die Benutzererfahrung und die SEO-Performance
                    eines Online-Shops. SEO-Agenturen arbeiten daran, dass deine
                    Kategorie-Seiten sowohl für Suchmaschinen als auch für
                    Nutzer leicht zugänglich sind. Dies umfasst die
                    Implementierung relevanter Keywords, das Erstellen von
                    ansprechenden Inhalten sowie die Verbesserung der internen
                    Verlinkung. Eine klare und übersichtliche Struktur auf
                    Kategorie-Seiten trägt nicht nur zur besseren Navigation
                    bei, sondern steigert auch die organische Reichweite und die
                    Rankings in den Suchergebnissen.
                  </p>
                </div>
                <p className="text-white-1100 font-light text-xs italic leading-[124%] mt-3 xl:mt-8">
                  Erfahre mehr über{" "}
                  <Link href={"/conversion-optimierung"} className="underline">
                    {" "}
                    Conversion Optimierung
                  </Link>{" "}
                  - nicht nur relevant für Online-Shops.
                </p>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full">
              <img
                src="/images/E-Commerce-img.jpg"
                alt=""
                className="w-full object-cover xl:block hidden object-center rounded-2xl xl:h-auto h-62"
              />
              <img
                src="/images/strategien-img5.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62"
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full order-2">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                Mobile SEO mit Unterstützung einer SEO Agentur – Optimiere deine
                Website für die mobile Suche
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Responsive Design für Mobile SEO: Wie deine SEO Agentur
                    deine Website für mobile Geräte optimiert
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Ein responsives Design ist unverzichtbar, um in der mobilen
                    Suche erfolgreich zu sein. Deine SEO Agentur stellt sicher,
                    dass deine Website auf allen mobilen Endgeräten optimal
                    dargestellt wird. Mit einem flexiblen Layout, das sich an
                    verschiedene Bildschirmgrößen anpasst, verbessern wir die
                    Benutzerfreundlichkeit auf Smartphones und Tablets. Diese
                    Optimierungen tragen nicht nur zu einer besseren User
                    Experience bei, sondern steigern auch deine
                    Suchmaschinenplatzierungen. Wenn deine Website auf allen
                    Geräten nahtlos funktioniert, bleiben Nutzer länger auf
                    deiner Seite und die Konversionsraten steigen.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    SEO Agentur für Mobile PageSpeed: Ladezeitenoptimierung für
                    bessere mobile Suchmaschinen-Rankings
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Die Ladegeschwindigkeit ist einer der wichtigsten Faktoren
                    für die mobile Suchmaschinenoptimierung. Langsame Ladezeiten
                    führen zu höheren Absprungraten und einer schlechten User
                    Experience, was wiederum deine Rankings beeinträchtigen
                    kann. Deine SEO Agentur analysiert die Performance deiner
                    mobilen Website und setzt gezielte Maßnahmen zur
                    Ladezeitoptimierung um. Dazu gehören Bildkomprimierung,
                    Caching-Strategien und die Reduzierung von HTTP-Anfragen.
                    Das Ergebnis ist eine blitzschnelle Website, die nicht nur
                    die Zufriedenheit der Nutzer erhöht, sondern auch bessere
                    Platzierungen in den mobilen Suchergebnissen erreicht.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Erfolgreiches Mobile First Indexing: Wie deine Website für
                    Googles mobile Strategie optimiert wird
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Seit Google das Mobile First Indexing eingeführt hat, wird
                    die mobile Version einer Website vorrangig für das Ranking
                    in den Suchergebnissen verwendet. Das bedeutet, dass deine
                    mobile Website perfekt optimiert sein muss, um im Wettbewerb
                    bestehen zu können. Deine SEO Agentur sorgt dafür, dass
                    deine mobile Website alle Anforderungen erfüllt: von
                    responsivem Design über korrekt implementierte Meta-Tags bis
                    hin zu strukturierten Daten. Durch die Anpassung an diese
                    mobile SEO-Optimierung sichern wir dir langfristig bessere
                    Platzierungen und steigern den organischen Traffic.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full order-2 xl:order-1">
              <img
                src="/images/mobile-seo-img.jpg"
                alt=""
                className="w-full object-cover xl:block hidden object-center rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img6.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62"
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                Content-Marketing & SEO: Wie relevante Inhalte deine
                Sichtbarkeit steigern
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    SEO Agentur für Content-Erstellung: Relevante Inhalte, die
                    deine Suchmaschinenoptimierung vorantreiben
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Die Content-Erstellung ist ein zentraler Bestandteil einer
                    SEO-optimierten Strategie. Deine SEO Agentur erstellt
                    einzigartige und relevante Inhalte, die sowohl deine
                    Zielgruppe ansprechen als auch die Anforderungen der
                    Suchmaschinen erfüllen. Durch die strategische Integration
                    von Keywords in hochwertige und SEO-optimierte Texte, Bilder
                    und Videos verbessert sich die Sichtbarkeit in den
                    organischen Suchergebnissen. Relevante und gut recherchierte
                    Inhalte sorgen dafür, dass Nutzer länger auf deiner
                    SEO-optimierten Website bleiben und regelmäßig zurückkehren,
                    was sich positiv auf deine Rankings auswirkt.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Regelmäßige SEO-Blogs und Artikel: Wie deine SEO Agentur
                    deine Website kontinuierlich stärkt
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Regelmäßige Blogbeiträge und Artikel sind essenziell, um die
                    Sichtbarkeit deiner Website kontinuierlich zu verbessern.
                    Deine SEO Agentur plant und erstellt Inhalte, die relevante
                    Suchbegriffe abdecken und den Lesern gleichzeitig wertvolle
                    Informationen bieten. Durch die regelmäßige Veröffentlichung
                    von suchmaschinenoptimierten Artikeln stärkst du deine
                    Autorität in deiner Branche und erreichst eine höhere
                    Platzierung in den Suchmaschinen. Zudem hilft die
                    konsequente Produktion von SEO-Blogs, den organischen
                    Traffic zu steigern und potenzielle Kunden zu binden.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Content-Strategie: Langfristige Planung der Inhalte für
                    maximale SEO-Wirkung
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine gut durchdachte Content-Strategie ist entscheidend, um
                    langfristig erfolgreich zu sein. Deine SEO Agentur
                    entwickelt umfassende Content-Pläne, die auf eine
                    kontinuierliche Optimierung abzielen. Dabei wird nicht nur
                    die Erstellung neuer Inhalte, sondern auch die
                    Aktualisierung bestehender Seiten berücksichtigt, um
                    maximale SEO-Wirkung zu erzielen. Eine starke
                    Content-Strategie sorgt dafür, dass deine Website in den
                    relevanten Suchanfragen stets präsent ist und deine Marke
                    nachhaltig gestärkt wird.
                  </p>
                </div>
                <p className="text-white-1100 font-light text-xs italic leading-[124%] mt-3 xl:mt-8">
                  Visuelle Inhalte, wie{" "}
                  <Link href={"/"} className="underline">
                    {" "}
                    Videos
                  </Link>{" "}
                  sind ebenso wichtig wie Textinhalte und können dir helfen, die
                  Engagement-Rate und Sichtbarkeit zu erhöhen. Erfahre mehr über{" "}
                  <Link href={"/"} className="underline">
                    {" "}
                    Videoproduktion
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full">
              <img
                src="/images/Content-img.jpg"
                alt=""
                className="w-full object-cover  xl:block hidden object-center rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img7.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62"
              />
            </div>
          </div>
          <div className="flex gap-8 xl:mt-22 md:mt-16 mt-12 xl:flex-row flex-col">
            <div className="flex-1 w-full order-2">
              <h4 className="text-white-1100 font-semibold xl:text-2xl text-base leading-[19px] md:text-xl md:leading-7 xl:leading-[140%]">
                SEO-Analyse und Reporting – Deine SEO Agentur gibt dir präzise
                Insights
              </h4>
              <div className='bg-black mt-8 rounded-2xl shadow-4xl bg-[url("/images/galaxy-img2.jpg")] bg-cover bg-center py-8 px-4 md:p-8'>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Umfassende Website-Analyse für bessere SEO-Leistungen
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Eine gründliche SEO-Analyse ist der erste Schritt, um das
                    volle Potenzial deiner Website auszuschöpfen. Deine SEO
                    Agentur untersucht technische Faktoren, Inhaltsqualität,
                    Backlink-Profil und mehr, um Optimierungspotenziale zu
                    identifizieren. Mit einer detaillierten Analyse kann die
                    SEO-Optimierung präzise auf deine Ziele und die aktuellen
                    Suchmaschinenanforderungen abgestimmt werden.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Wettbewerbsanalyse: Deine Position im Vergleich zur
                    Konkurrenz
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Durch die Wettbewerbsanalyse erhältst du Einblicke in die
                    Strategien deiner Mitbewerber. Deine SEO Agentur vergleicht
                    deine SEO-Performance mit der deiner Konkurrenz und
                    identifiziert Chancen, um dich gezielt von ihnen abzuheben.
                    Diese Analyse ermöglicht es, gezielte Maßnahmen zur
                    Steigerung deiner Sichtbarkeit zu entwickeln.
                  </p>
                </div>
                <div className="md:mb-8 mb-6">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Regelmäßige Fortschrittsberichte für eine klare Sicht auf
                    deine SEO-Leistungen
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Deine SEO Agentur erstellt regelmäßige Berichte, die die
                    Entwicklung deiner Sichtbarkeit, Rankings und des
                    organischen Traffics aufzeigen. Durch das Monitoring der
                    wichtigsten KPIs hast du immer einen Überblick über den
                    Erfolg deiner SEO-Maßnahmen und kannst die Effektivität der
                    Strategie nachvollziehen.
                  </p>
                </div>
                <div className="">
                  <h5 className="text-orange-1100 font-bold text-base leading-[140%]">
                    Datenbasierte Optimierung für kontinuierliche Verbesserung
                  </h5>
                  <p className="text-white-1100 font-normal text-sm leading-[124%] mt-3 xl:mt-4">
                    Die gewonnenen Erkenntnisse aus der SEO-Analyse und dem
                    Reporting ermöglichen eine datenbasierte Anpassung der
                    SEO-Optimierung. Mit diesen kontinuierlichen Optimierungen
                    bleibt deine Website langfristig wettbewerbsfähig und
                    erfüllt die sich ständig wandelnden Anforderungen der
                    Suchmaschinen. Deine SEO Agentur hilft dir, datengetrieben
                    den bestmöglichen ROI aus deiner SEO-Optimierung zu
                    erzielen.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:max-w-120.25 w-full order-2 xl:order-1">
              <img
                src="/images/Analyse-img.jpg"
                alt=""
                className="w-full object-cover xl:block hidden object-center rounded-2xl xl:h-auto h-62 "
              />
              <img
                src="/images/strategien-img8.jpg"
                alt=""
                className="w-full object-cover xl:hidden block object-center rounded-2xl xl:h-auto h-62 "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[url('/images/Call-to-Action-2.jpg')]  bg-cover bg-center shadow-4xl xl:pt-17.25 pt-[34px] md:py-7.25 xl:pb-19.5">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="flex items-center md:flex-row flex-col-reverse">
            <div className="md:w-5/12 relative w-full">
              <div className="3xl:-ml-23.5 2xl:-ml-16 float-right md:float-left  md:-mt-28 md:-mb-46.25">
                <img
                  src="/images/3d-rendring.png"
                  alt="SEO Agentur CTA"
                  className="xl:h-155.5 h-[331px] md:h-106.75 relative z-1"
                />
              </div>
              <img
                src="/images/big-circle.png"
                className="absolute 2xl:-top-[108px] md:-top-[150px] md:bottom-auto bottom-0 left-5 md:-left-10 2xl:left-7 3xl:-left-1.5 h-[264px] xl:h-[436px]"
                alt=""
              />
            </div>
            <div className="md:w-7/12">
              <div className="">
                <h3 className="text-white-1100 max-w-199.75 w-full xl:text-5xl md:text-left text-center md:text-[32px] md:leading-11 text-xl leading-6 md:tracking-normal -tracking-[0.4px] xl:leading-[124%] font-semibold uppercase mb-8 md:mb-10">
                  Erfahre, warum du noch keine Kunden über Deine Website
                  bekommst!
                </h3>
                <CtaButton href="/" label="Jetzt Kennenlerngespräch buchen" />
                <p className="text-white-1100 text-xs leading-[140%] font-normal mt-3">
                  Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/circle-shape.svg"
          className="absolute top-1/2 md:-top-10 2xl:top-9.25 left-0"
          alt=""
        />
      </section>
      <section className="xl:py-50 md:py-41 py-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 md:pb-10 relative">
            <span className="md:w-191.5 w-full h-37.5 hidden items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white-1100 xl:text-5xl text-xl leading-6 md:text-[32px] md:leading-7 font-bold xl:leading-16.75">
              <span className="text-orange-1100 block">Deine SEO Agentur:</span>
              <span className="xl:text-5xl md:text-xl md:leading-7 xl:pt-0 xl:inline-block block pt-3 text-base leading-[19px] font-bold xl:leading-16.75">
                {" "}
                Individuelle Strategien, modernste Tools und messbare Erfolge
                für langfristige Sichtbarkeit
              </span>
            </h2>
            <CtaButton
              href="/"
              label="Kostenloses Kennenlernen"
              className="mt-10"
              variant="transparent"
            />
          </div>
          <div className="xl:py-22 md:pt-16 md:pb-12 py-8">
            <h3 className="md:text-[32px] text-xl leading-6 md:tarcking-normal -tracking-[0.4px] text-center md:leading-[124%] font-medium text-white-1100">
              Der SEO Prozess - Step by Step zu Top Rankings mit deiner SEO
              Agentur
            </h3>
          </div>
          <Advantagecards2 />
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="md:text-[32px] text-xl leading-6 md:tarcking-normal -tracking-[0.4px] xl:max-w-205 w-full mx-auto text-white-1100 font-medium leading-[124%]">
              Unsere SEO Agentur Pakete – Maßgeschneiderte Lösungen für deinen
              Erfolg
            </h2>
          </div>
        </div>
        <div className="xl:pt-22 md:pt-16 pt-8">
          <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full ">
            <Pricingslider />
          </div>
        </div>
      </section>
      <section className="overflow-hidden xl:pt-50 md:pt-41 pb-0 py-22">
        <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="xl:text-[32px] max-w-225 w-full mx-auto text-white-1100 font-medium md:text-2xl md:leading-[29px] text-xl leading-6 md:tarcking-normal -tracking-[0.4px] xl:leading-[124%]">
              Die besten SEO-Tools im Einsatz – Deine SEO Agentur nutzt
              modernste Technologien
            </h2>
          </div>
          <div className="xl:grid hidden grid-cols-3 xl:grid-cols-4 gap-8 xl:mt-22 mt-16">
            <div className="card-google-analytics xl:col-span-1 col-span-2  bg-black-1200 rounded-2xl shadow-4xl p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                Google <br /> Analytics{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Es werden tiefgehende Einblicke in das Verhalten deiner Nutzer
                gewonnen.{" "}
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-ga-logo bg-white-1100 rounded-2xl xl:col-span-1 col-span-2 shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/signal2.png" alt="" />
            </div>
            <div className="card-hero-image-top xl:col-span-2 border border-solid border-orange-1100 rounded-2xl">
              <img
                src="/images/Analytics-img.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="card-semrush-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/semrush-img.png" alt="" />
            </div>
            <div className="card-semrush-text bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                SEMrush{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Wertvolle Keywords werden identifiziert und die Konkurrenz
                analysiert – alles mit SEMrush.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-ahrefs-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/ahrefs.png" alt="" />
            </div>
            <div className="card-ahrefs-text  bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                Ahrefs{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Das Linkprofil wird optimiert und Backlinks analysiert, die für
                dein Wachstum entscheidend sind.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-hero-image-bottom xl:col-span-2 border border-solid border-orange-1100 rounded-2xl">
              <img
                src="/images/sistrix-img.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="card-sistrix-text bg-black-1200 rounded-2xl shadow-4xl p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                SISTRIX{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Die Sichtbarkeit deiner Website wird überwacht, um Potenziale
                zur Optimierung zu erkennen.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-sistrix-logo bg-white-1100 rounded-2xl shadow-5xl px-5 flex items-center justify-center">
              <img
                src="/images/sistrx-img.png"
                className="h-[66px] md:h-auto object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="xl:hidden md:grid hidden grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8 xl:mt-22 mt-16">
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <div className="card-google-analytics bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
                <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                  Google <br /> Analytics{" "}
                </h4>
                <p className="text-white-1100 font-normal text-xs leading-[140%]">
                  Es werden tiefgehende Einblicke in das Verhalten deiner Nutzer
                  gewonnen.{" "}
                </p>
                <Link
                  href={"/"}
                  className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
                >
                  <img src="/images/up-arw.svg" alt="" />
                </Link>
              </div>
              <div className="card-ga-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
                <img src="/images/signal2.png" alt="" />
              </div>
            </div>
            <div className="card-hero-image-top xl:col-span-2 border border-solid border-orange-1100 rounded-2xl">
              <img
                src="/images/Analytics-img.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="card-semrush-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/semrush-img.png" alt="" />
            </div>
            <div className="card-semrush-text bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                SEMrush{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Wertvolle Keywords werden identifiziert und die Konkurrenz
                analysiert – alles mit SEMrush.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-4">
              <div className="card-ahrefs-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
                <img src="/images/ahrefs.png" alt="" />
              </div>
              <div className="card-ahrefs-text  bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
                <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                  Ahrefs{" "}
                </h4>
                <p className="text-white-1100 font-normal text-xs leading-[140%]">
                  Das Linkprofil wird optimiert und Backlinks analysiert, die
                  für dein Wachstum entscheidend sind.
                </p>
                <Link
                  href={"/"}
                  className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
                >
                  <img src="/images/up-arw.svg" alt="" />
                </Link>
              </div>
            </div>
            <div className="card-hero-image-bottom xl:col-span-2 border border-solid border-orange-1100 rounded-2xl">
              <img
                src="/images/sistrix-img.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="card-sistrix-text bg-black-1200 rounded-2xl shadow-4xl p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                SISTRIX{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Die Sichtbarkeit deiner Website wird überwacht, um Potenziale
                zur Optimierung zu erkennen.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-sistrix-logo bg-white-1100 rounded-2xl shadow-5xl px-5 flex items-center justify-center">
              <img
                src="/images/sistrx-img.png"
                className="h-[66px] md:h-auto object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="md:hidden grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 xl:mt-22 mt-16">
            <div className="card-google-analytics bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                Google <br /> Analytics{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Es werden tiefgehende Einblicke in das Verhalten deiner Nutzer
                gewonnen.{" "}
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-ga-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/signal2.png" alt="" />
            </div>
            <div className="card-hero-image-top xl:col-span-2 border border-solid border-orange-1100 rounded-2xl">
              <img
                src="/images/Analytics-img.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="card-semrush-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/semrush-img.png" alt="" />
            </div>
            <div className="card-semrush-text bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                SEMrush{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Wertvolle Keywords werden identifiziert und die Konkurrenz
                analysiert – alles mit SEMrush.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-ahrefs-logo bg-white-1100 rounded-2xl shadow-5xl p-8 flex items-center justify-center">
              <img src="/images/ahrefs.png" alt="" />
            </div>
            <div className="card-ahrefs-text  bg-black-1200 rounded-2xl shadow-4xl p-4 md:p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                Ahrefs{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Das Linkprofil wird optimiert und Backlinks analysiert, die für
                dein Wachstum entscheidend sind.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-hero-image-bottom  border border-solid border-orange-1100 rounded-2xl">
              <img
                src="/images/sistrix-img.jpg"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="card-sistrix-text bg-black-1200 rounded-2xl shadow-4xl p-6">
              <h4 className="text-white-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[19px] md:leading-7 mb-2 xl:leading-[140%]">
                SISTRIX{" "}
              </h4>
              <p className="text-white-1100 font-normal text-xs leading-[140%]">
                Die Sichtbarkeit deiner Website wird überwacht, um Potenziale
                zur Optimierung zu erkennen.
              </p>
              <Link
                href={"/"}
                className="flex items-center mt-2.25 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
              >
                <img src="/images/up-arw.svg" alt="" />
              </Link>
            </div>
            <div className="card-sistrix-logo bg-white-1100 rounded-2xl shadow-5xl px-5 flex items-center justify-center">
              <img
                src="/images/sistrx-img.png"
                className="h-[66px] md:h-auto object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden xl:py-50 md:py-41 py-22">
        <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="md:text-[32px] max-w-225 w-full mx-auto text-xl leading-6 md:tarcking-normal -tracking-[0.4px] text-white-1100 font-bold xl:font-medium md:leading-[124%]">
              SEO für verschiedene Branchen – Wie unsere SEO Agentur dir hilft,
              in deinem Markt zu dominieren
            </h2>
            <p className="xl:text-base text-white-1100 font-normal text-xs leading-4 xl:leading-[140%] mt-6">
              SEO ist heute ein entscheidender Erfolgsfaktor für fast jede
              Branche. Unsere SEO Agentur hat Erfahrung in verschiedenen
              Branchen. Mit maßgeschneiderten Strategien machen wir deine
              Website sichtbar und stärken Kundenakquise sowie
              Markenbekanntheit.
            </p>
          </div>
          <div className="pt-8 xl:block hidden">
            <h2 className="text-2xl text-white-1100 font-semibold leading-[140%]">
              Unsere SEO Agentur hat Erfahrung in verschiedenen Branchen
            </h2>
            <p className="text-base text-white-1100 font-normal leading-[140%] mt-6">
              und entwickelt gezielte Lösungen, die deinen Markt dominieren.
              Erfahre, wie wir in sechs typischen Branchen durch effektive SEO
              Mehrwert schaffen.
            </p>
          </div>
          <div className="xl:mt-22 md:mt-16 mt-8 grid xl:grid-cols-2 md:gap-4 gap-8 xl:gap-8">
            <div className="">
              <div className='bg-[url("/images/galaxy-img4.jpg")] bg-cover bg-center px-8 pb-6 pt-5 rounded-2xl shadow-4xl'>
                <div className="flex items-center justify-center">
                  <img src="/images/car-img.svg" alt="" className="h-63.75" />
                </div>
                <div className="mt-2.5">
                  <span className="flex items-center justify-center w-10 h-10 mb-3">
                    <img src="/images/bus-icon.svg" alt="" />
                  </span>
                  <h3 className="text-white-1100 font-medium xl:text-[32px] md:text-2xl md:leading-[29px] text-lg leading-[22px] md:tracking-normal -tracking-[0.18px] xl:leading-[124%]">
                    SEO für die Automobilindustrie
                  </h3>
                  <p className="text-white-1100 font-normal md:text-sm text-xs leading-4 md:leading-[124%] mt-3">
                    Autohersteller, Werkstätten und Händler profitieren von SEO,
                    um ihre Produkte und Dienstleistungen online zu vermarkten.
                    Durch gezielte Keyword-Recherche und Optimierung von
                    Produkt- und Dienstleistungsseiten steigern wir die
                    Sichtbarkeit bei Suchanfragen wie „Auto kaufen“ oder
                    „Werkstatt in meiner Nähe“.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center mt-3 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
                  >
                    <img src="/images/up-arw.svg" alt="" />
                  </Link>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-4 gap-8 xl:gap-8 xl:mt-8 md:mt-6 mt-8">
                <div className="bg-white-1100 rounded-2xl shadow-4xl p-4">
                  <span className="flex items-center justify-center w-6 h-6 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2 21V19H11V7.825C10.5667 7.675 10.1917 7.44167 9.875 7.125C9.55833 6.80833 9.325 6.43333 9.175 6H6L9 13C9 13.8333 8.65833 14.5417 7.975 15.125C7.29167 15.7083 6.46667 16 5.5 16C4.53333 16 3.70833 15.7083 3.025 15.125C2.34167 14.5417 2 13.8333 2 13L5 6H3V4H9.175C9.375 3.41667 9.73333 2.9375 10.25 2.5625C10.7667 2.1875 11.35 2 12 2C12.65 2 13.2333 2.1875 13.75 2.5625C14.2667 2.9375 14.625 3.41667 14.825 4H21V6H19L22 13C22 13.8333 21.6583 14.5417 20.975 15.125C20.2917 15.7083 19.4667 16 18.5 16C17.5333 16 16.7083 15.7083 16.025 15.125C15.3417 14.5417 15 13.8333 15 13L18 6H14.825C14.675 6.43333 14.4417 6.80833 14.125 7.125C13.8083 7.44167 13.4333 7.675 13 7.825V19H22V21H2ZM16.625 13H20.375L18.5 8.65L16.625 13ZM3.625 13H7.375L5.5 8.65L3.625 13ZM12 6C12.2833 6 12.5208 5.90417 12.7125 5.7125C12.9042 5.52083 13 5.28333 13 5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5C11 5.28333 11.0958 5.52083 11.2875 5.7125C11.4792 5.90417 11.7167 6 12 6Z"
                        fill="#060606"
                      />
                    </svg>
                  </span>
                  <h3 className="text-black-1100 font-semibold text-sm leading-[140%]">
                    SEO Agentur für die Rechtsbranche
                  </h3>
                  <p className="text-black-1100 font-normal text-[10px] leading-[140%] mt-2">
                    Anwaltskanzleien und Rechtsberater nutzen SEO, um
                    potenzielle Mandanten zu gewinnen. Mit Local SEO,
                    optimierten Rechtsdienstleistungsseiten und relevanten
                    Blogartikeln helfen wir Kanzleien, bei wichtigen
                    Rechtsanfragen gut gefunden zu werden.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center mt-3 justify-center ml-auto border border-solid border-black-1100 w-10 h-10 rounded-full"
                  >
                    <img
                      src="/images/up-arw.svg"
                      alt=""
                      className="brightness-0"
                    />
                  </Link>
                </div>
                <div className="bg-white-1100 rounded-2xl shadow-4xl p-4">
                  <span className="flex items-center justify-center w-6 h-6 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5.99896 10.95L4.99896 11.5C4.76562 11.6333 4.51562 11.6667 4.24896 11.6C3.98229 11.5333 3.78229 11.3833 3.64896 11.15L1.64896 7.65C1.51562 7.41667 1.48229 7.16667 1.54896 6.9C1.61563 6.63333 1.76563 6.43333 1.99896 6.3L7.74896 3H9.49896C9.64896 3 9.76979 3.04583 9.86146 3.1375C9.95312 3.22917 9.99896 3.35 9.99896 3.5V4C9.99896 4.55 10.1948 5.02083 10.5865 5.4125C10.9781 5.80417 11.449 6 11.999 6C12.549 6 13.0198 5.80417 13.4115 5.4125C13.8031 5.02083 13.999 4.55 13.999 4V3.5C13.999 3.35 14.0448 3.22917 14.1365 3.1375C14.2281 3.04583 14.349 3 14.499 3H16.249L21.999 6.3C22.2323 6.43333 22.3823 6.63333 22.449 6.9C22.5156 7.16667 22.4823 7.41667 22.349 7.65L20.349 11.15C20.2156 11.3833 20.0198 11.5292 19.7615 11.5875C19.5031 11.6458 19.249 11.6083 18.999 11.475L17.999 10.975V20C17.999 20.2833 17.9031 20.5208 17.7115 20.7125C17.5198 20.9042 17.2823 21 16.999 21H6.99896C6.71562 21 6.47813 20.9042 6.28646 20.7125C6.09479 20.5208 5.99896 20.2833 5.99896 20V10.95ZM7.99896 7.6V19H15.999V7.6L19.099 9.3L20.149 7.55L15.849 5.05C15.599 5.9 15.1281 6.60417 14.4365 7.1625C13.7448 7.72083 12.9323 8 11.999 8C11.0656 8 10.2531 7.72083 9.56146 7.1625C8.86979 6.60417 8.39896 5.9 8.14896 5.05L3.84896 7.55L4.89896 9.3L7.99896 7.6Z"
                        fill="#060606"
                      />
                    </svg>
                  </span>
                  <h3 className="text-black-1100 font-semibold text-sm leading-[140%]">
                    SEO Agentur für die Mode
                  </h3>
                  <p className="text-black-1100 font-normal text-[10px] leading-[140%] mt-2">
                    Mode- und Beautyunternehmen können durch E-Commerce SEO ihre
                    Produkte sichtbarer machen und die Conversion-Rate steigern.
                    Unsere SEO Agentur setzt auf Produktseiten-Optimierung,
                    Influencer-Marketing und ansprechende Content-Strategien, um
                    mehr organischen Traffic zu generieren und den Umsatz zu
                    maximieren.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center mt-3 justify-center ml-auto border border-solid border-black-1100 w-10 h-10 rounded-full"
                  >
                    <img
                      src="/images/up-arw.svg"
                      alt=""
                      className="brightness-0"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid md:grid-cols-2 md:gap-4 gap-8 xl:gap-8 mb-8">
                <div className="bg-white-1100 rounded-2xl shadow-4xl p-4">
                  <span className="flex items-center justify-center w-6 h-6 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21C11.7 21 11.4125 20.9458 11.1375 20.8375C10.8625 20.7292 10.6167 20.5667 10.4 20.35L3.7 13.625C3.11667 13.0417 2.6875 12.375 2.4125 11.625C2.1375 10.875 2 10.0917 2 9.275C2 7.55833 2.55833 6.08333 3.675 4.85C4.79167 3.61667 6.18333 3 7.85 3C8.65 3 9.40417 3.15833 10.1125 3.475C10.8208 3.79167 11.45 4.23333 12 4.8C12.5333 4.23333 13.1542 3.79167 13.8625 3.475C14.5708 3.15833 15.325 3 16.125 3C17.7917 3 19.1875 3.61667 20.3125 4.85C21.4375 6.08333 22 7.55 22 9.25C22 10.0667 21.8583 10.85 21.575 11.6C21.2917 12.35 20.8667 13.0167 20.3 13.6L13.575 20.35C13.3583 20.5667 13.1167 20.7292 12.85 20.8375C12.5833 20.9458 12.3 21 12 21ZM13 8C13.1667 8 13.325 8.04167 13.475 8.125C13.625 8.20833 13.7417 8.31667 13.825 8.45L15.525 11H19.675C19.7917 10.7167 19.8792 10.4292 19.9375 10.1375C19.9958 9.84583 20.025 9.55 20.025 9.25C19.9917 8.1 19.6083 7.1125 18.875 6.2875C18.1417 5.4625 17.225 5.05 16.125 5.05C15.6083 5.05 15.1125 5.15 14.6375 5.35C14.1625 5.55 13.75 5.84167 13.4 6.225L12.725 6.95C12.6417 7.05 12.5333 7.12917 12.4 7.1875C12.2667 7.24583 12.1333 7.275 12 7.275C11.8667 7.275 11.7333 7.24583 11.6 7.1875C11.4667 7.12917 11.35 7.05 11.25 6.95L10.575 6.225C10.225 5.84167 9.81667 5.54167 9.35 5.325C8.88333 5.10833 8.38333 5 7.85 5C6.75 5 5.83333 5.42083 5.1 6.2625C4.36667 7.10417 4 8.1 4 9.25C4 9.55 4.025 9.84583 4.075 10.1375C4.125 10.4292 4.20833 10.7167 4.325 11H9C9.16667 11 9.325 11.0417 9.475 11.125C9.625 11.2083 9.74167 11.3167 9.825 11.45L10.7 12.75L12.05 8.7C12.1167 8.5 12.2375 8.33333 12.4125 8.2C12.5875 8.06667 12.7833 8 13 8ZM13.3 11.25L11.95 15.3C11.8833 15.5 11.7583 15.6667 11.575 15.8C11.3917 15.9333 11.1917 16 10.975 16C10.8083 16 10.65 15.9583 10.5 15.875C10.35 15.7917 10.2333 15.6833 10.15 15.55L8.45 13H5.9L11.825 18.925C11.8583 18.9583 11.8875 18.9792 11.9125 18.9875C11.9375 18.9958 11.9667 19 12 19C12.0333 19 12.0625 18.9958 12.0875 18.9875C12.1125 18.9792 12.1417 18.9583 12.175 18.925L18.075 13H15C14.8333 13 14.675 12.9583 14.525 12.875C14.375 12.7917 14.25 12.6833 14.15 12.55L13.3 11.25Z"
                        fill="#060606"
                      />
                    </svg>
                  </span>
                  <h3 className="text-black-1100 font-semibold text-sm leading-[140%]">
                    SEO Agentur für die Gesundheitsbranche
                  </h3>
                  <p className="text-black-1100 font-normal text-[10px] leading-[140%] mt-2">
                    Für Ärzte, Kliniken und Gesundheitsdienstleister ist eine
                    optimierte Online-Präsenz entscheidend. Mit gezielten Local
                    SEO-Strategien und optimierten Gesundheitsinformationen
                    sorgen wir dafür, dass Patienten deine Praxis oder Klinik
                    online leicht finden.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center mt-3 justify-center ml-auto border border-solid border-black-1100 w-10 h-10 rounded-full"
                  >
                    <img
                      src="/images/up-arw.svg"
                      alt=""
                      className="brightness-0"
                    />
                  </Link>
                </div>
                <div className="bg-white-1100 rounded-2xl shadow-4xl p-4">
                  <span className="flex items-center justify-center w-6 h-6 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2 21V19H11V7.825C10.5667 7.675 10.1917 7.44167 9.875 7.125C9.55833 6.80833 9.325 6.43333 9.175 6H6L9 13C9 13.8333 8.65833 14.5417 7.975 15.125C7.29167 15.7083 6.46667 16 5.5 16C4.53333 16 3.70833 15.7083 3.025 15.125C2.34167 14.5417 2 13.8333 2 13L5 6H3V4H9.175C9.375 3.41667 9.73333 2.9375 10.25 2.5625C10.7667 2.1875 11.35 2 12 2C12.65 2 13.2333 2.1875 13.75 2.5625C14.2667 2.9375 14.625 3.41667 14.825 4H21V6H19L22 13C22 13.8333 21.6583 14.5417 20.975 15.125C20.2917 15.7083 19.4667 16 18.5 16C17.5333 16 16.7083 15.7083 16.025 15.125C15.3417 14.5417 15 13.8333 15 13L18 6H14.825C14.675 6.43333 14.4417 6.80833 14.125 7.125C13.8083 7.44167 13.4333 7.675 13 7.825V19H22V21H2ZM16.625 13H20.375L18.5 8.65L16.625 13ZM3.625 13H7.375L5.5 8.65L3.625 13ZM12 6C12.2833 6 12.5208 5.90417 12.7125 5.7125C12.9042 5.52083 13 5.28333 13 5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5C11 5.28333 11.0958 5.52083 11.2875 5.7125C11.4792 5.90417 11.7167 6 12 6Z"
                        fill="#060606"
                      />
                    </svg>
                  </span>
                  <h3 className="text-black-1100 font-semibold text-sm leading-[140%]">
                    SEO Agentur für die Rechtsbranche
                  </h3>
                  <p className="text-black-1100 font-normal text-[10px] leading-[140%] mt-2">
                    Anwaltskanzleien und Rechtsberater nutzen SEO, um
                    potenzielle Mandanten zu gewinnen. Mit Local SEO,
                    optimierten Rechtsdienstleistungsseiten und relevanten
                    Blogartikeln helfen wir Kanzleien, bei wichtigen
                    Rechtsanfragen gut gefunden zu werden.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center mt-3 justify-center ml-auto border border-solid border-black-1100 w-10 h-10 rounded-full"
                  >
                    <img
                      src="/images/up-arw.svg"
                      alt=""
                      className="brightness-0"
                    />
                  </Link>
                </div>
              </div>
              <div className='bg-[url("/images/home-bg.png")] bg-cover bg-center px-8 pb-8 pt-26.5 rounded-2xl shadow-4xl'>
                <div className="flex items-center justify-end -mb-12">
                  <img src="/images/home-img.png" alt="" className="h-52.25" />
                </div>
                <div className="mt-2.5">
                  <span className="flex items-center justify-center w-10 h-10 mb-3">
                    <img src="/images/home-hand.svg" alt="" />
                  </span>
                  <h3 className="text-white-1100 font-medium xl:text-[32px] md:text-2xl md:leading-[29px] text-lg leading-[22px] md:tracking-normal -tracking-[0.18px] xl:leading-[124%]">
                    SEO für den Immobiliensektor
                  </h3>
                  <p className="text-white-1100 font-normal md:text-sm text-xs leading-4 md:leading-[124%] mt-3">
                    Die Immobilienbranche profitiert stark von lokalen
                    Suchanfragen und zielgerichteten SEO-Maßnahmen. Unsere
                    Agentur unterstützt Makler und Immobilienbüros dabei, mit
                    optimierten Listings und Inhalten eine größere Reichweite zu
                    erzielen und potenzielle Käufer direkt anzusprechen.
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center mt-3 justify-center ml-auto border border-solid border-white-1100 w-10 h-10 rounded-full"
                  >
                    <img src="/images/up-arw.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:pb-50 md:pb-41 pb-22">
        <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="xl:text-[32px] xl:max-w-225 w-full mx-auto text-white-1100 font-medium text-lg leading-[22px] md:tracking-normal -tracking-[0.18px] md:text-2xl md:leading-[29px] xl:leading-[124%]">
              SEO vs. Google Ads – Deine SEO Agentur zeigt dir die langfristigen
              Vorteile von SEO
            </h2>
          </div>
          <div className="xl:mt-22 md:mt-16 mt-8">
            <ComparisonAccordion sections={data} />
            <p className="text-white-1100 text-xs italic font-light leading-[124%] mt-6">
              SEO bietet dir langfristigen Erfolg, aber auch{" "}
              <Link href={"#"} className="underline">
                Google Ads
              </Link>{" "}
              und{" "}
              <Link href={"#"} className="underline">
                {" "}
                Social Media Marketing{" "}
              </Link>{" "}
              können deinen Erfolg sofort steigern. Sieh dir unsere
              Full-Service-Lösungen an, um deine Marketingstrategie zu
              vervollständigen.
            </p>
          </div>
        </div>
      </section>
      <section className="relative shadow-4xl overflow-hidden">
        <div className="relative z-3 bg-[url(/images/securebg.png)] bg-no-repeat bg-cover py-[17px] md:py-25.5">
          <div className="max-w-308 mx-auto px-4 w-full">
            <div className="xl:max-w-192.25 max-w-134 w-full relative z-2">
              <h2 className="xl:text-5xl md:text-[29px] sm:max-w-full max-w-[238px] xl:leading-14.75 text-xl leading-6 md:leading-10 font-semibold text-white-1100 uppercase pb-5 md:pb-8 xl:pb-10">
                Wir unterstützen Dich bei der SEO Optimierung deiner Website!
              </h2>
              <CtaButton href="/" label="Jetzt Kennenlerngespräch buchen" />
              <p className="text-xs leading-4 text-white-1100 pt-3">
                Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
              </p>
            </div>
          </div>
          <img
            src="images/secure-img.png"
            alt=""
            className="absolute bottom-0 xl:h-121 h-71.25 md:h-118.75 -right-24 xl:right-20 z-1"
          />
        </div>
      </section>
      <section className="xl:mt-50 md:mt-41 mt-22 md:min-h-260 pb-[257px] md:pb-[381px] xl:pb-110.75 relative">
        <div className="max-w-311.5 md:px-10 px-4 xl:px-4 mx-auto relative z-1">
          <div className="flex items-start xl:gap-33.5 gap-8 md:gap-16 xl:flex-row flex-col">
            <div className="xl:max-w-72.5 w-full">
              <div className="xl:text-left text-center xl:border-b-0 border-b xl:pb-0 pb-8 md:pb-10 border-solid border-white-1100/40">
                <h2 className="xl:text-5xl md:text-[32px] text-xl leading-6 xl:pb-0 pb-8 md:pb-6 md:leading-11 text-white font-semibold  xl:leading-14.75">
                  FAQs
                </h2>
                <span className="bg-white-1100/40 h-px my-8 xl:block hidden"></span>
                <p className="text-base text-white font-normal leading-5.5 xl:pb-3">
                  Hier findest du Antworten auf häufig gestellte Fragen zum
                </p>
                <p className="text-base text-white font-normal leading-5.5">
                  Thema Suchmaschinenoptimierung
                </p>
              </div>
            </div>
            <div>
              <FAQs />
            </div>
          </div>
        </div>
        <img
          src="images/faq-bg2.png"
          alt=""
          className="absolute bottom-0 md:h-auto h-[500px] left-0 w-full object-cover object-left md:object-center"
        />
      </section>
    </>
  );
};

export default page;
