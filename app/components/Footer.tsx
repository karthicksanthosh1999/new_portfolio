"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export const pageList = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Skills",
    link: "/#skill",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

function Footer() {
  const { push } = useRouter();
  return (
    <section className="bg-[#0F0715] h-[335px] w-full flex flex-col items-center justify-center gap-5">
      <Image
        src="/logo.png"
        alt="logo"
        height={100}
        width={100}
        className="cursor-pointer"
        onClick={() => push("/")}
      />
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center flex-wrap justify-center gap-5">
          {pageList &&
            pageList.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className={`hover:underline text-lg text-white font-semibold transition duration-300 ease-in`}>
                {item.title}
              </Link>
            ))}
        </div>
        <p className="text-lg font-medium text-gray-600">
          © 2024 All rights reserved by{" "}
          <span className="text-white hover:text-[#7C49E3] cursor-pointer transition duration-300 ease-in">
            JK-TECH
          </span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
