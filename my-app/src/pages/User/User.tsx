

// import React from "react";

// export default function UserManagement() {
//   return (
//     <div className="ml-[350px] mt-[80px] w-full max-w-[1501px] p-6 overflow-hidden">


//       {/* Header */}
//      <div
//   className="
//     absolute
//     top-[80px]
//     left-[227px]
//     right-0
//     h-[40px]
//     bg-white
//     border-b border-[#1D286733]
//     shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//     flex items-center
//     pl-[15px]
//     font-archivo text-[20px] font-light text-black
//   "
// >
//   👤 User Management
// </div>

// <div className="absolute top-[160px] left-[260px]">
//   <h2
//     className="
//       font-archivo
//       font-semibold
//       text-[24px]
//       leading-[109%]
//       tracking-[0.05em]
//       text-black
//     "
//   >
//     Review and Validate
//   </h2>

//   <p
//     className="
//       font-archivo
//       font-light
//       text-[20px]
//       leading-[109%]
//       tracking-[0em]
//       mt-2
//     "
//   >
//     104 records found in your file.
//   </p>
// </div>
// {/* Table Card */}
// {/* Table Card */}
// <div
//   className="
//     absolute
//     top-[246px]
//     left-[260px]
//     w-[1430px]
//     h-[827px]
//     bg-white
//     border border-black/30
//     rounded-[30px]
//     shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//     flex flex-col
//     overflow-hidden
//   "
// >

//   {/* Header */}
//   <div
//     className="
//       grid grid-cols-4
//       px-[43px]
//       pt-[32px]
//       pb-[10px]
//       font-archivo text-gray-600 text-[17px]
//       gap-4
//     "
//   >
//     <div>Name</div>
//     <div>Email</div>
//     <div>Assign Role(s)</div>
//     <div>Assign Manager</div>
//   </div>

//   {/* Rows section */}
//   <div
//     className="
//       ml-[36px]
//       mr-[36px]
//       rounded-[10px]
//       p-2
//       flex-1
//       overflow-auto
//     "
//   >
//     <div className="flex flex-col space-y-[4px]">
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className="
//             grid grid-cols-4
//             items-center
//             h-[54px]
//             border border-[#DEDEDE]
//             rounded-[6px]
//             px-2
//           "
//         >
//           <input
//             type="text"
//             placeholder="Enter Name"
//             className="
//               w-[136px] h-[30px]
//               bg-[#FAFAFA]
//               rounded-[6px]
//               px-[7px] py-[4px]
//               text-[16px]
//               font-[Archivo] font-extralight
//             "
//           />

//           <input
//             type="email"
//             value={`user${i + 1}@testmail.com`}
//             readOnly
//             className="text-[16px] font-light bg-transparent"
//           />

//           <button
//             className="
//               w-[24px] h-[24px]
//               rounded-[6px]
//               bg-[#FAFAFA]
//               flex items-center justify-center
//             "
//           >
//             +
//           </button>

//           <input
//             type="text"
//             placeholder="Search Name"
//             className="
//               w-[166px] h-[30px]
//               bg-[#FAFAFA]
//               rounded-[6px]
//               px-[7px] py-[4px]
//               text-[16px]
//             "
//           />
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Pagination + Buttons (INSIDE THE TABLE) */}
//  {/* PAGINATION — fixed like screenshot */}
// <div className="absolute" style={{ bottom: "250px", right: "50px" }}>
//   <div className="flex items-center gap-3 text-sm">

//     <span className="px-3 py-1 rounded-md bg-[#6B6B6B] text-white">
//       1
//     </span>

//     <span className="px-3 py-1 rounded-md border border-gray-300 text-gray-600">
//       2
//     </span>

//     <span className="px-3 py-1 rounded-md border border-gray-300 text-gray-600">
//       3
//     </span>

//     <span className="text-gray-400 tracking-widest">
//       ..........
//     </span>

//     <span className="px-3 py-1 rounded-md border border-gray-300 text-gray-600">
//       8
//     </span>

//   </div>
// </div>



// {/* BUTTONS - separate absolute container */}
// <div className="absolute bottom-[40px] right-[40px] flex gap-4">

//   {/* BACK */}
//  <button
//   className="
//     w-[174px] h-[44.108px]
//     rounded-[51.2px]
//     border-[0.29px] border-red-300
//     bg-[#FFAFA3] text-white
//     text-sm flex items-center justify-center
//   "
// >
//   BACK
// </button>

//   {/* CONFIRM */}
//   <button
//   className="
//     w-[174px] h-[44.108px]
//     rounded-[51.2px]
    
//     bg-[#96AC40] text-white
//     text-sm flex items-center justify-center
//   "
// >
//   CONFIRM
// </button>


// </div>
//   </div>

// </div>
        
    
//   );
// }
import UMHeader from "./UMHeader";
import UMTableSection from "./UMTableSection";

export default function User() {
  return (
    <>
      <UMHeader />
      <UMTableSection />
    </>
  );
}
