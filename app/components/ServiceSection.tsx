import React, { useState } from "react";
import ServicePageData from "@/public/data/service.json";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

const ServiceSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  const { push } = useRouter();

  const handleHover = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-3">
      <h1 className="bg-gradient-to-r from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text md:text-5xl text-4xl font-extrabold text-center py-2">
        My Recent Work
      </h1>

      <p className="text-white text-[17px] text-center w-full md:w-[700px] p-5">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key="services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-rows-4 cursor-pointer">
          {ServicePageData &&
            ServicePageData?.map((item, idx) => (
              <motion.div
                key={idx}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
                onMouseEnter={() => handleHover(idx)}
                onClick={() => push(`/service/${item.id}`)}
                className={`flex lg:flex-row flex-col lg:gap-20 sm:gap-5 gap-2 justify-between lg:items-center items-start border-b-2 sm:p-5 p-2 pt-10 bg-gradient-to-r transition duration-200 ease-in-out border-[#8750f7]/30 max-w-full mx-3 px-3
                        ${
                          activeSection === idx &&
                          "from-blue-500 via-[#8750f7] via-10% to-blue-950"
                        }`}>
                <div className="flex lg:gap-10 gap-5">
                  <div>
                    <h4
                      className={`${
                        activeSection === idx ? "text-white" : "text-[#8750f7]"
                      } text-2xl font-bold transition duration-200 ease-in-out`}>
                      0{idx + 1}
                    </h4>
                  </div>
                  <div>
                    <h5 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold text-white">
                      {item.title}
                    </h5>
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-lg w-full text-white">
                    {item.description}
                  </div>
                  <div className="sm:block hidden">
                    <BsArrowRight
                      size={35}
                      className={`rotate-[30deg] ${
                        activeSection === idx &&
                        "rotate-[360deg] text-[#8750f7] transition duration-300 ease-in-out"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServiceSection;
