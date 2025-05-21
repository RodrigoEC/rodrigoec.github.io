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
    <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 min-w-40 max-w-40 lg:max-w-full lg:min-h-max lg:h-40">
      <div className="w-full max-w-40 lg:max-w-40 h-full max-h-40 lg:max-h-40">
        <Image
          className="grow-1 border-2 border-[black] shadow-no-expand rounded-lg aspect-1/1 "
          src={`https:${thumb.fields.file.url}`}
          width={300}
          height={300}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 justify-between w-full h-full py-2">
        <h3 className="text-xl font-bold w-full truncate lg:overflow-visible lg:whitespace-normal lg:text-clip" title={title}>{title}</h3>
        <div className="flex flex-col grow text-md opacity-60 justify-end">
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
