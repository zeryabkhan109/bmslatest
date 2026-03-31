"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SLIDES = [
  "Wir verstehen ...",
  "diese Herausforderungen und wissen, wie belastend sie sein können...",
  "VIELE UNSERER KUNDEN STANDEN VOR DENSELBEN PROBLEMEN...",
  "und wir haben gezielte Lösungen dafür.",
];

const Clientswiper = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    // INIT SWIPER (paused initially)
    const swiper = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      direction: "vertical",
      autoHeight: true,
      slidesPerView: "auto",
      allowTouchMove: false,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      speed: 700,
      spaceBetween: 200,
    });

    swiper.autoplay.stop(); // ❗ stop initially
    swiperInstance.current = swiper;

    // INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          swiper.autoplay.start(); // ✅ start when visible
        } else {
          swiper.autoplay.stop(); // optional: stop when out
        }
      },
      {
        threshold: 0.5, // 50% visible triggers
      },
    );

    observer.observe(swiperRef.current);

    return () => {
      observer.disconnect();
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div
      ref={swiperRef}
      className="swiper clientSwiper overflow-hidden"
      style={{ height: "auto", minHeight: "250px" }}
    >
      <div className="swiper-wrapper">
        {SLIDES.map((text, i) => (
          <div key={i} className="swiper-slide">
            <div className="text-center">
              <h2 className="xl:text-[80px] font-extrabold md:text-[72px] text-[32px] md:leading-18.5 xl:leading-20.75 uppercase text-white-1100 text-shadow-xl">
                {text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientswiper;
