// export default function SnrHeader() {
//   return (
//     <div
//       className="
//         absolute
//         top-[80px]
//         left-[227px]
//         w-[1501px]
//         h-[40px]
//         bg-[#FAFAFA]
//         border-b border-[#1D286733]
//         shadow-[3px_4px_9.6px_-6px_#00000040]
//       "
//     >
//       <div
//         className="
//           absolute
//           top-[12px]
//           left-[30px]
//           w-[132px]
//           h-[17px]
//           flex items-center
//           gap-[11px]
//         "
//       >
  
//       </div>
//     </div>
//   );
// }
export default function Header() {
  return (
    <div
      className="
        absolute
        top-[80px]
        left-[227px]
        w-[1501px]
        h-[40px]
        bg-[#FAFAFA]
        border-b border-[#1D286733]
        shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
      "
    >
      <div
        className="
          absolute
          top-[12px]
          left-[30px]
          w-[132px]
          h-[17px]
          flex items-center
          gap-[11px]
        "
      >

        {/* ICON — exactly 14×15 px */}
        <i
          className="
            eos-icons
            text-[10px]
            w-[14px]
            h-[15px]
            flex
            items-center
            justify-center
            leading-none
          "
        >
          admin_outlined
        </i>

        {/* TEXT — exactly 107×17 px */}
        <span
          className="
            w-[107px]
            h-[17px]
            text-[#1E1E1E]
            font-archivo
            text-[16px]
            font-normal
            leading-[100%]
            tracking-[0px]
            whitespace-nowrap
          "
        >
          Snr Dashboard
        </span>

      </div>
    </div>
  );
}
