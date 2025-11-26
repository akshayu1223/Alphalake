// export default function ImportUsers() {
//   return (
//     <div className="ml-[240px] p-6">  {/* SHIFT CONTENT TO RIGHT */}

//       {/* Page Heading */}
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">
//         Import Users
//       </h2>

//       {/* Description */}
//       <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
//         Upload a CSV or Excel file with a list of user emails. The first row should
//         be a header. You can also choose to upload a first name and surname if you
//         prefer to do this via the upload tool. Alternatively, you can assign names
//         to emails at the next step. If you wish bulk upload names, column headers
//         must match <b>"First Name"</b> and <b>"Surname"</b> exactly.
//       </p>

//       {/* Upload Box */}
//       <div className="border border-gray-300 rounded-2xl bg-white shadow-sm p-10 mx-auto max-w-4xl flex flex-col items-center justify-center">

//         {/* Upload Icon */}
//         <div className="bg-[#d9dd8a] p-6 rounded-full flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="white"
//             className="w-14 h-14"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4.5 12.75h15m-12-3 4.5-4.5 4.5 4.5m-4.5-4.5v12"
//             />
//           </svg>
//         </div>

//         {/* Upload Text */}
//         <p className="mt-5 text-gray-700 text-lg">
//           <span className="text-blue-600 underline cursor-pointer">
//             Upload
//           </span>{" "}
//           or drag the CSV or Excel file containing user emails.
//         </p>
//       </div>
//     </div>
//   );
// }


// export default function ImportUsers() {
//   return (
//     <div className="ml-[240px] p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">Import Users</h2>
//       <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
//         Upload a CSV or Excel file with a list of user emails. The first row should
//         be a header. You can also choose to upload a first name and surname if you
//         prefer. Column headers must match <b>"First Name"</b> and <b>"Surname"</b>{" "}
//         exactly.
//       </p>

//       <div className="border border-gray-300 rounded-2xl bg-white shadow-sm p-10 mx-auto max-w-4xl flex flex-col items-center justify-center">
//         <div className="bg-[#d9dd8a] p-6 rounded-full flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="white"
//             className="w-14 h-14"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4.5 12.75h15m-12-3 4.5-4.5 4.5 4.5m-4.5-4.5v12"
//             />
//           </svg>
//         </div>
//         <p className="mt-5 text-gray-700 text-lg">
//           <span className="text-blue-600 underline cursor-pointer">Upload</span> or
//           drag the CSV or Excel file containing user emails.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function ImportUsers() {
//   return (
//     <div className="relative" style={{ marginLeft: "367px", marginTop: "80px" }}>

//       {/* TOP HEADER BAR */}
//       <div
//         style={{
//           width: "1361px",
//           height: "40px",
//           background: "#FAFAFA",
//           borderBottom: "1px solid #1D286733",
//           boxShadow: "3px 4px 9.6px -6px #00000040",
//           position: "absolute",
//           top: "0px",
//           left: "0px",
//           display: "flex",
//           alignItems: "center",
//           paddingLeft: "30px",
//           color: "#5f5f5f"
//         }}
//       >
//         👤 User Management
//       </div>

//       {/* PAGE TITLE */}
//       <h2
//         style={{
//           position: "absolute",
//           top: "96px",
//           left: "30px",
//           fontSize: "22px",
//           fontWeight: "600",
//           color: "#2d2d2d"
//         }}
//       >
//         Import Users
//       </h2>

//       {/* DESCRIPTION TEXT */}
//       <p
//         style={{
//           width: "1280px",
//           height: "66px",
//           position: "absolute",
//           top: "140px",
//           left: "30px",
//           fontSize: "15px",
//           lineHeight: "22px",
//           color: "#666"
//         }}
//       >
//         Upload a CSV or Excel file with a list of user emails. The first row should be a header.
//   You can also choose to upload a first name and surname if you prefer to do this via the upload tool.
//   Alternatively, you can assign names to emails at the next step.
//   If you wish bulk upload names, column headers must match <b>"First Name"</b> and <b>"Surname"</b> exactly.

//       </p>

//       {/* MAIN WHITE UPLOAD BOX */}
//       <div
//         style={{
//           width: "1299px",
//           height: "434px",
//           background: "#FFFFFF",
//           border: "1px solid #E5E5E5",
//           borderRadius: "30px",
//           boxShadow: "3px 4px 9.6px -6px #00000040",
//           position: "absolute",
//           top: "230px",
//           left: "30px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//       >
//         {/* Upload Icon Circle */}
//         <div
//           style={{
//             background: "#d9dd8a",
//             padding: "24px",
//             borderRadius: "100px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="white"
//             style={{ width: "80px", height: "80px" }}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4.5 12.75h15m-12-3 4.5-4.5 4.5 4.5m-4.5-4.5v12"
//             />
//           </svg>
//         </div>

//         {/* Upload Text */}
//         <p
//           style={{
//             marginTop: "25px",
//             fontSize: "18px",
//             color: "#555"
//           }}
//         >
//           <span
//             style={{
//               color: "#2563eb",
//               textDecoration: "underline",
//               cursor: "pointer"
//             }}
//           >
//             Upload
//           </span>{" "}
//           or drag the CSV or Excel file containing user emails.
//         </p>
//       </div>
//     </div>
//   );
// }
// // 
// export default function ImportUsers() {
//   return (
//     <div>

//       {/* ---------------- USER MANAGEMENT BAR ---------------- */}
//       <div
//         style={{
//           width: "1361px",
//           height: "40px",
//           position: "absolute",
//           top: "80px",
//           left: "367px",
//           background: "#FAFAFA",       // ✅ ONLY THIS HAS #FAFAFA
//           borderBottom: "1px solid #1D286733",
//           boxShadow: "3px 4px 9.6px -6px #00000040",
//           display: "flex",
//           alignItems: "center",
//           paddingLeft: "15px",
//           fontFamily: "Archivo",
//           fontSize: "18px",
//           color: "#000000",
//         }}
//       >
//         👤 User Management
//       </div>

//       {/* ---------------- IMPORT USERS TITLE ---------------- */}
//       <div
//         style={{
//           width: "156px",
//           height: "26px",
//           position: "absolute",
//           top: "160px",
//           left: "400px",
//           fontFamily: "Archivo",
//           fontWeight: 600,
//           fontSize: "24px",
//           letterSpacing: "5%",
//           lineHeight: "109%",
//           color: "#000000",
//           background: "#FFFFFF",       // stays white
//         }}
//       >
//         Import Users
//       </div>

//       {/* ---------------- DESCRIPTION TEXT ---------------- */}
//       <div
//         style={{
//           width: "1280px",
//           height: "66px",
//           position: "absolute",
//           top: "196px",
//           left: "400px",
//           fontFamily: "Archivo",
//           fontWeight: 300,
//           fontSize: "20px",
//           letterSpacing: "2%",
//           lineHeight: "109%",
//           color: "#000000",
//           background: "#FFFFFF",       // stays white
//         }}
//       >
//         Upload a CSV or Excel file with a list of user emails. The first row
//         should be a header. You can also choose to upload a first name and
//         surname if you prefer to do this via the upload tool. Alternatively, you
//         can assign names to emails at the next step. If you wish bulk upload
//         names, column headers must match <b>"First Name"</b> and <b>"Surname"</b>{" "}
//         exactly.
//       </div>

//       {/* ---------------- UPLOAD BOX ---------------- */}
//       <div
//         style={{
//           width: "1299px",
//           height: "434px",
//           position: "absolute",
//           top: "289px",
//           left: "397px",
//           borderRadius: "30px",
//           background: "#FFFFFF",       // stays white
//           border: "1px solid #00000033",
//           boxShadow: "3px 4px 9.6px -6px #00000040",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* Upload Icon */}
//         <div
//           style={{
//             background: "#d9dd8a",
//             padding: "25px",
//             borderRadius: "999px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="white"
//             style={{ width: "80px", height: "80px" }}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4.5 12.75h15m-12-3 4.5-4.5 4.5 4.5m-4.5-4.5v12"
//             />
//           </svg>
//         </div>

//         {/* Upload Text */}
//         <div
//           style={{
//             marginTop: "25px",
//             fontFamily: "Archivo",
//             fontWeight: 500,
//             fontSize: "20px",
//             letterSpacing: "2%",
//             color: "#000000",
//             background: "#FFFFFF",     // stays white
//           }}
//         >
//           <span
//             style={{
//               color: "#0066FF",
//               textDecoration: "underline",
//               cursor: "pointer",
//             }}
//           >
//             Upload
//           </span>{" "}
//           or drag the CSV or Excel file containing user emails.
//         </div>
//       </div>
//     </div>
//   );
// }



// Last final


import { UploadBox } from '/src/UploadBox.tsx';

export default function ImportUsers() {
  return (
    <div>

      {/* ---------------- USER MANAGEMENT BAR ---------------- */}
      <div
        className="
          right-0 w-auto
 h-[40px] 
          absolute top-[60px] left-[367px] 
          bg-white 
          border-b border-[#1D286733]
          shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)] 
          flex items-center 
          pl-[15px]
          font-archivo text-[20px] font-light text-black
        "
      >
        👤 User Management
      </div>

      {/* ---------------- IMPORT USERS TITLE ---------------- */}
      <div
        className="
          w-[156px] h-[26px]
          absolute top-[160px] left-[400px]
          font-archivo font-semibold text-[24px]
          leading-[109%] tracking-[5%]
          text-black bg-white
        "
      >
        Import Users
      </div>

      {/* ---------------- DESCRIPTION TEXT ---------------- */}
      <div
        className="
          w-[1280px] h-[66px]
          absolute top-[196px] left-[400px]
          font-archivo font-light text-[20px]
          leading-[109%] tracking-[2%]
          text-black bg-white
        "
      >
        Upload a CSV or Excel file with a list of user emails. The first row
        should be a header. You can also choose to upload a first name and
        surname if you prefer to do this via the upload tool. Alternatively,
        you can assign names to emails at the next step. If you wish bulk upload
        names, column headers must match <b>"First Name"</b> and <b>"Surname"</b> exactly.
      </div>


      <div
        className="
    w-[1299px] h-[434px]
    absolute top-[289px] left-[397px]
    rounded-[30px] bg-white
    border border-[#00000033]
    shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
    flex flex-col items-center justify-center
  "
      >
        <UploadBox />
      </div>



    </div>
  );
}

