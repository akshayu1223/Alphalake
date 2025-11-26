export default function Box5() {
  return (
    <div
      className="
        relative
        w-[221px]
        h-[144px]
        bg-[#FAFAFA]
        border border-[#FAFAFA] border-[0.5px]
        rounded-[20px]
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
      "
    >
      {/* Title - Avg. Follow Up */}
      <p
        className="
          absolute
          top-[17px]
          left-[14px]
          w-[179px]
          h-[26px]
          font-archivo
          font-medium
          text-[24px]
          leading-[109%]
          tracking-[0.05em]
          text-[#1E1E1E]
          whitespace-nowrap
        "
      >
        Avg. Follow Up
      </p>

      {/* Big number - 3.2 */}
      <p
        className="
          absolute
          top-[48px]
          left-[14px]
          w-[77px]
          h-[54px]
          font-archivo
          font-medium
          text-[50px]
          leading-[109%]
          tracking-[0.05em]
          text-[#2F2F2F]
          whitespace-nowrap
        "
      >
        3.2
      </p>

      {/* Days text */}
      <p
        className="
          absolute
          top-[76px]
          left-[100px]
          w-[40px]
          h-[17px]
          font-archivo
          font-normal
          text-[16px]
          leading-[109%]
          tracking-[0.05em]
          text-[#858585]
          whitespace-nowrap
        "
      >
        Days
      </p>

      {/* Subtext - -0.5 from last period */}
      <p
        className="
          absolute
          top-[107px]
          left-[14px]
          w-[182px]
          h-[20px]
          font-archivo
          font-normal
          text-[18px]
          leading-[109%]
          tracking-[0.05em]
          text-[#F1756D]
          whitespace-nowrap
        "
      >
        -0.5 from last period
      </p>
    </div>
  );
}
