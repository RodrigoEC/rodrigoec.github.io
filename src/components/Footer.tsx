import Link from "next/link";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <div className="w-full bg-foreground text-background py-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 w-full max-w-[1440px] px-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-bold">{"Let's talk!"}</span>
          <span>rodrigoecavalcanti@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 text-[white]">
          <span>© Rodrigo 2025</span>
          <Link className="cursor-pointer transition duration-300 hover:opacity-60" href={"https://www.linkedin.com/in/rodrigo-eloy/"}>
            <Icon id="linkedin" size={16} />
          </Link>
          <Link className="cursor-pointer transition duration-300 hover:opacity-60" href={"https://www.github.com/rodrigoec"}>
            <Icon id="github" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
