const imgCard1 = "images/card-icon1.svg";
const imgCard2 = "images/card-icon2.svg";
const imgCard3 = "images/card-icon3.svg";
const imgDivider = "images/line.png";

interface ChallengeCardProps {
  icon: string;
  titleWhite: string;
  titleOrange: string;
  description: string;
}

function ChallengeCard({
  icon,
  titleWhite,
  titleOrange,
  description,
}: ChallengeCardProps) {
  return (
    <div className="bg-black-1100 flex flex-col gap-4 md:gap-5 items-center xl:px-12 py-6 px-4 md:p-8 xl:py-10 rounded-2xl shadow-4xl h-full">
      <div className="flex items-center justify-center shrink-0">
        <img
          src={icon}
          alt=""
          className="md:w-20 md:h-20 w-12.75 h-12.75 object-contain"
        />
      </div>

      <div className="text-center font-semibold xl:text-2xl md:text-xl text-base leading-4.75 md:leading-7 xl:leading-8.25">
        <p className="text-white-1100">{titleWhite}</p>
        <p className="text-orange-1100">{titleOrange}</p>
      </div>

      <div className="w-full relative h-px shrink-0">
        <img
          src={imgDivider}
          alt=""
          className="absolute inset-0 w-full h-full object-fill"
        />
      </div>

      <p className="text-white-1100 font-normal xl:text-base text-sm leading-4.25 xl:leading-5.5 text-center">
        {description}
      </p>
    </div>
  );
}

const CARDS: ChallengeCardProps[] = [
  {
    icon: imgCard1,
    titleWhite: "Empfehlungen",
    titleOrange: "reichen nicht mehr",
    description:
      "Über Jahre hinweg hast du dich auf treue Bestandskunden verlassen, und viele neue Aufträge kamen durch Empfehlungen. Mittlerweile werden die Anfragen seltener, und die Abhängigkeit von wenigen Kunden wird riskant. Ohne neue Kunden gerät dein Wachstum ins Stocken.",
  },
  {
    icon: imgCard2,
    titleWhite: "Investitionen",
    titleOrange: "waren vergeblich",
    description:
      "Google Ads bis hin zu Social Media. Die erhofften Ergebnisse blieben aus: kein Anstieg relevanter Anfragen, kein messbarer Erfolg. Du fragst dich, ob sich weiteres Investieren lohnt.",
  },
  {
    icon: imgCard3,
    titleWhite: "Deine Konkurrenz",
    titleOrange: "wird immer stärker",
    description:
      "Die Konkurrenz wächst, und du merkst, dass deine Mitbewerber dir Aufträge vor der Nase wegschnappen. Mit jedem verpassten Auftrag wird es schwerer, den Anschluss zu finden. Du fühlst dich zunehmend abgehängt.",
  },
];

export default function ChallengeCards({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6  xl:gap-8 ${className}`}
    >
      {CARDS.map((card, index) => (
        <div
          key={card.titleOrange}
          className={index === 0 ? "md:col-span-2 xl:col-span-1" : ""}
        >
          <ChallengeCard {...card} />
        </div>
      ))}
    </div>
  );
}
