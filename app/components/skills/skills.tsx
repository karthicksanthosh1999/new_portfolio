import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import skills from "@/public/data/skills.json";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsLoading = false;

  return (
    <>
      {/* SKILLS SECTION */}
      <div className="lg:px-0 px-5 w-full flex items-center justify-center flex-col space-y-5 py-20">
        <div className="flex items-center justify-center flex-col space-y-3">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="bg-gradient-to-r from-[#8750f7] py-2 to-[white] inline-block text-transparent bg-clip-text md:text-5xl text-4xl font-extrabold text-center">
              My Skills
            </motion.h1>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="text-white text-[17px] text-center w-full md:w-[700px]">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {/* TOOLS SECTION */}
          {/* {skillsData && Array.isArray(skillsData?.response) ? (
            skillsData.response.map((item) => ( */}

          {skills ? (
            skills.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeIn", duration: 1 }}
                className="w-[180px] space-y-3 group"
                key={item.id}>
                <div className="bg-[#140C1C] group-hover:bg-[#2A1454] h-auto p-5 flex flex-col items-center justify-center gap-5 rounded-2xl border-2 border-[#140C1C] group-hover:border-[#8750f7] group-hover:border-2 transition duration-150 ease-in">
                  <div>
                    <img
                      src={item.icons}
                      alt="react"
                      className="h-20 w-20 grayscale-100 group-hover:grayscale-0 transition duration-200 ease-in group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-extrabold text-[18px] text-center text-gray-500 group-hover:text-[#8750f7] transition duration-150 ease-in">
                    {item.percentage}%
                  </h3>
                </div>
                <p className="text-xl font-normal text-center text-[#8750f7]">
                  {item.title}
                </p>
              </motion.div>
            ))
          ) : skillsLoading ? (
            <Skeleton />
          ) : (
            <div className="w-fit space-y-3 group">
              <div className="bg-[#140C1C] group-hover:bg-[#2A1454] h-auto p-5 flex flex-col items-center justify-center gap-5 rounded-2xl border-2 border-[#140C1C] group-hover:border-[#8750f7] transition duration-150 ease-in">
                <div>
                  <img
                    src="/react.png"
                    alt="react"
                    className="h-20 w-20 grayscale-100 group-hover:grayscale-0 transition duration-200 ease-in group-hover:scale-105 group-hover:animate-pulse"
                  />
                </div>
                <h3 className="font-extrabold text-[18px] text-center text-gray-500 group-hover:text-[#8750f7] transition duration-150 ease-in">
                  0%
                </h3>
              </div>
              <p className="text-xl font-normal text-center text-[#8750f7]">
                Add Skills
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
