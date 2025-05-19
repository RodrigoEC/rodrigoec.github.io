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
      className={`${className} flex w-full items-center justify-between rounded-md py-2 transition duration-300`}
    >
      <span className="font-bold text-[20px]">{text}</span>
      <Icon id="arrow" size={14} />
    </Link>
  );
};
