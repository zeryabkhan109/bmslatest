"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const benefits = [
  "Top 3 bei Google – und deine Kunden finden dich sofort.",
  "Doppelt so viele Anfragen in 3 Monaten – ohne hohe Werbekosten.",
  "100 % Betreuung – während du dich auf dein Geschäft fokussierst.",
  "Langfristig bessere Sichtbarkeit und mehr Umsatz.",
  "Lokale Sichtbarkeit stärken – mehr Aufträge aus deiner Region.",
  "Offene Stellen 50 % schneller besetzen – ohne teure Anzeigen.",
];
export default function BenefitsList() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={24}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="h-full"
    >
      {benefits.map((benefit) => (
        <SwiperSlide key={benefit}>
          <p className="flex sm:text-base text-white-1100 font-normal text-sm leading-4.25 sm:leading-5.5 text-left items-center gap-4">
            <span>
              <img src="images/check.svg" alt="" />
            </span>
            <span className="flex-1">{benefit}</span>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
