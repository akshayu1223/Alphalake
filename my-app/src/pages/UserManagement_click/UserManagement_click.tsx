// import React, { useState } from "react";
// import Navbar from "../../components/Navbar"; // adjust path as needed
// import Sidebar from "../../components/Sidebar"; // optional, if you want sidebar

// export default function Usermanagement() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen w-full">
//       {/* Sidebar */}
//       <Sidebar open={sidebarOpen} />

//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//         {/* Page Content */}
//         <div className="flex-1 relative p-4">
//           {/* User Management Container */}
//           <div
//             className="
//               w-[1297px] h-[725px]
//               absolute top-[166px] left-[397px]
//               bg-white
//               border border-[#00000033]
//               rounded-[30px]
//               opacity-100
//             "
//           >
//             <h2 className="text-xl font-semibold p-4">Manage Users</h2>
//             {/* Add your tables/forms here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";

// // IMPORT UMHeader
// import UMHeader from "../User/UMHeader";

// export default function Usermanagement() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen w-full">
//       {/* Sidebar */}
//       <Sidebar open={sidebarOpen} />

//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//         {/* Page Content */}
//         <div className="flex-1 relative p-4">

//           {/* CALL THE UMHEADER HERE */}
//           <UMHeader />

//           {/* User Management Container */}
//           <div
//             className="
//               w-[1297px] h-[725px]
//               absolute top-[166px] left-[397px]
//               bg-white
//               border border-[#00000033]
//               rounded-[30px]
//               opacity-100
//             "
//           >
//             <h2 className="text-xl font-semibold p-4">Manage Users</h2>

//             {/* Add your tables/forms here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

// Correct import for UMHeader
import UMHeader from "../User/UMHeader";

export default function Usermanagement() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* PAGE HEADER */}
        <UMHeader />

        {/* PAGE CONTENT */}
        <div className="flex-1 relative p-4">
          <div
            className="
              w-[1297px] h-[725px]
              absolute top-[166px] left-[397px]
              bg-white border border-[#00000033]
              rounded-[30px] opacity-100
            "
          >
            <h2 className="text-xl font-semibold p-4">User Management Page</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
