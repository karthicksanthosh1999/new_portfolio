"use client";

import Skills from "./components/skills/skills";
import HeroSection from "./components/skills/HeroSection";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ServiceSection from "./components/ServiceSection";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <div className="bg-[#0F0715] h-auto pt-10">
      <div className="">
        {/* HEADING SECTION */}
        <HeroSection />
      </div>
      {/* MY EXPERIENCE & EDUCATIONS SECTION */}
      <div className="w-full py-20">
        <Experience />
      </div>
      {/* PORTFOLIO & SERVICE SECTION */}
      <div className="bg-[#321D5A] bg-[radial-gradient(circle,_rgba(50,_29,_90,_1)_0%,_rgba(0,_0,_0,_1)_74%)]">
        {/* PORTFOLIO SECTION */}
        <div className="w-full flex items-center justify-center flex-col space-y-5 py-20">
          <PortfolioSection />
        </div>
        {/* SERVICES SECTION */}
        <div className="w-full pb-20 container mx-auto max-w-[1400px]">
          <ServiceSection />
        </div>
      </div>
      {/* SKILLS SECTION */}
      <Skills />
      {/* RECENT WORK SECTION */}
      <div className=" w-full flex items-center justify-center flex-col space-y-5 md:p-20 p-2 bg-[#0F0715]">
        <Portfolio />
      </div>
      {/* CONTACT FORM */}
      <div className="bg-black md:py-20 py-10">
        <div className="w-full container mx-auto max-w-[1400px]">
          <Contact />
        </div>
      </div>
    </div>
  );
}
