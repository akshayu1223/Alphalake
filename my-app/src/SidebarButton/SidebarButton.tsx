

import { Link, useLocation } from "react-router-dom";

function SidebarButton({ icon, label, to }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Active if the current URL matches this button's path
  const isActive =
    label === "Admin" || label === "Team Spotlight"
      ? currentPath.startsWith(to) // for nested routes
      : currentPath === to;

  const showArrow = label === "Admin" || label === "Team Spotlight";

  return (
    <Link to={to}>
      <div
        className={`
          w-[200px] h-[50px] 
          rounded-lg 
          flex items-center justify-between
          p-3 cursor-pointer
          ${isActive ? "bg-[#FFAFA3]" : "bg-rose-100 hover:bg-[#FFD1CC]"}
        `}
      >
        <div className="flex items-center gap-3">
          <i className={icon + " text-xs"}></i>
          <span className="text-sm">{label}</span>
        </div>

        {showArrow && <span className="text-black text-sm rotate-180">❯</span>}
      </div>
    </Link>
  );
}

export default SidebarButton;
