export default function Box1() {
  return (
    <div
      className="
        relative
        w-[220px]
        h-[144px]
        bg-[#FAFAFA]
        border border-[#FAFAFA] border-[0.5px]
        rounded-[20px]
        shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
      "
    >
      {/* Inner Container */}
      <div
        className="
          absolute
          top-[17px]
          left-[14px]
          w-[176px]
          h-[110px]
        "
      >
        {/* Title */}
        <p
          className="
            font-archivo
            font-medium
            text-[24px]
            leading-[109%]
            tracking-[0.05em]
            text-[#1E1E1E]
          "
        >
          Total Ratings
        </p>

        {/* Number */}
        <p
          className="
            mt-[5px]
            font-archivo
            font-medium
            text-[50px]
            leading-[109%]
            tracking-[0.05em]
            text-[#1E1E1E]
          "
        >
          371
        </p>

        {/* Subtext */}
        <p
          className="
            absolute
            top-[90px]
            left-0
                whitespace-nowrap
            font-archivo
            font-normal
            text-[18px]
            leading-[109%]
            tracking-[0.05em]
            text-[#96AC40]
          "
        >
          +29 from last period
        </p>
      </div>
    </div>
  );
}
