import Link from "next/link";
import React from "react";

export const pageList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Resume",
    link: "/resume",
  },
  {
    title: "Testimonials",
    link: "/testimonials",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function Footer() {
  return (
    <section className="bg-[#0F0715] h-[335px] w-full flex flex-col items-center justify-center">
      <img src="" alt="" />
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center flex-wrap justify-center gap-5">
          {pageList &&
            pageList.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="hover:underline text-lg text-white font-semibold transition duration-300 ease-in">
                {item.title}
              </Link>
            ))}
        </div>
        <p className="text-lg font-medium text-gray-600">
          © 2024 All rights reserved by{" "}
          <span className="text-white hover:text-[#7C49E3] cursor-pointer transition duration-300 ease-in">
            JK-Ind
          </span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
