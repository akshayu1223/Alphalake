export default function SidebarAdmin() {
  return (
    <div className="absolute left-[227px] top-0 w-[140px] h-[1037px] bg-[#FFAFA3]">
      <div
        className="absolute top-[37px] left-[17px] w-[106px] h-[165px]
        rounded-[6px] flex flex-col gap-[10px] text-[14px] font-medium
        px-[10px] py-[10px] text-white"
      >
        <span>Dashboard</span>
        <span>Users</span>
        <span>Organisations</span>
        <span>Teams</span>
        <span>Shifts</span>
      </div>
    </div>
  );
}
