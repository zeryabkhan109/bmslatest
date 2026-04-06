"use client";
import Image from "next/image";
import CtaButton from "@/components/Ctabutton";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import PartnerLogosMarquee from "@/components/Partnerlogosmarquee";
import { ServicesOfferedCard } from "@/components/ServicesOfferedCard";
import MeetingEmbed from "@/components/MeetingEmbed";
import { ReviewCardGroup } from "@/components/ReviewCardGroup";
import { HamburgFaq } from "@/components/HamburgFaq";
import Agencycards from "@/components/Agencycards";
import { RegionalFaq } from "@/components/RegionalFaq";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const page = () => {
  return (
    <>
      <section className='md:bg-[url("/images/Regional-seo-hero-bg.png")] bg-[url("/images/Regional-seo-hero-small.png")] bg-cover bg-center relative lg:pb-0 md:pb-12 pb-17 md:pt-40 pt-43'>
        <div className="max-w-310 lg:px-5 md:px-10 px-4 mx-auto w-full">
          <div className="text-center">
            <h1 className="text-white-1100 lg:text-[70px] md:text-[50px] text-[30px] leading-[124%] font-semibold uppercase text-shadow-xl">
              SEO Agentur <br />
              Hamburg
            </h1>
            <h4 className="text-white-1100 lg:text-[32px] md:text-2xl text-lg mt-6 leading-[124%] font-medium">
              Mehr Sichtbarkeit. Mehr Umsatz.
            </h4>
          </div>
          <div className="bg-black-1100/80 rounded-2xl shadow-4xl lg:mt-8 md:mt-12 mt-13.25 mx-auto max-w-247.75 w-full">
            <div className="bg-white/10 lg:px-6 px-5 py-4 rounded-t-2xl">
              <h4 className="text-white-1100 md:text-xl text-base md:leading-[140%] leading-[124%] font-semibold">
                Mehr Kunden mit SEO
              </h4>
              <p className="text-white-1100 md:text-sm text-xs md:leading-[124%] leading-[140%] mt-2 font-normal">
                Entdecke dein Potenzial – lass uns deine Website optimieren und
                sichtbarer machen!
              </p>
            </div>
            <div className="lg:px-6 px-5 pt-5 pb-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="xl:py-45 md:py-30 md:py-41 pt-5 pb-22 overflow-hidden">
        <div>
          <div className="flex items-center md:flex-row flex-col lg:gap-10 xl:gap-15">
            <div className="md:w-1/2 w-full pl-4 md:pl-10 xl:pl-4 2xl:pl-[calc(50vw-609px)] md:pb-0 pb-8">
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
            <div className=" relative md:max-w-[380px] xl:max-w-[704px] max-w-full ml-auto">
              <PartnerLogosMarquee />
              <span className="bg-[linear-gradient(90deg,#060606_0.08%,rgba(6,6,6,0)_99.92%)] absolute top-0 left-0 w-10 md:w-40 h-full"></span>
              <span className="bg-[linear-gradient(90deg,#060606_0.08%,rgba(6,6,6,0)_99.92%)] sm:hidden block absolute top-0 right-0 w-10 md:w-40 h-full rotate-180"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/images/MediaSolution-bg.jpg')] bg-cover bg-top relative lg:pt-48 lg:pb-66.25 md:py-33.75 pt-0 pb-20">
        <div className="max-w-338 w-full mx-auto md:px-10 px-4 xl:px-4">
          <div className="max-w-247.75 w-full mx-auto">
            <div className="border-b border-solid border-white-1100/40 relative">
              <h2 className="xl:text-5xl md:text-[32px] text-xl leading-6 md:leading-11 font-bold  md:pb-10 pb-8 w-full text-white-1100 xl:leading-16.75 text-center">
                <span className="text-orange-1100 block">
                  Benchmark Media Solution
                </span>
                Deine SEO Agentur für Hamburg
              </h2>
            </div>
            <div className="lg:mt-22 mt-12 bg-black13/50 rounded-2xl shadow-4xl backdrop-blur-[10px] md:py-10 md:px-8 px-4 py-6">
              <p className="text-white-1100 text-center lg:mb-8 mb-6 font-normal lg:text-base md:text-sm text-xs lg:leading-[140%] md:leading-[124%] leading-[140%]">
                Täglich gibt es über 8,5 Milliarden Suchanfragen bei Google –
                viele davon kommen von Menschen, die genau das suchen, was du
                anbietest. Wir fördern Unternehmen wie deines, die wachsen,
                sichtbar werden und Kunden direkt ansprechen möchten. Als
                erfahrene{" "}
                <Link href={"#"} className="text-orange-1100">
                  SEO Agentur
                </Link>{" "}
                für Hamburg sorgen wir dafür, dass deine Website genau dort
                gefunden wird, wo deine Zielgruppe sucht.
              </p>
              <p className="text-white-1100 text-center font-normal lg:text-base md:text-sm text-xs lg:leading-[140%] md:leading-[124%] leading-[140%]">
                Mit maßgeschneiderter{" "}
                <Link href={"#"} className="text-orange-1100">
                  Suchmaschinenoptimierung (SEO)
                </Link>{" "}
                unterstützen wir dich dabei, dein Potenzial voll auszuschöpfen.
                Wir kennen den Hamburger Markt und wissen, wie man lokale
                Unternehmen erfolgreich positioniert. Erfolgsgeschichten unserer
                Kunden beweisen, dass wir die Sichtbarkeit und Reichweite
                nachhaltig steigern können. Lass uns gemeinsam dafür sorgen,
                dass du die Konkurrenz hinter dir lässt – Benchmark Media
                Solution macht dein Unternehmen zum Online-Magneten!
              </p>
              <ul className="flex lg:flex-row flex-col lg:max-w-full max-w-87.5 w-full lg:mx-0 mx-auto items-center justify-center lg:gap-8 gap-4 lg:mt-12 mt-8">
                <li className="lg:w-auto w-full">
                  <CtaButton
                    href="/"
                    className="md:w-auto! w-full!"
                    label="Jetzt Kennenlerngespräch buchen"
                  />
                </li>
                <li className="lg:w-auto w-full">
                  <CtaButton
                    className="lg:w-auto! w-full!"
                    href="/"
                    label="Website-Analyse anfordern"
                    variant="transparent"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute lg:-bottom-6.5 -bottom-2.5 left-0 w-full text-center">
          <img
            src="/images/hamburg-img.svg"
            alt=""
            className="sm:h-auto h-[50px]"
          />
        </div>
      </section>
      <section className="relative lg:py-50 md:pt-41 pt-22 md:pb-50 pb-22">
        <div className="max-w-338 w-full mx-auto xl:px-4 md:px-10 px-4">
          <div className="max-w-300 w-full mx-auto">
            <div className="border-b border-solid border-white-1100/40 text-center relative pb-10">
              <h2 className="xl:text-5xl md:text-[32px] text-xl leading-[140%] font-bold pb-6 w-full text-white-1100 text-center lg:max-w-260 max-w-150 mx-auto">
                Mit deiner SEO Agentur Hamburg zu mehr Kunden und Umsatz
              </h2>
              <p className="text-white-1100 font-normal lg:text-base text-sm lg:leading-[140%] leading-[124%]">
                {" "}
                So profitieren unsere Kunden durchschnittlich schon nach 6
                Monaten von unserer SEO Betreuung in Hamburg
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 lg:mt-22 mt-12">
              <div className='text-center rounded-2xl p-8 shadow-4xl bg-[url("/images/star-bg.jpg")] bg-cover bg-center'>
                <h4 className="text-orange-1100 lg:text-[70px] text-[50px] leading-[124%] mb-2 font-semibold">
                  +83%
                </h4>
                <p className="text-grey-1100 lg:text-base text-sm md:leading-[140%] leading-[124%] font-bold">
                  Mehr qualifizierte Anfragen{" "}
                </p>
                <span className="bg-gradient w-full h-px block lg:my-6 my-4"></span>
                <p className="text-grey-1100 lg:text-base text-xs leading-[140%] font-normal">
                  in nur 6 Monaten durch gezielte SEO-Maßnahmen.{" "}
                </p>
              </div>
              <div className='text-center rounded-2xl p-8 shadow-4xl bg-[url("/images/star-bg.jpg")] bg-cover bg-center'>
                <h4 className="text-orange-1100 lg:text-[70px] text-[50px] leading-[124%] mb-2 font-semibold">
                  +43%
                </h4>
                <p className="text-grey-1100 lg:text-base text-sm md:leading-[140%] leading-[124%] font-bold">
                  Neukundengewinn
                </p>
                <span className="bg-gradient w-full h-px block lg:my-6 my-4"></span>
                <p className="text-grey-1100 lg:text-base text-xs leading-[140%] font-normal">
                  durch höhere Google-Rankings und lokale Optimierung
                </p>
              </div>
              <div className='text-center rounded-2xl p-8 shadow-4xl bg-[url("/images/star-bg.jpg")] bg-cover bg-center'>
                <h4 className="text-orange-1100 lg:text-[70px] text-[50px] leading-[124%] mb-2 font-semibold">
                  +67%
                </h4>
                <p className="text-grey-1100 lg:text-base text-sm md:leading-[140%] leading-[124%] font-bold">
                  Umsatzsteigerung{" "}
                </p>
                <span className="bg-gradient w-full h-px block lg:my-6 my-4"></span>
                <p className="text-grey-1100 lg:text-base text-xs leading-[140%] font-normal">
                  dank besserer Sichtbarkeit und optimierter Conversion Rates.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center lg:mt-22 mt-12">
            <CtaButton
              href="/"
              className="md:w-auto! w-full!"
              label="Erfolgsstories ansehen"
            />
          </div>
        </div>
      </section>
      <section className="lg:bg-[url('/images/Hamburg-bg.png')] md:bg-[url('/images/Hamburg-bg2.png')] bg-[url('/images/Hamburg-bg-mobile.png')] bg-cover bg-top md:pt-0 pt-8 xl:pb-55 pb-0 relative">
        <div className="max-w-338 w-full mx-auto md:px-10 px-4 xl:px-4">
          <div className="border-b border-solid border-white-1100/40 relative">
            <h2 className="xl:text-5xl md:text-[32px] text-xl leading-[140%] font-bold pb-8 md:pb-10 w-full text-white-1100 text-center">
              <span className="text-orange-1100 block">
                SEO Agentur Hamburg
              </span>
              Deine Lösung für messbare Erfolge
            </h2>
          </div>
          <div className="lg:mt-5 md:mt-14 mt-10 lg:max-w-full max-w-112.5 w-full">
            <ul>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  1.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Was ist Suchmaschinenoptimierung?
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  2.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Warum brauchst du eine SEO Agentur?
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  3.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Was macht eine SEO Agentur?
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  4.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Der SEO Prozess - Schritt für Schritt
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  5.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Maßgeschneiderte SEO für Hamburger Unternehmen
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  6.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Langfristiger Erfolg mit deiner SEO Agentur Hamburg
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  7.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Wie macht SEO dein Unternehmen erfolgreich?
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  8.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  SEO - dein Vertriebskanal
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  9.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Was kostet Suchmaschinenoptimierung?
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  10.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  Warum eine Full Service SEO Agentur die beste Wahl ist
                </p>
              </li>
              <li className="flex lg:items-center items-start md:gap-3 gap-1 md:py-2 xl:px-6 lg:px-4 md:px-6 p-2">
                <span className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] md:w-9 md:h-9 w-6 h-5">
                  11.
                </span>
                <p className="text-white-1100 font-semibold xl:text-2xl lg:text-lg md:text-xl text-base md:leading-[140%] leading-[124%] flex-1 w-full">
                  FAQ - Häufig gestellte Fragen zu SEO
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-50 ">
        <div className="max-w-310 px-5 mx-auto w-full">
          <h2 className="border-b border-solid border-white-1100/40 xl:text-5xl md:text-[32px] text-xl leading-[140%] font-bold pb-8 md:pb-10 max-w-294.5 mx-auto w-full text-white-1100 text-center">
            Umfassende SEO Services deiner <br />
            SEO Agentur in Hamburg
          </h2>
          <div className="mt-22">
            <ServicesOfferedCard />
          </div>
        </div>
      </section>
      <section className=" xl:pb-45 md:pb-30 pb-20">
        <div className="max-w-308 md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 mb-14 xl:mb-16 relative">
            <h4 className="md:text-2xl font-semibold text-base leading-4.75 md:leading-8.25 text-white-1100 pb-6">
              <span className="text-orange-1100 block">
                Möchtest du mehr darüber erfahren,
              </span>
              wie Suchmaschinenoptimierung dir helfen kann <br />
              und wie du die Vorteile für dein Unternehmen in Hamburg nutzen
              kannst?
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
      <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 xl:py-53.5 lg:py-25 py-10 relative z-1">
        <div className="max-w-346.25  md:px-10 px-4 pr-0 xl:px-4 mx-auto w-full">
          <div className="text-center lg:pb-0 md:pb-10 pb-8 lg:border-b-0 border-b border-solid border-white-1100">
            <h2 className="lg:text-5xl md:text-[32px] text-xl max-w-300 w-full mx-auto font-bold  text-white-1100 leading-[140%]">
              Lass dich von den SEO Agentur Erfahrungen unserer Kunden aus
              Hamburg überzeugen!
            </h2>
          </div>
          <ReviewCardGroup />
        </div>
      </section>
      <section className="relative lg:py-50 md:pt-41 pt-22 md:pb-50 pb-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="lg:text-5xl md:text-[32px] text-xl text-white-1100 font-bold leading-[124%]">
              <span className="text-orange-1100 block">
                SEO Agentur Hamburg:
              </span>
              Einführung in SEO und die Bedeutung für dein Unternehmen
            </h2>
            <ul className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-4 mt-10">
              <li className="md:w-auto w-full">
                <CtaButton
                  className="md:w-auto! w-full!"
                  href="/"
                  label="Jetzt Kennenlerngespräch buchen"
                  variant="transparent"
                />
              </li>
              <li className="md:w-auto w-full">
                <Link
                  href={"#"}
                  className="text-white-1100 font-normal text-base leading-[140%] bg-orange-1100 rounded-sm h-11.5 px-3 md:w-auto w-full inline-flex items-center justify-center"
                >
                  SEO-Analyse anfordern
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className="flex-1 w-full">
              <div className="bg-black-1200 rounded-2xl xl:p-8 lg:p-5 md:p-8 px-4 py-6">
                <span className="text-white-1100/50 font-bold xl:text-base text-sm leading-[140%] xl:mb-6 mb-4 block">
                  Was ist Suchmaschinenoptimierung?
                </span>
                <div>
                  <h5 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[140%]">
                    Deine SEO Agentur erklärt SEO für Hamburg
                  </h5>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    SEO, oder Suchmaschinenoptimierung, ist entscheidend, wenn
                    du online erfolgreich sein möchtest – besonders in einer
                    dynamischen Stadt wie Hamburg. Die digitale Konkurrenz ist
                    hier groß, und ohne SEO bleibt deine Website im Verborgenen,
                    selbst wenn dein Angebot erstklassig ist.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Eine SEO Agentur wie Benchmark Media Solution sorgt dafür,
                    dass deine Website bei Google und anderen Suchmaschinen
                    gefunden wird. Wir helfen dir, mit maßgeschneiderter
                    Suchmaschinenoptimierung gezielt deine Zielgruppe zu
                    erreichen.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Durch SEO wird deine Website zu einem effektiven
                    Vertriebskanal, der rund um die Uhr potenzielle Kunden
                    anzieht. SEO macht aus Besuchern zahlende Kunden und
                    steigert so deinen Umsatz. Als SEO Agentur Hamburg wissen
                    wir genau, wie wir deine Online-Präsenz optimieren, damit du
                    in den lokalen Suchergebnissen ganz oben stehst.
                  </p>
                  <Link
                    href={"#"}
                    className="text-white-1100 xl:mt-6 lg:mt-4 mt-8 font-normal xl:text-base lg:text-sm text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-120.25 max-w-full w-full">
              <img
                src="/images/DeineSEO-img1.jpg"
                alt=""
                className="w-full lg:h-full h-75 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className="flex-1 w-full lg:order-2 order-1">
              <div className="bg-black-1200 rounded-2xl xl:p-8 lg:p-5 md:p-8 px-4 py-6">
                <span className="text-white-1100/50 font-bold xl:text-base text-sm leading-[140%] xl:mb-6 mb-4 block">
                  Strategische SEO-Optimierung für Hamburg und Umgebung
                </span>
                <div>
                  <h5 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[140%]">
                    Die Rolle einer SEO Agentur für deine
                    Suchmaschinenoptimierung in Hamburg
                  </h5>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    SEO erfordert nicht nur technisches Wissen, sondern auch
                    strategisches Feingefühl – vor allem in einer
                    Wettbewerbslandschaft wie in Hamburg. Eine professionelle
                    SEO Agentur wie Benchmark Media Solution kennt die komplexen
                    Algorithmen von Google und weiß, welche Techniken und
                    Methoden erforderlich sind, um deine Website auf die
                    vorderen Plätze der Suchergebnisse zu bringen.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    DIY-SEO ist oft zeitaufwendig und liefert nicht immer die
                    gewünschten Ergebnisse. Mit unserer Expertise erreichst du
                    nicht nur Top-Rankings, sondern auch eine nachhaltige
                    Steigerung deiner Sichtbarkeit.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Als Suchmaschinenoptimierung Agentur sorgen wir dafür, dass
                    deine Website gezielt optimiert wird, um in Hamburg und
                    darüber hinaus potenzielle Kunden anzusprechen. Durch unsere
                    SEO-Strategien gewinnst du mehr qualifizierte Leads und
                    baust deine Online-Präsenz systematisch aus.
                  </p>
                  <Link
                    href={"#"}
                    className="text-white-1100 xl:mt-6 lg:mt-4 mt-8 font-normal xl:text-base lg:text-sm text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-120.25 max-w-full w-full lg:order-1 order-2">
              <img
                src="/images/DeineSEO-img2.jpg"
                alt=""
                className="w-full lg:h-full h-75 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className="flex-1 w-full">
              <div className="bg-black-1200 rounded-2xl xl:p-8 lg:p-5 md:p-8 px-4 py-6">
                <span className="text-white-1100/50 font-bold xl:text-base text-sm leading-[140%] xl:mb-6 mb-4 block">
                  Full Service Suchmaschinenoptimierung
                </span>
                <div>
                  <h5 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[140%]">
                    SEO Agentur für Hamburg: Mehr als Keyword-Optimierung
                  </h5>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Eine SEO Agentur wie Benchmark Media Solution bietet weit
                    mehr als einfache Keyword-Optimierung. Wir betrachten alle
                    Aspekte, die deine Website erfolgreich machen: technische
                    Verbesserungen, zielgerichtete Inhalte und eine
                    benutzerfreundliche Struktur. Unser Ansatz ist ganzheitlich
                    – wir analysieren deine Zielgruppe und Wettbewerber, um eine
                    maßgeschneiderte Strategie zu entwickeln.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Von der Erstellung hochwertiger Inhalte bis zur Optimierung
                    der Ladegeschwindigkeit setzen wir jede Maßnahme um, die
                    deine Website sichtbarer macht. Doch damit endet unser
                    Service nicht: Wir überwachen kontinuierlich die Performance
                    und passen die Strategie an, damit deine Website langfristig
                    wettbewerbsfähig bleibt.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Mit Benchmark Media Solution als SEO Agentur für Hamburg
                    profitierst du von einem umfassenden Service, der deine
                    Sichtbarkeit steigert, mehr Kunden anzieht und nachhaltig
                    für Erfolg sorgt.
                  </p>
                  <Link
                    href={"#"}
                    className="text-white-1100 xl:mt-6 lg:mt-4 mt-8 font-normal xl:text-base lg:text-sm text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-120.25 max-w-full w-full">
              <img
                src="/images/DeineSEO-img3.jpg"
                alt=""
                className="w-full lg:h-full h-75 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className="flex-1 w-full lg:order-2 order-1">
              <div className="bg-black-1200 rounded-2xl xl:p-8 lg:p-5 md:p-8 px-4 py-6">
                <span className="text-white-1100/50 font-bold xl:text-base text-sm leading-[140%] xl:mb-6 mb-4 block">
                  Der SEO Prozess – Schritt für Schritt
                </span>
                <div>
                  <h5 className="text-orange-1100 font-semibold xl:text-2xl text-xl leading-[140%]">
                    Erreiche Top-Rankings für Hamburg mit deiner SEO Agentur
                  </h5>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Suchmaschinenoptimierung folgt einem strukturierten Prozess,
                    der aus mehreren Phasen besteht: Analyse, Strategie,
                    Umsetzung und Monitoring.
                  </p>
                  <ul className="md:flex grid grid-cols-2 items-center gap-4 xl:mt-6 mt-4">
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 ">
                        <img src="/images/check.svg" alt="" />{" "}
                      </span>
                      <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%]">
                        {" "}
                        Analyse
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 ">
                        <img src="/images/check.svg" alt="" />{" "}
                      </span>
                      <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%]">
                        {" "}
                        Strategie
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 ">
                        <img src="/images/check.svg" alt="" />{" "}
                      </span>
                      <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%]">
                        {" "}
                        Umsetzung
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 ">
                        <img src="/images/check.svg" alt="" />{" "}
                      </span>
                      <p className="text-white-1100 font-normalxl:text-base md:text-sm text-xs leading-[140%]">
                        {" "}
                        Monitoring
                      </p>
                    </li>
                  </ul>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Als deine SEO Agentur entwickeln wir eine individuelle
                    Strategie für deine Website, die auf deine spezifischen
                    Bedürfnisse und Ziele zugeschnitten ist.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Zuerst analysieren wir deine bestehende Website und
                    identifizieren Verbesserungsmöglichkeiten. Anschließend
                    erstellen wir eine maßgeschneiderte SEO-Strategie, die
                    sowohl On-Page- als auch Off-Page-Optimierungen umfasst.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    In der Umsetzungsphase optimieren wir deine Inhalte, beheben
                    technische Fehler und verbessern die Ladegeschwindigkeit
                    deiner Website.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Der Prozess endet nicht mit der Umsetzung – wir überwachen
                    kontinuierlich den Erfolg und passen die Strategie
                    regelmäßig an, um sicherzustellen, dass deine Website
                    wettbewerbsfähig bleibt. Mit der Unterstützung unserer SEO
                    Agentur aus Hamburg bleibst du immer auf der Erfolgsspur.
                  </p>
                  <Link
                    href={"#"}
                    className="text-white-1100 xl:mt-6 lg:mt-4 mt-8 font-normal xl:text-base lg:text-sm text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-120.25 max-w-full w-full lg:order-1 order-2">
              <img
                src="/images/DeineSEO-img4.jpg"
                alt=""
                className="w-full lg:h-full h-75 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className="flex-1 w-full">
              <div className="bg-black-1200 rounded-2xl xl:p-8 lg:p-5 md:p-8 px-4 py-6">
                <span className="text-white-1100/50 font-bold xl:text-base text-sm leading-[140%] xl:mb-6 mb-4 block">
                  Individuelle SEO Strategien
                </span>
                <div>
                  <h5 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[140%]">
                    Maßgeschneiderte Suchmaschinenoptimierung für Hamburger
                    Unternehmen
                  </h5>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Jede Website ist einzigartig – genauso wie dein Unternehmen.
                    Eine pauschale SEO-Strategie funktioniert nicht für jedes
                    Business. Deshalb entwickelt unsere SEO Agentur
                    maßgeschneiderte Lösungen, die genau auf deine Ziele und
                    deine Zielgruppe abgestimmt sind.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    In einer Stadt wie Hamburg, die von Wettbewerb und
                    Innovation geprägt ist, ist es wichtig, mit einer
                    einzigartigen Suchmaschinenoptimierung herauszustechen. Wir
                    analysieren deine Branche und entwickeln eine Strategie, die
                    dir langfristigen Erfolg bringt.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Dabei setzen wir auf bewährte SEO-Techniken, die deine
                    Website nicht nur sichtbarer machen, sondern auch ihre
                    Relevanz für die richtigen Zielgruppen steigern. Benchmark
                    Media Solution sorgt dafür, dass deine Website die richtigen
                    Kunden anspricht und langfristig ihre Position in den
                    Suchergebnissen behaupten kann.
                  </p>
                  <Link
                    href={"#"}
                    className="text-white-1100 xl:mt-6 lg:mt-4 mt-8 font-normal xl:text-base lg:text-sm text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-120.25 max-w-full w-full">
              <img
                src="/images/DeineSEO-img5.jpg"
                alt=""
                className="w-full lg:h-full h-75 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className="flex-1 w-full lg:order-2 order-1">
              <div className="bg-black-1200 rounded-2xl xl:p-8 lg:p-5 md:p-8 px-4 py-6">
                <span className="text-white-1100/50 font-bold xl:text-base text-sm leading-[140%] xl:mb-6 mb-4 block">
                  SEO für nachhaltiges Wachstum
                </span>
                <div>
                  <h5 className="text-orange-1100 font-semibold xl:text-2xl md:text-xl text-base leading-[140%]">
                    Langfristiger Erfolg mit deiner SEO Agentur Hamburg
                  </h5>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    SEO ist eine langfristige Investition, die nachhaltiges
                    Wachstum und stabile Top-Platzierungen ermöglicht. In
                    Hamburg, wo der Wettbewerb online hoch ist, sorgt unsere SEO
                    Agentur dafür, dass deine Website dauerhaft sichtbar bleibt.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Mit kontinuierlichen Optimierungen passen wir deine Website
                    an die sich ständig ändernden Google-Algorithmen und Trends
                    an. Dieser Ansatz stellt sicher, dass du nicht nur Kunden
                    erreichst, sondern auch langfristig an der Spitze bleibst.
                  </p>
                  <p className="text-white-1100 font-normal xl:text-base md:text-sm text-xs leading-[140%] xl:mt-6 mt-4">
                    Eine nachhaltige SEO-Strategie steigert nicht nur deine
                    Sichtbarkeit, sondern stärkt auch deine Marke und deinen
                    Umsatz. Mit Benchmark Media Solution investierst du in
                    digitale Lösungen, die zukunftssicher sind und dir den
                    entscheidenden Wettbewerbsvorteil verschaffen.
                  </p>
                  <Link
                    href={"#"}
                    className="text-white-1100 xl:mt-6 lg:mt-4 mt-8 font-normal xl:text-base lg:text-sm text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:max-w-120.25 max-w-full w-full lg:order-1 order-2">
              <img
                src="/images/DeineSEO-img6.jpg"
                alt=""
                className="w-full lg:h-full h-75 object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative xl:min-h-261.25 lg:min-h-250 sm:min-h-238.75 md:pb-2.5 pb-0 lg:bg-[url('/images/spacemen-faq.jpg')] md:bg-[url('/images/spacemen-faq2.png')] bg-[url('/images/spacemen-faq2-mobile.png')] bg-cover bg-center">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="border-b border-solid border-white-1100/40 lg:pb-10 md:pb-6 pb-4">
            <div className="text-center relative">
              <h2 className="xl:text-5xl md:text-[32px] text-xl text-white-1100 font-bold leading-[140%]">
                Full Stack Online Marketing für Hamburg
              </h2>
              <p className="lg:text-base md:text-sm text-xs text-white-1100 font-normal xl:mt-10 md:mt-6 mt-4 lg:leading-[140%] md:leading-[124%] leading-[140%]">
                Nicht nur SEO, auch unsere weiteren digitalen
                Marketingstrategien können deine Umsätze nachhaltig steigern –
                entdecke unsere maßgeschneiderten Lösungen für Hamburg.
              </p>
            </div>
          </div>
          <div className="xl:pt-22 md:pt-16 pt-12">
            <div className="xl:max-w-166.75 lg:max-w-135 max-w-full w-full ml-auto">
              <HamburgFaq />
            </div>
          </div>
        </div>
      </section>
      <section className="md:bg-none bg-[url('/images/Agentur-bg.png')] bg-cover bg-center relative lg:py-50 md:py-41 py-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="lg:text-5xl md:text-[32px] text-xl text-white-1100 font-bold leading-[124%] md:max-w-full max-w-97.5 md:mx-0 mx-auto">
              <span className="text-orange-1100 md:inline block">
                SEO Agentur Hamburg:
              </span>
              Technische und inhaltliche Optimierung für SEO-Erfolg
            </h2>
            <ul className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-4 mt-10">
              <li className="md:w-auto w-full">
                <CtaButton
                  className="md:w-auto! w-full!"
                  href="/"
                  label="Jetzt Kennenlerngespräch buchen"
                  variant="transparent"
                />
              </li>
              <li className="md:w-auto w-full">
                <Link
                  href={"#"}
                  className="text-white-1100 md:w-auto w-full font-normal text-base leading-[140%] bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                >
                  SEO-Analyse anfordern
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-22 md:mt-16 mt-12">
            <div className='shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6 bg-[url("/images/galaxy-img5.png")] bg-cover bg-center'>
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Mit OnPage-SEO von deiner SEO Agentur in Hamburg zur perfekten
                Website-Struktur
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                OnPage-SEO ist der erste und wichtigste Schritt für eine
                erfolgreiche Suchmaschinenoptimierung. Als erfahrene SEO Agentur
                Hamburg optimieren wir Inhalte, Meta-Tags, interne Verlinkungen
                und die gesamte Struktur deiner Website, damit sie von
                Suchmaschinen wie Google besser erfasst wird. Mit einer starken
                OnPage-Basis legst du das Fundament für bessere Rankings und
                eine erhöhte Sichtbarkeit.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Unsere Maßnahmen zielen darauf ab, nicht nur Google zu
                überzeugen, sondern auch deine Zielgruppe in Hamburg und darüber
                hinaus. Wir stellen sicher, dass deine Inhalte relevant,
                benutzerfreundlich und technisch einwandfrei sind. Besonders in
                einer dynamischen Stadt wie Hamburg, wo die digitale Konkurrenz
                groß ist, sorgt OnPage-SEO dafür, dass du dich von Mitbewerbern
                abhebst.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Als deine SEO Agentur wissen wir, dass jede Website einzigartig
                ist. Deshalb entwickeln wir eine maßgeschneiderte Strategie, die
                deine Unternehmensziele unterstützt und langfristige Erfolge
                garantiert. OnPage-SEO ist der Schlüssel, um aus Besuchern
                zahlende Kunden zu machen – und wir helfen dir, dieses Potenzial
                voll auszuschöpfen.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className="bg-gradient shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6">
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Wie deine SEO Agentur technische SEO für bessere Rankings in
                Hamburg umsetzt
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Technisches SEO ist unverzichtbar, um sicherzustellen, dass
                deine Website in den Suchergebnissen von Google eine
                Spitzenposition erreicht. In Hamburg, wo die Konkurrenz um
                Sichtbarkeit hoch ist, optimieren wir als erfahrene SEO Agentur
                die technischen Aspekte deiner Website.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Unsere Experten analysieren Ladezeiten, URL-Struktur, mobile
                Optimierung und die Crawl-Freundlichkeit deiner Seite. Dabei
                beheben wir technische Fehler, die deine
                Suchmaschinenoptimierung behindern könnten, und sorgen dafür,
                dass Suchmaschinen deine Website problemlos erfassen. Eine
                saubere technische Basis ist essenziell, damit deine Inhalte und
                Strategien ihre volle Wirkung entfalten.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Mit Benchmark Media Solution als deiner SEO Agentur Hamburg bist
                du in besten Händen. Wir machen deine Website fit für die
                technischen Anforderungen von Google und schaffen eine solide
                Grundlage für langfristigen Erfolg in den Suchergebnissen.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className="md:block hidden bg-gradient  bg-cover bg-center shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6">
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Deine SEO Agentur in Hamburg liefert Inhalte die Google lieben
                wird
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Content ist das Herzstück jeder SEO-Strategie. Als deine SEO
                Agentur Hamburg erstellen wir Inhalte, die nicht nur auf
                Keywords wie “Suchmaschinenoptimierung” abgestimmt sind, sondern
                auch deine Zielgruppe begeistern. Unser Ansatz verbindet
                Kreativität mit Datenanalyse, um Texte zu liefern, die sowohl
                für Google als auch für deine Leser relevant sind.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Ob informative Blogbeiträge, überzeugende Produktbeschreibungen
                oder regionale Landingpages für Hamburg – hochwertiger Content
                steigert deine Sichtbarkeit und sorgt für mehr qualifizierten
                Traffic. Dabei achten wir darauf, dass deine Inhalte
                ansprechend, gut strukturiert und vollständig optimiert sind.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Content-Marketing stärkt nicht nur deine Position in den
                Suchmaschinen, sondern auch deine Markenbotschaft. Mit Benchmark
                Media Solution als deiner Suchmaschinenoptimierung Agentur
                machst du den Unterschied – in Hamburg und darüber hinaus.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className='md:block hidden shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6 bg-[url("/images/galaxy-img5.png")] bg-cover bg-center'>
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Hochwertige Backlinks von deiner SEO Agentur Hamburg für mehr
                Autorität
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                OffPage-SEO ist entscheidend, um die Autorität deiner Website zu
                erhöhen. Durch gezielten Linkaufbau und hochwertige Backlinks
                stärken wir als SEO Agentur Hamburg deine Online-Reputation.
                Google bewertet die Qualität und Anzahl der Links, die auf deine
                Website verweisen, als wichtigen Ranking-Faktor.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Unsere Strategien sind individuell auf dein Unternehmen in
                Hamburg zugeschnitten. Ob durch lokale Partnerschaften,
                Gastbeiträge oder Branchenverzeichnisse – wir sorgen dafür, dass
                dein Unternehmen online an Glaubwürdigkeit gewinnt. Eine starke
                Online-Reputation ist besonders in einer Stadt wie Hamburg
                unverzichtbar, wo viele Unternehmen um die Aufmerksamkeit der
                Kunden konkurrieren.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Mit Benchmark Media Solution als deiner Suchmaschinenoptimierung
                Agentur erreichst du nicht nur bessere Rankings, sondern baust
                langfristig Vertrauen bei Google und deinen Kunden auf.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className='md:hidden block bg-[url("/images/galaxy-img5.png")] bg-cover bg-center shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6'>
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Deine SEO Agentur in Hamburg liefert Inhalte die Google lieben
                wird
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Content ist das Herzstück jeder SEO-Strategie. Als deine SEO
                Agentur Hamburg erstellen wir Inhalte, die nicht nur auf
                Keywords wie “Suchmaschinenoptimierung” abgestimmt sind, sondern
                auch deine Zielgruppe begeistern. Unser Ansatz verbindet
                Kreativität mit Datenanalyse, um Texte zu liefern, die sowohl
                für Google als auch für deine Leser relevant sind.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Ob informative Blogbeiträge, überzeugende Produktbeschreibungen
                oder regionale Landingpages für Hamburg – hochwertiger Content
                steigert deine Sichtbarkeit und sorgt für mehr qualifizierten
                Traffic. Dabei achten wir darauf, dass deine Inhalte
                ansprechend, gut strukturiert und vollständig optimiert sind.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Content-Marketing stärkt nicht nur deine Position in den
                Suchmaschinen, sondern auch deine Markenbotschaft. Mit Benchmark
                Media Solution als deiner Suchmaschinenoptimierung Agentur
                machst du den Unterschied – in Hamburg und darüber hinaus.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className="md:hidden block bg-gradient shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6 ">
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Hochwertige Backlinks von deiner SEO Agentur Hamburg für mehr
                Autorität
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                OffPage-SEO ist entscheidend, um die Autorität deiner Website zu
                erhöhen. Durch gezielten Linkaufbau und hochwertige Backlinks
                stärken wir als SEO Agentur Hamburg deine Online-Reputation.
                Google bewertet die Qualität und Anzahl der Links, die auf deine
                Website verweisen, als wichtigen Ranking-Faktor.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Unsere Strategien sind individuell auf dein Unternehmen in
                Hamburg zugeschnitten. Ob durch lokale Partnerschaften,
                Gastbeiträge oder Branchenverzeichnisse – wir sorgen dafür, dass
                dein Unternehmen online an Glaubwürdigkeit gewinnt. Eine starke
                Online-Reputation ist besonders in einer Stadt wie Hamburg
                unverzichtbar, wo viele Unternehmen um die Aufmerksamkeit der
                Kunden konkurrieren.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Mit Benchmark Media Solution als deiner Suchmaschinenoptimierung
                Agentur erreichst du nicht nur bessere Rankings, sondern baust
                langfristig Vertrauen bei Google und deinen Kunden auf.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className='shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6 bg-[url("/images/galaxy-img5.png")] bg-cover bg-center'>
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Datengetriebene Ergebnisse dank SEO-Analyse und Reporting aus
                Hamburg
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Um langfristig erfolgreich zu sein, brauchst du eine
                kontinuierliche Überwachung deiner SEO-Strategie. Als SEO
                Agentur Hamburg bieten wir detaillierte Analysen und regelmäßige
                Berichte, die dir zeigen, wie sich deine Website entwickelt.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Von der Keyword-Performance bis zur Seitenladegeschwindigkeit –
                wir überwachen alle relevanten Kennzahlen und passen deine
                Strategie bei Bedarf an. Durch datenbasierte Entscheidungen
                bleibst du in der dynamischen Wettbewerbslandschaft von Hamburg
                immer einen Schritt voraus.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Unsere Berichte sind klar und verständlich, sodass du die
                Fortschritte deiner Suchmaschinenoptimierung nachvollziehen
                kannst. Mit Benchmark Media Solution hast du immer den Überblick
                und kannst sicher sein, dass deine SEO-Strategie effizient
                bleibt.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className="bg-gradient shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6">
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Wie deine SEO Agentur in Hamburg mit Local SEO deine Zielgruppe
                erreicht
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Mit Local SEO erreichst du genau die Kunden, die in Hamburg nach
                deinen Dienstleistungen oder Produkten suchen. Unsere SEO
                Agentur hilft dir dabei, lokale Suchanfragen zu dominieren und
                deine Sichtbarkeit in der Region zu steigern.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Durch optimierte Inhalte, gezielte lokale Keywords und eine
                starke Präsenz in Google My Business wird dein Unternehmen für
                deine Zielgruppe leicht auffindbar. Ob du ein regionales
                Ladengeschäft oder eine spezialisierte Dienstleistung anbietest
                – mit professioneller Suchmaschinenoptimierung wirst du genau
                dort sichtbar, wo dich deine Kunden suchen.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                In einer Stadt wie Hamburg, wo die Konkurrenz groß ist,
                verschafft dir eine erfahrene Suchmaschinenoptimierung Agentur
                den entscheidenden Vorteil. Wir sorgen dafür, dass deine Website
                nicht nur mehr Besucher, sondern auch mehr potenzielle Kunden
                aus deiner Region anzieht.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className="md:block hidden bg-gradient shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6">
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Deine SEO Agentur Hamburg macht deine Website mobilfreundlich
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Mobile SEO ist unverzichtbar, da immer mehr Nutzer in Hamburg
                und weltweit über Smartphones nach Dienstleistungen und
                Produkten suchen. Als erfahrene SEO Agentur optimieren wir deine
                Website für mobile Endgeräte, damit sie schnell lädt,
                benutzerfreundlich ist und die Anforderungen von Google erfüllt.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Eine mobilfreundliche Website verbessert nicht nur dein Ranking,
                sondern sorgt auch für eine bessere Nutzererfahrung. Mit
                Benchmark Media Solution stellst du sicher, dass deine Kunden in
                Hamburg und darüber hinaus immer die beste Darstellung deiner
                Inhalte erhalten.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className='md:block hidden shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6 bg-[url("/images/galaxy-img5.png")] bg-cover bg-center'>
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Mit SEO für Online-Shops steigert deine SEO Agentur in Hamburg
                deinen Umsatz
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Für E-Commerce-Unternehmen in Hamburg ist SEO entscheidend, um
                Produkte erfolgreich zu vermarkten. Wir optimieren deine
                Produkt- und Kategorieseiten, damit sie von Kunden gefunden
                werden und eine höhere Conversion-Rate erzielen.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Als deine SEO Agentur Hamburg kombinieren wir technisches
                Know-how mit gezielter Keyword-Optimierung, um deinen
                Online-Shop in den Suchergebnissen sichtbar zu machen. So
                steigerst du deine Umsätze und baust deine Marktposition weiter
                aus.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className='md:hidden block bg-[url("/images/galaxy-img5.png")] bg-cover bg-center shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6'>
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Deine SEO Agentur Hamburg macht deine Website mobilfreundlich
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Mobile SEO ist unverzichtbar, da immer mehr Nutzer in Hamburg
                und weltweit über Smartphones nach Dienstleistungen und
                Produkten suchen. Als erfahrene SEO Agentur optimieren wir deine
                Website für mobile Endgeräte, damit sie schnell lädt,
                benutzerfreundlich ist und die Anforderungen von Google erfüllt.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Eine mobilfreundliche Website verbessert nicht nur dein Ranking,
                sondern sorgt auch für eine bessere Nutzererfahrung. Mit
                Benchmark Media Solution stellst du sicher, dass deine Kunden in
                Hamburg und darüber hinaus immer die beste Darstellung deiner
                Inhalte erhalten.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
            <div className="md:hidden block shadow-4xl rounded-2xl xl:p-8 lg:p-6 md:p-8 px-4 py-6  bg-gradient">
              <h4 className="text-white-1100 lg:text-2xl md:text-xl text-base font-semibold md:leading-[140%] leading-[124%]">
                Mit SEO für Online-Shops steigert deine SEO Agentur in Hamburg
                deinen Umsatz
              </h4>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Für E-Commerce-Unternehmen in Hamburg ist SEO entscheidend, um
                Produkte erfolgreich zu vermarkten. Wir optimieren deine
                Produkt- und Kategorieseiten, damit sie von Kunden gefunden
                werden und eine höhere Conversion-Rate erzielen.
              </p>
              <p className="text-white-1100 md:text-sm text-xs font-normal md:leading-[124%] leading-[140%] lg:mt-3 mt-6">
                Als deine SEO Agentur Hamburg kombinieren wir technisches
                Know-how mit gezielter Keyword-Optimierung, um deinen
                Online-Shop in den Suchergebnissen sichtbar zu machen. So
                steigerst du deine Umsätze und baust deine Marktposition weiter
                aus.
              </p>
              <Link
                href={"#"}
                className="text-white-1100 mt-8 md:w-auto w-full font-normal text-base leading-[140%] border border-solid border-orange-1100 hover:bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:pb-50 md:pb-41 pb-22">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="text-center border-b border-solid border-white-1100/40 pb-10 relative">
            <h2 className="lg:text-5xl md:text-[32px] text-xl text-white-1100 font-bold lg:leading-[124%] md:leading-[140%] lg:max-w-full max-w-206.25 lg:mx-0 mx-auto">
              <span className="text-orange-1100 lg:inline block">
                SEO Agentur Hamburg:
              </span>
              SEO-Management, Erfolgskontrolle und langfristige Partnerschaft
            </h2>
            <ul className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-4 mt-10">
              <li className="md:w-auto w-full">
                <CtaButton
                  className="md:w-auto! w-full!"
                  href="/"
                  label="Jetzt Kennenlerngespräch buchen"
                  variant="transparent"
                />
              </li>
              <li className="md:w-auto w-full">
                <Link
                  href={"#"}
                  className="text-white-1100 md:w-auto w-full font-normal text-base leading-[140%] bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center"
                >
                  SEO-Analyse anfordern
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:pt-22 md:pt-16 pt-12 grid lg:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-16 gap-12">
            <Agencycards />
            <div className="">
              <div className="bg-white-1100 h-full xl:p-8 lg:p-6 md:p-8 px-6 py-8 rounded-2xl shadow-4xl">
                <h4 className="text-black-1100 xl:text-5xl lg:text-4xl md:text-[32px] text-xl font-bold md:leading-[140%] leading-[124%] md:tracking-normal -tracking-[0.4px]">
                  Benchmark Media SEO Paket
                </h4>
                <h5 className="text-black-1100 xl:text-2xl lg:text-base md:text-xl text-base font-semibold md:leading-[140%] leading-[124%] xl:mt-6 lg:mt-2 mt-6">
                  Für Unternehmen, die mehr Kunden erreichen, ihre Umsätze
                  steigern und als Marktführer online sichtbar werden wollen.
                </h5>
                <p className="text-black-1100 xl:text-base text-sm font-normal leading-[140%] mt-4 xl:mb-6 lg:mb-4 mb-6">
                  Individuelle Preisgestaltung – abgestimmt auf deine
                  Anforderungen.
                </p>
                <Link
                  href={"#"}
                  className="text-white-1100 font-normal text-base leading-[140%] bg-orange-1100 rounded-sm h-11.5 px-3 inline-flex items-center justify-center w-full"
                >
                  Jetzt Angebot anfordern
                </Link>
                <div className="mt-8">
                  <h6 className="text-black-1100 lg:text-base text-sm font-bold leading-[140%]">
                    Dein Schlüssel zu mehr Umsatz und Online-Erfolg:
                  </h6>
                  <ul className="mt-4">
                    <li className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center bg-orange-1100 rounded-md w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="10"
                          viewBox="0 0 11 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5611 0.172381C11.0183 0.482293 11.1376 1.10411 10.8277 1.56124L5.74316 9.06124C5.57711 9.30618 5.3111 9.46499 5.01671 9.49496C4.72232 9.52493 4.42977 9.42297 4.21777 9.21652L0.302337 5.40362C-0.0933341 5.01831 -0.101734 4.3852 0.283575 3.98953C0.668885 3.59386 1.30199 3.58546 1.69766 3.97077L4.75771 6.95068L9.17228 0.438955C9.48219 -0.0181812 10.104 -0.13753 10.5611 0.172381Z"
                            fill="#060606"
                          />
                        </svg>
                      </span>
                      <p className="text-black-1100 xl:text-base lg:text-sm md:text-base text-sm font-normal leading-[140%]">
                        Mehr Umsatz dank besserer Conversion Rates
                      </p>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center bg-orange-1100 rounded-md w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="10"
                          viewBox="0 0 11 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5611 0.172381C11.0183 0.482293 11.1376 1.10411 10.8277 1.56124L5.74316 9.06124C5.57711 9.30618 5.3111 9.46499 5.01671 9.49496C4.72232 9.52493 4.42977 9.42297 4.21777 9.21652L0.302337 5.40362C-0.0933341 5.01831 -0.101734 4.3852 0.283575 3.98953C0.668885 3.59386 1.30199 3.58546 1.69766 3.97077L4.75771 6.95068L9.17228 0.438955C9.48219 -0.0181812 10.104 -0.13753 10.5611 0.172381Z"
                            fill="#060606"
                          />
                        </svg>
                      </span>
                      <p className="text-black-1100 xl:text-base lg:text-sm md:text-base text-sm font-normal leading-[140%]">
                        Steigende Besucherzahlen und neue Kunden
                      </p>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center bg-orange-1100 rounded-md w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="10"
                          viewBox="0 0 11 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5611 0.172381C11.0183 0.482293 11.1376 1.10411 10.8277 1.56124L5.74316 9.06124C5.57711 9.30618 5.3111 9.46499 5.01671 9.49496C4.72232 9.52493 4.42977 9.42297 4.21777 9.21652L0.302337 5.40362C-0.0933341 5.01831 -0.101734 4.3852 0.283575 3.98953C0.668885 3.59386 1.30199 3.58546 1.69766 3.97077L4.75771 6.95068L9.17228 0.438955C9.48219 -0.0181812 10.104 -0.13753 10.5611 0.172381Z"
                            fill="#060606"
                          />
                        </svg>
                      </span>
                      <p className="text-black-1100 xl:text-base lg:text-sm md:text-base text-sm font-normal leading-[140%]">
                        Stärkere Markenwahrnehmung online
                      </p>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center bg-orange-1100 rounded-md w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="10"
                          viewBox="0 0 11 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5611 0.172381C11.0183 0.482293 11.1376 1.10411 10.8277 1.56124L5.74316 9.06124C5.57711 9.30618 5.3111 9.46499 5.01671 9.49496C4.72232 9.52493 4.42977 9.42297 4.21777 9.21652L0.302337 5.40362C-0.0933341 5.01831 -0.101734 4.3852 0.283575 3.98953C0.668885 3.59386 1.30199 3.58546 1.69766 3.97077L4.75771 6.95068L9.17228 0.438955C9.48219 -0.0181812 10.104 -0.13753 10.5611 0.172381Z"
                            fill="#060606"
                          />
                        </svg>
                      </span>
                      <p className="text-black-1100 xl:text-base lg:text-sm md:text-base text-sm font-normal leading-[140%]">
                        Effiziente Prozesse, die Zeit sparen
                      </p>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center bg-orange-1100 rounded-md w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="10"
                          viewBox="0 0 11 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5611 0.172381C11.0183 0.482293 11.1376 1.10411 10.8277 1.56124L5.74316 9.06124C5.57711 9.30618 5.3111 9.46499 5.01671 9.49496C4.72232 9.52493 4.42977 9.42297 4.21777 9.21652L0.302337 5.40362C-0.0933341 5.01831 -0.101734 4.3852 0.283575 3.98953C0.668885 3.59386 1.30199 3.58546 1.69766 3.97077L4.75771 6.95068L9.17228 0.438955C9.48219 -0.0181812 10.104 -0.13753 10.5611 0.172381Z"
                            fill="#060606"
                          />
                        </svg>
                      </span>
                      <p className="text-black-1100 xl:text-base lg:text-sm md:text-base text-sm font-normal leading-[140%]">
                        Ergebnisse, die schnell sichtbar werden
                      </p>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center bg-orange-1100 rounded-md w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="10"
                          viewBox="0 0 11 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5611 0.172381C11.0183 0.482293 11.1376 1.10411 10.8277 1.56124L5.74316 9.06124C5.57711 9.30618 5.3111 9.46499 5.01671 9.49496C4.72232 9.52493 4.42977 9.42297 4.21777 9.21652L0.302337 5.40362C-0.0933341 5.01831 -0.101734 4.3852 0.283575 3.98953C0.668885 3.59386 1.30199 3.58546 1.69766 3.97077L4.75771 6.95068L9.17228 0.438955C9.48219 -0.0181812 10.104 -0.13753 10.5611 0.172381Z"
                            fill="#060606"
                          />
                        </svg>
                      </span>
                      <p className="text-black-1100 xl:text-base lg:text-sm md:text-base text-sm font-normal leading-[140%]">
                        Über 15 Jahre Erfahrung im SEO-Bereich
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative sm:bg-[url('/images/call-action-bg.jpg')] bg-[url('/images/call-action-bg-small.jpg')] bg-cover bg-center lg:pt-0 md:pt-12 pt-10 lg:pb-0 md:pb-65.25 pb-77.5">
        <div className="max-w-308  md:px-10 px-4 xl:px-4 mx-auto w-full">
          <div className="lg:py-22 lg:block hidden">
            <h3 className="md:block hidden text-white-1100 font-semibold xl:text-5xl lg:text-4xl md:text-[40px] text-[28px] md:mb-12 mb-8 leading-[124%] uppercase xl:max-w-177.25 max-w-145 w-full">
              Deine SEO Agentur für Hamburg unterstützt dich bei der
              SEO-Optimierung deiner Website!
            </h3>
            <h3 className="md:hidden block text-white-1100 font-semibold xl:text-5xl lg:text-4xl md:text-[40px] text-[28px] md:mb-12 mb-8 leading-[124%] uppercase xl:max-w-177.25 max-w-145 w-full">
              Erhalte Antworten auf deine Webdesign-Fragen – wir beraten dich
              persönlich!
            </h3>
            <CtaButton href="/" label="Jetzt Kennenlerngespräch buchen" />
            <p className="text-white-1100 font-normal mt-3 text-xs leading-[140%]">
              Kostenlos & unverbindlich – entdecke dein SEO-Potenzial.
            </p>
          </div>
          <div className="lg:py-22 lg:hidden block md:text-left text-center">
            <h3 className="text-white-1100 font-semibold xl:text-5xl lg:text-4xl md:text-[40px] text-[28px] md:mb-12 mb-8 leading-[124%] uppercase max-w-152.5 w-full">
              Erhalte Antworten auf deine Fragen zur Videoproduktion – wir
              beraten dich persönlich!
            </h3>
            <CtaButton href="/" label="Fragen oder mehr erfahren?" />
            <p className="text-white-1100 font-normal mt-3 text-xs leading-[140%]">
              Nummer eintragen - wir rufen zurück!
            </p>
          </div>
        </div>
        <div className="flex flex-col absolute lg:top-0 top-auto lg:bottom-auto bottom-0 right-0">
          <img
            src="/images/concept-human.png"
            alt=""
            className="lg:block hidden xl:h-auto lg:h-131 h-94.5"
          />
          <img
            src="/images/concept-human-mobile.png"
            alt=""
            className="lg:hidden block md:h-auto h-[305px]"
          />
        </div>
      </section>
      <section className="relative md:pb-17 pb-0 lg:mt-50 lg:pt-0 md:pt-41 pt-22 md:min-h-289.75 xl:bg-[url(/images/RegionalFaq-bg.png)] xl:bg-no-repeat xl:bg-cover">
        <div className="max-w-311.5 md:px-10 px-4 xl:px-4 mx-auto relative z-1">
          <div className="flex items-start xl:gap-30 lg:gap-8 gap-8 md:gap-16 xl:flex-row flex-col">
            <div className="xl:max-w-72.5 w-full">
              <div className="xl:text-left text-center xl:border-b-0 border-b xl:pb-0 lg:pb-8 pb-8 md:pb-10 border-solid border-white-1100/40">
                <h2 className="xl:text-5xl md:text-[32px] text-xl leading-6 xl:pb-0 md:pb-10 pb-8 md:leading-11 text-white font-semibold  xl:leading-14.75">
                  FAQs
                </h2>
                <span className="bg-white-1100/40 h-px my-8 xl:block hidden"></span>
                <p className="text-base text-white font-normal leading-5.5 xl:pb-3">
                  Hier findest du Antworten auf häufig gestellte Fragen zum
                </p>
              </div>
            </div>
            <div>
              <RegionalFaq />
            </div>
          </div>
        </div>
        <div className="xl:block hidden">
          <motion.div
            className="absolute bottom-0 -left-20 pointer-events-none  hidden lg:block w-full"
            animate={{ x: [0, 30, 0], y: [30, 0, 30] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="images/aihuman.png"
              alt="ai human"
              className="relative z-1"
            />
          </motion.div>
        </div>
        <div className="xl:hidden block relative overflow-hidden">
          <img
            src="images/RegionalFaq-bg-mobile.png"
            alt=""
            className="w-full md:h-auto h-75 object-cover object-center"
          />
          <motion.div
            className="absolute bottom-0 lg:-left-20 md:-left-10 -left-2.5 pointer-events-none  lg:hidden block w-full"
            animate={{ x: [0, 30, 0], y: [30, 0, 30] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="images/aihuman.png"
              alt="ai human"
              className="relative z-1 lg:h-187.5 md:h-124.75 h-75"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default page;
