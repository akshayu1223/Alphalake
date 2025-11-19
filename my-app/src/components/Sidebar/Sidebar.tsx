
import { useLocation } from "react-router-dom";
import SidebarMain from "../SidebarMain/SidebarMain";
import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";

export default function Sidebar() {
  const { pathname } = useLocation();

  // Hide ONLY for /admin/1
  const hideAdminSidebar = pathname === "/admin/1";

  // SHOW admin sidebar everywhere except /admin/1
  const showAdminSidebar = !hideAdminSidebar;

  return (
    <div className="fixed top-[60px] left-0 h-[1037px] w-[367px] flex z-10">
      <SidebarMain />

      {showAdminSidebar && <SidebarAdmin />}
    </div>
  );
}
