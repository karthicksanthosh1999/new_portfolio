import React from "react";
import blogs from "@/public/data/blogs.json";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Portfolio = () => {
  const { push } = useRouter();

  return (
    <>
      <div className="flex items-center justify-center flex-col space-y-3 overflow-hidden">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="bg-gradient-to-r from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text md:text-5xl text-4xl font-extrabold text-center py-1">
            Recent Blogs
          </motion.h1>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="text-white text-[17px] text-center w-full md:w-[700px]">
            This is my recent Blogs
          </motion.p>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center justify-center overflow-hidden">
        {blogs.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="group cursor-pointer w-full max-w-sm sm:max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              {/* Category Label */}
              <p className="absolute bg-[#2F175C] bg-gradient-to-r from-[#8750f7] text-white h-10 w-10 text-sm sm:text-base p-2 rounded-full top-2 left-2 z-10 flex items-center justify-center">
                {"AI"}
              </p>

              {/* Image */}
              <img
                src={item.image}
                alt="recentWork"
                className="w-full object-cover transition-transform duration-300 ease-in hover:scale-110 h-[350px]"
              />

              {/* Content Area */}
              <div
                onClick={() => push(`/portfolio/${item.id}`)}
                className="absolute bottom-3 left-3 right-3 bg-[#2F175C] group-hover:bg-gradient-to-r group-hover:from-[#8750f7] p-4 sm:p-5 rounded-2xl transition duration-300 ease-in">
                <div className="flex flex-wrap justify-between text-sm sm:text-base text-white mb-2 gap-2">
                  <p>{item.date ?? "N/A"}</p>
                  <p>Commands</p>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1">
                  {item.title ?? "N/A"}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
