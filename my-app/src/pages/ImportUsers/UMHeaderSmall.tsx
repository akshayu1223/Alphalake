import { useNavigate } from "react-router-dom";

export default function UMHeaderSmall() {
  const navigate = useNavigate();

  return (
    <div
      className="
        absolute top-[80px] left-[367px] right-0
        h-[30px] bg-white
        border-b border-[#1D286733]
        shadow-[2px_2px_6px_-3px_rgba(0,0,0,0.25)]
        flex items-center pl-[10px]
        font-archivo text-[16px] font-light text-black
        cursor-pointer
        hover:bg-[#FFAFA3] transition
      "
      onClick={() => navigate("/admin/usermanagement")} // optional
    >
      👤 User Management
    </div>
  );
}
