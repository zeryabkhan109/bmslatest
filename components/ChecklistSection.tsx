import { motion } from "framer-motion";
import Image from "next/image";
const imgStar = "../images/star-icon.svg";
const imgAstronaut = "/images/spaceman.png";
const imgQuote = "/images/Quote-icon.svg";
const imgDivider = "images/divider.png";

interface StarIconProps {
  className?: string;
}

function StarIcon({ className = "w-6 h-6 shrink-0" }: StarIconProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
        <img
          alt="star"
          className="block w-full h-full object-contain"
          src={imgStar}
        />
      </div>
    </div>
  );
}

export default function ChecklistSection() {
  return (
    <section className="flex gap-16 w-full xl:justify-start justify-center">
      <div className="relative flex items-center justify-center md:w-120.25 rounded-2xl overflow-hidden">
        <div className="rounded-2xl pt-px px-0.5 pb-0.5 bg-linear-to-r from-yellow-1200 from-0% via-orange-1100 via-54% to-yellow-1200 to-100%">
          <div className="bg-[url(/images/galaxy-img.png)] bg-no-repeat bg-cover rounded-2xl xl:px-8 p-5.75 md:p-8 xl:pt-7.5 pb-8 md:pb-16.75">
            <div className="flex flex-col items-start relative z-50">
              <div className="flex flex-col gap-6 items-start sm:w-100.75 relative z-50">
                <h2 className="text-white-1100 md:text-[32px] font-bold text-lg leading-5.5 md:leading-[140%]">
                  Ist dein Online Marketing auf dem Erfolgskurs?
                </h2>
                <button className="bg-orange-1100 hover:bg-yellow14  text-white text-sm leading-6 font-normal rounded px-3 md:px-4 h-10.25 cursor-pointer inline-flex items-center justify-center transition-all">
                  Starten Sie den Test
                </button>
              </div>
              <div className="flex items-center sm:h-auto h-61 justify-end w-full -mt-25 mb-4.5  sm:pr-9">
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
                wertvolle Einblicke in die Effektivität deines Online Marketings
                –{" "}
                <strong className="font-bold">
                  in wenigen Minuten und ohne Aufwand
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full xl:block hidden">
        <div className="relative mb-8">
          <img alt="quote" src={imgQuote} />
        </div>

        <div className="flex flex-col gap-6 items-start w-full">
          <div className="">
            <div className="flex gap-3 items-center mb-3">
              <div className="bg-blue12 flex items-center justify-center rounded-full w-10.5 h-10.5">
                <span className="text-white-1100 text-xl font-normal leading-[140%]">
                  T
                </span>
              </div>
              <div className="flex-1 w-full">
                <span className="text-white-1100 text-xs font-normal leading-[140%]">
                  Tim Heere
                </span>
                <span className="text-white-1100 text-[10px] font-light leading-[140%] block mt-0.5">
                  vor einem Jahr
                </span>
              </div>
            </div>

            <div className="flex gap-1.5 items-start">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>

          <div className="relative w-full h-px shrink-0">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" src={imgDivider} className="block w-full h-full" />
            </div>
          </div>

          <p className="text-white-1100 text-base font-normal leading-[140%] block  w-full">
            „Tolle SEO Agentur in Hamburg. Ich hatte wirklich große Bedenken vor
            einer neuen Agentur, weil ich fest der Überzeugung war, dass ich
            online keine Kunden gewinnen kann, sondern in meiner Branche das
            Ganze nur über Empfehlungen funktioniert. Ich wurde mit so viel
            Wissen und Sympathie überzeugt und freue mich darüber, dass wir so
            gute Ergebnisse erzielen. Das Investment hat sich mehr als gelohnt.
            Großes Lob - sehr gute SEO Firma. Würde ich ohne Wenn und Aber jedem
            empfehlen, diesen Schritt zu gehen."
          </p>
        </div>
      </div>
    </section>
  );
}
