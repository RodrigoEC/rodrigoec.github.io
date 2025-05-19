import Link from "next/link";
import { Icon } from "./Icon";

export interface IProject {
  title: string;
  description: string;
  link: string;
}

export const Project = ({ project }: { project: { fields: IProject } }) => {
  const { title, description, link } = project.fields;

  return (
    <Link href={link}>
      <div className="box-border rounded-lg flex flex-col gap-1 w-full hover:bg-[#cdcdcd30] p-3 cursor-pointer border-b border-b-[#cdcdcd70] transition duration-300">
        <div className="flex gap-4 items-center w-full justify-between">
          <h3 className="text-[20px]">{title}</h3>
          <Icon id="arrow" size={14} />
        </div>
        <p className="text-[14px] opacity-60">{description}</p>
      </div>
    </Link>
  );
};
