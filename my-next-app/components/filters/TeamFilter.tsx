export default function TeamFilter() {
  return (
    <div
      className="
        absolute 
        top-[38px] 
        left-[1101px] 
        w-[136px] 
        h-[45px]
        bg-[#FEE9B2]
        flex items-center
        gap-[10px]
        rounded-[51.2px]
        px-[15px]
        py-[8.73px]
      "
    >
      {/* Text */}
      <span
        className="
          font-archivo
          font-normal
          text-[18px]
          leading-none
          tracking-[0.02em]
          text-[#1E1E1E]
        "
      >
        All Teams
      </span>

      {/* Arrow */}
      <img
        src="/icons/arrow-down.svg"
        alt="arrow"
        className="w-[15px] h-[8px]"
      />
    </div>
  );
}
