import Link from "next/link";
import CtaButton from "./Ctabutton";

const Footer = () => {
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
                <CtaButton />
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
                  <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                    Ballindamm 15, 20095 Hamburg
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/clock.svg" alt="" />
                  </span>
                  <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                    Mo-Fr 09:00–20:00 | Sa 09:00–16:00
                  </p>
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
                  <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                    Ballindamm 15, 20095 Hamburg
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <img src="images/clock.svg" alt="" />
                  </span>
                  <p className="text-base font-normal leading-5 -tracking-[0.16px] text-white-1100">
                    Mo-Fr 09:00–20:00 | Sa 09:00–16:00
                  </p>
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
              <div>
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
      </div>
    </footer>
  );
};

export default Footer;
