"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { cn } from "@/lib/utils";

const solutions = [
  "Wir verstehen ...",
  "diese Herausforderungen und wissen, wie belastend sie sein können...",
  "VIELE UNSERER KUNDEN STANDEN VOR DENSELBEN PROBLEMEN...",
  "und wir haben gezielte Lösungen dafür.",
];

export function Clientswiper() {
  return (
    <section className="mb-20 sm:mb-30 lg:mb-45 relative z-0">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="z-50 relative h-143 sm:h-200"
      >
        {solutions.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center text-center h-full">
              <h2
                className={cn(
                  "xl:text-[80px] font-extrabold md:text-[72px] text-[32px] md:leading-18.5 xl:leading-20.75 uppercase text-white-1100 text-shadow-xl",
                  index === 1 &&
                    "xl:text-[80px] font-extrabold md:text-[72px] text-[32px] md:leading-18.5 xl:leading-20.75 uppercase text-white-1100 text-shadow-xl",
                )}
              >
                {text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Clientswiper;
