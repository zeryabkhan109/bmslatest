"use client";
import Image from 'next/image'
import CtaButton from "@/components/Ctabutton";
import { ServicesOfferedCard } from "@/components/ServicesOfferedCard";
import { ReviewCardGroup } from "@/components/ReviewCardGroup";
import Link from 'next/link';


const page = () => {
      return (
            <>
                  <section className='bg-[url("/images/seo-agentur-hero-bg.png")] bg-cover bg-bottom relative pt-66 pb-36'>
                        <div className='max-w-310 px-5 mx-auto w-full'>
                              <div className='text-center max-w-197.5 w-full mx-auto'>
                                    <h1 className="font-sora font-extrabold text-[70px] leading-[104%] text-white-1100 text-shadow-xl uppercase">Erhöhe deine Sichtbarkeit bei Google!</h1>
                                    <h4 className="text-white-1100 max-w-107.5 w-full mx-auto text-[32px] leading-[124%] font-medium mt-5 mb-12">Mehr Traffic. Mehr Umsatz.
                                          Mit deiner SEO Agentur
                                    </h4>
                                    <CtaButton
                                          href="/"
                                          label="Kostenloses Kennenlernen"
                                          variant="transparent"
                                    />
                                    <p className="text-white-1100 font-normal text-sm leading-[124%] mt-5">Finde heraus, wie SEO dein Ranking verbessert.</p>
                              </div>
                        </div>
                        <span className="text-gradient2 absolute -bottom-8 left-0 text-center w-full block font-bold text-[155px] leading-[104%] tracking-[-12.4px] uppercase">SEO-OPTIMIERUNG</span>
                  </section>
                  <section className="pt-48.75 pb-50">
                        <div className="max-w-310 px-5 mx-auto w-full">
                              <h2 className="border-b border-solid border-white-1100/40 xl:text-5xl md:text-[32px] text-xl leading-6 md:leading-11 font-bold pb-8 md:pb-10 max-w-294.5 mx-auto w-full text-white-1100 xl:leading-16.75 text-center">
                                    Suchmaschinenoptimierung für
                                    <span className="text-orange-1100 block"> bessere Sichtbarkeit, mehr Kunden und langfristigen Erfolg </span>
                              </h2>
                              <div className="mt-22">
                                    <ServicesOfferedCard />
                              </div>
                        </div>
                  </section>
                  <section className="bg-linear-to-r from-yellow-1200 via-orange-1100 to-yellow-1200 py-10 relative z-1">
                        <div className="max-w-346.25 md:px-10 px-4 xl:px-4 mx-auto w-full">
                              <div className="text-center">
                                    <h2 className="text-5xl font-medium text-white-1100 leading-[140%]">
                                          Lass dich von den Online Marketing Erfahrungen unserer Kunden
                                          überzeugen!
                                    </h2>
                              </div>
                              <ReviewCardGroup />
                        </div>
                  </section>
                  <section className="pt-50 pb-22">
                        <div className="max-w-310 px-5 mx-auto w-full">
                              <div className="text-center border-b border-solid border-white-1100/40 pb-10">
                                    <h2 className="text-5xl font-bold text-white-1100 leading-[140%] max-w-225 w-full mx-auto">
                                          <span className="text-orange-1100">Erfolgreiche SEO </span> Betreuung für nachhaltige Ergebnisse
                                    </h2>
                              </div>
                        </div>
                        <div className='bg-[url("/images/case-bg.png")] bg-cover bg-center mt-22'>
                              <div className="max-w-310 px-5 mx-auto w-full">
                                    <h3 className='text-[32px] text-center font-medium text-white-1100 leading-[124%] max-w-135 w-full mx-auto'>
                                          <span className='text-orange-1100'>+ 421%</span> mehr Sichtbarkeit dank
                                          SEO Agentur und <span className='text-orange-1100'>142</span> neue Leads
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6 mt-22">
                                          <div className="">
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Branche:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Gebäudereinigung:</p>
                                                </div>
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Service:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">SEO und Content-Marketing.</p>
                                                </div>
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Herausforderungen: </h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Kaum organischer Traffic und eine geringe Online-Sichtbarkeit in einem stark lokal und preisgetriebenen Markt, was zu wenigen Anfragen führte.</p>
                                                </div>
                                                <div className="">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Content-Maßnahmen:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Entwicklung einer SEO-Strategie, die gezielt lokale Suchanfragen wie „Dachreinigung [Stadt]“ oder „Fassadenreinigung [Stadt]“ adressiert. Optimierung der Service-Seiten, um Dienstleistungen präzise darzustellen, sowie Erstellung von Blog-Artikeln. Aufbau von Backlinks durch Partnerschaften mit lokalen Handwerkerplattformen und Branchenverzeichnissen.</p>
                                                </div>
                                          </div>
                                          <div className="">
                                                <div className="bg-white-1100 rounded-2xl shadow-4xl py-8 px-10">
                                                      <h4 className="text-black-1100 font-semibold text-2xl leading-[140%]">Ergebnisse:</h4>
                                                      <ul className='mt-6'>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]"><span className="text-orange-1100">+421%</span> Sichtbarkeit in Suchmaschinen.</p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Erhöhung der rankenden Keywords<span className="text-orange-1100">von 15 auf 159.</span></p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Erhöhung der monatlichen Webseitenbesucher<span className="text-orange-1100">von ∅ 52 auf ∅ 647.</span></p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Generierung<span className="text-orange-1100">von ∅ 142</span> qualifizierten Leads pro Quartal.</p>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                          <img src="/images/Chart1.svg" alt='Chart 1' />
                                    </div>
                              </div>
                        </div>
                  </section>
                  <div className='px-5 py-22'>
                        <span className='max-w-300 mx-auto w-full h-px bg-white-1100/40 flex items-center'></span>
                  </div>
                  <section>
                        <div className='bg-[url("/images/case2-bg.png")] bg-cover bg-center'>
                              <div className="max-w-310 px-5 mx-auto w-full">
                                    <h3 className='text-[32px] text-center font-medium text-white-1100 leading-[124%] max-w-187.5 w-full mx-auto'>
                                          <span className='text-orange-1100'>+234%</span> mehr Online-Umsatz in nur <span className='text-orange-1100'>9 Monaten</span> durch Suchmaschinenoptimierun
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6 mt-22">
                                          <div className="">
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Branche:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Online-Shop für Uhren</p>
                                                </div>
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Service: </h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">E-Commerce SEO und Conversion Optimierung.</p>
                                                </div>
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Herausforderungen: </h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Starker Wettbewerb in der Online-Shop-Branche und geringe Sichtbarkeit der Produktseiten.</p>
                                                </div>
                                                <div className="">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Content-Maßnahmen:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Fokus auf die Optimierung der Produktseiten durch aussagekräftige Beschreibungen und SEO-gerechte Strukturen. Verbesserung der Ladezeiten, Mobile-Optimierung und Implementierung einer internen Verlinkungsstrategie. Zielgerichtete Keyword-Analyse für trendbasierte Produkte und saisonale Angebote.</p>
                                                </div>
                                          </div>
                                          <div className="">
                                                <div className="bg-white-1100 rounded-2xl shadow-4xl py-8 px-10">
                                                      <h4 className="text-black-1100 font-semibold text-2xl leading-[140%]">Ergebnisse:</h4>
                                                      <ul className='mt-6'>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]"><span className="text-orange-1100">+234%</span> Umsatzsteigerung über organischen Traffic.</p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]"><span className="text-orange-1100">1.128 zusätzliche</span>Verkäufe über SEO-generierte Besucher.</p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Erhöhung der rankenden Keywords <span className="text-orange-1100">von 12 auf 107.</span></p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Steigerung des monatlichen organischen Traffics<span className="text-orange-1100">von 900 auf 3.500 Besuche.</span></p>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='-mt-72.5 flex items-center justify-center w-full relative -bottom-17.5'>
                                    <img src="/images/Chart2.png" alt='Chart 2' className='w-full' />
                              </div>
                        </div>
                  </section>
                  <div className='px-5 py-22 mt-17.5'>
                        <span className='max-w-300 mx-auto w-full h-px bg-white-1100/40 flex items-center'></span>
                  </div>
                   <section>
                        <div className='bg-[url("/images/case3-bg.png")] bg-cover bg-center'>
                              <div className="max-w-310 px-5 mx-auto w-full">
                                    <h3 className='text-[32px] text-center font-medium text-white-1100 leading-[124%] max-w-187.5 w-full mx-auto'>
                                           Durch Local SEO-Beratung <span className='text-orange-1100'>+377%</span> mehr Anfragen
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6 mt-22">
                                          <div className="">
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Branche:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]"> Lokale Tischlerei</p>
                                                </div>
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Service:  </h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]"> Local SEO und Google My Business Optimierung.</p>
                                                </div>
                                                <div className="mb-6">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Herausforderungen: </h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Geringe Auffindbarkeit in den lokalen Suchergebnissen, mangelnde Präsenz in Google My Business und fehlende Bewertungen.</p>
                                                </div>
                                                <div className="">
                                                      <h4 className="text-white-1100 text-base font-bold leading-[140%] mb-3">Content-Maßnahmen:</h4>
                                                      <p className="text-white-1100 text-base font-normal leading-[140%]">Optimierung des Google My Business-Profils, um gezielt lokale Suchanfragen abzudecken. Aufbau einer starken Backlink-Strategie durch lokale Verzeichnisse und Kundenbewertungen. Erstellung von lokal relevanten Blogartikeln und Landingpages, die spezifische Dienstleistungen und Gebiete abdecken.</p>
                                                </div>
                                          </div>
                                          <div className="">
                                                <div className="bg-white-1100 rounded-2xl shadow-4xl py-8 px-10">
                                                      <h4 className="text-black-1100 font-semibold text-2xl leading-[140%]">Ergebnisse:</h4>
                                                      <ul className='mt-6'>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]"><span className="text-orange-1100">+377%</span> Anfragen über organische Suchergebnisse.</p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Verbesserung der Google My Business-Sichtbarkeit<span className="text-orange-1100">um +254%.</span></p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Erhöhung der rankenden lokalen Keywords <span className="text-orange-1100">von 6 auf 64.</span></p>
                                                            </li>
                                                            <li className="flex items-center gap-4 mb-4">
                                                                  <span className="w-5 h-5 flex items-center justify-center">
                                                                        <Image
                                                                              src="/images/check-black.svg"
                                                                              alt=""
                                                                              width="18"
                                                                              height="18"
                                                                        />
                                                                  </span>
                                                                  <p className="text-black-1100 text-base font-normal leading-[140%]">Steigerung der Website-Besucher von<span className="text-orange-1100">450 auf 2.100 pro Monat.</span></p>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className='-mt-72.5 flex items-center justify-center w-full relative -bottom-17.5'>
                                    <img src="/images/Chart3.png" alt='Chart 3' className='w-full' />
                              </div>
                        </div>
                  </section>
            </>
      )
}

export default page