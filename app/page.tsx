"use client";
import CtaButton from "@/components/Ctabutton";
import ChallengeCards from "@/components/Challengecards";
import Clientswiper from "@/components/Clientswiper";
import AdvantageCards from "@/components/Advantagecards";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import Link from "next/link";
import PartnerLogosMarquee from "@/components/Partnerlogosmarquee";
import { ReviewCardGroup } from "@/components/ReviewCardGroup";
import { FAQs } from "@/components/Faq";
import Articleslider from "@/components/Articleslider";
import ServicesSlider from "@/components/ServicesSlider";
import MeetingEmbed from "@/components/MeetingEmbed";
import BenefitsList from "@/components/BenefitsList";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ChecklistSteps from "@/components/ChecklistStep";

const page = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(media.matches);
    const listener = () => setIsDesktop(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.26]);
  const scrollScale = useSpring(rawScale, { stiffness: 100, damping: 30 });

  type CardItem = {
    title: string;
    subtitle: string;
    desc: string;
    img: string;
  };
  const cardData: CardItem[] = [
    {
      title: "Suchmaschinenoptimierung (SEO)",
      subtitle: "SEO",
      desc: "Erhöhe deine organische Sichtbarkeit in Suchmaschinen und ziehe mehr qualifizierte Besucher auf deine Website.",
      img: "/images/seo-img.jpg",
    },
    {
      title: "Suchmaschinenwerbung (SEA)",
      subtitle: "SEA",
      desc: "Setze gezielte Werbekampagnen ein, um sofortige Sichtbarkeit und schnelle Ergebnisse zu erzielen.",
      img: "/images/sea-img.jpg",
    },
    {
      title: "Social Media Marketing",
      subtitle: "Social Media",
      desc: "Baue eine starke Präsenz auf relevanten Social-Media-Plattformen auf und steigere deine Markenbekanntheit sowie Kundenbindung.",
      img: "/images/marketing-img.jpg",
    },
    {
      title: "UI/UX Webdesign",
      subtitle: "UI/UX Webdesign",
      desc: "Gestalte benutzerfreundliche und ansprechende Websites, die Besucher in Kunden verwandeln.",
      img: "/images/webdesign-img.jpg",
    },
    {
      title: "Videoproduktion",
      subtitle: "Videoproduktion",
      desc: "Präsentiere deine Produkte oder Dienstleistungen effektiv mit professionellen Videos.",
      img: "/images/Videoproduktion-img.jpg",
    },
    {
      title: "TV-Werbung",
      subtitle: "TV-Werbung",
      desc: "Erweitere deine Reichweite durch strategisch geplante Fernsehwerbung.",
      img: "/images/Werbung-img.jpg",
    },
    {
      title: "Public Relations (PR)",
      subtitle: "Public Relations",
      desc: "Stärke dein Markenimage und baue Vertrauen durch gezielte PR-Maßnahmen auf.",
      img: "/images/pr-img.jpg",
    },
    {
      title: "Conversion Optimierung",
      subtitle: "Conversion",
      desc: "Verbessere die Nutzererfahrung auf deiner Website und erhöhe die Anzahl der Besucher, die zu Kunden werden.",
      img: "/images/Conversion-img.jpg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <section
        className="bg-[linear-gradient(180deg,#060606_0%,rgba(6,6,6,0)_18.5%,rgba(6,6,6,0)_84.79%,#060606_100%),url('/images/hero-mblbg.jpg')]
  md:bg-[linear-gradient(180deg,#060606_0%,rgba(6,6,6,0)_18.5%,rgba(6,6,6,0)_84.79%,#060606_100%),url('/images/herobg.jpg')]
  bg-no-repeat bg-cover bg-center
  pt-75.25 md:pt-77 xl:pt-55.75 pb-29.75 xl:pb-5
"
      >
        <div className="max-w-208 mx-auto w-full text-center px-4">
          <div className="md:pb-8 pb-6 xl:max-w-full max-w-116 w-full mx-auto">
            <h1 className="xl:text-[70px] text-[30px] leading-7.75 md:text-[50px]  md:leading-13 pb-2 md:pb-4 xl:leading-18 font-extrabold text-shadow-xl text-white-1100 uppercase max-w-153.5 w-full mx-auto">
              10 Neukunden <br />
              in 45 Tagen
            </h1>
            <p className="xl:text-[32px] md:text-2xl text-lg leading-5.5 md:leading-7.25 xl:leading-9.75 text-white-1100 font-medium">
              Durch gezieltes <br /> Online Marketing!
            </p>
          </div>
          <div className="mb-6 md:mb-8 shadow-4xl w-full sm:w-113.25 mx-auto rounded-2xl backdrop-blur-[2.5px] bg-black-1100/40 py-4 h-16.5 sm:h-19 px-6">
            <BenefitsList />
          </div>
          <div>
            <CtaButton
              className="mb-5"
              href="/"
              label="Jetzt Kennenlerngespräch buchen!"
            />
            <p className="text-sm font-normal text-white-1100 leading-4.25">
              Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
            </p>
          </div>
          <div className="text-center pt-20 xl:block hidden">
            <img src="images/scroll-icon.svg" alt="" className="mx-auto" />
          </div>
        </div>
      </section>
      <section className="xl:py-45 md:py-30 pt-20 pb-17.5 overflow-hidden">
        <div className="max-w-338 w-full mx-auto md:px-10 px-4 xl:px-4">
          <div className="flex items-center md:flex-row flex-col lg:gap-10 xl:gap-15">
            <div className="md:w-[40%] w-full md:pb-0 pb-8">
              <h2
                className="xl:text-5xl md:text-[32px] text-[28px] leading-8.5 md:leading-11 font-bold xl:leading-16.75 text-white-1100 pb-3 md:normal-case
               uppercase"
              >
                Gemeinsam <br /> mehr erreichen.
              </h2>
              <p className="xl:text-base text-sm font-normal leading-4.25 xl:leading-5.5 text-white-1100">
                Partnerschaft auf Augenhöhe: Zusammen entwickeln wir
                individuelle Strategien und Lösungen für langfristigen Erfolg.
              </p>
            </div>
            <div className="md:w-[60%] relative">
              <PartnerLogosMarquee />
              <span className="bg-[linear-gradient(90deg,#060606_0.08%,rgba(6,6,6,0)_99.92%)] absolute top-0 left-0 w-40 h-full"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="audience-sec">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full relative">
          <div className="flex items-end md:flex-row flex-col-reverse lg:items-start lg:gap-17.75 relative z-1 rounded-2xl bg-black-1100 pt-10.75 md:pt-22.75 pr-6 xl:pr-12 shadow-4xl">
            <div className="lg:w-2/5 md:w-1/3 w-full relative z-1">
              <div ref={sectionRef} className="relative">
                <div className="relative">
                  <motion.div
                    style={{ scale: isDesktop ? scrollScale : 1 }}
                    className="size-full origin-bottom-left"
                  >
                    <img
                      src="/images/audience-img.png"
                      alt="Audience target"
                      className="md:size-full h-71 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 md:w-2/3 w-full pb-5.75 md:pb-11.75 xl:pt-12.5 relative z-1">
              <h2 className="pb-8 text-xl leading-6 md:text-[32px] md:max-w-full max-w-67.25 ml-auto w-full md:leading-11 xl:text-5xl font-bold xl:leading-16.75 text-white-1100 text-right">
                Erreiche deine Zielgruppe genau dort, wo sie sucht
              </h2>
              <ol className="flex flex-col items-right">
                <li className="md:pb-6 pb-4">
                  <div className="flex items-center justify-end">
                    <p className="xl:text-2xl md:text-xl text-base leading-4.75 md:leading-7 font-semibold xl:leading-8.25 text-white-1100">
                      Mit maßgeschneiderter
                      <span className="text-orange-1100 mx-3">SEO</span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li className="md:pb-6 pb-4">
                  <div className="flex items-center justify-end">
                    <p className="xl:text-2xl md:text-xl text-base leading-4.75 md:leading-7 font-semibold xl:leading-8.25 text-white-1100">
                      Effektiven
                      <span className="text-orange-1100 mx-3">Google Ads</span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-end">
                    <p className="xl:text-2xl md:text-xl text-base leading-4.75 md:leading-7 font-semibold xl:leading-8.25 text-white-1100">
                      Strategischem
                      <span className="text-orange-1100 mx-3">
                        Online Marketing
                      </span>
                    </p>
                    <span>
                      <img src="images/check-icon.svg" alt="" />
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            <img
              src="images/dots-shape.svg"
              alt=""
              className="absolute top-12 left-1/2 -translate-x-1/2"
            />
          </div>
          <img
            src="images/shade.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </section>
      <section className="xl:pt-45 md:py-30 py-20">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="border-b border-solid border-white-1100/40 relative">
            <h2 className="xl:text-5xl md:text-[32px] text-xl leading-6 md:leading-11 font-bold pb-8 md:pb-10 max-w-294.5 mx-auto w-full text-white-1100 xl:leading-16.75 text-center">
              Warum ist
              <span className="text-orange-1100"> Online Marketing </span>
              mit SEO und Google Ads heute unverzichtbar?
            </h2>
            <span className="md:w-191.5 w-75 h-37.5 xl:hidden flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-0 left-1/2  -translate-x-1/2 -z-1 blur-[150px] opacity-50"></span>
          </div>
          <div className="xl:pt-16 md:pt-14 pt-8 text-center pb-8">
            <p className="xl:text-base text-sm font-normal leading-4.25 xl:leading-5.5 text-white pb-5 xl:pb-6">
              Stell dir vor, potenzielle Kunden oder Mitarbeiter suchen nach
              genau dem, was du anbietest – und finden dich nicht. In einer
              Welt, in der täglich 8,5 Milliarden Suchanfragen bei Google
              gestellt werden, bedeutet Unsichtbarkeit verlorene Chancen. Deine
              Online-Präsenz ist der Schlüssel, um genau dort sichtbar zu sein,
              wo deine Zielgruppe nach Lösungen sucht.
            </p>
            <p className="xl:text-base text-sm font-normal leading-4.25 xl:leading-5.5 text-white pb-5 xl:pb-6">
              Mit gezieltem Online Marketing, sei es SEO, Google Ads oder Social
              Media, erreichst du nicht nur mehr Sichtbarkeit, sondern sprichst
              auch gezielt die richtigen Menschen an. Du musst dich nicht um
              jeden Schritt kümmern – wir übernehmen die Arbeit, von der Planung
              bis zur Umsetzung, damit du dich auf dein Geschäft konzentrieren
              kannst. So gewinnst du nicht nur neue Kunden, sondern weckst auch
              das Interesse potenzieller Mitarbeiter.
            </p>
            <p className="xl:text-base text-sm leading-4.75 font-semibold xl:leading-5.5 text-white">
              Ist deine Website optimal aufgestellt? Erhalte eine kostenlose
              Kurz-Analyse deiner Website.
            </p>
          </div>
          <div className="text-center">
            <CtaButton
              href="/"
              className="mb-3 pl-5"
              label="Website-Analyse anfordern"
            />
            <p className="text-xs font-normal leading-4 text-white-1100">
              Finde heraus, wie Online Marketing dir mehr Kunden bringt.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-12 md:py-14 xl:py-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 md:pb-10 mb-8 md:mb-14 xl:mb-16 relative">
            <h2 className="xl:text-5xl md:text-[32px] text-xl leading-6 md:leading-11 text-white-1100 font-bold xl:leading-16.75">
              Kennst auch du diese <br className="xl:hidden block" />{" "}
              Herausforderungen?
            </h2>
            <span className="md:w-191.5  h-37.5 xl:hidden flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute -top-20 left-1/2  -translate-x-1/2 -z-1 blur-[150px] opacity-50"></span>
          </div>
          <ChallengeCards className="md:mt-16 mt-8" />
        </div>
      </section>
      <section className="md:pt-72 md:pb-42.5 xl:block hidden">
        <div className="max-w-308 mx-auto w-full px-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold leading-10.5 text-white-1100">
                Potenziale erkennen und Schichtbarkeit steigern
              </h3>
              <p className="text-white text-base font-normal leading-5.5 pt-2">
                Unsere SEO-Checkliste für die Sichtbarkeit deiner Webseite zeigt
                dir in wenigen Minuten, wo du stehst – und vor allem, wo
                ungenutztes Potenzial schlummert und wie dringend dein
                Handlungsbedarf ist.
              </p>
              <ol className="py-4">
                <li className="flex items-center gap-3 pb-2">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Überprüfen, ob meine Website bei Google sichtbar ist
                  </p>
                </li>
                <li className="flex items-center gap-3 pb-2">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Versteckte SEO-Potenziale entdecken
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <img src="images/orange-check.svg" alt="" />
                  </span>
                  <p className="text-base font-medium text-white">
                    Konkreten Optimierungsbedarf sofort erkennen
                  </p>
                </li>
              </ol>
              <CtaButton href="/" label="Kostenlos herunterladen" />
            </div>
            <div className="bg-orange-1100 rounded-xl pt-7 pl-8 flex items-start justify-between">
              <div className="w-1/2">
                <h3 className="text-[25px] font-bold text-white leading-8.75 pb-3">
                  SEO-Checkliste für deine Sichtbarkeit
                </h3>
                <CtaButton
                  href="/"
                  variant="white"
                  label="Jetzt Checkliste anfordern"
                  className="hover:bg-white hover:text-black! pl-5 pr-3"
                />
              </div>
              <div className="h-full w-1/2">
                <img
                  src="images/identify-img.png"
                  alt=""
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:pt-66.25 pt-22 pb-24.5 md:pb-83.5 bg-[url(/images/missionbg.jpg)] bg-no-repeat bg-cover overflow-hidden">
        <div className="max-w-330 w-full px-4 md:px-5 mx-auto">
          <Clientswiper />
        </div>
      </section>
      <section className="xl:py-45 md:py-30 py-20 relative">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full relative z-1">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="xl:text-5xl md:text-[32px] text-xl text-white-1100 font-bold md:leading-11 xl:leading-16.75 leading-6 pb-8">
              Gewinne nachhaltig mehr Neukunden mit deiner Online Marketing
              Agentur aus Hamburg
            </h2>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren"
              className="mb-4 md:h-12 h-10.25"
            />
            <p className="text-base leading-5.5 font-normal text-white-1100">
              Nummer eintragen - wir rufen zurück
            </p>
          </div>
          <div className="flex xl:items-center md:flex-row flex-col gap-6 xl:gap-8 pt-8 md:pt-16">
            <div className="xl:w-1/2 md:w-2/3 w-full">
              <h3 className="xl:text-[32px] text-lg leading-5.5 md:text-2xl md:leading-7.25 font-medium xl:leading-10 text-white-1100 pb-6">
                Wie kann Online Marketing deine Herausforderungen lösen?
              </h3>
              <p className="text-sm font-normal text-grey-1100 leading-4.25">
                Mit einer gezielten Online Marketing Strategie steigerst du
                deine Reichweite, gewinnst qualifizierte Anfragen und behauptest
                dich am Markt.
                <span className="text-orange-1100">
                  Suchmaschinenoptimierung
                </span>
                (SEO) sorgt dafür, dass deine Website bei Google sichtbar ist,
                wenn potenzielle Kunden und Mitarbeiter nach deinen
                Dienstleistungen suchen.
                <span className="text-orange-1100">Mit Google Ads</span> (SEA)
                erreichst du deine Zielgruppe schnell und gezielt, um
                kurzfristig mehr Anfragen zu generieren. Neben SEO und SEA sind
                Social Media Marketing,
                <span className="text-orange-1100">
                  UI/UX Webdesign und Content-Marketing
                </span>
                wichtig, um langfristig erfolgreich zu bleiben und sowohl Kunden
                als auch Mitarbeiter anzusprechen.
              </p>
            </div>
            <div className="xl:w-1/2 md:w-1/3 w-full">
              <img
                src="images/online-marketing.jpg"
                alt=""
                className="rounded-xl shadow-4xl xl:h-auto sm:block hidden h-50 sm:h-full object-cover"
              />
              <img
                src="images/online-marketing-mbl.jpg"
                alt=""
                className="rounded-xl shadow-4xl h-50 w-full sm:hidden block object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="xl:pb-45 md:pb-30 pb-20">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full relative z-40">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 xl:pb-10 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white font-bold md:text-[32px] text-xl leading-6 md:leading-11 xl:text-5xl xl:leading-[140%]">
              Full Stack Online Marketing für deinen Erfolg
            </h2>
            <p className="text-grey-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal mt-6 max-w-250 w-full mx-auto">
              Um deine Ziele zu erreichen, bieten wir ein breites Spektrum an
              Online Marketing Dienstleistungen. Diese Dienstleistungen kannst
              du einzeln oder als Teil einer umfassenden Strategie nutzen, um
              deine Geschäftsziele optimal zu erreichen.
            </p>
          </div>
          <div className="xl:mt-16 md:mt-14 mt-8 grid md:grid-cols-2 gap-6 xl:gap-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="group/card cursor-pointer relative transition-all duration-500 ease-in-out rounded-2xl bg-black-1100 shadow-4xl overflow-hidden xl:h-auto h-100"
              >
                <div className="relative">
                  <div
                    className={`transition-all duration-500 ease-in-out flex flex-col rounded-2xl relative ${
                      activeIndex === index
                        ? "-translate-x-full"
                        : "xl:group-hover/card:-translate-x-full"
                    }`}
                  >
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={800}
                      height={600}
                      className="w-full rounded-2xl object-cover xl:h-auto h-100"
                    />
                    <div className="absolute top-0 left-0 px-6 xl:px-10 py-8 xl:py-12 z-2">
                      <h3 className="text-white-1100 font-medium text-xl xl:text-[32px] xl:leading-[124%]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <span className="bg-[linear-gradient(176deg,#060606_2.08%,rgba(6,6,6,0)_88.83%)] inline-block absolute top-0 left-0 w-full h-28.5 md:h-22.75 xl:h-44"></span>
                </div>
                <div
                  className={`h-full absolute top-0 transition-all duration-500 ease-in-out bg-black-1100 rounded-2xl text-center xl:p-10 py-10 md:px-5 px-8 flex flex-col items-center justify-center z-2 ${
                    activeIndex === index
                      ? "translate-x-0"
                      : "translate-x-full xl:group-hover/card:translate-x-0"
                  }`}
                >
                  <h3 className="text-white-1100 font-bold xl:text-5xl md:text-[32px] text-xl">
                    {card.subtitle}
                  </h3>

                  <p className="text-grey-1100 text-base leading-[140%] font-normal mt-6">
                    {card.desc}
                  </p>

                  <div className="mt-12 inline-flex">
                    <CtaButton
                      href="/"
                      label="Weitere Informationen"
                      variant="transparent"
                    />
                  </div>
                  <Link
                    href="/"
                    className="md:hidden flex items-center justify-center absolute top-7 right-7"
                  >
                    <Image
                      src="/images/arw.svg"
                      alt="arrow"
                      width={36}
                      height={36}
                    />
                  </Link>
                </div>
                <Link
                  href="/"
                  className="w-15 h-15 xl:hidden flex items-center justify-center rounded-full shadow-5xl bg-white-1100/24 absolute bottom-4 right-4"
                >
                  <Image
                    src="/images/arw.svg"
                    alt="arrow"
                    width={36}
                    height={36}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="xl:pb-45 md:pb-30 pb-20">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 md:pb-10 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white-1100 xl:text-5xl text-xl leading-6 md:text-[32px] md:leading-11 font-bold xl:leading-16.75">
              Die Vorteile einer starken <br className="xl:hidden block" />{" "}
              Online-Sichtbarkeit
            </h2>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-5 justify-between md:pt-14 xl:pt-16 py-8 md:pb-10 xl:pb-12">
            <h3 className="xl:text-2xl md:text-xl text-base leading-4.75 md:leading-7 font-semibold xl:leading-8.25 text-grey-1100">
              Dein Nutzen im Überblick:
            </h3>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren?"
              variant="transparent"
            />
          </div>
          <AdvantageCards />
        </div>
      </section>
      <section className="xl:pb-45 md:pb-30 pb-20">
        <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-14 xl:mb-16 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h4 className="text-2xl font-semibold leading-8.25 text-white-1100 pb-6">
              <span className="text-orange-1100">
                Möchtest du mehr darüber erfahren,
              </span>{" "}
              wie eine Google Ads Agentur dein Unternehmen voranbringen und die
              Vorteile von Suchmaschinenwerbung voll ausschöpfen kann?
            </h4>
            <p className="text-base font-normal text-white-1100 leading-5.5">
              Vereinbare jetzt dein kostenloses Kennenlerngespräch mit unserer
              Ads Agentur und lass uns gemeinsam deine Ziele erreichen!
            </p>
          </div>
          <div className="flex md:max-w-249.25 md:flex-row flex-col w-full mx-auto bg-white-1100 rounded-2xl ">
            <div className="bg-white-1100 md:rounded-tl-2xl rounded-t-2xl md:rounded-bl-2xl  xl:py-7.25 py-6 px-6 md:w-[36%] w-full">
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
            <div className="md:w-[64%] w-full">
              <MeetingEmbed />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-308 mx-auto w-full md:px-10 px-4 xl:px-4 relative z-40">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 xl:pb-10 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="text-white font-bold xl:text-5xl text-xl leading-6 md:text-[32px] md:leading-11 xl:leading-[140%]">
              Du fragst dich, ob dein Online <br className="xl:hidden block" />{" "}
              Marketing optimal aufgestellt ist?
            </h2>
            <p className="text-grey-1100 md:text-base text-sm leading-4.25 md:leading-[140%] font-normal mt-6 max-w-250 w-full mx-auto">
              Ob du genügend qualifizierte Kunden erreichst und deine Webseite
              wirklich funktioniert, wie sie sollte? Vielleicht stellst du dir
              auch die Frage, ob sich eine Zusammenarbeit mit BMS lohnt? Diese
              Checkliste hilft dir in wenigen Minuten, genau das herauszufinden.
            </p>
          </div>
          <div className="md:pt-16 pt-8">
            <ChecklistSteps />
          </div>
        </div>
      </section>
      <section className="overflow-hidden xl:py-45 md:py-30 py-20">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 md:pb-10 pb-8 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="xl:text-5xl  md:text-[32px] text-xl text-white-1100 font-bold md:leading-11 xl:leading-16.75 leading-6">
              Wie unsere Online Marketing Strategien 10 Neukunden in 45 Tagen
              brachten – Erfolgreiche Case Studies im Überblick
            </h2>
          </div>
        </div>
        <div className="md:pt-17 pt-8 -mx-5 ">
          <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
            <CaseStudiesSlider />
          </div>
        </div>
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full text-center xl:pt-0 pt-8">
          <CtaButton href="/" label="Website-Analyse anfordern" />
          <p className="text-xs leading-4 text-white-1100 font-normal pt-3">
            Finde heraus, wie Online Marketing dir mehr Kunden bringt.
          </p>
        </div>
      </section>
      <section className="xl:pb-45 md:pb-30 pb-20">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h2 className="xl:text-5xl text-xl leading-6 md:text-[32px] md:leading-11 font-bold xl:leading-16.75 text-white-1100 pb-6">
              Gemeinsam zu messbaren Erfolgen mit deiner Marketing Agentur
            </h2>
            <p className="text-base text-white-1100 font-normal leading-5.5">
              Bei Benchmark Media geht es nicht nur um Marketing – es geht um
              messbare Ergebnisse. Als Full-Service-Agentur setzen wir auf
              datenbasierte Strategien, die auf deine Ziele abgestimmt sind, um
              deine Online-Präsenz nachhaltig zu verbessern.
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 py-8 md:py-14 xl:py-16 xl:max-w-full max-w-166 mx-auto xl:w-auto w-full">
            <div className="bg-[url(/images/border.png)]  transition-opacity duration-500 group-hover:opacity-100 bg-no-repeat group bg-size-[100%_100%] xl:bg-cover hover:bg-none border-solid border-transparent border hover:border-transparent  min-h-auto xl:min-h-46.75 2xl:min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-size-[100%_100%] xl:bg-cover rounded-2xl 2xl:p-8 xl:p-6 px-2.5 py-4 md:p-8 ">
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-gradient text-[28px] md:text-[40px] xl:text-5xl font-semibold uppercase leading-8.5 md:leading-12.25 xl:leading-14.75 pb-3 md:pb-4">
                    +312%
                  </h3>
                  <p className="text-xs font-normal text-white-1100 xl:max-w-53 w-full leading-xs md:leading-4 sm:break-normal break-all">
                    Steigerung der organischen Sichtbarkeit mit SEO
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[url(/images/border.png)]  transition-opacity duration-500 group-hover:opacity-100 group hover:bg-none border-solid border-transparent border hover:border-transparent bg-no-repeat bg-size-[100%_100%] xl:bg-cover min-h-auto xl:min-h-46.75 2xl:min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-size-[100%_100%] xl:bg-cover rounded-2xl 2xl:p-8 xl:p-6 px-2.5 py-4 md:p-8 ">
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-gradient text-[28px] md:text-[40px] xl:text-5xl font-semibold uppercase leading-8.5 md:leading-12.25 xl:leading-14.75 pb-3 md:pb-4">
                    +542%
                  </h3>
                  <p className="text-xs font-normal text-white-1100 xl:max-w-53 w-full leading-xs md:leading-4 sm:break-normal break-all">
                    Anstieg der rankenden Keywords
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[url(/images/border.png)] group  transition-opacity duration-500 group-hover:opacity-100 hover:bg-none border-solid border-transparent border hover:border-transparent bg-no-repeat bg-size-[100%_100%] xl:bg-cover min-h-auto xl:min-h-46.75 2xl:min-h-47.75">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-size-[100%_100%] xl:bg-cover rounded-2xl 2xl:p-8 xl:p-6 px-2.5 py-4 md:p-8 ">
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-gradient text-[28px] md:text-[40px] xl:text-5xl font-semibold uppercase leading-8.5 md:leading-12.25 xl:leading-14.75 pb-3 md:pb-4">
                    +74%
                  </h3>
                  <p className="text-xs font-normal text-white-1100 xl:max-w-53 w-full leading-xs md:leading-4 sm:break-normal break-all">
                    Mehr Umsatz durch zielgerichtete Suchmaschinenwerbung (SEA)
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[url(/images/border.png)] group hover:bg-none border-solid border-transparent border hover:border-transparent bg-no-repeat bg-size-[100%_100%] xl:bg-cover  min-h-auto xl:min-h-46.75 2xl:min-h-47.75 transition-opacity duration-500 group-hover:opacity-100">
              <div className="bg-[url(/images/agentur-img1.png)] group-hover:bg-[url(/images/statbg.png)] h-full bg-no-repeat bg-size-[100%_100%] xl:bg-cover rounded-2xl 2xl:p-8 xl:p-6 px-2.5 py-4 md:p-8 ">
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-gradient text-[28px] md:text-[40px] xl:text-5xl font-semibold uppercase leading-8.5 md:leading-12.25 xl:leading-14.75 pb-3 md:pb-4">
                    +103%
                  </h3>
                  <p className="text-xs font-normal text-white-1100 xl:max-w-53 w-full leading-xs md:leading-4 sm:break-normal break-all">
                    Erhöhung der qualifizierten Leads durch eine integrierte
                    Marketingstrategie
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 gap-6 xl:gap-8 mb-8">
            <div className="border border-solid bg-[url(/images/info-bg.png)] group bg-no-repeat bg-cover border-white-1100 rounded-2xl xl:py-4 py-5 px-4 md:p-6 xl:px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-center gap-4 mb-4 xl:min-h-16.5">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="md:text-2xl text-base transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-white-1100 font-semibold leading-4.75 md:leading-8.25 flex-1">
                  Jahrelange Online Marketing <br className="xl:block hidden" />{" "}
                  Erfahrung
                </h4>
              </div>
              <p className="md:text-base text-sm font-normal leading-4.75 md:leading-5.5 text-white-1100">
                Mit umfassender Expertise in SEO, SEA und weiteren Disziplinen
                unterstützen wir Unternehmen dabei, ihre Online-Sichtbarkeit zu
                steigern und greifbare Erfolge zu erzielen. Unsere Maßnahmen
                bringen mehr qualifizierte Anfragen und steigern den Umsatz.
              </p>
            </div>
            <div className="border border-solid bg-[url(/images/info-bg.png)] group hover:bg-none bg-no-repeat bg-cover border-white-1100 rounded-2xl md:py-4 py-5 px-4 md:px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-start gap-4 mb-4 md:min-h-16.5">
                <span className="block mt-2.25">
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="md:text-2xl text-base transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-white-1100 font-semibold leading-4.75 md:leading-8.25 flex-1">
                  Vertrauen und Zusammenarbeit
                </h4>
              </div>
              <p className="md:text-base text-sm font-normal leading-4.75 md:leading-5.5 text-white-1100">
                Als zertifizierter Google-Partner garantieren wir dir modernste
                Lösungen und regelmäßige Kommunikation. Mit Transparenz und
                Fachwissen schaffen wir die Grundlage für deinen Erfolg – denn
                dein Erfolg ist unser Erfolg.
              </p>
            </div>
            <div className="border border-solid bg-[url(/images/info-bg.png)] group bg-no-repeat bg-cover border-white-1100 rounded-2xl md:py-4 py-5 px-4 md:px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-center gap-4 mb-4 xl:min-h-16.5">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="md:text-2xl text-base transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-white-1100 font-semibold leading-4.75 md:leading-8.25 flex-1">
                  Messbare Erfolge dank gezieltem{" "}
                  <br className="xl:block hidden" /> Marketing-Strategien
                </h4>
              </div>
              <p className="md:text-base text-sm font-normal leading-4.75 md:leading-5.5 text-white-1100">
                Wir bieten keine Standardlösungen. Jede Strategie basiert auf
                einer genauen Analyse und wird präzise auf deine Geschäftsziele
                zugeschnitten. Schritt für Schritt begleiten wir dich, um
                langfristige Erfolge sicherzustellen.
              </p>
            </div>
            <div className="border border-solid bg-[url(/images/info-bg.png)] group bg-no-repeat bg-cover border-white-1100 rounded-2xl md:py-4 py-5 px-4 md:px-6 bg-linear-to-r from-cyan-500 to-blue-500">
              <div className="flex items-center gap-4 mb-4 xl:min-h-16.5">
                <span>
                  <img src="images/check.svg" alt="" />
                </span>
                <h4 className="md:text-2xl text-base transition-transform duration-300 ease-in-out group-hover:translate-x-2 text-white-1100 font-semibold leading-4.75 md:leading-8.25 flex-1">
                  Individuelles Full-Stack Marketing, die zu dir passen
                </h4>
              </div>
              <p className="md:text-base text-sm font-normal leading-4.75 md:leading-5.5 text-white-1100">
                Wir bieten keine Standardlösungen. Jede Strategie basiert auf
                einer genauen Analyse und wird präzise auf deine Geschäftsziele
                zugeschnitten. Schritt für Schritt begleiten wir dich, um
                langfristige Erfolge sicherzustellen.
              </p>
            </div>
          </div>
          <div className="text-center">
            <CtaButton
              href="/"
              label="Jetzt Kennenlerngespräch buchen"
              className="mb-3"
            />
            <p className="text-xs text-white-1100 leading-4 font-normal">
              Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-10 relative z-1">
        <div className="max-w-346.25  md:px-10 px-4 pr-0 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-8 md:mr-0 mr-4 xl:pb-10">
            <h2 className="md:text-[32px] font-medium text-white-1100 text-base leading-4.75 md:leading-9.75">
              Lass dich von den Online Marketing Erfahrungen unserer Kunden
              überzeugen!
            </h2>
          </div>
          <ReviewCardGroup />
        </div>
      </section>
      <section className="xl:py-45 md:pt-30 pt-20 relative">
        <div className="max-w-311.5 md:px-10 px-4 xl:px-4 mx-auto relative z-1">
          <div className="flex items-start xl:gap-33.5 gap-8 md:gap-16 xl:flex-row flex-col">
            <div className="xl:max-w-72.5 w-full">
              <div className="xl:text-left text-center xl:border-b-0 border-b xl:pb-0 pb-8 md:pb-10 border-solid border-white-1100/40">
                <h2 className="md:text-5xl text-2xl xl:pb-0 pb-8 md:pb-6 leading-11 text-white font-semibold  xl:leading-14.75">
                  FAQs
                </h2>
                <span className="bg-white-1100/40 h-px my-8 xl:block hidden"></span>
                <p className="text-base text-white font-normal leading-5.5 xl:pb-3">
                  Hier findest du Antworten auf häufig gestellte Fragen zum
                </p>
                <p className="text-base text-white font-normal leading-5.5">
                  Thema Suchmaschinenoptimierung
                </p>
                <div className="relative xl:block hidden z-2">
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 inset-y-0 pointer-events-none max-w-303.5 hidden lg:block w-full"
                    animate={{ x: [0, 20, 0], y: [20, 0, 20] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src="images/ai-human.png"
                      alt="ai human"
                      className="relative z-1"
                    />
                  </motion.div>

                  <span className="w-102.75 h-55.25 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[150px] opacity-50 -z-1"></span>
                </div>
              </div>
            </div>
            <div>
              <FAQs />
            </div>
          </div>
        </div>
        <img
          src="images/faq-bg.png"
          alt=""
          className="absolute -top-20 left-0 w-full h-full"
        />
      </section>
      <section className="overflow-hidden py-20 md:py-30 xl:pb-45">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full ">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="xl:text-5xl text-xl text-white-1100 font-bold md:text-[32px] md:leading-11 xl:leading-16.75 leading-6">
              Insider-Wissen für dein Online Marketing: Full-Stack-Strategien
              für deinen Erfolg
            </h2>
            <span className="md:w-191.5 w-full h-37.5 xl:hidden flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-0 left-1/2 -translate-x-1/2 blur-[150px] opacity-50"></span>
          </div>
        </div>
        <div className="md:pt-22 pt-8">
          <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full ">
            <Articleslider />
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
      <section className="relative">
        <div className="relative z-3 bg-[url(/images/securebg.png)] bg-no-repeat bg-cover">
          <div className="max-w-308 mx-auto px-4 w-full">
            <div className="xl:max-w-192.25 max-w-134 w-full relative z-2 py-9.75 md:py-11">
              <h2 className="xl:text-5xl md:text-[40px] xl:leading-14.75 text-xl leading-6 md:leading-12.25 font-semibold md:max-w-full max-w-65.25 text-white-1100 uppercase pb-5 md:pb-8 xl:pb-10">
                Geh den direkten Weg zu mehr Kunden – sichere dir deine Online
                Marketing Beratung jetzt!
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
            className="absolute  md:block hidden bottom-0 xl:h-auto h-71.25 md:h-118.75  right-0 z-1"
          />
          <img
            src="images/secure-imgmbl.png"
            alt=""
            className="absolute md:hidden block  bottom-0 xl:h-auto h-71.25 md:h-118.75  right-0 z-1"
          />
        </div>
        <span className="-top-20 right-0 w-full md:w-196.25 h-41.25 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute  blur-[150px] opacity-60"></span>
      </section>
      <section className="xl:pt-45 md:pt-30 pt-20">
        <div className="max-w-300 mx-auto w-full px-4 md:px-10 xl:px-4">
          <div className="text-center pb-8 md:pb-14 xl:pb-16.75 relative">
            <h2 className="text-orange-1100 xl:text-5xl font-bold md:text-[32px] text-xl md:leading-11 xl:leading-16.75 leading-6  md:pb-2 xl:pb-3">
              Online Marketing Agentur:
            </h2>
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h3 className="md:text-[32px] text-xl leading-6 md:leading-9.75 text-white-1100 font-bold xl:font-medium xl:pb-0 pb-4 md:pb-6">
              Einführung, Strategien & <br className="md:hidden block" />{" "}
              Full-Service-Pakete
            </h3>
            <p className="md:text-base text-sm text-white-1100 font-normal leading-4.25 md:leading-5.5 pb-8 xl:pb-6">
              Als deine Online Marketing Agentur bieten wir dir individuelle
              Marketinglösungen, die auf deine Branche und Bedürfnisse
              abgestimmt sind, von der strategischen Beratung bis hin zu
              umfassenden Full-Service-Paketen, die alle Aspekte des digitalen
              Marketings abdecken.
            </p>
            <CtaButton
              href="/"
              label="Fragen oder mehr erfahren?"
              variant="transparent"
            />
            <p className="text-xs font-normal text-white-1100 leading-4 pt-3 xl:pt-3.75">
              Nummer eintragen - wir rufen zurück!
            </p>
          </div>
          <div className="md:sticky top-0 rounded-2xl bg-black-1200 py-6 md:py-8 min-h-131 px-4 md:px-6 xl:p-8 shadow-4xl md:mb-11.75 mb-4">
            <h4 className="xl:text-2xl md:text-xl text-base font-semibold text-white-1100 leading-4.75 md:leading-7 xl:leading-8.25 pb-6 xl:pb-8">
              Was ist eine Full-Service Online Marketing Agentur?
            </h4>
            <div className="grid xl:grid-cols-2 xl:gap-8 gap-6">
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Die Rolle einer Full-Service Online Marketing Agentur im
                    digitalen Marketing
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Als Full-Service Online Marketing-Agentur übernimmst du
                    sämtliche digitale Marketingaktivitäten für dein
                    Unternehmen. Das bedeutet, dass du dich nicht auf einzelne
                    Bereiche wie SEO oder Social Media beschränken musst. Eine
                    Full-Service Agentur bietet dir eine umfassende Online
                    Marketing Beratung, die alle relevanten Kanäle und
                    Strategien abdeckt. So kannst du sicherstellen, dass deine
                    Marketing-Strategie auf allen digitalen Ebenen optimal
                    umgesetzt wird.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Warum ist der ganzheitliche Ansatz einer Online
                    Marketing-Agentur so wichtig?
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Der Vorteil einer Full-Service Online Marketing-Agentur
                    liegt darin, dass du alle Marketingkanäle aus einer Hand
                    erhältst. Das spart dir nicht nur Zeit, sondern sorgt auch
                    für eine konsistente und integrierte Strategie. Egal, ob du
                    die Sichtbarkeit deiner Website durch SEO verbessern oder
                    eine gezielte PPC-Kampagne starten möchtest – deine Online
                    Marketing Agentur sorgt dafür, dass alles aufeinander
                    abgestimmt ist und gemeinsam auf deine Unternehmensziele
                    hinarbeitet.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Welche Dienstleistungen bietet eine Full-Service Online
                    Marketing-Agentur?
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Eine Full-Service Online Marketing-Agentur stellt dir ein
                    breites Spektrum an Dienstleistungen zur Verfügung. Dazu
                    gehören Suchmaschinenoptimierung (SEO),
                    Pay-per-Click-Anzeigen (PPC), Social Media Marketing,
                    Content Marketing und Webdesign. Durch diese ganzheitliche
                    Herangehensweise kannst du sicher sein, dass deine Online
                    Marketing Strategie alle Aspekte abdeckt und deine
                    Online-Präsenz optimal ausgerichtet ist.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Maßgeschneiderte Marketinglösungen für dein Unternehmen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Eine gute Full-Service Online Marketing Agentur entwickelt
                    individuelle Strategien, die genau auf die Bedürfnisse
                    deines Unternehmens abgestimmt sind. Durch gezielte Online
                    Marketing Beratung erarbeitet deine Agentur Lösungen, die
                    deine Zielgruppe erreichen und deinen Umsatz steigern. Ob
                    SEO, PPC oder Social Media – deine Marketing-Agentur sorgt
                    für messbare Ergebnisse und nachhaltigen Erfolg.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:sticky top-0 rounded-2xl bg-[url(/images/listboxbg.png)] min-h-131 bg-cover bg-no-repeat  py-6 md:py-8 px-4 md:px-6 xl:p-8 shadow-4xl md:mb-11.75 mb-4">
            <h4 className="xl:text-2xl md:text-xl text-base font-semibold text-white-1100 leading-4.75 md:leading-7 xl:leading-8.25 pb-6 xl:pb-8">
              Warum eine Online Marketing Agentur entscheidend für deinen Erfolg
              ist
            </h4>
            <div className="grid xl:grid-cols-2 xl:gap-8 gap-6">
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Deine Präsenz in der digitalen
                    Welt
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    In der heutigen digitalen Landschaft ist eine starke
                    Online-Präsenz für Unternehmen unverzichtbar. Deine Kunden
                    suchen online nach Lösungen, und genau hier kommt eine
                    professionelle Online Marketing Agentur ins Spiel. Sie hilft
                    dir dabei, deine Marke sichtbar zu machen und deine
                    Reichweite signifikant zu erhöhen. Ohne eine klare Strategie
                    im Online Marketing kannst du leicht im Wettbewerb
                    zurückfallen, während deine Konkurrenz bereits erfolgreich
                    im Internet agiert.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Vorteile von Online Marketing im Vergleich zu traditionellen
                    Marketing-Strategien
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Im Gegensatz zu herkömmlichen Marketingstrategien bietet das
                    Online Marketing dir die Möglichkeit, deine Zielgruppe
                    direkt und messbar zu erreichen. Mit einer erfahrenen Online
                    Marketing Agentur kannst du deine Werbebudgets effizient
                    einsetzen und erzielst durch präzises Targeting eine
                    deutlich höhere Conversion-Rate. Die Flexibilität und
                    Skalierbarkeit von Online Marketing Maßnahmen bieten dir
                    einen klaren Vorteil gegenüber Print- oder Fernsehwerbung.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Steigere deine Sichtbarkeit und deinen Umsatz mit einer
                    Marketing-Agentur
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Eine Online Marketing Agentur unterstützt dich dabei, deine
                    Sichtbarkeit auf den relevanten Kanälen zu verbessern. Durch
                    gezielte Maßnahmen wie SEO, Social Media Marketing und
                    PPC-Kampagnen steigert sie nicht nur deinen Traffic, sondern
                    auch deinen Umsatz. Online Marketing Beratung kann dir
                    helfen, die richtige Strategie zu finden, um potenzielle
                    Kunden gezielt anzusprechen und sie von deinem Angebot zu
                    überzeugen.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Erreiche mehr durch eine umfassende Online
                    Marketing-Beratung
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Die richtige Beratung durch eine Marketing-Agentur ist der
                    Schlüssel, um das volle Potenzial deines Unternehmens im
                    Online Marketing auszuschöpfen. Eine umfassende Analyse
                    deiner aktuellen Online Präsenz und maßgeschneiderte
                    Strategien sind der erste Schritt zu mehr Reichweite und
                    Wachstum. Investiere in eine Online Marketing Agentur, um
                    langfristig erfolgreich zu sein und deine Marke in der
                    digitalen Welt nachhaltig zu positionieren
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:sticky top-0 rounded-2xl bg-black-1200 min-h-131 px-4 md:px-6 xl:p-8 py-6 md:py-8 shadow-4xl md:mb-11.75 mb-4">
            <h4 className="xl:text-2xl md:text-xl text-base font-semibold text-white-1100 leading-4.75 md:leading-7 xl:leading-8.25 pb-6 xl:pb-8">
              Maßgeschneiderte Lösungen deiner Online Marketing Agentur für jede
              Branche
            </h4>
            <div className="grid xl:grid-cols-2 xl:gap-8 gap-6 relative">
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Individuelle Strategien für jede
                    Branche
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Als erfahrene Online Marketing-Agentur wissen wir, dass jede
                    Branche eigene Herausforderungen und Chancen mit sich
                    bringt. Ob E-Commerce, B2B oder lokale Unternehmen – wir
                    passen unsere Marketingstrategien an deine spezifischen
                    Bedürfnisse an, um maximale Ergebnisse zu erzielen. Deine
                    Branche erfordert individuelle Ansätze, die wir durch
                    gezielte Online Marketing-Beratung und innovative Lösungen
                    entwickeln.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Erfolg durch branchenspezifische Online Marketing-Beratung
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    ede Branche funktioniert anders, und unsere Online
                    Marketing-Beratung zeigt dir, wie du das Beste aus deiner
                    speziellen Marktsituation herausholst. Von gezielten
                    SEO-Kampagnen für lokale Unternehmen bis hin zu umfassenden
                    PPC-Kampagnen für E-Commerce: Wir bieten dir Lösungen, die
                    auf deinen individuellen Bedarf abgestimmt sind. Mit unserer
                    Expertise erlangst du die Sichtbarkeit, die du benötigst, um
                    deine Konkurrenz zu überholen.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing Agentur: Maßgeschneiderte Lösungen für dein
                    Unternehmen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Dein Unternehmen verdient eine maßgeschneiderte Strategie,
                    die genau auf deine Ziele und Marktanforderungen abgestimmt
                    ist. Unsere Marketing-Agentur entwickelt individuelle
                    Lösungen, die genau zu deinem Geschäftsmodell passen. Wir
                    analysieren deinen Markt und deine Zielgruppe, um Online
                    Marketing-Strategien zu implementieren, die deinen Erfolg
                    nachhaltig fördern und deine Online-Präsenz ausbauen.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing Agentur: Erfolgreiche Beispiele aus der Praxis
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Praxis zeigt, dass branchenspezifische Kampagnen
                    entscheidend zum Erfolg beitragen. Ob es darum geht, lokale
                    Unternehmen bei der Sichtbarkeit zu unterstützen oder
                    E-Commerce-Unternehmen bei der Conversion Optimierung zu
                    begleiten – unsere Marketing-Agentur hat zahlreiche
                    erfolgreiche Kampagnen umgesetzt. Lass dich von unserer
                    Expertise inspirieren und starte mit uns deine
                    maßgeschneiderte Marketinglösung.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:sticky top-0 rounded-2xl bg-[url(/images/listboxbg.png)] min-h-131 bg-cover bg-no-repeat  py-6 md:py-8 px-4 md:px-6 xl:p-8 shadow-4xl md:mb-11.75 mb-4">
            <h4 className="xl:text-2xl md:text-xl text-base font-semibold text-white-1100 leading-4.75 md:leading-7 xl:leading-8.25 pb-6 xl:pb-8">
              Full-Service Pakete deiner Online Marketing Agentur: Alles aus
              einer Hand
            </h4>
            <div className="grid xl:grid-cols-2 xl:gap-8 gap-6">
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Umfassende Full-Service-Angebote
                    für dein Unternehmen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Online Marketing Agentur bietet dir maßgeschneiderte
                    Full-Service-Pakete, die alle wichtigen Aspekte des
                    digitalen Marketings abdecken. Von SEO und PPC über Social
                    Media bis hin zu Content Marketing – du bekommst alles aus
                    einer Hand, um deine Online-Präsenz zu maximieren. So sparst
                    du Zeit und Ressourcen, während du gleichzeitig von einer
                    durchdachten, ganzheitlichen Strategie profitierst.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing-Agentur: So läuft dein Marketing-Prozess ab
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Als deine Marketing-Agentur legen wir großen Wert auf einen
                    strukturierten und klaren Prozess. Zunächst analysieren wir
                    dein Unternehmen und deine Zielgruppe, um dir eine
                    individuelle Online Marketing Beratung zu bieten. Im
                    nächsten Schritt entwickeln wir eine maßgeschneiderte
                    Strategie, die genau zu deinen Zielen passt. Die Umsetzung
                    erfolgt mit stetiger Optimierung, um die besten Ergebnisse
                    zu erzielen.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Online Marketing Agentur: Beratung und Strategieentwicklung
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Zusammenarbeit beginnt immer mit einer ausführlichen
                    Online Marketing Beratung. Wir identifizieren deine
                    Bedürfnisse und erstellen einen Maßnahmenkatalog, der auf
                    deinen Erfolg ausgerichtet ist. Ob du neue Leads generieren
                    oder deine Reichweite steigern möchtest – wir entwickeln für
                    dich eine passgenaue Strategie, die alle relevanten
                    Marketingkanäle optimal miteinander verbindet.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing-Agentur: Transparente Prozesse und klare
                    Kommunikation
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Du stehst bei uns immer im Mittelpunkt. Als deine
                    Marketing-Agentur legen wir großen Wert auf Transparenz. Du
                    wirst in jeder Phase des Prozesses eingebunden und erhältst
                    regelmäßig Updates zu den Fortschritten deiner Kampagne. So
                    hast du die Kontrolle und kannst jederzeit nachvollziehen,
                    wie sich deine Marketingstrategie entwickelt und welche
                    Erfolge erzielt werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:sticky top-0 rounded-2xl bg-black-1200  min-h-131 py-6 md:py-8 px-4 md:px-6 xl:p-8 shadow-4xl">
            <h4 className="xl:text-2xl md:text-xl text-base font-semibold text-white-1100 leading-4.75 md:leading-7 xl:leading-8.25 pb-6 xl:pb-8">
              Omnichannel-Marketing und Cross-Channel-Strategien deiner Online
              Marketing Agentur
            </h4>
            <div className="grid xl:grid-cols-2 xl:gap-8 gap-6">
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Wie deine Online Marketing Agentur Omnichannel-Strategien
                    für dein Unternehmen nutzt
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Omnichannel-Marketing bedeutet, dass deine Kunden über
                    verschiedene Kanäle hinweg ein nahtloses Erlebnis erhalten.
                    Deine Online Marketing Agentur sorgt dafür, dass du
                    potenzielle Kunden genau dort erreichst, wo sie sich
                    aufhalten – sei es über Social Media, E-Mail-Marketing, oder
                    bezahlte Anzeigen. So wird sichergestellt, dass du nicht nur
                    online, sondern auch offline präsent bist und deine Marke
                    konsistent auftritt.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Marketing-Agentur: Cross-Channel-Strategien für konsistente
                    Botschaften und höhere Conversions
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Cross-Channel-Marketing sorgt dafür, dass deine
                    Marketingbotschaften auf allen Kanälen konsistent sind und
                    deine Kunden eine klare, einheitliche Botschaft erhalten.
                    Eine durchdachte Cross-Channel-Strategie deiner
                    Marketing-Agentur sorgt für höhere Conversion-Raten und eine
                    stärkere Kundenbindung. Wir unterstützen dich dabei, diese
                    Konsistenz zu wahren und deine Reichweite über verschiedene
                    Kanäle hinweg zu maximieren.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Deine Online Marketing Agentur: Integration von Online- und
                    Offline-Marketingkanälen
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Unsere Online Marketing Agentur hilft dir, deine Online- und
                    Offline-Kanäle effektiv zu verbinden. Ob Printwerbung,
                    Events oder E-Commerce – wir schaffen die perfekte Synergie
                    zwischen deinen Kanälen, sodass deine Kunden überall ein
                    nahtloses Erlebnis haben. Dies stärkt nicht nur deine Marke,
                    sondern steigert auch den Erfolg deiner Marketingkampagnen.
                  </p>
                </div>
              </div>
              <div className="flex items-start md:gap-6 gap-4">
                <div>
                  <span>
                    <img
                      src="images/check.svg"
                      className="md:w-auto md:h-auto w-5 h-6"
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                    Best Practices von deiner Marketing-Agentur für Omnichannel-
                    und Cross-Channel-Marketing
                  </h5>
                  <p className="text-sm text-white-1100 font-normal leading-4.25">
                    Bei der Umsetzung von Omnichannel- und
                    Cross-Channel-Strategien setzt unsere Marketing-Agentur auf
                    bewährte Best Practices. Dazu gehört die einheitliche
                    Gestaltung deiner Botschaften, die richtige Verknüpfung der
                    Kanäle und das kontinuierliche Monitoring deiner Kampagnen.
                    So stellst du sicher, dass du deine Zielgruppe effektiv
                    erreichst und das volle Potenzial deiner Marketingstrategie
                    ausschöpfst.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:pt-45 md:pt-30 pt-20">
        <div className="max-w-308  md:px-10  xl:px-4 mx-auto w-full">
          <div className="text-center relative border-b border-solid border-white/50 pb-8 md:pb-10 mb-8 md:mb-14 xl:mb-16">
            <h2 className="text-orange-1100 xl:text-5xl leading-6 text-xl md:text-[32px] font-bold md:leading-11 xl:leading-16.75  pb-1 md:pb-3">
              Online Marketing Agentur:
            </h2>
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 blur-[150px] opacity-50"></span>
            <h3 className="xl:text-[32px] md:text-xl text-base font-semibold xl:font-medium leading-4.75 text-white-1100 md:leading-7 xl:leading-9.75 pb-4 md:pb-6">
              SEO-Strategien & Conversion Optimierung für dein Wachstum
            </h3>
            <p className="md:text-base text-sm font-normal leading-4.25 md:leading-5.5 text-white-1100">
              Unsere Online Marketing Agentur unterstützt dich mit
              maßgeschneiderten SEO-Strategien, lokalem SEO, Conversion
              Optimierung und Pay-per-Click-Kampagnen, um deine
              Online-Sichtbarkeit zu erhöhen, Traffic zu steigern und mehr
              Conversions für dein Unternehmen zu generieren.
            </p>
          </div>
          <div className="md:-mx-5 mx-0">
            <ServicesSlider />
          </div>
          <div className="text-center 2xl:pt-0 pt-5 md:px-0 px-4">
            <CtaButton href="/" label="Website-Analyse anfordern" />
            <p className="text-xs text-white-1100 font-normal pt-3">
              Finde heraus, wie Online Marketing{" "}
              <br className="block md:hidden" /> dir mehr Kunden bringt.
            </p>
          </div>
        </div>
      </section>
      <section className="xl:pt-45 md:pt-30 pt-20 bg-[url(/images/marketingbg.jpg)] bg-no-repeat bg-cover agentur-sec">
        <div className="max-w-308 pb-42 md:pb-68.5 xl:pb-97 md:px-10 px-4 xl:px-4 mx-auto w-full relative">
          <div className="text-center relative border-b border-solid border-white/50 pb-10 mb-8 md:mb-14 xl:mb-16">
            <h2 className="text-orange-1100 md:text-[32px] xl:text-5xl font-bold md:leading-11 xl:leading-16.75 text-xl leading-6 md:pb-3">
              Online Marketing Agentur:
            </h2>
            <span className="md:w-191.5 w-full h-37.5 flex items-center justify-center rounded-[100%] bg-linear-to-r from-yellow13 from-0% to-white to-100% absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  blur-[150px] opacity-50"></span>
            <h3 className="md:text-[32px] font-bold xl:font-medium text-white-1100 text-xl leading-6 md:leading-11 xl:leading-9.75 pb-6">
              Moderne Marketingstrategien, Analysen & Trends für deinen Erfolg
            </h3>
            <p className="md:text-base text-sm font-normal leading-4.75 md:leading-5.5 text-white-1100">
              Wir helfen dir, die neuesten Marketingtrends zu nutzen, und bieten
              detaillierte Analysen wie Google Analytics und
              Wettbewerbsanalysen, um innovative Strategien zu entwickeln, die
              dein Unternehmen voranbringen und zukunftssicher machen.
            </p>
          </div>
          <div className="max-w-291 w-full mx-auto">
            <div className="h-89.25 overflow-y-auto">
              <div className="xl:pb-16 md:pb-12 pb-8">
                <h3 className="xl:pb-16 pb-8 md:pb-12 xl:text-2xl text-base md:text-xl font-semibold leading-4.75 md:leading-7 text-white-1100 xl:leading-8.25">
                  Personalisierung von Marketing-Kampagnen durch deine Online
                  Marketing Agentur
                </h3>
                <div className="grid xl:grid-cols-2 xl:gap-8 gap-6 ">
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wie deine Online Marketing Agentur Personalisierung und
                        Automatisierung kombiniert
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Die Personalisierung von Marketing-Kampagnen ist der
                        Schlüssel, um die Relevanz deiner Botschaften zu
                        steigern. Deine Online Marketing Agentur setzt auf
                        moderne Marketing-Automatisierung, um personalisierte
                        Inhalte zur richtigen Zeit an die richtige Zielgruppe zu
                        liefern. Mit dieser Strategie kannst du sicherstellen,
                        dass deine Kunden sich individuell angesprochen fühlen,
                        was das Engagement deutlich erhöht.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Steigere Kundenbindung und Conversion-Raten mit
                        personalisierten Kampagnen
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Personalisierte Marketing-Kampagnen sind nicht nur ein
                        Trend, sondern eine effektive Methode, um die
                        Kundenbindung zu stärken und deine Conversion-Raten zu
                        steigern. Deine Marketing-Agentur hilft dir, relevante
                        Inhalte zu erstellen, die auf den individuellen
                        Bedürfnissen deiner Zielgruppe basieren. Dadurch fühlen
                        sich deine Kunden stärker mit deiner Marke verbunden,
                        was zu langfristigem Erfolg führt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Techniken zur Segmentierung deiner Zielgruppe durch
                        deine Online Marketing Agentur
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Eine gezielte Segmentierung der Zielgruppe ist
                        entscheidend für den Erfolg personalisierter Kampagnen.
                        Deine Online Marketing Agentur nutzt fortschrittliche
                        Analysetools, um deine Zielgruppe nach demografischen
                        Daten, Kaufverhalten und Interessen zu segmentieren.
                        Dies ermöglicht es dir, maßgeschneiderte Inhalte zu
                        erstellen, die exakt auf die Bedürfnisse der
                        verschiedenen Segmente abgestimmt sind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Maßgeschneiderte Marketing-Strategien für jeden Kunden
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Personalisierte Kampagnen gehen weit über den einfachen
                        Einsatz von Vornamen in E-Mails hinaus. Deine
                        Marketing-Agentur entwickelt eine umfassende Strategie,
                        die von dynamischen Inhalten bis hin zu
                        individualisierten Produktempfehlungen reicht. So
                        erzielst du eine höhere Relevanz und bessere Ergebnisse
                        in allen Bereichen deines Marketings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wie deine Online Marketing Agentur Personalisierung und
                        Automatisierung kombiniert
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Die Personalisierung von Marketing-Kampagnen ist der
                        Schlüssel, um die Relevanz deiner Botschaften zu
                        steigern. Deine Online Marketing Agentur setzt auf
                        moderne Marketing-Automatisierung, um personalisierte
                        Inhalte zur richtigen Zeit an die richtige Zielgruppe zu
                        liefern. Mit dieser Strategie kannst du sicherstellen,
                        dass deine Kunden sich individuell angesprochen fühlen,
                        was das Engagement deutlich erhöht.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Steigere Kundenbindung und Conversion-Raten mit
                        personalisierten Kampagnen
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Personalisierte Marketing-Kampagnen sind nicht nur ein
                        Trend, sondern eine effektive Methode, um die
                        Kundenbindung zu stärken und deine Conversion-Raten zu
                        steigern. Deine Marketing-Agentur hilft dir, relevante
                        Inhalte zu erstellen, die auf den individuellen
                        Bedürfnissen deiner Zielgruppe basieren. Dadurch fühlen
                        sich deine Kunden stärker mit deiner Marke verbunden,
                        was zu langfristigem Erfolg führt
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Techniken zur Segmentierung deiner Zielgruppe durch
                        deine Online Marketing Agentur
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Eine gezielte Segmentierung der Zielgruppe ist
                        entscheidend für den Erfolg personalisierter Kampagnen.
                        Deine Online Marketing Agentur nutzt fortschrittliche
                        Analysetools, um deine Zielgruppe nach demografischen
                        Daten, Kaufverhalten und Interessen zu segmentieren.
                        Dies ermöglicht es dir, maßgeschneiderte Inhalte zu
                        erstellen, die exakt auf die Bedürfnisse der
                        verschiedenen Segmente abgestimmt sind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Maßgeschneiderte Marketing-Strategien für jeden Kunden
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Personalisierte Kampagnen gehen weit über den einfachen
                        Einsatz von Vornamen in E-Mails hinaus. Deine
                        Marketing-Agentur entwickelt eine umfassende Strategie,
                        die von dynamischen Inhalten bis hin zu
                        individualisierten Produktempfehlungen reicht. So
                        erzielst du eine höhere Relevanz und bessere Ergebnisse
                        in allen Bereichen deines Marketings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:pb-16 md:pb-12 pb-8">
                <h3 className="xl:pb-16 pb-8 md:pb-12 xl:text-2xl text-base md:text-xl font-semibold leading-4.75 md:leading-7 text-white-1100 xl:leading-8.25">
                  Wettbewerbsanalyse und Benchmarking mit deiner Online
                  Marketing Agentur
                </h3>
                <div className="grid xl:grid-cols-2 xl:gap-8 gap-6 ">
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wie deine Online Marketing Agentur Stärken und Schwächen
                        der Konkurrenz identifiziert
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Eine effektive Wettbewerbsanalyse ist entscheidend, um
                        im digitalen Marketing erfolgreich zu sein. Deine Online
                        Marketing Agentur analysiert die Stärken und Schwächen
                        deiner Konkurrenz, um dir einen klaren Vorteil zu
                        verschaffen. Durch die genaue Beobachtung der Strategien
                        deiner Mitbewerber kannst du gezielt auf Marktchancen
                        reagieren und deinen Wettbewerbsvorsprung sichern.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wettbewerbsanalyse und der Einsatz von
                        Benchmarking-Tools
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Mit Benchmarking-Tools kannst du kontinuierlich deine
                        Marketingstrategien verbessern. Deine Online Marketing
                        Agentur nutzt modernste Technologien, um die Performance
                        deines Unternehmens mit der deiner Mitbewerber zu
                        vergleichen. So erhältst du wertvolle Einblicke, welche
                        Maßnahmen funktionieren und wo Optimierungsbedarf
                        besteht. Dieser datenbasierte Ansatz hilft dir, immer
                        einen Schritt voraus zu sein.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wie deine Online Marketing Agentur Benchmarking für
                        nachhaltigen Erfolg einsetzt
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Durch den gezielten Einsatz von Benchmarking kann deine
                        Online Marketing Agentur dir helfen, Schwachstellen in
                        deiner Strategie zu erkennen und kontinuierlich zu
                        verbessern. Erfolgreiche Unternehmen setzen auf
                        Benchmarking, um aus den besten Praktiken der Branche zu
                        lernen und diese auf ihre eigenen Marketingkampagnen zu
                        übertragen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Erfolgreiche Wettbewerbsanalysen: Praxisbeispiele deiner
                        Marketing-Agentur
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Wettbewerbsanalysen haben vielen Unternehmen geholfen,
                        ihre Position auf dem Markt zu stärken. Deine
                        Marketing-Agentur zeigt dir anhand von Praxisbeispielen,
                        wie Wettbewerbsanalysen zu signifikanten Verbesserungen
                        und einer klaren strategischen Ausrichtung geführt
                        haben. Lerne aus den Erfolgen anderer und setze diese
                        Erkenntnisse für dein eigenes Wachstum ein.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:pb-16 md:pb-12 pb-8">
                <h3 className="xl:pb-16 pb-8 md:pb-12 xl:text-2xl text-base md:text-xl font-semibold leading-4.75 md:leading-7 text-white-1100 xl:leading-8.25">
                  Effektives Tracking mit deiner Online Marketing Agentur:
                  Google Analytics & Tracking
                </h3>
                <div className="grid xl:grid-cols-2 xl:gap-8 gap-6 ">
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wie deine Online Marketing Agentur Google Analytics
                        einsetzt, um deine Website-Performance zu verfolgen
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Google Analytics ist ein unverzichtbares Tool, um die
                        Leistung deiner Website zu analysieren. Mit der
                        Unterstützung deiner Online Marketing Agentur kannst du
                        präzise verfolgen, wie sich Besucher auf deiner Website
                        verhalten, welche Seiten am beliebtesten sind und welche
                        Inhalte optimiert werden sollten. So kannst du
                        datenbasierte Entscheidungen treffen und dein Online
                        Marketing gezielt verbessern.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Die wichtigsten Metriken, die deine Online Marketing
                        Agentur überwacht
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Zu den entscheidenden Metriken, die deine
                        Marketing-Agentur für dich im Auge behält, gehören
                        Besucherzahlen, Absprungrate, Verweildauer und
                        Conversion-Rate. Diese Kennzahlen geben dir einen tiefen
                        Einblick in das Nutzerverhalten und zeigen dir, welche
                        Seiten besonders gut funktionieren und wo Potenzial zur
                        Optimierung besteht.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Tracking-Tools, die deine Online Marketing Agentur für
                        den Erfolg deiner Kampagnen einrichtet
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Um den Erfolg deiner Marketingkampagnen zu messen,
                        richtet deine Online Marketing Agentur spezielle
                        Tracking-Tools ein, die genau analysieren, wie effektiv
                        deine Kampagnen performen. Google Analytics, kombiniert
                        mit anderen Tools, ermöglicht dir, Conversions und
                        Nutzerinteraktionen über verschiedene Kanäle hinweg zu
                        verfolgen und Kampagnen gezielt zu verbessern.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Maximiere deinen Erfolg mit datengetriebenem Marketing
                        durch deine Online Marketing Agentur
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Durch die enge Zusammenarbeit mit deiner Online
                        Marketing Agentur und den gezielten Einsatz von Google
                        Analytics und Tracking-Tools kannst du sicherstellen,
                        dass deine Marketingstrategien stets auf verlässlichen
                        Daten basieren. Das hilft dir, schneller auf
                        Marktveränderungen zu reagieren und deine Ergebnisse
                        kontinuierlich zu optimieren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:pb-16 md:pb-12 pb-8">
                <h3 className="xl:pb-16 pb-8 md:pb-12 xl:text-2xl text-base md:text-xl font-semibold leading-4.75 md:leading-7 text-white-1100 xl:leading-8.25">
                  Mobile-First und Responsive Webdesign mit deiner Online
                  Marketing Agentur
                </h3>
                <div className="grid xl:grid-cols-2 xl:gap-8 gap-6 ">
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Warum mobile Optimierung für deine Online Marketing
                        Agentur unerlässlich ist
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        In der heutigen digitalen Welt ist die mobile
                        Optimierung entscheidend für den Erfolg deiner Website.
                        Deine Online Marketing Agentur sorgt dafür, dass deine
                        Website auf mobilen Geräten perfekt dargestellt wird,
                        was nicht nur die Nutzererfahrung verbessert, sondern
                        auch ein wichtiger Rankingfaktor für Google ist. Immer
                        mehr Nutzer greifen über Smartphones auf Inhalte zu –
                        ohne eine mobile-optimierte Seite riskierst du,
                        potenzielle Kunden zu verlieren.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Best Practices im responsiven Webdesign von deiner
                        Marketing-Agentur
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Ein gutes responsives Webdesign sorgt dafür, dass deine
                        Website auf allen Endgeräten, ob Smartphone, Tablet oder
                        Desktop, optimal funktioniert. Deine Marketing-Agentur
                        wendet die besten Techniken an, um sicherzustellen, dass
                        die Inhalte, Bilder und Navigationselemente flexibel und
                        nutzerfreundlich sind. Ein mobilfreundliches Design
                        führt zu höheren Verweildauern und geringeren
                        Absprungraten – beides entscheidend für dein
                        Google-Ranking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Die Rolle von Mobile-First-Indexing und warum deine
                        Online Marketing Agentur darauf achtet
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Google hat vor einigen Jahren das Mobile-First-Indexing
                        eingeführt, was bedeutet, dass die mobile Version deiner
                        Website vorrangig für die Indexierung und das Ranking
                        berücksichtigt wird. Deine Online Marketing Agentur
                        stellt sicher, dass die mobile Version deiner Seite
                        vollständig optimiert ist, um deine Position in den
                        Suchmaschinen zu stärken und langfristig organisches
                        Wachstum zu sichern.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <span>
                        <img
                          src="images/check.svg"
                          className="md:w-auto md:h-auto w-6 h-6"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold leading-4.75 text-orange-1100 pb-4">
                        Wie deine Online Marketing Beratung dir hilft, von
                        mobilen Trends zu profitieren
                      </h5>
                      <p className="text-sm text-white-1100 font-normal leading-4.25">
                        Mit der richtigen Online Marketing Beratung kannst du
                        sicherstellen, dass deine Website nicht nur den
                        Anforderungen der mobilen Nutzer entspricht, sondern
                        auch für zukünftige mobile SEO-Trends gerüstet ist.
                        Deine Marketing-Agentur bietet dir umfassende Lösungen,
                        um mobile First-Strategien erfolgreich zu implementieren
                        und langfristig bessere Rankings zu erzielen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/spaceman-last.png"
            alt=""
            className="absolute  md:-bottom-27.5 -bottom-14.5 right-2.5 md:right-10 lg:right-30 xl:h-auto h-57.25 md:h-88"
          />
        </div>
      </section>
    </>
  );
};

export default page;
