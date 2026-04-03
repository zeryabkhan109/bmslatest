"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const imgStar = "images/img-star.svg";
const imgArrowPrev = "images/arw-prev.svg";
const imgArrowNext = "images/arw-next.svg";
const imgTrustpilot = "images/trustpilot.svg";
const imgGoogle = "images/google.svg";
const imgDivider = "images/img-divider.svg";

type ReviewSource = "trustpilot" | "google";

interface Review {
  id: number;
  text: string;
  name: string;
  date: string;
  initial: string;
  avatarColor: string;
  source: ReviewSource;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    text: `\u201eErst skeptisch, jetzt Fans. Wir sind sehr froh, dass wir uns getraut haben, den Schritt in die Online-Werbung zu gehen. H\u00e4tten wir mal vor ein paar Jahren damit begonnen.\u201c`,
    name: "Maria Fass",
    date: "vor 2 Jahren",
    initial: "M",
    avatarColor: "#34A853",
    source: "trustpilot",
  },
  {
    id: 2,
    text: `\u201eTolles Erstgespr\u00e4ch mit vielen hilfreichen Informationen f\u00fcr unseren neuen Onlineshop. Sehr zu empfehlen.\u201c`,
    name: "Patrick Hild",
    date: "vor einem Jahr",
    initial: "P",
    avatarColor: "#4285F4",
    source: "google",
  },
  {
    id: 3,
    text: `\u201eSuper Leistung. Neue Website, neues Logo und eine neue Karte. Alles Spitze. Klasse Service. Nur zu empfehlen, jeden Cent wert!\u201c`,
    name: "Hamburg Undumgebung",
    date: "vor 2 Jahren",
    initial: "H",
    avatarColor: "#EA4335",
    source: "trustpilot",
  },
  {
    id: 4,
    text: `\u201eSehr professionelle Beratung und schnelle Umsetzung. Wir sind mit dem Ergebnis mehr als zufrieden.\u201c`,
    name: "Thomas K.",
    date: "vor 6 Monaten",
    initial: "T",
    avatarColor: "#FBBC04",
    source: "google",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Link href="/" key={i}>
          <img src={imgStar} alt="star" className="size-6" />
        </Link>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-4 bg-white-1100 border-solid border border-grey-1100 rounded-2xl shadow-3xl px-4 py-6 h-full">
      <div className="flex items-start justify-between w-full">
        <StarRating />
        <Link href="/">
          <img
            src={review.source === "trustpilot" ? imgTrustpilot : imgGoogle}
            alt={review.source}
            className="size-6"
          />
        </Link>
      </div>

      <p className="font-normal text-base leading-5.5 text-black-1100 min-h-38.5">
        {review.text}
      </p>

      <img src={imgDivider} alt="" className="w-full h-px" />

      <div className="flex items-center gap-3">
        <div
          className="size-10.5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: review.avatarColor }}
        >
          <span className="font-inter font-normal text-xl leading-7 text-white-1100">
            {review.initial}
          </span>
        </div>
        <div className="flex flex-col gap-0.5 text-black-1100 text-xs leading-4">
          <span className="font-bold">{review.name}</span>
          <span className="font-normal whitespace-nowrap">{review.date}</span>
        </div>
      </div>
    </div>
  );
}

export function ReviewCardGroup({ className = "" }: { className?: string }) {
  const swiperElRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperElRef.current || !prevBtnRef.current || !nextBtnRef.current)
      return;

    const swiper = new Swiper(swiperElRef.current, {
      modules: [Navigation],
      slidesPerView: 3,
      loop: true,
      spaceBetween: 32,
      navigation: {
        prevEl: prevBtnRef.current,
        nextEl: nextBtnRef.current,
      },
      on: {
        slideChange(s) {
          setActiveIndex(s.realIndex);
        },
      },
      breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1200: { slidesPerView: 3, spaceBetween: 32 },
      },
    });

    swiperInstanceRef.current = swiper;
    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <div className="flex items-center gap-8 w-full">
        <button
          ref={prevBtnRef}
          aria-label="Previous reviews"
          className="size-11 border cursor-pointer border-solid border-white-1100 rounded-full shrink-0 transition-opacity disabled:opacity-30 hidden xl:flex items-center justify-center"
        >
          <img src={imgArrowPrev} alt="Previous" className="" />
        </button>
        <div ref={swiperElRef} className="swiper flex-1  overflow-hidden">
          <div className="swiper-wrapper py-11 xl:pt-16 items-stretch">
            {REVIEWS.map((review) => (
              <div key={review.id} className="swiper-slide h-auto!">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
        <button
          ref={nextBtnRef}
          aria-label="Next reviews"
          className="size-11 cursor-pointer border border-solid border-white-1100 rounded-full transition-opacity disabled:opacity-30 hidden xl:flex items-center justify-center"
        >
          <img src={imgArrowNext} alt="Next" className="" />
        </button>
      </div>
      <div className="flex items-center gap-8">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperInstanceRef.current?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-0.5  w-8 md:w-16 cursor-pointer transition-colors duration-300"
            style={{
              backgroundColor: i === activeIndex ? "#9C5701" : "#DCDCDC",
            }}
          />
        ))}
      </div>
    </div>
  );
}
