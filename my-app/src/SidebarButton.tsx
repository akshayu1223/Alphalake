// import { Link } from "react-router-dom";

// function SidebarButton({ icon, label, to }) {
//     const isAdmin = label === "Admin";
//   return (
//     <Link to={to}>
// <div className="w-[200px] h-[50px] bg-rose-100 rounded-lg flex items-center gap-3 p-3 hover:bg-[#FFAFA3] cursor-pointer">

//         <i className={icon + " text-xs"}></i>
//         <span className="text-sm">{label}</span>
//            {/* Arrow ONLY for Admin */}
//         {isAdmin && (
//           <span
//             className="
//               absolute
//               top-[19px]
//               left-[180px]
//               w-[6px]
//               h-[12px]
//               rotate-180
//               text-black
//             "
//           >
//             ❯
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// }

// export default SidebarButton;
import { Link } from "react-router-dom";

function SidebarButton({ icon, label, to }) {
  // Show arrow for Admin and Team Spotlight
  const showArrow = label === "Admin" || label === "Team Spotlight";

  return (
    <Link to={to}>
      <div
        className="
          w-[200px] h-[50px] 
          bg-rose-100 
          rounded-lg 
          flex items-center 
          justify-between      /* arrow stays inside */
          p-3 
          hover:bg-[#FFAFA3]   /* your hover color */
          cursor-pointer
        "
      >

        {/* LEFT SIDE: icon + text */}
        <div className="flex items-center gap-3">
          <i className={icon + ' text-xs'}></i>
          <span className="text-sm">{label}</span>
        </div>

        {/* RIGHT-SIDE ARROW */}
        {showArrow && (
          <span className="text-black text-sm rotate-180">
            ❯
          </span>
        )}

      </div>
    </Link>
  );
}

export default SidebarButton;
