// "use client";
// interface XAxisBoxProps {
//   xLabels: string[];
// }

// export default function XAxisBox({ xLabels }: XAxisBoxProps) {
//   return (
//     <div
//       className="
//         absolute
//         top-[329.18px]  // top position
//         left-[91.7px]   // left position
//         w-[1274.01px]   // width
//         h-[54.97px]     // height
//         border-2        // border width
//         border-red-400
//         flex
//         justify-between
//         items-center
//         text-blue-600
//         font-semibold
//         bg-red
//       "
//     >
//       {xLabels.map((label, index) => (
//         <span key={index}>{label}</span>
//       ))}
//     </div>
//   );
// }
// interface XAxisBoxProps {
//   xLabels: string[];
// }

// export default function XAxisBox({ xLabels }: XAxisBoxProps) {
//   return (
//     <div
//       className="
//         absolute 
//         top-[329px] 
//         left-[92px] 
//         w-[1274px] 
//         h-[55px] 
//         border-2 
//         border-red-400 
//         flex 
//         justify-between 
//         items-center 
//         text-blue-600 
//         font-semibold 
//         bg-white-200
//       "
//     >
//       {xLabels.map((label, index) => (
//         <span key={index}>{label}</span>
//       ))}
//     </div>
//   );
// }



// interface XAxisBoxProps {
//   xLabels: string[];
// }

// export default function XAxisBox({ xLabels }: XAxisBoxProps) {
//   // EXACT LEFT POSITIONS from your Figma
//   const positions = [
//     91.7,   // Sep 12
//     291.53, // Sep 13
//     489.37, // Sep 14
//     689.2,  // Sep 15
//     888.04, // Sep 16
//     1085.87,// Sep 17
//     1278.71 // Sep 18
//   ];

//   // EXACT WIDTHS from your Figma
//   const widths = [74, 75, 74, 74, 75, 74, 87];

//   return (
//     <>
//       {xLabels.map((label, index) => (
//         <div
//           key={index}
//           className="
//             absolute
//             top-[329.18px]
//             h-[54.97px]
//             border-2
//             border-black
//             flex
//             items-center
//             justify-center
//           "
//           style={{
//             left: `${positions[index]}px`,
//             width: `${widths[index]}px`,
//           }}
//         >
//         <span
//   className="
//     font-archivo 
//     font-normal 
//     text-[23.94px] 
//     leading-[100%] 
//     tracking-[0px] 
//     text-center 
//     whitespace-nowrap
//   "
// >
//   {label}
// </span>

//         </div>
//       ))}
//     </>
//   );
// }

interface XAxisBoxProps {
  xLabels: string[];
}

export default function XAxisBox({ xLabels }: XAxisBoxProps) {
  const positions = [
    91.7,   // Sep 12
    291.53, // Sep 13
    489.37, // Sep 14
    689.2,  // Sep 15
    888.04, // Sep 16
    1085.87,// Sep 17
    1278.71 // Sep 18
  ];

  const widths = [74, 75, 74, 74, 75, 74, 87];

  return (
    <>
      {xLabels.map((label, index) => (
        <div
          key={index}
          className="
            absolute
            top-[329.18px]
            h-[54.97px]
            
          
            flex
            flex-col
            items-center
            justify-start
          "
          style={{
            left: `${positions[index]}px`,
            width: `${widths[index]}px`,
          }}
        >

          {/* Vertical Line */}
          <div className="w-[2px] h-[5px] bg-black mt-[0px]"></div>

          {/* Label Text */}
          <span
            className="
              font-archivo
              font-normal
              text-[23.94px]
              leading-[100%]
              text-center
              mt-[2px]
              whitespace-nowrap
            "
          >
            {label}
          </span>
        </div>
      ))}
    </>
  );
}
