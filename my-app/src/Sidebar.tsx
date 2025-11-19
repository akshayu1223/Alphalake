

// import SidebarButton from "./SidebarButton"



// export default function Sidebar() {
//   return (
//     <div
//       className="fixed top-[60px] left-0 flex z-1"
//       style={{ height: "1037px", width: "367px" }}
//     >
//       {/* ---------------- LEFT SECTION ---------------- */}
//       <div
//         className="flex flex-col gap-4"
//         style={{
//           width: "227px",
//           height: "1037px",
//           backgroundColor: "#ffffffff",
//           paddingTop: "19px",
//           paddingLeft: "13px",
//         }}
//       >
//          <SidebarButton icon="fa-regular fa-star" label="Rate My Shift" to="/rate-shift" />
// <SidebarButton icon="fa-solid fa-users" label="My Team" to="/my-team" />
// <SidebarButton icon="fa-regular fa-message" label="Follow Ups" to="/follow-ups" />
// <SidebarButton icon="fa-regular fa-file-lines" label="Management Report" to="/management-report" />
// <SidebarButton icon="fa-solid fa-user-shield" label="Admin" to="/admin" />
// <SidebarButton icon="fa-solid fa-user-group" label="Team Spotlight" to="/team-spotlight" />

//       </div>

//       {/* ---------------- RIGHT SIDEBAR ---------------- */}
//       <div
//         style={{
//           width: "140px",
//           height: "1037px",
//           backgroundColor: "#FFAFA3", // FULL RIGHT SIDEBAR COLOR
//           position: "absolute",
//           left: "227px",
//           top: "0px",
//         }}
//       >
//         {/* INNER WHITE BOX */}
//         <div
//           style={{
//             width: "106px",
//             height: "165px",
//             backgroundColor: "#FFFFFF", // WHITE BOX ONLY
//             position: "absolute",
//             top: "37px",
//             left: "17px",
//             borderRadius: "6px",
//             padding: "0 10px",

//             color: "#FFFFFF", // ONLY TEXT IS WHITE
//             background: "transparent", // TEXT HAS NO BACKGROUND
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             fontSize: "14px",
//             fontWeight: "500",
//           }}
//         >
//           <span>Dashboard</span>
//           <span>Users</span>
//           <span>Organisations</span>
//           <span>Teams</span>
//           <span>Shifts</span>
//         </div>
//       </div>
//     </div>
//   );
// }


//2

// import SidebarButton from "./SidebarButton";
// import { useLocation } from "react-router-dom";

// export default function Sidebar() {
//   const location = useLocation();
//   const showAdminSidebar = location.pathname === "/admin";

//   return (
//     <div className="fixed top-[60px] left-0 h-[1037px] w-[367px] flex z-10">

//       {/* ---------------- LEFT SECTION ---------------- */}
//       <div
//         className="
//           w-[227px] 
//           h-[1037px] 
//           bg-[#FFF6F5] 
//           pt-[19px] 
//           pl-[13px] 
//           flex 
//           flex-col 
//           gap-4
//         "
//       >
//         <SidebarButton icon="fa-regular fa-star" label="Rate My Shift" to="/rate-shift" />
//         <SidebarButton icon="fa-solid fa-users" label="My Team" to="/my-team" />
//         <SidebarButton icon="fa-regular fa-message" label="Follow Ups" to="/follow-ups" />
//         <SidebarButton icon="fa-regular fa-file-lines" label="Management Report" to="/management-report" />
//         <SidebarButton icon="fa-solid fa-user-shield"  label="Admin" to="/admin" />
//         <SidebarButton icon="fa-solid fa-user-group" label="Team Spotlight" to="/team-spotlight" />
//       </div>

//       {/* ---------------- RIGHT SECTION (ADMIN EXTRA BAR) ---------------- */}
//      {showAdminSidebar && (
//   <div
//     className="
//       absolute 
//       left-[227px] 
//       top-0 
//       w-[140px] 
//       h-[1037px] 
//       bg-[#FFAFA3]
//     "
//   >
//     {/* INNER WHITE BOX */}
//     <div
//       className="
//         absolute 
//         top-[37px] 
//         left-[17px] 
//         w-[106px] 
//         h-[165px] 
    
//         rounded-[6px] 
//         flex 
//         flex-col 
//         gap-[10px] 
//         text-[14px] 
//         font-medium 
//         px-[10px] 
//         py-[10px]
//         text-white         /* <-- only text is white */
//       "
//     >
//       <span>Dashboard</span>
//       <span>Users</span>
//       <span>Organisations</span>
//       <span>Teams</span>
//       <span>Shifts</span>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }


import SidebarButton from "./SidebarButton";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  // show admin sidebar on /admin and its subroutes
  const showAdminSidebar = location.pathname.startsWith("/admin");

  return (
    <div className="fixed top-[60px] left-0 h-[1037px] w-[367px] flex z-10">

      <div className="w-[227px] bg-[#FFF6F5] pt-[19px] pl-[13px] flex flex-col gap-4">
        <SidebarButton icon="fa-regular fa-star" label="Rate My Shift" to="/rate-shift" />
        <SidebarButton icon="fa-solid fa-users" label="My Team" to="/my-team" />
        <SidebarButton icon="fa-regular fa-message" label="Follow Ups" to="/follow-ups" />
        <SidebarButton icon="fa-regular fa-file-lines" label="Management Report" to="/management-report" />

        {/* ADMIN now redirects to usermanagement */}
        <SidebarButton icon="fa-solid fa-user-shield" label="Admin" to="/admin/usermanagement" />

        <SidebarButton icon="fa-solid fa-user-group" label="Team Spotlight" to="/team-spotlight" />
      </div>

      {showAdminSidebar && (
        <div className="absolute left-[227px] top-0 w-[140px] h-[1037px] bg-[#FFAFA3]">
          <div className="absolute top-[37px] left-[17px] w-[106px] h-[165px]
            rounded-[6px] flex flex-col gap-[10px] text-[14px] font-medium
            px-[10px] py-[10px] text-white">
            <span>Dashboard</span>
            <span>Users</span>
            <span>Organisations</span>
            <span>Teams</span>
            <span>Shifts</span>
          </div>
        </div>
      )}

    </div>
  );
}
