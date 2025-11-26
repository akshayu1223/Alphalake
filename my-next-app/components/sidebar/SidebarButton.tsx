"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarButton({ icon, label, to }) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={`
        w-[201px] h-[50px] rounded-[9px] flex items-center
        gap-3 px-[13px] cursor-pointer transition-all duration-200 ease-out
        ${isActive ? "bg-[#FFAFA3]" : "bg-[#FFD8D1]"}
        text-[#1E1E1E]
      `}
    >
      <i className={`${icon} text-[12px] text-[#1E1E1E]`}></i>

      <span className="text-[16px] font-archivo font-normal text-[#1E1E1E]">
        {label}
      </span>
    </Link>
  );
}
