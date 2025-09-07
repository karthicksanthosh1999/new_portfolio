"use client";
import { BookOpenText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type TTitles = {
  title: string;
  link: string;
  id: string;
};

type TTabProps = {
  tabs: TTitles[];
};

function Tab({ tabs }: TTabProps) {
  const paramsId = useParams();

  return (
    <section>
      <div className="bg-[#140C1C] w-full h-full sm:p-5 p-3 rounded-lg">
        <h1 className="text-2xl font-semibold text-white uppercase">
          All Services
        </h1>
        <div className="flex flex-col gap-0 items-center justify-center w-full mt-5">
          {tabs &&
            tabs.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className={`m-2 p-3 rounded-lg hover:cursor-pointer w-full flex justify-between ${
                  paramsId.id === item.id ? "bg-[#8750F7]" : "bg-transparent"
                }`}>
                <div className="flex items-center gap-5">
                  <BookOpenText size={20} />
                  {item.title}
                </div>
                <ChevronRight size={20} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Tab;
