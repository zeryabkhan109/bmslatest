"use client";

import { useState } from "react";
import CtaButton from "@/components/Ctabutton";

const imgProperty1Star = "../images/star-icon.svg";
const imgProperty1StarNo = "../images/star-blank.svg";
const imgStrongDropManualWork = "../images/Quote-icon.svg";
const imgGroupTarget = "../images/streamline_target.svg";
const imgGroupQuestion = "../images/television.svg";
const imgBitcoinLink = "../images/link-icon.svg";
const imgGroupBulb = "../images/light-bulb.svg";
const imgIconSearch = "../images/search-icon.svg";
const imgIconCalendar = "../images/calendar-icon.svg";
const imgIconVideo = "../images/video-icon.svg";
const imgIconChart = "../images/signal-icon.svg";
const imgAstronaut = "/images/spaceman.png";
import { motion } from "framer-motion";
import Image from "next/image";
type Answer = "Ja" | "Nein" | "Nicht sicher" | null;

interface Step {
  id: number;
  icon: string;
  question: string;
}

interface Review {
  name: string;
  initial: string;
  color: string;
  rating: number;
  text: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: imgGroupTarget,
    question:
      "Ich frage mich, ob ich mit meinen bisherigen Marketingmaßnahmen wirklich die richtigen Kunden erreiche.",
  },
  {
    id: 2,
    icon: imgGroupQuestion,
    question:
      "Ich bin unsicher, ob meine Inhalte die Erwartungen und Fragen meiner Zielgruppe wirklich treffen.",
  },
  {
    id: 3,
    icon: imgGroupQuestion,
    question:
      "Ich weiß nicht, wie gut meine Webseite bei Google gefunden wird, wenn potenzielle Kunden nach meinen Dienstleistungen suchen.",
  },
  {
    id: 4,
    icon: imgBitcoinLink,
    question:
      "Ich bin mir nicht sicher, ob meine Webseite gezielt in meiner Region sichtbar ist und potenzielle Kunden anspricht.",
  },
  {
    id: 5,
    icon: imgGroupBulb,
    question:
      "Ich habe das Gefühl, dass meine Webseite oft übersehen wird, weil sie nicht in den Top-Ergebnissen bei Google erscheint.",
  },
  {
    id: 6,
    icon: imgIconSearch,
    question:
      "Ich habe das Gefühl, dass meine Webseite nicht genug qualifizierte Leads generiert.",
  },
];

const reviews: Review[] = [
  {
    name: "Tim Heere",
    initial: "T",
    color: "#4285F4",
    rating: 5,
    text: '"Tolle SEO Agentur in Hamburg. Ich hatte wirklich große Bedenken vor einer neuen Agentur, weil ich fest der Überzeugung war, dass ich online keine Kunden gewinnen kann, sondern in meiner Branche das Ganze nur über Empfehlungen funktioniert. Ich wurde mit so viel Wissen und Sympathie überzeugt und freue mich darüber, dass wir so gute Ergebnisse erzielen. Das Investment hat sich mehr als gelohnt. Großes Lob - sehr gute SEO Firma. Würde ich ohne Wenn und Aber jedem empfehlen, diesen Schritt zu gehen."',
  },
  {
    name: "Haruka Kanata",
    initial: "H",
    color: "#34A853",
    rating: 4,
    text: '"Ich bin wirklich sehr zufrieden. Hatte eine hohe Erwartungshaltung, die sogar noch übertroffen wurde. In der Zeit der Zusammenarbeit habe ich meinen gesamten Onlineauftritt überarbeitet und optimiert."',
  },
  {
    name: "Leona Busse",
    initial: "L",
    color: "#FBBC04",
    rating: 5,
    text: '"„Ich habe die Zusammenarbeit vor 1,5 Jahren gestartet. Erst gab es eine kostenlose Analyse, danach ein neues Logo und eine neue Website. Das Ergebnis ist ein Unterschied wie Tag und Nacht.“"',
  },
  {
    name: "Kaja Schal",
    initial: "K",
    color: "#4285F4",
    rating: 5,
    text: '"„Danke, dass ihr mir geholfen habt, über SEO endlich mehr Sichtbarkeit zu bekommen. Ich bekomme wesentlich mehr organischen Traffic.“"',
  },
  {
    name: "Erika Weinert",
    initial: "E",
    color: "#EA4335",
    rating: 5,
    text: '"„Absolute Empfehlung! Ich war anfangs skeptisch, aber jetzt sehr zufrieden mit den Ergebnissen und dankbar für den Anruf.“"',
  },
  {
    name: "Rubin Schuett",
    initial: "R",
    color: "#34A853",
    rating: 3,
    text: '"„Wirklich eine gute Erfahrung. Ich habe mich für die Erarbeitung einer Social-Media-Kampagne entschieden und bin mit dem Ergebnis mehr als zufrieden.“"',
  },
  {
    name: "Christian Eismann",
    initial: "C",
    color: "#FBBC04",
    rating: 4,
    text: '"„Konstruktiv und inspirierende Online-Akquise-Kampagne. Absoluter ‚Kracher‘ für den Preis. (Ich hätte im Nachhinein auch das Doppelte für die Leistung bezahlt).“"',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="relative w-6 h-6 shrink-0">
          <img
            src={i <= rating ? imgProperty1Star : imgProperty1StarNo}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="relative">
        <img src={imgStrongDropManualWork} alt="" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10.5 h-10.5 rounded-full flex items-center justify-center"
            style={{ backgroundColor: review.color }}
          >
            <span className="font-inter text-white-1100 text-xl leading-[140%] font-normal">
              {review.initial}
            </span>
          </div>
          <div className="flex flex-col gap-0.5 flex-1 w-full">
            <p className="font-sora font-normal text-white-1100 text-xs leading-[140%]">
              {review.name}
            </p>
            <p className="font-sora font-light text-white-1100 text-[10px] leading-[140%]">
              vor einem Jahr
            </p>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>

      <div className="relative h-px w-full bg-white-1100/40"></div>

      <p className="font-sora font-normal text-white text-base leading-[140%]">
        {review.text}
      </p>
    </div>
  );
}

function AnswerButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer flex flex-col items-center justify-center w-full h-8.25 rounded transition-all duration-200 font-sora font-normal sm:text-xs text-[11px] text-center text-white-1100 leading-[140%]
        ${
          selected
            ? "bg-yellow14 border border-yellow14"
            : "bg-orange-1100 border border-solid border-orange-1100 hover:bg-yellow14 hover:border-yellow14 active:bg-orange-1200"
        }`}
    >
      {label}
    </button>
  );
}

export default function ChecklistSteps() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0-indexed
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [finished, setFinished] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const totalSteps = steps.length;
  const step = steps[currentStep];
  const review = reviews[(currentStep + 1) % reviews.length];

  function handleAnswer(answer: Answer) {
    setAnswers((prev) => ({ ...prev, [currentStep]: answer }));
  }

  function handleNext() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setFinished(true);
    }
  }
  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    } else {
      setStarted(false);
      setCurrentStep(0);
    }
  }
  if (!started) {
    return (
      <div className="flex lg:flex-row flex-col 2xl:gap-16 xl:gap-12 lg:gap-6 gap-0 justify-center w-full max-w-300 mx-auto">
        <div className="flex-1 w-full relative flex items-center justify-center sm:w-120.25 lg:mx-0 mx-auto rounded-2xl overflow-hidden">
          <div className="rounded-2xl pt-px px-0.5 pb-0.5 bg-linear-to-r from-yellow-1200 from-0% via-orange-1100 via-54% to-yellow-1200 to-100%">
            <div className="bg-[url(/images/galaxy-img.png)] bg-no-repeat bg-cover rounded-2xl 2xl:px-8 xl:px-6 lg:px-3.5 sm:px-8 px-5.75 md:pt-7.5 pt-5.5 md:pb-16.75 pb-8">
              <div className="flex flex-col items-start relative z-50">
                <div className="flex flex-col gap-6 items-start sm:w-100.75 relative z-50">
                  <h2 className="text-white-1100 md:text-[32px] font-bold text-lg leading-[124%] md:leading-[140%]">
                    Ist dein Online Marketing auf dem Erfolgskurs?
                  </h2>
                  <button
                    onClick={() => setStarted(true)}
                    className="bg-orange-1100 hover:bg-yellow14  text-white text-sm leading-6 font-normal rounded px-3 md:px-4 h-10.25 cursor-pointer inline-flex items-center justify-center transition-all"
                  >
                    Starten Sie den Test
                  </button>
                </div>
                <div className="flex items-center sm:h-auto justify-end w-full sm:-mt-25 -mt-14.5 mb-4.5  sm:pr-9">
                  <motion.div
                    animate={{ x: [-10, 10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      alt="astronaut"
                      className="max-w-35.75 sm:max-w-47.75 object-contain "
                      src={imgAstronaut}
                      width={191}
                      height={317}
                    />
                    <span className="h-52.75 sm:h-68.75 w-5.25 sm:w-7 -z-20 bg-site-white blur-[25px] absolute rotate-25 right-16.75 -top-3 rounded-[100%]" />
                  </motion.div>
                </div>

                <p className="text-white-1100 text-[10px] font-light leading-[1.4] text-right w-full">
                  Finde heraus, ob deine Website die gewünschten Kunden erreicht
                  und optimal performt. Mit unserer Checkliste erhältst du
                  wertvolle Einblicke in die Effektivität deines Online
                  Marketings –{" "}
                  <strong className="font-bold">
                    in wenigen Minuten und ohne Aufwand
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Review */}
        <div className="lg:flex hidden flex-col gap-8 py-8 xl:w-163.75 w-125">
          <ReviewCard review={reviews[0]} />
        </div>
      </div>
    );
  }
  if (finished) {
    return (
      <div className="">
        <div className="max-w-300 mx-auto">
          <div className="rounded-2xl pt-px px-0.5 pb-0.5 bg-linear-to-r from-yellow-1200 from-0% via-orange-1100 via-54% to-yellow-1200 to-100%">
            <div className="bg-black-1100 rounded-2xl lg:p-8 sm:p-6 p-4">
              <div className="w-full">
                <h2 className="font-sora font-bold lg:text-5xl md:text-4xl sm:text-3xl text-xl leading-[140%] text-white-1100 uppercase">
                  IM KENNENLERNGESPRÄCH DEIN VOLLES POTENZIAL ANALYSIEREN
                </h2>
                <p className="font-sora font-normal sm:text-base text-sm sm:mt-6 mt-4 leading-[140%] text-white-1100 max-w-171.75 w-full">
                  Du hast es geschafft! Die Checkliste zeigt: Es gibt Potenzial,
                  das du noch nutzen kannst, um deine Online-Sichtbarkeit zu
                  steigern und mehr qualifizierte Kunden zu gewinnen.
                </p>
              </div>

              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-4 gap-5 sm:mt-8 mt-4">
                {[
                  {
                    icon: imgIconCalendar,
                    step: "Schritt 1",
                    text: "Wähle deinen Wunschetermin im Kalender aus und gib deine Kontaktdaten an.",
                  },
                  {
                    icon: imgIconVideo,
                    step: "Schritt 2",
                    text: "Du erhältst im Anschluss eine E-Mail mit deinem Meeting-List",
                  },
                  {
                    icon: imgIconChart,
                    step: "Schritt 3",
                    text: "Im Kennenlerngespräch analysieren wir gemeinsam das Potenzial deiner Online-Präsenz",
                  },
                ].map((card) => (
                  <div
                    key={card.step}
                    className="bg-black-1200 lg:p-6 p-4 rounded-2xl w-full shadow-4xl"
                  >
                    <div className="relative flex items-center justify-center w-14 h-14">
                      <img
                        src={card.icon}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-sora font-normal mt-4 text-white text-xs leading-[140%]">
                      {card.step}
                    </p>
                    <p className="font-sora font-normal mt-4 text-white lg:text-base text-sm leading-[140%]">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 items-center mt-8">
                <CtaButton href="/" label="Jetzt Kennenlerngespräch buchen!" />
                <p className="font-normal text-white-1100 text-sm leading-[140%]">
                  Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
                </p>
              </div>

              <div className="w-full sm:mt-18 mt-10">
                <div className="w-full text-right">
                  <p className="font-bold md:text-base text-sm leading-[140%] text-white/50">
                    Oder möchtest du eine Kurzanalyse deiner Webseite per E-Mail
                    erhalten?
                  </p>
                  <p className="font-normal text-xs mt-3 leading-[140%] text-white/50">
                    Kein Problem – gib einfach deine URL an und wir schicken dir
                    die wichtigsten Punkte.
                  </p>
                </div>
                <div className="flex sm:flex-row flex-col gap-2 justify-end items-center sm:mt-10 mt-6">
                  <input
                    type="email"
                    placeholder="E-Mail"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-black-1100 border border-grey-1100/20 rounded-lg h-12.25 px-6  text-white/50 text-xs font-normal sm:w-50 w-full focus:outline-none focus:border-grey-1100"
                  />
                  <div className="overflow-hidden relative sm:w-114 w-full">
                    <input
                      type="url"
                      placeholder="Deine URL"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      className="bg-black-1100 border border-grey-1100/20 rounded-lg h-12.25 px-6  text-white/50 text-xs font-normal focus:outline-none w-full focus:border-grey-1100"
                    />
                    <button className="absolute top-0 right-0 bg-orange-1100 w-26 h-12.25 cursor-pointer text-white-1100 text-xs font-normal rounded-br-lg rounded-tr-lg hover:brightness-110 transition-all whitespace-nowrap">
                      Schicken
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex lg:flex-row flex-col 2xl:gap-16 xl:gap-12 lg:gap-6 gap-0 justify-center w-full max-w-300 mx-auto ">
      <div className="flex-1 lg:max-w-full max-w-120.25 lg:mx-0 mx-auto w-full rounded-2xl pt-px px-0.5 pb-0.5 bg-linear-to-r from-yellow-1200 from-0% via-orange-1100 via-54% to-yellow-1200 to-100%">
        <div className="bg-[url(/images/galaxy-img.png)] bg-no-repeat bg-cover rounded-2xl px-6 md:pt-29.75 pt-7 pb-8">
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="relative sm:mb-18 mb-10 w-25 h-25 flex items-center justify-center overflow-hidden">
              <img src={step.icon} alt="" />
            </div>
            <p className="font-sora font-bold text-white sm:text-base text-xs leading-[140%] text-center min-h-17">
              {step.question}
            </p>
            <div className="sm:my-14 my-9 relative h-px w-full bg-white-1100/40"></div>
            <div className="grid grid-cols-3 sm:gap-8 gap-3 mb-11 w-full items-center">
              {(["Ja", "Nein", "Nicht sicher"] as Answer[]).map((option) => (
                <AnswerButton
                  key={option}
                  label={option!}
                  selected={answers[currentStep] === option}
                  onClick={() => handleAnswer(option)}
                />
              ))}
            </div>
            <div className="flex items-start justify-between w-full font-sora font-normal text-white sm:text-base text-sm leading-[140%]">
              <button
                onClick={handleBack}
                className="underline decoration-solid [text-decoration-skip-ink:none] hover:text-orange-1100 transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentStep]}
                className={`underline decoration-solid [text-decoration-skip-ink:none] transition-colors ${
                  answers[currentStep]
                    ? "hover:text-orange-1100"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                {currentStep === totalSteps - 1 ? "Fertig" : "Weiter"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex hidden flex-col gap-8  py-8 xl:w-163.75 w-125">
        <ReviewCard review={review} />
      </div>
    </div>
  );
}
