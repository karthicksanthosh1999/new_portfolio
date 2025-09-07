import React from "react";

import experiienceAndEducation from "@/public/data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto container flex items-center justify-center md:flex-row flex-col gap-5 px-5">
        <div className="w-full space-y-5">
          <h1 className="bg-gradient-to-r from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text lg:text-5xl text-4xl font-extrabold text-center py-2">
            My Experience
          </h1>
          {/* Content Area */}
          <div className="max-w-xl space-y-5">
            {experiienceAndEducation?.experiences.map((item, idx) => (
              <div className="group" key={idx}>
                <div className="bg-[#140C1C] group-hover:bg-gradient-to-r group-hover:from-[#8750f7] p-4 sm:p-5 rounded-2xl transition duration-300 ease-in w-full">
                  <div className="flex flex-wrap justify-between text-sm sm:text-base text-white mb-2 gap-2">
                    <p className="text-2xl font-bold text-[#8750f7] group-hover:text-white transition duration-200 ease-in-out">
                      {item.years}
                    </p>
                  </div>
                  <h3 className="uppercase xl:text-4xl tracking-wider sm:text-2xl text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-normal">{item?.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-5">
          <h1 className="bg-gradient-to-r from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text lg:text-5xl text-4xl font-extrabold text-center py-2">
            My Education
          </h1>
          {/* Content Area */}
          <div className="max-w-xl space-y-5">
            {experiienceAndEducation?.education.map((item, idx) => (
              <div className="group" key={idx}>
                <div className="bg-[#140C1C] group-hover:bg-gradient-to-r group-hover:from-[#8750f7] p-4 sm:p-5 rounded-2xl transition duration-300 ease-in w-full">
                  <div className="flex flex-wrap justify-between text-sm sm:text-base text-white mb-2 gap-2">
                    <p className="text-2xl font-bold text-[#8750f7] group-hover:text-white transition duration-200 ease-in-out">
                      {item.years}
                    </p>
                  </div>
                  <h3 className="uppercase xl:text-4xl tracking-wider sm:text-2xl text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-normal">{item?.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
