// // components/charts/YAxisBox.tsx
// "use client";

// interface YAxisBoxProps {
//   yLabels: (string | number)[];
// }

// export default function YAxisBox({ yLabels = [] }: YAxisBoxProps) {
//   return (
//     <div
//       className="
//         absolute
//         top-[2.91px]
//         left-[78.81px]
//         w-[50.865234375px]
//         h-[336.8231201171875px]
//         border-2
//         border-gray-600
//         flex
//         flex-col
//         justify-between
//         text-blue-600
//         font-semibold
//       "
//     >
//       {yLabels.slice().reverse().map((label, index) => (
//         <span key={index}>{label}</span>
//       ))}
//     </div>
//   );
// }

// "use client"; interface YAxisBoxProps { yLabels: (string | number)[]; } export default function YAxisBox({ yLabels = [] }: YAxisBoxProps) { return ( <div className=" absolute top-[2.91px] left-[78.81px] w-[50.865234375px] h-[336.8231201171875px] border-2 border-gray-600 flex flex-col justify-between text-blue-600 font-semibold " > {yLabels.slice().reverse().map((label, index) => ( <span key={index}>{label}</span> ))} </div> ); }

// export default function YAxisBox() {
//   const yAxisItems = [
//     { value: "60", top: 2.91, left: 79.8, width: 28 },
//     { value: "45", top: 74.33, left: 80.8, width: 27 },
//     { value: "30", top: 154.13, left: 78.81, width: 28 },
//     { value: "15", top: 233.93, left: 80.79, width: 27 },
//     { value: "0",  top: 313.73, left: 92.77, width: 14 },
//   ];

//   return (
//     <>
//       {yAxisItems.map((item, index) => (
//         <div
//           key={index}
//           className="
//             absolute
//             h-[26px]
//             flex
//             items-center
//             justify-end
//             gap-2
//           "
//           style={{
//             top: `${item.top}px`,
//             left: `${item.left}px`,
//             width: `${item.width}px`,
//           }}
//         >

//           {/* Number */}
//           <span
//             className="
//               font-archivo
//               font-normal
//               text-[23.94px]
//               leading-[100%]
//               whitespace-nowrap
//               text-right
//             "
//           >
//             {item.value}
//           </span>

//           {/* INLINE vertical line */}
//             <div className="ml-1 w-[20px] h-[2px] bg-black"></div>
//         </div>
//       ))}
//     </>
//   );
// }
export default function YAxisBox() {
  const yAxisItems = [
    { value: "60", top: "top-[2.91px]" },
    { value: "45", top: "top-[74.33px]" },
    { value: "30", top: "top-[154.13px]" },
    { value: "15", top: "top-[233.93px]" },
    { value: "0",  top: "top-[313.73px]" },
  ];

  return (
    <div
      className="
        absolute
        w-[50.865px]
        h-[336.823px]
        top-[2.91px]
        left-[78.81px]
      "
    >
      {/* MAIN VERTICAL LINE (RIGHT SIDE) */}
    

      {/* LABELS + TICKS */}
      {yAxisItems.map((item) => (
        <div
          key={item.value}
          className={`absolute flex items-center ${item.top}`}
        >
          {/* NUMBER LEFT */}
          <span
            className="
              font-archivo
              font-normal
              text-[23.94px]
              leading-[100%]
              text-right
              w-[32px]
            "
          >
            {item.value}
          </span>

          {/* TICK MARK ON THE RIGHT (touching the axis) */}
          <div className="w-[5px] h-[2px] bg-black ml-[14px]"></div>
        </div>
      ))}
    </div>
  );
}
