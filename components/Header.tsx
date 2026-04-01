"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CtaButton from "./Ctabutton";
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

  return (
    <>
      <header
        className={`absolute top-18.75 sm:top-18 lg:top-12.5 xl:top-12.5 left-0 w-full py-4 xl:py-6 z-60 transition-colors duration-300 ${
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
                <div className="hidden xl:block">
                  <CtaButton
                    href="/"
                    label="Kostenloses Kennenlernen"
                    variant="transparent"
                  />
                </div>
                <div className="xl:hidden md:block hidden">
                  <CtaButton
                    href="/"
                    label="Kostenloses Kennenlernen"
                    variant="transparent"
                  />
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
        className={`bg-[url(/images/header-mblbg.png)] bg-no-repeat bg-cover xl:bg-none xl:bg-black-1100
    fixed right-0 z-55
    flex flex-col gap-6
    px-5 xl:pr-30 py-5 pt-10 min-w-full
    md:min-w-70 xl:min-w-100.75
    overflow-y-auto overscroll-contain
    transition-transform duration-300 ease-in-out
    top-37.5 h-[calc(100vh-150px)]
       lg:top-32.75 lg:h-[calc(100vh-131px)]
    xl:top-36.75 xl:h-[calc(100vh-147px)]
    ${drawerOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div>
          <div className="md:hidden block mb-6 w-full">
            <CtaButton
              href="/"
              label="Kostenloses Kennenlernen"
              variant="transparent"
            />
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
      </div>
    </>
  );
};

export default Header;
