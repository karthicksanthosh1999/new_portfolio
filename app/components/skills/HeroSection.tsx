import StatsSection from "@/components/NumberCounter";
import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function HeroSection() {
  const mediaSe = [
    {
      title: "twiter",
      icon: <FaTwitter size={20} className="" />,
    },
    {
      title: "fb",
      icon: <FaFacebook size={20} className="" />,
    },
    {
      title: "twiter",
      icon: <FaLinkedin size={20} className="" />,
    },
    {
      title: "twiter",
      icon: <FaWhatsapp size={20} className="" />,
    },
  ];
  return (
    <>
      <section className="bg-[#321D5A] bg-[radial-gradient(circle,_rgba(50,_29,_90,_1)_0%,_rgba(0,_0,_0,_1)_74%)]">
        <div className="container mx-auto max-w-[1400px] px-5 py-10 flex md:flex-row flex-col lg:h-screen h-auto gap-10">
          {/* HEADING SECTION */}
          <div className="md:w-1/2 w-full space-y-5 flex items-start justify-center flex-col">
            <div>
              <h3 className="text-3xl font-bold text-white">I am Karthick.S</h3>
            </div>
            <div>
              <h1 className="md:text-6xl text-5xl bg-gradient-to-r py-3 from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text font-extrabold">
                Next-Level Software Developer
              </h1>
            </div>
            <div>
              <p className="text-xl text-white font-medium leading-normal tracking-wide">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </p>
            </div>
            <div className="flex gap-5 flex-wrap">
              <button className="py-2 px-5 flex items-center justify-center gap-5 text-blue-600 border border-blue-600 cursor-pointer transition duration-300 ease-in hover:bg-blue-600 rounded-full hover:text-white">
                Download
                <FaDownload />
              </button>
              <div className="flex items-center gap-5">
                {mediaSe &&
                  mediaSe.map((item, idx) => (
                    <Link
                      href={""}
                      key={idx}
                      className="border border-blue-600 p-3 rounded-full hover:bg-blue-600 text-blue-600 hover:text-white transition duration-300 ease-in">
                      {item.icon}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          {/* IMAGE SECTION */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="border border-blue-600 h-[400px] flex items-center justify-center lg:w-sm w-xs max-w-full rounded-lg transition duration-300 ease-in sm:rotate-[10deg] hover:rotate-0 rotate-0 overflow-hidden">
              <Image
                src="/logo.png"
                alt="logo"
                width={400}
                height={400}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
        <StatsSection />
      </section>
    </>
  );
}
