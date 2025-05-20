import { formatDate } from "@/util";
import Image from "next/image";

export interface IExperience {
  title: string;
  position: string;
  start: string;
  end?: string;
  thumb: {
    fields: {
      file: { url: string };
    };
  };
}

export const Experience = ({
  experience,
}: {
  experience: { fields: IExperience };
}) => {
  const { title, position, start, end, thumb } = experience.fields;

  console.log(experience);

  return (
    <div className="flex items-start gap-4 h-[160px]">
      <Image
        className="border-2 border-[black] shadow-no-expand rounded-lg aspect-1/1 w-[160px]"
        src={`https:${thumb.fields.file.url}`}
        width={300}
        height={300}
        alt=""
      />

      <div className="flex flex-col justify-between w-full h-full py-2">
        <h3 className="text-xl font-bold w-full">{title}</h3>
        <div className="text-md opacity-60">
          <span>{position}</span>
          <div className="flex gap-2 items-center italic">
            <span>{formatDate(start)}</span>-
            <span>{end ? formatDate(end) : "currently"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
