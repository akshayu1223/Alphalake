// export default function ExportButton() {
//   return (
//     <button
//       className="
//         absolute
//         top-[38px]
//         left-[1252px]
//         w-[149px]
//         h-[45px]
//         bg-[#F2A35E]
//         rounded-[51.2px]
//         flex
//         items-center
//         justify-center
//         gap-[20px]
//         px-[30px]
//         py-[8.73px]
//       "
//     >
//       <span
//         className="
//           font-archivo
//           font-bold
//           text-[16.62px]
//           leading-none
//           tracking-[0.02em]
//           text-white
//         "
//       >
//         EXPORT
//       </span>
//     </button>
//   );
// }

export default function ExportButton() {
  return (
    <>
      {/* 🔸 Your Original Button — NOT CHANGED */}
      <button
        className="
          absolute
          top-[38px]
          left-[1252px]
          w-[149px]
          h-[45px]
          bg-[#F2A35E]
          rounded-[51.2px]
          flex
          items-center
          justify-center
          gap-[20px]
          px-[30px]
          py-[8.73px]
          z-[9999]
        "
      >
        <span
          className="
            font-archivo
            font-bold
            text-[16.62px]
            leading-none
            tracking-[0.02em]
            text-white
          "
        >
          EXPORT
        </span>
      </button>

      {/* 🔸 DROPDOWN BOX (NEW) — IN FRONT */}
      <div
        className="
          absolute
          top-[87px]
          left-[1252px]
          w-[149px]
          h-[88px]
          bg-white
          border border-[#858585]
          rounded-[10px]
          shadow-[0px_4px_4px_0px_#0000000F]
          z-[99999]
        "
      >
        {/* Excel (CSV) */}
        <div
          className="
            w-full
            h-[43px]
            border-b border-[#858585]
            flex items-center
            px-[19px]
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
            Excel (CSV)
          </span>
        </div>

        {/* PDF */}
        <div
          className="
            w-full
            h-[43px]
            flex items-center
            px-[19px]
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
            PDF
          </span>
        </div>
      </div>
    </>
  );
}
