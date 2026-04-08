"use client";
import Link from "next/link";
import CtaButton from "./Ctabutton";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import MeetingEmbed from "@/components/MeetingEmbed";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  {
    /*******/
  }

  const [form, setForm] = useState({
    service: "Ein individuelles Angebot",
    name: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    questions: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  {
    /********/
  }

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  let [isOpen2, setIsOpen2] = useState(false);

  function open2() {
    setIsOpen(false);
    setIsOpen2(true);
  }
  function close2() {
    setIsOpen2(false);
  }
  {
    /********/
  }

  let [isOpen3, setIsOpen3] = useState(false);

  function open3() {
    setIsOpen3(true);
  }
  function close3() {
    setIsOpen3(false);
  }
  let [isOpen4, setIsOpen4] = useState(false);

  function open4() {
    setIsOpen3(false);
    setIsOpen4(true);
  }
  function close4() {
    setIsOpen4(false);
  }

  {
    /********/
  }
  const [urlInput, setUrlInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  let [isOpen5, setIsOpen5] = useState(false);

  function open5() {
    setIsOpen5(true);
  }
  function close5() {
    setIsOpen5(false);
  }

  {
    /********/
  }

  let [isOpen6, setIsOpen6] = useState(false);

  function open6() {
    setIsOpen6(true);
  }
  function close6() {
    setIsOpen6(false);
  }
  let [isOpen7, setIsOpen7] = useState(false);

  function open7() {
    setIsOpen6(false);
    setIsOpen7(true);
  }
  function close7() {
    setIsOpen7(false);
  }

  {
    /********/
  }
  let [isOpen8, setIsOpen8] = useState(false);

  function open8() {
    setIsOpen8(true);
  }
  function close8() {
    setIsOpen8(false);
  }
  return (
    <footer className="md:pt-16 pt-12 border-t border-solid border-grey-1100">
      <div className="max-w-333 mx-auto xl:px-4 w-full md:px-10 px-4">
        <div className="md:max-w-300  sm:max-w-[630px] max-w-300   mx-auto w-full">
          <div className="xl:flex items-start xl:flex-row md:grid md:grid-cols-2 flex-col justify-between gap-12 xl:gap-10 mb-13.25">
            <div className="xl:col-span-1 md:col-span-2 xl:text-left text-center">
              <Link href="/" className="inline-block">
                <img src="images/footer-logo.svg" alt="" />
              </Link>
              <p className="xl:text-xs md:text-base md:leading-[22px] text-sm leading-[17px] text-white-1100 my-6 font-normal xl:leading-4">
                Sicher dir jetzt ein kostenloses Beratungsgespräch.
              </p>
              <div className="space-y-3 text-center">
                <div className="inline-block" onClick={open5}>
                  <CtaButton />
                </div>
                <p className="text-xs text-white-1100 font-normal leading-4">
                  Kostenlos & unverbindlich – nur für kurze Zeit verfügbar.
                </p>
              </div>
            </div>
            <div className="md:pt-0 pb-0 py-6 md:hidden block">
              <ul className="space-y-3 md:mb-5">
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/pin.svg" alt="" />
                  </span>
                  <Link href="/">
                    <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                      Ballindamm 15, 20095 Hamburg
                    </p>
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/clock.svg" alt="" />
                  </span>
                  <Link href="/">
                    <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                      Mo-Fr 09:00–20:00 | Sa 09:00–16:00
                    </p>
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/mail.svg" alt="" />
                  </span>
                  <Link
                    href="mailto:Info@benchmark-media.de"
                    className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100"
                  >
                    Info@benchmark-media.de
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/website.svg" alt="" />
                  </span>
                  <Link
                    href="https://benchmark-media.de/"
                    className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100"
                  >
                    Website
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:pt-0 py-6 md:block hidden">
              <ul className="space-y-3 mb-5">
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/pin.svg" alt="" />
                  </span>
                  <Link href="/">
                    <p className="text-base hover:text-orange-1100 font-normal leading-5 -tracking-[0.16px] text-white-1100">
                      Ballindamm 15, 20095 Hamburg
                    </p>
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/clock.svg" alt="" />
                  </span>
                  <Link href="/">
                    <p className="text-base hover:text-orange-1100 font-normal leading-5 -tracking-[0.16px] text-white-1100">
                      Mo-Fr 09:00–20:00 | Sa 09:00–16:00
                    </p>
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/mail.svg" alt="" />
                  </span>
                  <Link
                    href="mailto:Info@benchmark-media.de"
                    className="text-base font-normal hover:text-orange-1100 leading-5 -tracking-[0.16px] text-white-1100"
                  >
                    Info@benchmark-media.de
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/website.svg" alt="" />
                  </span>
                  <Link
                    href="https://benchmark-media.de/"
                    className="text-base font-normal leading-5 hover:text-orange-1100 -tracking-[0.16px] text-white-1100"
                  >
                    Website
                  </Link>
                </li>
              </ul>
              <div>
                <ul className="gap-5.75 flex items-center mb-5">
                  <li>
                    <Link
                      href="/"
                      className="text-base font-normal leading-5.5 text-white-1100 hover:text-orange-1100"
                    >
                      Datenschutz
                    </Link>
                  </li>
                  <li className="text-base font-normal leading-5.5 text-white-1100">
                    |
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-normal leading-5.5 text-white-1100 hover:text-orange-1100"
                    >
                      AGB
                    </Link>
                  </li>
                  <li className="text-base font-normal leading-5.5 text-white-1100 ">
                    |
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-normal leading-5.5 text-white-1100 hover:text-orange-1100"
                    >
                      Impressum
                    </Link>
                  </li>
                </ul>
                <p className="text-base font-normal leading-5.5 text-white-1100">
                  Alle Rechte vorbehalten 2026
                </p>
              </div>
            </div>
            <div className="md:block md:py-0 py-6 flex items-center justify-between">
              <Link href="/" className="md:mb-10 inline-flex">
                <img
                  src="images/rating.svg"
                  alt=""
                  className="md:h-auto h-12"
                />
              </Link>
              <Link href="/">
                <img
                  src="images/google-rating.svg"
                  alt=""
                  className="md:h-auto h-10.5"
                />
              </Link>
            </div>
            <div className="md:hidden block">
              <ul className="gap-5.75 flex items-center mb-5">
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal leading-5.5 text-white-1100"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li className="text-base font-normal leading-5.5 text-white-1100">
                  |
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal leading-5.5 text-white-1100"
                  >
                    AGB
                  </Link>
                </li>
                <li className="text-base font-normal leading-5.5 text-white-1100">
                  |
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal leading-5.5 text-white-1100"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
              <p className="text-base font-normal leading-5.5 text-white-1100">
                Alle Rechte vorbehalten 2026
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img src="images/benchmark.png" alt="" className="w-full" />
        </div>
        <Dialog
          open={isOpen5}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close5}
        >
          <div className="fixed inset-0 z-10 bg-black/80 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-360 relative md:pt-30 md:pb-16.75 py-22 md:px-10 px-4 bg-[url(/images/Modal-bg2.jpg)] bg-no-repeat bg-cover bg-center shadow-4xl rounded-2xl mx-auto backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
              >
                <div className="w-full max-w-249.25 mx-auto">
                  <Button
                    className="absolute md:top-18 md:right-18 top-4 right-4 cursor-pointer z-100 inline-flex items-center w-6 h-6"
                    onClick={close5}
                  >
                    <img src="/images/CloseButton.svg" alt="" />
                  </Button>
                  <div className="text-center lg:pb-12 pb-10 lg:border-b-0 border-b border-solid border-white-1100">
                    <h4 className="text-white-1100 md:text-2xl text-base md:leading-[140%] leading-[124%] font-semibold">
                      Nur für kurze Zeit: Dein kostenloses Kennenlerngespräch
                    </h4>
                    <p className="text-white-1100 text-base mt-5 leading-[140%] font-normal">
                      Nutze diese Chance für ein kostenloses, unverbindliches
                      Kennenlerngespräch. Erhalte konkrete Antworten und erste
                      Impulse für deine Strategie – sichere dir jetzt deinen
                      Termin, solange noch Verfügbarkeit besteht.“
                    </p>
                  </div>
                  <div className="lg:pt-0 pt-10">
                    <div className="flex md:max-w-135 max-w-full xl:max-w-249.25 xl:flex-row flex-col w-full mx-auto bg-white-1100 rounded-2xl">
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
                            Im Kennenlerngespräch analysieren wir gemeinsam
                            deine Online-Präsenz und besprechen, wie du deine
                            Reichweite, Sichtbarkeit und den Erfolg steigern
                            kannst.
                          </p>
                          <p className="xl:text-xs md:text-[8px] md:leading-2.25 text-sm leading-4.5 font-normal xl:leading-3.5 -tracking-[0.12px] pb-4">
                            <span className="text-orange-1100">
                              Wähle einfach deinen Wunschtermin im Kalender aus
                            </span>{" "}
                            und gib deine Kontaktdaten ein. Du erhältst im
                            Anschluss eine E-Mail mit deinem persönlichen
                            Meeting-Link.
                          </p>
                          <p className="xl:text-xs md:text-[8px] md:leading-2.25 text-sm leading-4.5 font-normal xl:leading-3.5 -tracking-[0.12px]">
                            Wir freuen uns auf unser Treffen!
                          </p>
                        </div>
                      </div>
                      <div className="md:w-[64%] w-full xl:mx-0 md:mx-auto mx-0 h-full">
                        <MeetingEmbed />
                      </div>
                    </div>
                    <div className="w-full sm:mt-12 mt-10">
                      <div className="w-full text-right">
                        <p className="font-bold md:text-base text-sm leading-[140%] text-white/50">
                          Oder möchtest du eine Kurzanalyse deiner Webseite per
                          E-Mail erhalten?
                        </p>
                        <p className="font-normal text-xs mt-3 leading-[140%] text-white/50">
                          Kein Problem – gib einfach deine URL an und wir
                          schicken dir die wichtigsten Punkte.
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
                        <div className="overflow-hidden flex-1 relative sm:w-114 w-full">
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
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;
