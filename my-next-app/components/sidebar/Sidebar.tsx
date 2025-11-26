"use client";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  const menu = [
    { icon: "fa-regular fa-star", label: "Rate My Shift", to: "/rate-shift" },
    { icon: "fa-solid fa-users", label: "My Team", to: "/my-team" },
    { icon: "fa-regular fa-message", label: "Follow Ups", to: "/follow-ups" },
    { icon: "fa-solid fa-file-lines", label: "Management Report", to: "/management-report" },
    { icon: "fa-solid fa-user-shield", label: "Admin", to: "/admin" },
    { icon: "fa-solid fa-user-group", label: "Team Spotlight", to: "/team-spotlight" },
    { icon: "fa-solid fa-chart-line", label: "Snr Dashboard", to: "/snr-dashboard" },
  ];

  return (
    <div className="w-[227px] h-[1037px] bg-[#FFF6F5] fixed top-[80px] left-0 p-3 flex flex-col gap-3">

      {menu.map((item, i) => (
        <SidebarButton
          key={i}
          icon={item.icon}
          label={item.label}
          to={item.to}
        />
      ))}

    </div>
  );
}
