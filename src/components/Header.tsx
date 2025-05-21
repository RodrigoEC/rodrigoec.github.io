import Link from "next/link";

export const Header = () => {
  const links = {
    home: "/",
    "About Me": "/about",
    "Contact Me": "/contact",
  };

  return (
    <nav className="flex justify-between py-4 sticky bg-background">
      <div className="flex items-center gap-4">
        {Object.entries(links).map(([name, link]) => (
          <Link key={name} href={link} className={`font-bold text-sm lg:text-lg capitalize hover:underline`}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
