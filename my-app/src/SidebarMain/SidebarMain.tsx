
import { useLocation } from "react-router-dom";
import SidebarButton from "../SidebarButton";

export default function SidebarMain() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-[227px] bg-[#FFF6F5] pt-[19px] pl-[13px] flex flex-col gap-4">

      <SidebarButton
        icon="fa-regular fa-star"
        label="Rate My Shift"
        to="/rate-shift"
        active={currentPath === "/rate-shift"}
      />
      <SidebarButton
        icon="fa-solid fa-users"
        label="My Team"
        to="/my-team"
        active={currentPath === "/my-team"}
      />
      <SidebarButton
        icon="fa-regular fa-message"
        label="Follow Ups"
        to="/follow-ups"
        active={currentPath === "/follow-ups"}
      />
      <SidebarButton
        icon="fa-regular fa-file-lines"
        label="Management Report"
        to="/management-report"
        active={currentPath === "/management-report"}
      />

      {/* ADMIN */}
      <SidebarButton
        icon="fa-solid fa-user-shield"
        label="Admin"
        to="/admin"
        active={currentPath.startsWith("/admin")}
      />

      <SidebarButton
        icon="fa-solid fa-user-group"
        label="Team Spotlight"
        to="/team-spotlight"
        active={currentPath === "/team-spotlight"}
      />
    </div>
  );
}
