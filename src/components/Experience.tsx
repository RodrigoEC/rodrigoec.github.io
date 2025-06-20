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

  return (
    <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-2">
      <div className="flex flex-row gap-2 w-full">
        <Image
          className="grow-1 border-2 border-[black] shadow-no-expand rounded-md aspect-1/1 h-full max-h-12 w-full max-w-12"
          src={`https:${thumb.fields.file.url}`}
          width={400}
          height={400}
          alt=""
        />
        <div>
          <h3
            className="text-xl font-bold w-full truncate lg:overflow-visible lg:whitespace-normal lg:text-clip"
            title={position}
          >
            {position}
          </h3>
          <span className="">
            at <i>{title}</i>
          </span>
        </div>
      </div>
      <div className="flex flex-col text-md opacity-60 justify-end">
        <div className="flex flex-col gap-2 items-end italic text-sm">
          <span className="whitespace-nowrap text-start">{end ? formatDate(end) : "currently"}</span>
          <span className="whitespace-nowrap text-end">{formatDate(start)}</span>
        </div>
      </div>
    </div>
  );
};
