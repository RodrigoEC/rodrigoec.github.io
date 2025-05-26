"use client";

import { Experience, IExperience } from "./Experience";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const JobsCarousel = ({ jobs }: { jobs: { fields: IExperience }[] }) => {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent className="h-[300px] md:h-[230px]">
        {jobs
          ?.sort(
            (a, b) =>
              new Date(b.fields.start).getTime() -
              new Date(a.fields.start).getTime()
          )
          .map((position: { fields: IExperience }, i) => (
            <CarouselItem key={i} className="basis-1/3 w-full ">
              <Experience experience={position} />
            </CarouselItem>
          ))}
      </CarouselContent>
      <div className="flex gap-4 w-full pt-2 justify-between">
        <CarouselPrevious className="grow cursor-pointer"/>
        <CarouselNext className="grow cursor-pointer"/>
      </div>
    </Carousel>
  );
};
