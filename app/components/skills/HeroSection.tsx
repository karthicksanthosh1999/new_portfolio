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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export default function HeroSection() {
  const mediaSection = [
    {
      title: "twitter",
      link: "",
      icon: <FaTwitter size={20} className="" />,
    },
    {
      link: "Facebook",
      title: "fb",
      icon: <FaFacebook size={20} className="" />,
    },
    {
      title: "LinkedIn",
      link: "",
      icon: <FaLinkedin size={20} className="" />,
    },
    {
      title: "Whatsapp",
      link: "",
      icon: <FaWhatsapp size={20} className="" />,
    },
  ];
  return (
    <>
      <section className="bg-[#321D5A] bg-[radial-gradient(circle,_rgba(50,_29,_90,_1)_0%,_rgba(0,_0,_0,_1)_74%)] overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-5 py-10 flex md:flex-row flex-col lg:h-screen h-auto gap-10">
          {/* HEADING SECTION */}
          <div className="md:w-1/2 w-full space-y-5 flex items-start justify-center flex-col">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", duration: 0.1 }}
                className="text-3xl font-bold text-white">
                I am Karthick.S
              </motion.h3>
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className="md:text-6xl text-5xl bg-gradient-to-r py-3 from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text font-extrabold">
                Next-Level Software Developer
              </motion.h1>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className="text-xl text-white font-medium leading-normal tracking-wide">
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </motion.p>
            </div>
            <div className="flex gap-5 flex-wrap">
              <button className="py-2 px-5 flex items-center justify-center gap-5 text-blue-600 border border-blue-600 cursor-pointer transition duration-300 ease-in hover:bg-blue-600 rounded-full hover:text-white">
                Download
                <FaDownload />
              </button>
              <div className="flex items-center gap-5">
                {mediaSection &&
                  mediaSection.map((item, idx) => (
                    <TooltipProvider key={idx}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={item?.link}
                            className="border border-blue-600 p-3 rounded-full hover:bg-blue-600 text-blue-600 hover:text-white transition duration-300 ease-in">
                            {item.icon}
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          {item?.title ?? "N/A"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
              </div>
            </div>
          </div>
          {/* IMAGE SECTION */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="border border-blue-600 h-[400px] flex items-center justify-center lg:w-sm w-xs max-w-full rounded-lg transition duration-300 ease-in sm:rotate-[10deg] hover:rotate-0 rotate-0 overflow-hidden">
              <Image
                src="/logo.png"
                alt="logo"
                width={400}
                height={400}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
        <StatsSection />
      </section>
    </>
  );
}
