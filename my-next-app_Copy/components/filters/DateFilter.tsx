  // export default function DateFilter() {
  //   return (
  //     <div
  //       className="
  //         absolute 
  //         top-[38px] 
  //         left-[911px] 
  //         w-[175px] 
  //         h-[45px]
  //         bg-[#FEE9B2]
  //         flex items-center
  //         gap-[10px]
  //         rounded-[51.2px]
  //         px-[15px]
  //       "
  //     >
  //       {/* Calendar Icon */}
  //       <img
  //         src="/icons/calendar-outline.svg"
  //         alt="calendar"
  //         className="w-[24px] h-[24px]"
  //       />

  //       {/* Text */}
  //       <span
  //         className="
  //           font-archivo
  //           font-normal
  //           text-[18px]
  //           leading-none
  //           tracking-[0.02em]
  //           text-[#1E1E1E]
  //           whitespace-nowrap  
  //         "
  //       >
  //         Last Week
  //       </span>

  //       {/* Vector Arrow */}
  //       <img
  //         src="/icons/arrow-down.svg"
  //         alt="arrow"
  //         className="w-[15px] h-[8px]"
  //       />
  //     </div>
  //   );
  // }

  export default function DateFilter() {
  return (
    <>
      {/* Your original Date Filter Button */}
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
          z-[999]
        "
      >
        <img
          src="/icons/calendar-outline.svg"
          alt="calendar"
          className="w-[24px] h-[24px]"
        />

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

        <img
          src="/icons/arrow_up.svg"
          alt="arrow"
          className="w-[15px] h-[8px]"
        />
      </div>

      {/* 🔽 Dropdown Box */}
   {/* Dropdown Box */}
<div
  className="
    absolute
    top-[87px]
    left-[911px]
    w-[175px]
    h-[127px]
    bg-white
    rounded-[10px]
    border border-[#858585]
    shadow-[0px_4px_4px_0px_#0000000F]
    z-[999]
  "
>
  {/* Row 1 – Last Week */}
  <div className="w-full h-[43px] border-b border-[#858585] flex items-center">
    <span
      className="
        ml-[19px]
        text-[16.62px]
        font-archivo
        font-semibold
        tracking-[0.02em]
        text-[#858585]
      "
    >
      Last Week
    </span>
  </div>

  {/* Row 2 – Last 14 Days */}
  <div className="w-full h-[43px] border-b border-[#858585] flex items-center">
    <span
      className="
        ml-[19px]
        text-[16.62px]
        font-archivo
        font-semibold
        tracking-[0.02em]
       text-[#858585]
      "
    >
      Last 14 Days
    </span>
  </div>

  {/* Row 3 – Last Month */}
  <div className="w-full h-[43px] flex items-center">
    <span
      className="
        ml-[19px]
        text-[16.62px]
        font-archivo
        font-semibold
        tracking-[0.02em]
        text-[#858585]
      "
    >
      Last Month
    </span>
  </div>
</div>

    </>
  );
}
