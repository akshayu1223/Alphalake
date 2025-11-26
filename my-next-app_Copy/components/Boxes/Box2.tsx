// export default function Box2() {
//   return (
//     <div
//       className="
//         absolute
//         top-[107px]
//         left-[264px]
//         w-[221px]
//         h-[144px]
//         bg-[#FAFAFA]
//         border border-[#FAFAFA] border-[0.5px]
//         rounded-[20px]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_#00000040]
//         relative
//       "
//     >
//       {/* Inner container */}
//       <div
//         className="
//           absolute
//           top-[17px]
//           left-[14px]
//           w-[193px]
//           h-[110px]
//         "
//       >
//         {/* Title */}
//         <p
//           className="
//             font-archivo
//             font-medium
//             text-[24px]
//             leading-[109%]
//             tracking-[0.05em]
//             text-[#1E1E1E]
//             absolute
//             top-[0px]
//             left-[0px]
//             w-[193px]
//             h-[26px]
//           "
//         >
//           Follow Ups Req.
//         </p>

//         {/* Number */}
//         <p
//           className="
//             font-archivo
//             font-medium
//             text-[50px]
//             leading-[109%]
//             tracking-[0.05em]
//             absolute
//             top-[48px]
//             left-[0px]
//             w-[91px]
//             h-[54px]
//             text-[#1E1E1E]
//           "
//         >
//           121
//         </p>

//         {/* Subtext */}
//         <p
//           className="
//             font-archivo
//             font-normal
//             text-[18px]
//             leading-[109%]
//             tracking-[0.05em]
//             absolute
//             top-[90px]
//             left-[0px]
//             text-[#96AC40]
//             whitespace-nowrap
//           "
//         >
//           -14 from last period
//         </p>
//       </div>
//     </div>
//   );
// }
export default function Box2() {
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
            whitespace-nowrap
          "
        >
          Follow Ups Req.
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
          121
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
          -14 from last period
        </p>
      </div>
    </div>
  );
}
