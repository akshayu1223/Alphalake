// export default function UMHeader() { return ( <div className=" absolute top-[80px] left-[227px] right-0 h-[40px] bg-white border-b border-[#1D286733] shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)] flex items-center pl-[15px] font-archivo text-[20px] font-light text-black " > 👤 User Management </div> ); }

import { useNavigate } from "react-router-dom";

export default function UMHeader() {
  const navigate = useNavigate();

  return (
    <div
      className="
        absolute top-[80px] left-[227px] right-0
        h-[40px] bg-white
        border-b border-[#1D286733]
        shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
        flex items-center pl-[15px]
        font-archivo text-[20px] font-light text-black
        cursor-pointer
        hover:bg-[#FFAFA3] transition
      "
      onClick={() => navigate("/admin/usermanagement")} // navigate to a page
    >
      👤 User Management
    </div>
  );
}
