import Link from "next/link";
import { Icon } from "./Icon";

export const LinkButton = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`${className} group flex w-full items-center justify-between py-2 transition duration-300 border-b-2 border-[#cdcdcd70]`}
    >
      <span className="font-bold text-[20px]">{text}</span>
      <Icon id="arrow" size={14} className="-translate-x-4 group-hover:translate-x-0 transition duration-300"/>
    </Link>
  );
};
