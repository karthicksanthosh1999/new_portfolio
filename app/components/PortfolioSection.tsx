import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import portfoliosData from "@/public/data/portfolio.json";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const PortfolioSection = () => {
  const { push } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleRotate = (id: string) => {
    portfoliosData?.portfolios.map((item) =>
      item?.id === id ? setIsHovered(true) : setIsHovered(false)
    );
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col space-y-3">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="bg-gradient-to-r from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text md:text-5xl text-4xl font-extrabold text-center py-2">
            My Projects
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="text-white text-[17px] text-center w-full md:w-[700px] px-5">
            Building modern web applications with React and Next.js for seamless
            user experiences.
          </motion.p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 px-2">
        {portfoliosData?.portfolios &&
          portfoliosData?.portfolios.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              key={idx}
              className="group bg-[#140C1C] lg:w-xl w-full flex items-end pt-10 lg:px-10 md:px-6 px-3 justify-center relative max-w-full">
              <img
                onMouseEnter={() => handleRotate(item?.id)}
                onMouseLeave={() => handleRotate(item?.id)}
                src={item.image}
                alt="image"
                className="w-full"
              />
              <motion.div
                onClick={() => push(`/blog/${item?.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ ease: "easeOut", duration: 0.4 }}
                className="absolute flex p-5 rounded-2xl items-center bg-gradient-to-r from-blue-500 via-[#8750f7] via-10% to-blue-950 md:bottom-15  md:left-15  md:right-15 bottom-5 left-5 right-5 justify-between cursor-pointer">
                <div className="space-y-3 ">
                  <h1 className="text-white lg:text-3xl md:text-2xl text-xl font-bold">
                    {item.title ?? "N/A"}
                  </h1>
                  <p className="text-sm text-white font-normal">
                    {item?.tabDescription ?? "N/A"}
                  </p>
                </div>
                <div>
                  <BsArrowRight
                    size={35}
                    className={`rotate-[30deg] ${"group-hover:rotate-[360deg] text-[#fff] transition duration-300 ease-in-out"}`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default PortfolioSection;
