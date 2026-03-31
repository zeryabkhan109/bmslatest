import Link from "next/link";

interface CtaButtonProps {
  href?: string;
  label?: string;
  variant?: "solid" | "transparent" | "white";
  className?: string;
}

export default function CtaButton({
  href = "/",
  label,
  variant = "solid",
  className = "",
}: CtaButtonProps) {
  const isSolid = variant === "solid";
  const isWhite = variant === "white";

  const defaultLabels = {
    solid: "Jetzt Kennenlerngespräch buchen!",
    transparent: "Kostenloses Kennenlernen",
    white: "Jetzt Checkliste anfordern",
  };

  if (isWhite) {
    return (
      <Link
        href={href}
        className={`border border-solid border-orange-1100 bg-white-1100 rounded h-12 px-5 inline-flex items-center justify-center shadow-sm text-base font-normal leading-5.5 text-black-1100 hover:bg-orange-1100 hover:text-white-1100 transition-all ${className}`}
      >
        {label ?? defaultLabels.white}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`border sm:w-auto w-full border-solid group border-orange-1100 rounded h-12 pl-4 pr-3 inline-flex justify-center items-center gap-4 text-sm md:text-base font-normal leading-4.25 md:leading-5.5 transition-all
        ${
          isSolid
            ? "bg-orange-1100 shadow-3xl text-white-1100 hover:bg-white-1100 hover:border-white-1100 hover:text-black-1100"
            : "bg-transparent text-white hover:bg-orange-1100"
        } ${className}`}
    >
      {label ?? defaultLabels[variant]}
      <span
        className={`w-6 h-6 flex items-center justify-center rounded ${
          isSolid ? "bg-white-1100" : "bg-orange-1100"
        }`}
      >
        <img
          src={isSolid ? "images/orange-uparw.svg" : "images/up-arw.svg"}
          alt=""
          className="group-hover:rotate-45 transition-all ease-in-out delay-100"
        />
      </span>
    </Link>
  );
}
