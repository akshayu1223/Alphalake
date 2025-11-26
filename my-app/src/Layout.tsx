// import { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// export default function Layout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen w-full ">
//       {/* Sidebar */}
//       <Sidebar open={sidebarOpen} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//         {/* Page content */}
//         <div className="flex-1 overflow-clip">{children}</div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// export default function Layout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   // Convert children into an array (safe for fragment, single child, multiple children)
//   const childArray = Array.isArray(children) ? children : [children];

//   // Check ANY child component for hideLayout prop
//   const hideLayout = childArray.some(child => child?.props?.hideLayout);

//   return (
//     <div className="flex h-screen w-full">

//       {/* Sidebar (hidden for UserManagement) */}
//       {!hideLayout && <Sidebar open={sidebarOpen} />}

//       <div className="flex-1 flex flex-col">

//         {/* Navbar (hidden for UserManagement) */}
//         {!hideLayout && (
//           <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//         )}

//         <div className="flex-1 overflow-clip">{children}</div>

//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Convert children into an array (safe for fragment, single child, multiple children)
  const childArray = Array.isArray(children) ? children : [children];

  // Check ANY child component for hideLayout prop
  const hideLayout = childArray.some(child => child?.props?.hideLayout);

  return (
    <div className="flex h-screen w-full">

      {/* Sidebar only if NOT hideLayout */}
      {!hideLayout && <Sidebar open={sidebarOpen} />}

      <div className="flex-1 flex flex-col">

        {/* Navbar only if NOT hideLayout */}
        {!hideLayout && (
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        )}

        <div className="flex-1 overflow-clip">{children}</div>
      </div>
    </div>
  );
}
