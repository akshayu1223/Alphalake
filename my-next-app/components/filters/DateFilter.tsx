export default function DateFilter() {
  return (
    <div
      className="
        absolute 
        top-[38px] 
        left-[911px] 
        w-[175px] 
        h-[45px]
        bg-[#FEE9B2]
        flex items-center
        gap-[10px]
        rounded-[51.2px]
        px-[15px]
      "
    >
      {/* Calendar Icon */}
      <img
        src="/icons/calendar-outline.svg"
        alt="calendar"
        className="w-[24px] h-[24px]"
      />

      {/* Text */}
      <span
        className="
          font-archivo
          font-normal
          text-[18px]
          leading-none
          tracking-[0.02em]
          text-[#1E1E1E]
          whitespace-nowrap  
        "
      >
        Last Week
      </span>

      {/* Vector Arrow */}
      <img
        src="/icons/arrow-down.svg"
        alt="arrow"
        className="w-[15px] h-[8px]"
      />
    </div>
  );
}
