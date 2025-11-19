
import { useState } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Check if the current route wants to hide the layout
  const outlet = useOutlet();
  const hideLayout = outlet?.props?.hideLayout;

  return (
    <div className="flex h-screen w-full">

      {/* Sidebar only if NOT hideLayout */}
      {!hideLayout && <Sidebar open={sidebarOpen} />}

      <div className="flex-1 flex flex-col">

        {/* Navbar only if NOT hideLayout */}
        {!hideLayout && (
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        )}

        {/* Page Content */}
        <div className="flex-1 overflow-clip">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
