"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div
      className={` bg-slate-50 z-10 rounded-xl shadow-lg drop-shadow-lg p-2 ${containerStyles}`}
    >
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}+
        </div>
        <div className="max-w-[70px] leading-none text-[14px] font-medium text-gray-600">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
