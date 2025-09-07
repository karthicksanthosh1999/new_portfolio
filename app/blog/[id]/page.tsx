"use client";
import HeroSection from "@/app/components/HeroSection";
import React, { useEffect, useState } from "react";
import service_heror from "@/public/images/service_hero.jpeg";
import { useParams } from "next/navigation";
import { TPortfoliotype } from "@/app/@types/portfolioTypes";
import portfolioData from "@/public/data/portfolio.json";
import Link from "next/link";

function Page() {
  const breadCrums = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Portfolios",
      link: "/portfolio",
    },
    {
      title: "Deloitte",
      link: "/1",
    },
  ];

  const [portfolio, setPortfolio] = useState<TPortfoliotype | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const selected = portfolioData.portfolios.find((item) => item.id === id);
    if (selected) {
      const normalized: TPortfoliotype = {
        ...selected,
        client: (selected as any).Client ?? selected.client,
        startDate: (selected as any)["start Date"] ?? selected.startDate,
        endDate: (selected as any)["end Date"] ?? selected.endDate,
      };
      setPortfolio(normalized);
    } else {
      setPortfolio(null);
    }
  }, [id]);

  return (
    <>
      <HeroSection
        title="Deloitte"
        breadcrums={breadCrums}
        image={service_heror}
      />
      <div className="bg-[#050709]">
        <section className="container max-w-[1400px] mx-auto px-5">
          <img
            src={portfolio?.image}
            alt={portfolio?.title}
            className="w-full"
          />
          <div className="w-full flex md:flex-row flex-col gap-5 items-center justify-between pt-10">
            <div className="md:w-1/2 w-full space-y-5">
              <h1 className="text-5xl font-bold text-white">
                {portfolio?.title ?? "N/A"}
              </h1>
              <p className="text-white font-normal text-base">
                {portfolio?.description ?? "N/A"}
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-2 place-items-center">
                <div className="space-y-5">
                  <div className="">
                    <h5 className="text-base font-normal text-white">
                      Category
                    </h5>
                    <h4 className="text-lg font-semibold text-white">
                      {portfolio?.category ?? "N/A"}
                    </h4>
                  </div>
                  <div className="">
                    <h5 className="text-base font-normal text-white">Client</h5>
                    <h4 className="text-lg font-semibold text-white">
                      {portfolio?.client ?? "N/A"}
                    </h4>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="">
                    <h5 className="text-base font-normal text-white">
                      Start Date
                    </h5>
                    <h4 className="text-lg font-semibold text-white">
                      {portfolio?.startDate ?? "N/A"}
                    </h4>
                  </div>
                  <div className="">
                    <h5 className="text-base font-normal text-white">
                      Designer
                    </h5>
                    <h4 className="text-lg font-semibold text-white">
                      {portfolio?.designer ?? "N/A"}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LIVE PREVIEW BUTTON */}
          <div className="py-5">
            <Link
              href={portfolio?.livePreviewLink ?? ""}
              className="cursor-pointer px-6 py-3 w-full rounded-full bg-gradient-to-r from-[#8F38DA] to-[#321963] hover:from-[#050709] hover:to-[#8F38DA] text-white text-lg font-semibold shadow-md hover:opacity-90 transition duration-300">
              Live Preview
            </Link>
          </div>
          {/* PROJECT DESCRIPTION */}
          <div className="container mx-auto max-w-[1400px]">
            <div>
              <h1 className="text-white text-5xl font-bold mb-5">
                {portfolio?.projectDescriptionTitle}
              </h1>
              {portfolio?.projectDescription.map((item, idx) => (
                <p className="text-white text-lg font-medium py-3" key={idx}>
                  {item}
                </p>
              ))}
            </div>
            {/* PROJECT STORY & APPROACH */}
            <div className="space-y-5 mt-5">
              {portfolio?.categoeys.map((item, idx) => (
                <div
                  key={idx}
                  className="grid sm:grid-cols-3 grid-cols-1 gap-5 space-x-5">
                  <h1 className="text-white font-bold text-xl uppercase">
                    {item.title}
                  </h1>
                  <p className="text-lg font-normal text-white col-span-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            {/* PAGINATION */}
            <div className="bg-[#8750F7] h-auto w-full"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
