import { IExperience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Greetings, IGreetings } from "@/components/Greetings";
import { Header } from "@/components/Header";
import { Hero, IHero } from "@/components/Hero";
import { JobsCarousel } from "@/components/JobsCarousel";
import { LinkButton } from "@/components/LinkButton";
import { IProject, Project } from "@/components/Project";
import { client } from "@/contentful";
import { TEXTLANGS } from "@/language";
import Link from "next/link";
import React from "react";

export const revalidate = 60;

interface PageProps {
  params: {
    lang: string; // The locale will be available here
  };
}

const LANGUAGES = {
  en: "en-US",
  pt: "pt-BR",
};

export default async function Home({ params }: PageProps) {
  const { lang } = params;

  const language = LANGUAGES[lang as "pt" | "en"];

  const projects = (await client.getEntries({
    content_type: "project",
    locale: language,
  })) as unknown as { items: { fields: IProject }[] };

  const heros = (await client.getEntries({
    content_type: "hero",
    locale: language,
  })) as unknown as { items: { fields: IHero }[] };

  const greetings = (await client.getEntries({
    content_type: "greetings",
    locale: language,
  })) as unknown as { items: { fields: IGreetings }[] };

  const jobs = (await client.getEntries({
    content_type: "job",
    locale: language,
  })) as unknown as { items: { fields: IExperience }[] };

  return (
    <>
      <div className="flex flex-col gap-4 w-full max-w-[1440px] px-6 lg:px-16 py-6">
        <div className="flex w-full items-center justify-between">
          <Header lang={lang as "pt" | "en"} />
          <div className="flex gap-1">
            {Object.keys(LANGUAGES).map((language, i) => (
              <React.Fragment key={language}>
                <Link
                  className={`${
                    lang == language ? "font-bold underline" : "opacity-40"
                  }  hover:scale-105 transition duration-300`}
                  href={`/${language}`}
                >
                  {language}
                </Link>
                {i != Object.keys(LANGUAGES).length - 1 && (
                  <span className="opacity-40">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          <Hero
            hero={heros.items[0]}
            className="hidden lg:flex w-full max-w-[65%]"
          />
          <div className="flex flex-col w-full justify-between gap-6">
            <Greetings greetings={greetings.items[0]} />
            <Hero hero={heros.items[0]} className="lg:hidden" />
            <div className="flex flex-col gap-2">
              <LinkButton
                text={TEXTLANGS[lang as "en" | "pt"].header.about.text}
                href={TEXTLANGS[lang as "en" | "pt"].header.about.link}
              />
              <LinkButton
                text={TEXTLANGS[lang as "en" | "pt"].header.contact.text}
                href={TEXTLANGS[lang as "en" | "pt"].header.contact.link}
              />
            </div>
          </div>
        </div>
        <div className="border-b-1 border-[#cdcdcd70]" />
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4 grow-1 w-full lg:w-[40%]">
            <h2 className="text-[30px] font-bold">{TEXTLANGS[lang as "en" | "pt"].experiences.title}</h2>
            <div className="flex flex-col gap-4">
              <JobsCarousel jobs={jobs.items} />
            </div>
          </div>
          <div className="grow-1 flex flex-col gap-4 ">
            <h2 className="text-[30px] font-bold">{TEXTLANGS[lang as "en" | "pt"].projects.title}</h2>
            <div>
              {projects.items?.map((project: { fields: IProject }, i) => (
                <Project key={i} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { locale} = context; // Access locale here
//   // ... your data fetching logic using 'locale'
//   console.log('Server-side rendering for locale:', locale);

//   return {
//     props: {
//       serverLocale: locale, // Pass it as a prop to the component
//       // ... your fetched data
//     },
//   };
// }
