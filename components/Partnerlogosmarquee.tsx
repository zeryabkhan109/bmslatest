const ROW_ONE = [
  "images/icon1.svg",
  "images/icon2.svg",
  "images/icon3.svg",
  "images/icon4.svg",
  "images/icon5.svg",
];

const ROW_TWO = [
  "images/icon6.svg",
  "images/icon7.svg",
  "images/icon8.svg",
  "images/icon9.svg",
  "images/icon10.svg",
];

function LogoTile({ src }: { src: string }) {
  return (
    <div className="md:rounded-xl rounded-md md:w-35 w-18.5 h-13.25 md:h-25 flex items-center justify-center bg-black-1200 shrink-0">
      <img src={src} alt="" className="md:h-auto h-6.25" />
    </div>
  );
}

function MarqueeRow({
  icons,
  reverse = false,
}: {
  icons: string[];
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const items = [...icons, ...icons, ...icons];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-3 md:gap-6 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((src, i) => (
          <LogoTile key={i} src={src} />
        ))}
      </div>
    </div>
  );
}

export default function PartnerLogosMarquee({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 md:gap-6 ${className}`}>
      <MarqueeRow icons={ROW_ONE} />
      <MarqueeRow icons={ROW_TWO} reverse />
    </div>
  );
}
