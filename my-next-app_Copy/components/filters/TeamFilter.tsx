// export default function TeamFilter() {
//   return (
//     <div
//       className="
//         absolute 
//         top-[38px] 
//         left-[1101px] 
//         w-[136px] 
//         h-[45px]
//         bg-[#FEE9B2]
//         flex items-center
//         gap-[10px]
//         rounded-[51.2px]
//         px-[15px]
//         py-[8.73px]
//       "
//     >
//       {/* Text */}
//       <span
//         className="
//           font-archivo
//           font-normal
//           text-[18px]
//           leading-none
//           tracking-[0.02em]
//           text-[#1E1E1E]
//         "
//       >
//         All Teams
//       </span>

//       {/* Arrow */}
//       <img
//         src="/icons/arrow-down.svg"
//         alt="arrow"
//         className="w-[15px] h-[8px]"
//       />
//     </div>
//   );
// }

export default function TeamFilter() {
  return (
    <>
      {/* ---- TOP BUTTON (UNCHANGED) ---- */}
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
          z-[9999]
        "
      >
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

        <img
          src="/icons/arrow_up.svg"
          alt="arrow"
          className="w-[15px] h-[8px]"
        />
      </div>

      {/* ---- DROPDOWN BOX (NEW) ---- */}
      <div
        className="
          absolute
          top-[87px]
          left-[1101px]
          w-[136px]
          h-[127px]
          bg-white
          border border-[#858585]
          rounded-[10px]
          shadow-[0px_4px_4px_0px_#0000000F]
          z-[99999]
        "
      >
        {/* All Teams */}
        <div
          className="
            w-full
            h-[43px]
            border-b border-[#858585]
            flex items-center
            px-[14px]
            justify-between
          "
        >
          <span
            className="
              font-archivo
              font-semibold
              text-[16.62px]
              tracking-[0.02em]
              text-[#858585]
            "
          >
            All Teams
          </span>

          <img
            src="/icons/Vector (1).svg"
            className="w-[16px] h-[16px]"
            alt="selected"
          />
        </div>

        {/* Team 1 */}
        <div
          className="
            w-full
            h-[43px]
            border-b border-[#858585]
            flex items-center
            px-[14px]
          "
        >
          <span
            className="
              font-archivo
              font-semibold
              text-[16.62px]
              tracking-[0.02em]
              text-[#858585]
            "
          >
            Team 1
          </span>
        </div>

        {/* Team 2 */}
        <div
          className="
            w-full
            h-[43px]
            flex items-center
            px-[14px]
          "
        >
          <span
            className="
              font-archivo
              font-semibold
              text-[16.62px]
              tracking-[0.02em]
              text-[#858585]
            "
          >
            Team 2
          </span>
        </div>
      </div>
    </>
  );
}
