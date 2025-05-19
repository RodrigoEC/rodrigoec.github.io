import Image from "next/image";
import Link from "next/link";

export interface IHero {
  title: string;
  link: string;
  thumb: {
    fields: {
      file: { url: string };
    };
  };
}

export const Hero = ({ hero }: { hero: { fields: IHero } }) => {
  const { link, thumb } = hero.fields;

  return (
    <Link href={link}>
      <div className="border-2 w-full box-border p-1 rounded-lg border-foreground overflow-hidden shadow-no-expand">
        <div className="rounded-lg overflow-hidden">
          <Image
            className="object-center object-cover aspect-14/5 hover:scale-[102%] transition duration-300 "
            src={`https:${thumb.fields.file.url}`}
            alt=""
            width={1440}
            height={600}
          />
        </div>
      </div>
    </Link>
  );
};
