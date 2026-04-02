"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';



interface Article {
  id: number;
  category: string;
  heading: string;
  img: string;
  dic: string;
  dic2: string;
  dic3: string;
  dic4: string;
  excerpt: string;
  action: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    category: "Benchmark Media Basis SEO Paket für kleine Unternehmen",
    heading: "Basis SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erstanalyse deiner Website",
    dic2: "Grundlegende Suchmaschinenoptimierung ",
    dic3: "Keyword-Recherche ",
    dic4: "Basis-OnPage-Optimierungen ",
    excerpt: "Ideal für kleine Unternehmen, die ihre Online-Präsenz verbessern möchten.",
    action: "Mehr erfahren",
  },
  {
    id: 2,
    category: "Benchmark Media Premium SEO Paket für maximale Sichtbarkeit",
    heading: "Premium SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erweiterte Content-Optimierung ",
    dic2: "Fortschrittliche OffPage-Strategien (z. B. Linkbuilding) ",
    dic3: "Individuelle Markenstrategie",
    dic4: "Regelmäßige Analyse und datenbasierte Anpassungen",
    excerpt: "Perfekt für Unternehmen, die mit mehr Sichtbarkeit und einem starken Markenauftritt wachsen wollen.",
    action: "Mehr erfahren",
  },
   {
    id: 3,
    category: "Benchmark Media E-Commerce SEO Paket für deinen Online-Shop",
    heading: "E-Commerce SEO Paket",
    img: "/images/check-white.svg",
    dic: "Spezifische Produktseiten-Optimierung",
    dic2: "Verbesserte Kategorien-Struktur",
    dic3: "Gezielte Conversion Optimierung ",
    dic4: "Strategien zur Umsatzsteigerung",
    excerpt: "Das ideale Paket für Online-Shops, die ihre Umsätze im digitalen Handel maximieren wollen.",
    action: "Mehr erfahren",
  },
  {
    id: 4,
    category: "Individuelle SEO Lösungen von Benchmark Media:Maßgeschneidert für deine Branche",
    heading: "Individuelle SEO Lösungen",
    img: "/images/check-white.svg",
    dic: "Maßgeschneiderte Keyword- und Marktanalyse ",
    dic2: "Strategieentwicklung auf Basis deiner individuellen Ziele ",
    dic3: "Flexible OffPage-Strategien  ",
    dic4: "Fortlaufende Optimierung und Beratung ",
    excerpt: "Ideal für Unternehmen mit speziellen Anforderungen, die eine individuelle SEO-Strategie zur Maximierung ihres Potenzials benötigen.",
    action: "Mehr erfahren",
  },
  {
    id: 5,
    category: "Benchmark Media Basis SEO Paket für kleine Unternehmen",
    heading: "Basis SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erstanalyse deiner Website",
    dic2: "Grundlegende Suchmaschinenoptimierung ",
    dic3: "Keyword-Recherche ",
    dic4: "Basis-OnPage-Optimierungen ",
    excerpt: "Ideal für kleine Unternehmen, die ihre Online-Präsenz verbessern möchten.",
    action: "Mehr erfahren",
  },
  {
    id: 6,
    category: "Benchmark Media Premium SEO Paket für maximale Sichtbarkeit",
    heading: "Premium SEO Paket",
    img: "/images/check-white.svg",
    dic: "Erweiterte Content-Optimierung ",
    dic2: "Fortschrittliche OffPage-Strategien (z. B. Linkbuilding) ",
    dic3: "Individuelle Markenstrategie",
    dic4: "Regelmäßige Analyse und datenbasierte Anpassungen",
    excerpt: "Perfekt für Unternehmen, die mit mehr Sichtbarkeit und einem starken Markenauftritt wachsen wollen.",
    action: "Mehr erfahren",
  },
   {
    id: 7,
    category: "Benchmark Media E-Commerce SEO Paket für deinen Online-Shop",
    heading: "E-Commerce SEO Paket",
    img: "/images/check-white.svg",
    dic: "Spezifische Produktseiten-Optimierung",
    dic2: "Verbesserte Kategorien-Struktur",
    dic3: "Gezielte Conversion Optimierung ",
    dic4: "Strategien zur Umsatzsteigerung",
    excerpt: "Das ideale Paket für Online-Shops, die ihre Umsätze im digitalen Handel maximieren wollen.",
    action: "Mehr erfahren",
  },
  {
    id: 8,
    category: "Individuelle SEO Lösungen von Benchmark Media:Maßgeschneidert für deine Branche",
    heading: "Individuelle SEO Lösungen",
    img: "/images/check-white.svg",
    dic: "Maßgeschneiderte Keyword- und Marktanalyse ",
    dic2: "Strategieentwicklung auf Basis deiner individuellen Ziele ",
    dic3: "Flexible OffPage-Strategien  ",
    dic4: "Fortlaufende Optimierung und Beratung ",
    excerpt: "Ideal für Unternehmen mit speziellen Anforderungen, die eine individuelle SEO-Strategie zur Maximierung ihres Potenzials benötigen.",
    action: "Mehr erfahren",
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="group hover:bg-white hover:bg-none hover:border-orange-1100 bg-[url('/images/galaxy-img3.png')] bg-cover bg-bottom overflow-hidden p-8 rounded-2xl h-full border border-solid border-white-1100">

      <div className="text-center">
        <p className="group-hover:text-black-1100 text-white-1100 font-normal mb-6 text-xs leading-[140%]">
          {article.category}
        </p>
        <h3 className="group-hover:text-black-1100 text-white-1100 font-bold text-[22px] leading-[140%]">
          {article.heading}
        </h3>
      </div>

      <div className="flex flex-col gap-4 w-full mt-6 mb-14.5">
        <ul className="mb-6 min-h-41.75">
          <li className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-6 h-6">
              <img src={article.img} alt={article.heading} className="group-hover:brightness-0"  />
            </span>
            <span className="group-hover:text-black-1100 text-white-1100 font-normal text-sm leading-[140%] block flex-1">{article.dic}</span>
          </li>
          <li className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-6 h-6">
              <img src={article.img} alt={article.dic2} className="group-hover:brightness-0"  />
            </span>
            <span className="group-hover:text-black-1100 text-white-1100 font-normal text-sm leading-[140%]  block flex-1">{article.dic2}</span>
          </li>
          <li className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-6 h-6">
              <img src={article.img} alt={article.dic3} className="group-hover:brightness-0"  />
            </span>
            <span className="group-hover:text-black-1100 text-white-1100 font-normal text-sm leading-[140%]  block flex-1">{article.dic3}</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="flex items-center justify-center w-6 h-6">
              <img src={article.img} alt={article.dic4} className="group-hover:brightness-0" />
            </span>
            <span className="group-hover:text-black-1100 text-white-1100 font-normal text-sm leading-[140%]  block flex-1">{article.dic4}</span>
          </li>
        </ul>
        <p className="font-normal text-xs leading-[140%] group-hover:text-black-1100 text-white-1100 min-h-[68px]:">
          {article.excerpt}
        </p>
      </div>
      <Link href={'#'} className="flex items-center justify-center group-hover:bg-orange-1100 text-white-1100 text-base leading-[150%] font-normal border border-solid border-orange-1100 rounded h-12 w-full">
        {article.action}
      </Link>
    </div>
  );
}

export default function Pricingslider({
  className = "",
}: {
  className?: string;
}) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      direction: "horizontal", 
      on: {
        slideChange(s) {
          setActiveIndex(s.realIndex);
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3.0,
          spaceBetween: 32,
        },
      },
    });

    swiperInstanceRef.current = swiper;
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={swiperRef} className="swiper overflow-visible!">
        <div className="swiper-wrapper items-stretch">
          {ARTICLES.map((article) => (
            <div key={article.id} className="swiper-slide h-auto!">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-7.5 mt-8 md:hidden">
        {ARTICLES.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstanceRef.current?.slideToLoop(i)}
            className="h-0.5 w-8 cursor-pointer rounded-full transition-all duration-300"
            style={
              activeIndex === i
                ? {
                  backgroundImage:
                    "linear-gradient(-90deg, #89520e 0%, #ef8f19 54%, #89520e 100%)",
                }
                : { backgroundColor: "#dcdcdc" }
            }
          />
        ))}
      </div>
    </div>
  );
}
