"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";

const solutions = [
  "Wir verstehen ...",
  "diese Herausforderungen und wissen, wie belastend sie sein können...",
  "VIELE UNSERER KUNDEN STANDEN VOR DENSELBEN PROBLEMEN...",
  "und wir haben gezielte Lösungen dafür.",
];

export function Clientswiper() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !swiperRef.current) return;

    const swiper = swiperRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          swiper.autoplay.start(); // continue from same slide
        } else {
          swiper.autoplay.stop(); // pause only
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-0">
      <div ref={wrapperRef} style={{ touchAction: "pan-y" }}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          direction="vertical"
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          onReachEnd={(swiper) => {
            swiper.autoplay.stop();
            if (wrapperRef.current) {
              wrapperRef.current.style.pointerEvents = "none";
            }
          }}
          allowTouchMove={false}
          touchStartPreventDefault={false}
          simulateTouch={false}
          modules={[Autoplay]}
          className="z-50 relative h-96.5 sm:h-200"
        >
          {solutions.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center text-center h-full">
                <h2
                  className={cn(
                    "xl:text-[80px] font-extrabold md:text-[72px] xl:tracking-normal md:-tracking-[3.00px] text-[27px] md:leading-18.5 xl:leading-20.75 uppercase text-white-1100 text-shadow-xl tracking-normal",
                  )}
                >
                  {text}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Clientswiper;
