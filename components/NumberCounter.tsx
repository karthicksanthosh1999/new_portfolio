import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    label: "Year of Experience",
    value: 2,
    suffix: "+",
  },
  {
    label: "Project Completed",
    value: 5,
    suffix: "+",
  },
  {
    label: "Happy Companies",
    value: 3,
    suffix: "+",
  },
];

export default function StatsSection() {
  return (
    <div className="py-20 bg-transparent text-white rounded-[40px] px-10 flex flex-wrap items-center justify-center md:mx-0 mx-3 gap-y-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center text-lg space-y-2 relative">
          <div className="text-5xl font-semibold text-white space-y-5">
            <AnimatedCounter targetNumber={stat.value} />
            {stat.suffix}
            <h5 className="text-[#808080] text-lg w-xs">{stat.label}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}
