"use client";
import HeroSection from "@/app/components/HeroSection";
import React, { useEffect, useState } from "react";
import service_heror from "@/public/images/service_hero.jpeg";
import { useParams } from "next/navigation";
import { TBlogtype } from "@/app/pageTypes/blogs";
import blogs from "@/public/data/blogs.json";
import RecentPosts from "../components/RecentPosts";
import { Separator } from "@/components/ui/separator";
import { IoMdCheckmarkCircle } from "react-icons/io";

function Page() {
  const [portfolio, setPortfolio] = useState<TBlogtype | null>(null);
  const [remainingPortfolios, setRemainingPortfolios] = useState<TBlogtype[]>(
    []
  );

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const selected = blogs.find((item) => item.id === id) || null;
    setPortfolio(selected);

    const others = blogs.filter((item) => item.id !== id);
    setRemainingPortfolios(others);
  }, [id]);

  const breadCrums = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: portfolio?.title ?? "N/A",
      link: `/blog/${portfolio?.id}`,
    },
  ];

  return (
    <>
      <HeroSection
        title={portfolio?.title ?? "N/A"}
        breadcrums={breadCrums}
        image={service_heror}
      />
      <div className="bg-[#050709]">
        <section className="container max-w-[1400px] mx-auto">
          <div className="w-full flex items-start xl:flex-row flex-col justify-between pt-10 gap-10 px-5">
            <div className="xl:w-6xl w-full">
              <img
                src={portfolio?.image}
                alt={portfolio?.title}
                className="w-full rounded-lg max-w-fit"
              />
              {/* PROJECT TITLE*/}
              <div className="w-full ">
                <h1 className="md:text-4xl text-3xl font-bold text-white py-5">
                  {portfolio?.title ?? "N/A"}
                </h1>
              </div>
              {/* PROJECT DESCRIPTION */}
              <div className="container mx-auto">
                {portfolio?.description.map((item, idx) => (
                  <p className="text-white text-lg font-normal py-2" key={idx}>
                    {item}
                  </p>
                ))}
                {/* PROJECT STORY & APPROACH */}
                <div className="space-y-1 mt-5">
                  <h1 className="text-2xl font-bold text-white">Key Points</h1>
                  <div className="mt-5">
                    {portfolio?.keyPoints.map((item, idx) => (
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircle
                          className="text-[#7E4AE7]"
                          size={20}
                        />
                        <p
                          className="text-lg font-normal text-white py-1"
                          key={idx}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* PROJECT STORY & APPROACH */}
                <div className="space-y-1 mt-5">
                  <h1 className="text-2xl font-bold text-white">Conclusion</h1>
                  <div className="mt-5">
                    {portfolio?.conclusion.map((item, idx) => (
                      <p
                        className="text-lg font-normal text-white py-1"
                        key={idx}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                {/* TAGS */}
                <div className="space-y-5 py-10">
                  <Separator />
                  <div className="flex items-center justify-start gap-5">
                    <h1 className="text-2xl font-semibold text-white">Tags:</h1>
                    <div className="flex items-center gap-3 flex-wrap">
                      {portfolio?.tags?.map((item, idx) => (
                        <h6
                          key={idx}
                          className="px-5 py-2 bg-[#2A1454] hover:bg-[#7E4AE7] transition duration-300 ease-in rounded-full w-fit">
                          {item}
                        </h6>
                      ))}
                    </div>
                  </div>
                  <Separator />
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              {remainingPortfolios.map((item, idx) => (
                <RecentPosts
                  key={idx}
                  title={item?.title ?? "N/A"}
                  link={item?.title ?? "N/A"}
                  date={item?.date ?? "N/A"}
                  image={item?.image ?? "N/A"}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Page;
