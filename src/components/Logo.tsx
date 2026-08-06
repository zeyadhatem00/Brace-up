import { Link } from "react-router-dom";
import { ScrollToTop } from "../App";

export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "text-cream" : "text-forest";
  return (
    <Link
      onClick={ScrollToTop}
      to="/"
      className="flex items-center gap-3 group"
      aria-label="Brace up home"
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-full border ${
          variant === "light" ? "border-cream/40" : "border-forest/40"
        } transition-transform group-hover:scale-105`}
      >
        <span className={`font-serif text-xl leading-none ${color}`}>B</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-2xl ${color}`}>Brace UP</span>
        <span
          className={`text-[10px] tracking-luxe uppercase ${
            variant === "light" ? "text-cream/60" : "text-muted"
          }`}
        >
          Bracelets
        </span>
      </span>
    </Link>
  );
}
