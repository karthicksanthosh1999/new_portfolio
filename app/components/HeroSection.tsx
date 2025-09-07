import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type TBreadCrumsProps = {
  title: string;
  link: string;
};

type THeroSectionProps = {
  image: StaticImageData;
  title: string;
  breadcrums: TBreadCrumsProps[];
};

const HeroSection: FC<THeroSectionProps> = ({ breadcrums, image, title }) => {
  return (
    <div className="relative">
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/40 z-10" />
      {/* Background Image */}
      <img
        src={image.src}
        alt="img"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] object-cover object-center"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title ?? "N/A"}
        </h1>

        <div className="flex flex-wrap gap-3 sm:gap-5 items-center justify-center mt-4">
          {breadcrums &&
            breadcrums.map((item, idx) => (
              <Link
                key={idx}
                className="text-sm sm:text-base md:text-lg font-semibold text-white hover:underline"
                href={item.link}>
                {item.title ?? "N/A"}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
