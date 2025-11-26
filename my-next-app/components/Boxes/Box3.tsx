// export default function Box3() {
//   return (
//     <div
//       className="
//         relative
//         w-[220px]
//         h-[144px]
//         bg-[#FAFAFA]
//         border border-[#FAFAFA] border-[0.5px]
//         rounded-[20px]
//         shadow-[3.8px_5.07px_12.17px_-7.6px_rgba(0,0,0,0.25)]
//       "
//     >
//       {/* Inner container */}
//       <div
//         className="
//           absolute
//           top-[17px]
//           left-[14px]
//           w-[201px]
//           h-[110px]
//         "
//       >
//         {/* Title */}
//         <p
//           className="
//             font-archivo
//             font-medium
//             text-[24px]
//             tracking-[0.05em]
//             leading-[109%]
//             text-[#1E1E1E]
//             whitespace-nowrap
//           "
//         >
//           Follow Ups Done
//         </p>

//         {/* 93% */}
//         <p
//           className="
//             absolute
//             top-[48px]
//             left-[14px]
//             font-archivo
//             font-medium
//             text-[50px]
//             tracking-[0.05em]
//             leading-[109%]
//             text-[#2F2F2F]
//             whitespace-nowrap
//           "
//         >
//           93%
//         </p>

//         {/* (112/121) */}
//         <p
//           className="
//             absolute
//             top-[76px]
//             left-[131px]
//             font-archivo
//             font-normal
//             text-[16px]
//             tracking-[0.05em]
//             leading-[109%]
//             text-[#858585]
//             whitespace-nowrap
//           "
//         >
//           (112/121)
//         </p>

//         {/* -2% from last period */}
//         <p
//           className="
//             absolute
//             top-[107px]
//             left-[14px]
//             font-archivo
//             font-normal
//             text-[18px]
//             tracking-[0.05em]
//             leading-[109%]
//             text-[#F1756D]
//             whitespace-nowrap
//           "
//         >
//           -2% from last period
//         </p>
//       </div>
//     </div>
//   );
// }

export default function Box3() {
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
      {/* Title */}
      <p
        className="
          absolute
          top-[17px]
          left-[14px]
          w-[201px]
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
        Follow Ups Done
      </p>

      {/* Main Number - 93% */}
      <p
        className="
          absolute
          top-[48px]
          left-[14px]
          w-[111px]
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
        93%
      </p>

      {/* Sub-value - (112/121) */}
      <p
        className="
          absolute
          top-[76px]
          left-[131px]
          w-[75px]
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
        (112/121)
      </p>

      {/* Footer text - -2% from last period */}
      <p
        className="
          absolute
          top-[107px]
          left-[14px]
          w-[178px]
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
        -2% from last period
      </p>
    </div>
  );
}
