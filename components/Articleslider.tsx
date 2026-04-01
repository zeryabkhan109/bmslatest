"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

const imgPost1 = "images/post-img1.jpg";
const imgPost2 = "images/post-img2.jpg";
const imgPost3 = "images/post-img3.jpg";
const imgPost4 = "images/post-img4.jpg";
const imgPost5 = "images/post-img1.jpg";

interface Article {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    image: imgPost1,
    category: "Social Media",
    title: "Warum SEO und SEA zusammen unschlagbar sind",
    excerpt:
      "Erfahre, wie du durch die Kombination von SEO und SEA maximale...",
  },
  {
    id: 2,
    image: imgPost2,
    category: "Social Media",
    title: "Die besten Conversion-Hacks für Google Ads",
    excerpt:
      "Entdecke einfache Techniken, um deine Google Ads-Kampagnen effizienter...",
  },
  {
    id: 3,
    image: imgPost3,
    category: "Social Media",
    title: "Wie du mit Local SEO und Google Ads Kunden vor Ort gewinnst",
    excerpt: "Lerne, wie du lokale SEO und Google Ads nutzt, um regionale...",
  },
  {
    id: 4,
    image: imgPost4,
    category: "Social Media",
    title: "Wie Full-Stack-Marketing dein Wachstum steigert.",
    excerpt:
      "Verstehe, wie du den gesamten Online Marketing Prozess optimierst...",
  },
  {
    id: 5,
    image: imgPost5,
    category: "Social Media",
    title: "Wie Full-Stack-Marketing dein Wachstum steigert.",
    excerpt:
      "Verstehe, wie du den gesamten Online Marketing Prozess optimierst...",
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-4 items-start overflow-hidden pb-6 group md:pb-8 rounded-2xl h-full">
      <div className="h-60 overflow-hidden relative rounded-2xl shrink-0 w-full group">
        <div className="absolute inset-0 border border-white/50 rounded-2xl z-10 pointer-events-none" />

        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl transform transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
        />
      </div>

      <div className="rounded-lg bg-white/16 px-4 py-1 inline-flex items-center justify-center shadow-5xl">
        <span className="font-normal flex text-xs leading-xs text-grey-1100">
          {article.category}
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <p className="font-bold text-base leading-4.75 xl:leading-5.5 text-white-1100 group-hover:text-orange-1100 transition-colors duration-500 ease-out">
          {article.title}
        </p>
        <p className="font-normal text-[14px] leading-4.25 text-grey-1100">
          {article.excerpt}
        </p>
      </div>
    </div>
  );
}

export default function ArticlesSection({
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
      modules: [Grid],

      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 24,

      grid: {
        rows: 1,
        fill: "row",
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
        },
        1280: {
          slidesPerView: 3.4,
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
        },
      },

      on: {
        slideChange(s) {
          setActiveIndex(s.realIndex);
        },
      },
    });

    swiperInstanceRef.current = swiper;

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={swiperRef}
        className="swiper xl:overflow-visible! xl:pt-22 md:pt-14 pt-8"
      >
        <div className="swiper-wrapper items-stretch">
          {ARTICLES.map((article) => (
            <div key={article.id} className="swiper-slide h-auto">
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
