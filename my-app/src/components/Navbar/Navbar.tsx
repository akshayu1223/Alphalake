
export default function Navbar() {
  return (
    <div className="
      w-full h-[61px] fixed top-0 left-0 z-50 
      bg-[#FFECEC] shadow-md
      flex items-center justify-between
      pr-5
    ">
      
      {/* LEFT NAV */}
      <div className="w-[239px] h-[61px] relative flex items-center gap-4 pl-6">
        {/* Menu Icon */}
        <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>

        {/* Logo */}
        <img 
          src="/logo.png" 
          className="w-[162px] h-[43px]" 
        />
      </div>

      {/* RIGHT NAV */}
      <div className="flex items-center gap-6 pr-4">

        {/* NOTIFICATION BELL + COUNT */}
        <div className="relative cursor-pointer">
          <i className="fa-regular fa-bell text-[22px] text-gray-600"></i>

          {/* Badge */}
          <span 
            className="
              absolute -top-1 -right-2 
              bg-red-500 text-white text-[10px] font-bold
              w-[16px] h-[16px] rounded-full
              flex items-center justify-center
            "
          >
            1
          </span>
        </div>

        {/* PROFILE BUTTON */}
        <div className="relative w-[78px] h-[53px] bg-[#FFD8D1] rounded-[41px] cursor-pointer">
          
          {/* Profile Image */}
          <div className="absolute top-[7.5px] left-[8.5px] w-[38px] h-[38px] rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/100" className="w-full h-full" />
          </div>

          {/* Dropdown arrow */}
          <div className="absolute top-[22px] left-[55px] text-[14px] text-[#F1756D]">
            ▼
          </div>
        </div>
      </div>
    </div>
  );
}


