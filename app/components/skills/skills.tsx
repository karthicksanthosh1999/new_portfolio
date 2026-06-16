import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import skills from "@/public/data/skills.json";
import { motion, Variants } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Skills = () => {

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2 // delay between items
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  return (
    <>
      {/* SKILLS SECTION */}
      <div
        className="lg:px-0 px-5 w-full flex items-center justify-center flex-col space-y-5 py-20 overflow-hidden container mx-auto max-w-[1440px]"
        id="skill">
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

        <div className=" h-[60vh] md:h-[40vh] w-fit">
          <DotLottieReact
            src="/Aibrain.json"
            loop
            autoplay
          />
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {/* TOOLS SECTION */}
          {/* {skillsData && Array.isArray(skillsData?.response) ? (
            skillsData.response.map((item) => ( */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 items-center justify-center"
          >
            {skills.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="w-[180px] space-y-3 group"
              >
                <div className="animated-border bgColor h-auto p-5 flex flex-col items-center justify-center gap-5 rounded-2xl">
                  <div>
                    <img
                      src={item.icons}
                      alt={item.title}
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
            ))}
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Skills;
