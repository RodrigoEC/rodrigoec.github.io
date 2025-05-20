import { Experience, IExperience } from "@/components/Experience";
import { Greetings, IGreetings } from "@/components/Greetings";
import { Header } from "@/components/Header";
import { Hero, IHero } from "@/components/Hero";
import { LinkButton } from "@/components/LinkButton";
import { IProject, Project } from "@/components/Project";
import { client } from "@/contentful";

export const revalidate = 60;

export default async function Home() {
  const projects = (await client.getEntries({
    content_type: "project",
  })) as unknown as { items: { fields: IProject }[] };

  const heros = (await client.getEntries({
    content_type: "hero",
  })) as unknown as { items: { fields: IHero }[] };

  const greetings = (await client.getEntries({
    content_type: "greetings",
  })) as unknown as { items: { fields: IGreetings }[] };

  const jobs = (await client.getEntries({
    content_type: "job",
  })) as unknown as { items: { fields: IExperience }[] };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1440px] p-4">
      <Header />

      <div className="flex gap-6">
        <Hero hero={heros.items[0]} className="hidden lg:flex w-[80%]" />
        <div className="flex flex-col justify-between gap-6">
          <Greetings greetings={greetings.items[0]} />
          <Hero hero={heros.items[0]} className="lg:hidden" />
          <div className="flex flex-col gap-2">
            <LinkButton text="About me" href="/about" />
            <LinkButton text="Contact Me" href="/contact" />
          </div>
        </div>
      </div>
      <div className="border-b-1 border-[#cdcdcd70]" />
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex flex-col gap-4 grow-1 min-w-[500px]">
          <h2 className="text-[30px] font-bold">Experiences</h2>
          <div className="w-full">
            {jobs.items?.map((position: { fields: IExperience }, i) => (
              <Experience key={i} experience={position} />
            ))}
          </div>
        </div>
        <div className="grow-1 flex flex-col gap-4 ">
          <h2 className="text-[30px] font-bold">Projects</h2>
          <div>
            {projects.items?.map((project: { fields: IProject }, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
