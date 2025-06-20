import { TEXTLANGS } from "@/language";
import Link from "next/link";

export const Header = ({ lang }: { lang: "en" | "pt" }) => {
  return (
    <nav className="flex justify-between py-4 sticky bg-background">
      <div className="flex items-center gap-4">
        {Object.entries(TEXTLANGS[lang].header).map(([key, value]) => (
          <Link key={key} href={value.link} className={`font-bold text-sm lg:text-lg capitalize hover:underline`}>
            {value.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};
