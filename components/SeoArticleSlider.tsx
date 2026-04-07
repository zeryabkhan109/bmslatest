"use client";

import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { ArticleCard } from "./ArticleCard";

const seoagenturimg1 = "images/seoagentur-img1.webp";
const seoagenturimg2 = "images/seoagentur-img2.webp";
const seoagenturimg3 = "images/seoagentur-img3.webp";
const seoagenturimg4 = "images/seoagentur-img4.webp";
const seoagenturimg5 = "images/seoagentur-img1.webp";

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
    image: seoagenturimg1,
    category: "Social Media",
    title: "Die 5 größten SEO-Mythen",
    excerpt:
      "Was du wirklich über Suchmaschinenoptimierung wissen solltest ...",
  },
  {
    id: 2,
    image: seoagenturimg2,
    category: "Social Media",
    title: "Warum SEO die langfristig profitabelste Marketingstrategie ist",
    excerpt: "Erfahre, warum SEO langfristig die beste Investition ist...",
  },
  {
    id: 3,
    image: seoagenturimg1,
    category: "Social Media",
    title: "7 häufige SEO-Fehler, die dein Ranking ruinieren",
    excerpt: "Vermeide diese SEO-Fehler und verbessere dein Ranking...",
  },
  {
    id: 4,
    image: seoagenturimg4,
    category: "Social Media",
    title:
      "Die ultimative SEO-Checkliste für 2024: So optimierst du deine Website Schritt für Schritt",
    excerpt: "So optimierst du deine Website Schritt für Schritt...",
  },
  {
    id: 5,
    image: seoagenturimg3,
    category: "Social Media",
    title: "Die 5 größten SEO-Mythen",
    excerpt:
      "Was du wirklich über Suchmaschinenoptimierung wissen solltest ...",
  },
];

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

      <div className="flex items-center justify-center gap-7.5 mt-2.5 md:mt-8 md:hidden">
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
