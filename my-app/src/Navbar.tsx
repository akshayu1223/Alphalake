// export default function NavbarLeft() {
//   return (
//     <div
//       style={{
//         width: "239px",
//         height: "61px",
//         position: "relative",
//         opacity: 1,
//       }}
//       className="flex items-center"
//     >
//       {/* MENU IMAGE WITH ANIMATION */}
//       <img
//         src="/menu-icon.png"  // <-- your image
//         alt="menu"
//         style={{
//           width: "24px",
//           height: "24px",
//           position: "absolute",
//           top: "18.5px",
//         }}
//         className="transition-all ease-out duration-300 active:scale-90 cursor-pointer"
//         onClick={() => {
//           // You can add sidebar toggle or anything here
//           console.log("Menu clicked");
//         }}
//       />

//       {/* LOGO IMAGE */}
//       <img
//         src="/logo.png"  // <-- your logo
//         alt="logo"
//         style={{
//           width: "162px",
//           height: "43px",
//           position: "absolute",
//           top: "19px",
//           left: "58px",
//           objectFit: "contain",
//         }}
//       />
//     </div>
//   );
// }

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




// export default function Navbar({ toggleSidebar }) {
//   return (
//     <div className="w-full bg-pink-50 flex items-center justify-between px-4 py-3 shadow-sm">
//       {/* Left Section */}
//       <div className="flex items-center gap-3">
//         <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
//           &#9776;
//         </button>
//         <div className="flex items-center gap-1 text-xl font-semibold">
//           <span className="text-gray-800">RateMyShift</span>
//           <span className="text-yellow-500">😊</span>
//         </div>
//       </div>

//       {/* Center dotted line */}
//       <div className="flex-grow mx-10 border-b border-dotted border-blue-400"></div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Notification */}
//         <div className="relative">
//           <span className="text-2xl text-gray-600">🔔</span>
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
//             1
//           </span>
//         </div>

//         {/* User Profile */}
//         <div className="flex items-center gap-2 bg-pink-200 px-3 py-1 rounded-full">
//           <img src="https://i.pravatar.cc/50" className="w-8 h-8 rounded-full" />
//           <span className="text-gray-700 text-xl">▾</span>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function Navbar({ toggleSidebar }) {
//   return (
//     <div className="w-full h-[80px] bg-pink-50 flex items-center justify-between px-4 py-3 shadow-sm fixed top-0 left-0 z-20">
      
//       {/* Left Section */}
//       <div className="flex items-center gap-3">
//         <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
//           &#9776;
//         </button>
//         <div className="flex items-center gap-1 text-xl font-semibold">
//           <span className="text-gray-800">RateMyShift</span>
//           <span className="text-yellow-500">😊</span>
//         </div>
//       </div>

//       {/* Center dotted line */}
//       <div className="flex-grow mx-10 border-b border-dotted border-blue-400"></div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <span className="text-2xl text-gray-600">🔔</span>
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
//             1
//           </span>
//         </div>

//         <div className="flex items-center gap-2 bg-pink-200 px-3 py-1 rounded-full">
//           <img src="https://i.pravatar.cc/50" className="w-8 h-8 rounded-full" />
//           <span className="text-gray-700 text-xl">▾</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Navbar({ toggleSidebar }) {
//   return (
//     <div
//       className="w-full h-[80px] bg-[#FFF6F5] flex items-center justify-between px-6 fixed top-0 left-0 z-20 border-b border-pink-100"
//       style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
//     >
//       {/* Left Section */}
//       <div className="flex items-center gap-4">
//         <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
//           &#9776;
//         </button>

//         <div className="flex items-center gap-2 text-xl font-semibold">
//           <span className="text-gray-800">RateMyShift</span>
//           <span className="text-yellow-500 text-2xl">😊</span>
//         </div>
//       </div>

//       {/* Center dotted line */}
//       <div className="flex-grow mx-10 border-b border-dotted border-[#C8A5C9]"></div>

//       {/* Right Section */}
//       <div className="flex items-center gap-6">
//         {/* Notification */}
//         <div className="relative">
//           <span className="text-2xl text-gray-600">🔔</span>
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
//             1
//           </span>
//         </div>

//         {/* Profile */}
//         <div className="flex items-center gap-2 bg-pink-200 px-3 py-1 rounded-full">
//           <img
//             src="https://i.pravatar.cc/50"
//             className="w-8 h-8 rounded-full"
//           />
//           <span className="text-gray-700 text-lg">▾</span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default function Navbar({ toggleSidebar }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "80px",
//         background: "#FFF6F5",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         paddingLeft: "25px",
//         paddingRight: "25px",
//         boxShadow: "0px 4px 11.2px 0px #00000040",
//       }}
//     >
//       {/* ---------- LEFT SECTION ---------- */}
//       <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//         <img
//           src="/hamburger-icon.svg"
//           alt="menu"
//           onClick={toggleSidebar}
//           style={{ width: "24px", height: "24px", cursor: "pointer" }}
//         />

//         <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//           <span style={{ fontFamily: "Archivo", fontSize: "20px", fontWeight: 600 }}>
//             RateMyShift
//           </span>
//           <span style={{ fontSize: "22px" }}>😊</span>
//         </div>
//       </div>

//       {/* ---------- CENTER DOTTED LINE ---------- */}
//       <div
//         style={{
//           flexGrow: 1,
//           marginLeft: "40px",
//           marginRight: "40px",
//           borderBottom: "2px dotted #7AB3FF",
//         }}
//       ></div>

//       {/* ---------- RIGHT SECTION ---------- */}
//       <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
//         {/* Bell Icon */}
//         <div style={{ position: "relative" }}>
//           <img
//             src="/bell.svg"
//             style={{ width: "24px", height: "24px" }}
//           />

//           {/* Red Notification Dot */}
//           <div
//             style={{
//               width: "10px",
//               height: "10px",
//               background: "red",
//               borderRadius: "50%",
//               position: "absolute",
//               top: "-2px",
//               right: "-2px",
//             }}
//           ></div>
//         </div>

//         {/* Profile */}
//         <div
//           style={{
//             width: "50px",
//             height: "50px",
//             background: "#FFD8D1",
//             borderRadius: "50%",
//             overflow: "hidden",
//           }}
//         >
//           <img
//             src="https://i.pravatar.cc/50"
//             style={{ width: "100%", height: "100%" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
