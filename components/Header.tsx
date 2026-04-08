"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CtaButton from "./Ctabutton";
import MeetingEmbed from "@/components/MeetingEmbed";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LEISTUNGEN_LINKS = [
  { label: "Suchmaschinenoptimierung", href: "/" },
  { label: "Google Ads", href: "/" },
  { label: "UI/UX Webdesign", href: "/" },
  { label: "Social Media", href: "/" },
  { label: "Videoproduktion", href: "/" },
  { label: "TV-Werbung", href: "/" },
  { label: "Conversion Optimierung", href: "/" },
  { label: "Public Relations", href: "/" },
];

const REGIONAL_LINKS = [
  { label: "Suchmaschinenoptimierung", href: "/" },
  { label: "Google Ads", href: "/" },
  { label: "UI/UX Webdesign", href: "/" },
  { label: "Social Media", href: "/" },
  { label: "Videoproduktion", href: "/" },
  { label: "TV-Werbung", href: "/" },
  { label: "Conversion Optimierung", href: "/" },
  { label: "Public Relations", href: "/" },
];

const LEISTUNGEN_LINKS_MBL = [
  { label: "Suchmaschinenoptimierung", href: "/" },
  { label: "Google Ads", href: "/" },
  { label: "UI/UX Webdesign", href: "/" },
  { label: "Social Media", href: "/" },
  { label: "Videoproduktion", href: "/" },
  { label: "TV-Werbung", href: "/" },
  { label: "Conversion Optimierung", href: "/" },
  { label: "Public Relations", href: "/" },
];

const HEADER_HEIGHT = 74;

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [regionalOpen, setRegionalOpen] = useState(true);
  const [leistungenOpen, setLeistungenOpen] = useState(true);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);
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
    <>
      <header
        className={`absolute  top-18.75 sm:top-18 lg:top-17.5 xl:top-12.5 left-0 w-full py-4 xl:py-6 z-60 transition-colors duration-300 ${
          drawerOpen
            ? "border-b border-[rgba(255,255,255,0.50)] bg-black-1100"
            : ""
        }`}
      >
        <div className="max-w-310 px-5 mx-auto w-full">
          <nav>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 xl:gap-23.75">
                <Link href="/">
                  <img src="images/brand.svg" alt="Benchmark Media Solution" />
                </Link>

                <ol className="hidden xl:flex items-center m-auto gap-8">
                  <li>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="text-base hover:text-orange-1100 ring-0 focus-visible:ring-0 font-normal cursor-pointer text-white-1100 px-0 bg-transparent shadow-none gap-1">
                          Leistungen
                          <span>
                            <img src="images/down-arw.svg" alt="" />
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-67.75 bg-black-1100 p-5 ring-0 border-0 text-base font-normal cursor-pointer text-white-1100 rounded-tl-none rounded-tr-none rounded-bl-2xl rounded-br-2xl"
                        align="start"
                      >
                        {LEISTUNGEN_LINKS.map(({ label, href }, i) => (
                          <DropdownMenuItem
                            key={label}
                            className={`p-0 ${
                              i < LEISTUNGEN_LINKS.length - 1 ? "mb-6" : ""
                            }`}
                          >
                            <Link
                              href={href}
                              className="hover:text-orange-1100"
                            >
                              {label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-normal text-white-1100 hover:text-orange-1100"
                    >
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-normal text-white-1100 hover:text-orange-1100"
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-normal text-white-1100 hover:text-orange-1100"
                    >
                      Branchen
                    </Link>
                  </li>
                </ol>
              </div>

              <div className="flex items-center justify-center gap-8">
                <div className="hidden xl:block" onClick={open5}>
                  <CtaButton
                    href="/"
                    label="Kostenloses Kennenlernen"
                    variant="transparent"
                  />
                </div>
                <div className="xl:hidden md:block hidden">
                  <div onClick={open5}>
                    <CtaButton
                      href="/"
                      label="Kostenloses Kennenlernen"
                      variant="transparent"
                    />
                  </div>
                </div>
                <button
                  aria-label={drawerOpen ? "Close menu" : "Open menu"}
                  onClick={() => setDrawerOpen((prev) => !prev)}
                  className="flex items-center justify-center size-11 cursor-pointer bg-transparent border-0 p-0 shrink-0"
                >
                  {drawerOpen ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1"
                        y1="1"
                        x2="21"
                        y2="21"
                        stroke="#FDFDFD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="21"
                        y1="1"
                        x2="1"
                        y2="21"
                        stroke="#FDFDFD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <img src="images/hamburger.svg" alt="Menu" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-40
          transition-opacity duration-300 ease-in-out
          ${
            drawerOpen
              ? "opacity-80 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        style={{ background: "var(--Site-Black-_900, #060606)" }}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        className={` bg-[url(/images/header-mblbg.png)] bg-no-repeat bg-cover xl:bg-none xl:bg-black-1100
    fixed right-0 z-55
    flex flex-col gap-6
    px-5 xl:pr-30 py-5 min-w-full
    md:min-w-70 xl:min-w-100.75
    overflow-y-auto overscroll-contain
    transition-transform duration-300 ease-in-out
      top-0 pt-[170px] h-screen
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div>
          <div className="md:hidden block mb-6 w-full">
            <div onClick={open5}>
              <CtaButton
                href="/"
                label="Kostenloses Kennenlernen"
                variant="transparent"
              />
            </div>
          </div>

          <div className="xl:hidden block ">
            <button
              onClick={() => setLeistungenOpen((prev) => !prev)}
              className="flex items-center gap-1 text-base font-normal text-white-1100 leading-5.5 cursor-pointer bg-transparent border-0 p-0 w-full text-left"
            >
              <span>Leistungen</span>
              <img
                src="images/down-arw.svg"
                alt=""
                className={`transition-transform duration-200 ${
                  leistungenOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {leistungenOpen && (
              <ul className="mt-4 flex flex-col gap-4 pl-8">
                {LEISTUNGEN_LINKS_MBL.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-base font-normal text-white-1100 leading-5.5 whitespace-nowrap hover:text-orange-1100 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <ol className="flex flex-col items-start m-auto py-6 gap-6">
              <li>
                <Link
                  href="/"
                  className="text-base font-normal text-white-1100 hover:text-orange-1100"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base font-normal text-white-1100 hover:text-orange-1100"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base font-normal text-white-1100 hover:text-orange-1100"
                >
                  Branchen
                </Link>
              </li>
            </ol>

            <button
              onClick={() => setRegionalOpen((prev) => !prev)}
              className="flex items-center gap-1 text-base font-normal text-white-1100 leading-5.5 cursor-pointer bg-transparent border-0 p-0 w-full text-left"
            >
              <span>Regional</span>
              <img
                src="images/down-arw.svg"
                alt=""
                className={`transition-transform duration-200 ${
                  regionalOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => setRegionalOpen((prev) => !prev)}
            className="xl:flex hidden items-center gap-1 text-base font-normal text-white-1100 leading-5.5 cursor-pointer bg-transparent border-0 p-0 w-full text-left"
          >
            <span>Regional</span>
            <img
              src="images/down-arw.svg"
              alt=""
              className={`transition-transform duration-200 ${
                regionalOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {regionalOpen && (
            <ul className="mt-4 flex flex-col gap-4 pl-8">
              {REGIONAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base font-normal text-white-1100 leading-5.5 whitespace-nowrap hover:text-orange-1100 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href="/"
          className="text-base font-normal text-white-1100 leading-5.5 hover:text-orange-1100 transition-colors"
        >
          Blog
        </Link>

        <Link
          href="/"
          className="text-base font-normal text-white-1100 leading-5.5 hover:text-orange-1100 transition-colors"
        >
          Branchen
        </Link>

        <Link
          href="/"
          className="text-base font-normal text-white-1100 leading-5.5 hover:text-orange-1100 transition-colors"
        >
          Partnerprogramm
        </Link>

        <div className="xl:hidden md:block hidden mt-2">
          <CtaButton
            href="/"
            label="Kostenloses Kennenlernen"
            variant="transparent"
          />
        </div>
        <Dialog
          open={isOpen5}
          as="div"
          className="relative z-100 focus:outline-none"
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
                    className="absolute md:top-18 md:right-18 top-4 right-4 p-0! cursor-pointer z-100 inline-flex items-center w-6 h-6"
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
    </>
  );
};

export default Header;
