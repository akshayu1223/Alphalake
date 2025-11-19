// import React from "react";

// export default function UserManagement() {
//   return (
//     <div className="ml-[350px] mt-[80px] w-[1501px] min-h-screen p-6 z-10">
//       {/* Header */}
//       <div className="border-b pb-4 mb-6 w-full h-[40px] flex items-center">
//         <h1 className="text-[24px] font-semibold tracking-[5%] font-archivo">
//           User Management
//         </h1>
//       </div>

//       {/* Review and Validate */}
//       <div className="mb-2">
//         <h2 className="text-[24px] font-semibold font-archivo tracking-[5%]">
//           Review and Validate
//         </h2>
//       </div>

//       {/* Records text */}
//       <p className="text-[20px] font-light font-archivo mb-6">
//         104 records found in your file.
//       </p>

//       {/* Table Container */}
//       <div className="bg-white shadow rounded-xl p-6 w-full">
//         <div className="grid grid-cols-4 gap-4 font-archivo text-gray-600 text-sm mb-4 px-2">
//           <div>Name</div>
//           <div>Email</div>
//           <div>Assign Role(s)</div>
//           <div>Assign Manager</div>
//         </div>

//         {/* Example rows */}
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="grid grid-cols-4 gap-4 items-center py-3 border-b px-2"
//           >
//             <input
//               type="text"
//               placeholder="Enter Name"
//               className="border rounded-md px-3 py-2 text-sm w-full"
//             />
//             <input
//               type="email"
//               value={`user${i + 1}@testmail.com`}
//               readOnly
//               className="border rounded-md px-3 py-2 text-sm w-full bg-gray-100"
//             />
//             <button className="border rounded-md px-3 py-2 text-sm w-full text-center">
//               +
//             </button>
//             <input
//               type="text"
//               placeholder="Search Name"
//               className="border rounded-md px-3 py-2 text-sm w-full"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Pagination and Buttons */}
//       <div className="flex justify-between items-center mt-6">
//         <div className="flex gap-2 text-sm">
//           <span className="px-2 py-1 rounded bg-gray-200">1</span>
//           <span>2</span>
//           <span>3</span>
//           <span>...</span>
//           <span>8</span>
//         </div>

//         <div className="flex gap-4">
//           <button className="px-6 py-2 rounded-full bg-red-200 text-red-700 text-sm">
//             BACK
//           </button>
//           <button className="px-6 py-2 rounded-full bg-green-600 text-white text-sm">
//             CONFIRM
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function UserManagement() {
//   return (
//     <div className="ml-[350px] mt-[80px] w-[1501px] min-h-screen p-6 z-10">
//       {/* Header */}
//     <div
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




//       {/* Review and Validate */}
//      <div
//   className="
//     absolute
//     top-[160px] 
//     left-[260px]
//     w-[243px] 
//     h-[26px]
//     flex items-center
//   "
// >
//   <h2
//     className="
//       font-archivo
//       font-semibold
//       text-[24px]
//       leading-[109%]
//       tracking-[5%]
//       text-black
//     "
//   >
//     Review and Validate
//   </h2>
// </div>



//       {/* Records text */}
//    <p
//   className="
//     absolute
//     top-[205px] 
//     left-[260px]
//     w-[252px] 
//     h-[22px]
//     font-archivo 
//     font-light 
//     text-[20px]
//     leading-[109%]
//     tracking-[0%]
//     text-black
//     flex items-center
//   "
// >
//   104 records found in your file.
// </p>


//      {/* Table Container */}
// <div
//   className="
//     absolute
//     top-[246px] left-[260px]
//     w-[1430px] h-[827px]
//     bg-white
//     border border-black/30
//     rounded-[30px]
//     shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//     p-6
//     overflow-auto
//   "
// >

//   {/* Table Header */}
// <div
//   className="
//     absolute
//     top-[32px] left-[43px]
//     w-[1285px] h-[17px]
//     grid grid-cols-4 gap-4
//     font-archivo text-gray-600 text-sm
//     mb-4 px-2
//   "
// >
//   <div>Name</div>
//   <div>Email</div>
//   <div>Assign Role(s)</div>
//   <div>Assign Manager</div>
// </div>

//   {/* Example Rows */}
//   <div
//   className="
//     absolute
//     top-[69px] left-[36px]
//     w-[1357px]
//     rounded-[10.74px]
//     border-[0.89px] border-black/30
//     overflow-hidden
//   "
// >

//   <div className="w-full">
//     {[...Array(8)].map((_, i) => (
//       <div
//         key={i}
//         className="grid grid-cols-4 gap-4 items-center h-[54px] px-2 border-b last:border-b-0"
//       >
//         <input
//           type="text"
//           placeholder="Enter Name"
//           className="border rounded-md px-3 py-2 text-sm w-full"
//         />

//         <input
//           type="email"
//           value={`user${i + 1}@testmail.com`}
//           readOnly
//           className="border rounded-md px-3 py-2 text-sm w-full bg-gray-100"
//         />

//         <button className="border rounded-md px-3 py-2 text-sm w-full text-center">
//           +
//         </button>

//         <input
//           type="text"
//           placeholder="Search Name"
//           className="border rounded-md px-3 py-2 text-sm w-full"
//         />
//       </div>
//     ))}
//   </div>
// </div>

// {/* Pagination + Buttons (Placed below box) */}
// <div className="absolute left-[260px] top-[1100px] flex justify-between items-center w-[1430px] mt-6">
//   <div className="flex gap-2 text-sm">
//     <span className="px-2 py-1 rounded bg-gray-200">1</span>
//     <span>2</span>
//     <span>3</span>
//     <span>...</span>
//     <span>8</span>
//   </div>

//   <div className="flex gap-4">
//     <button className="px-6 py-2 rounded-full bg-red-200 text-red-700 text-sm">
//       BACK
//     </button>
//     <button className="px-6 py-2 rounded-full bg-green-600 text-white text-sm">
//       CONFIRM
//     </button>
//   </div>
// </div>

//     </div>
//   );
// }

import React from "react";

export default function UserManagement() {
  return (
    <div className="ml-[350px] mt-[80px] w-full max-w-[1501px] p-6 overflow-hidden">


      {/* Header */}
     <div
  className="
    absolute
    top-[80px]
    left-[227px]
    right-0
    h-[40px]
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

<div className="absolute top-[160px] left-[260px]">
  <h2
    className="
      font-archivo
      font-semibold
      text-[24px]
      leading-[109%]
      tracking-[0.05em]
      text-black
    "
  >
    Review and Validate
  </h2>

  <p
    className="
      font-archivo
      font-light
      text-[20px]
      leading-[109%]
      tracking-[0em]
      mt-2
    "
  >
    104 records found in your file.
  </p>
</div>
{/* Table Card */}
{/* Table Card */}
<div
  className="
    absolute
    top-[246px]
    left-[260px]
    w-[1430px]
    h-[827px]
    bg-white
    border border-black/30
    rounded-[30px]
    shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
    flex flex-col
    overflow-hidden
  "
>

  {/* Header */}
  <div
    className="
      grid grid-cols-4
      px-[43px]
      pt-[32px]
      pb-[10px]
      font-archivo text-gray-600 text-[17px]
      gap-4
    "
  >
    <div>Name</div>
    <div>Email</div>
    <div>Assign Role(s)</div>
    <div>Assign Manager</div>
  </div>

  {/* Rows section */}
  <div
    className="
      ml-[36px]
      mr-[36px]
      rounded-[10px]
      p-2
      flex-1
      overflow-auto
    "
  >
    <div className="flex flex-col space-y-[4px]">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="
            grid grid-cols-4
            items-center
            h-[54px]
            border border-[#DEDEDE]
            rounded-[6px]
            px-2
          "
        >
          <input
            type="text"
            placeholder="Enter Name"
            className="
              w-[136px] h-[30px]
              bg-[#FAFAFA]
              rounded-[6px]
              px-[7px] py-[4px]
              text-[16px]
              font-[Archivo] font-extralight
            "
          />

          <input
            type="email"
            value={`user${i + 1}@testmail.com`}
            readOnly
            className="text-[16px] font-light bg-transparent"
          />

          <button
            className="
              w-[24px] h-[24px]
              rounded-[6px]
              bg-[#FAFAFA]
              flex items-center justify-center
            "
          >
            +
          </button>

          <input
            type="text"
            placeholder="Search Name"
            className="
              w-[166px] h-[30px]
              bg-[#FAFAFA]
              rounded-[6px]
              px-[7px] py-[4px]
              text-[16px]
            "
          />
        </div>
      ))}
    </div>
  </div>

  {/* Pagination + Buttons (INSIDE THE TABLE) */}
 {/* PAGINATION — fixed like screenshot */}
<div className="absolute" style={{ bottom: "250px", right: "50px" }}>
  <div className="flex items-center gap-3 text-sm">

    <span className="px-3 py-1 rounded-md bg-[#6B6B6B] text-white">
      1
    </span>

    <span className="px-3 py-1 rounded-md border border-gray-300 text-gray-600">
      2
    </span>

    <span className="px-3 py-1 rounded-md border border-gray-300 text-gray-600">
      3
    </span>

    <span className="text-gray-400 tracking-widest">
      ..........
    </span>

    <span className="px-3 py-1 rounded-md border border-gray-300 text-gray-600">
      8
    </span>

  </div>
</div>



{/* BUTTONS - separate absolute container */}
<div className="absolute bottom-[40px] right-[40px] flex gap-4">

  {/* BACK */}
 <button
  className="
    w-[174px] h-[44.108px]
    rounded-[51.2px]
    border-[0.29px] border-red-300
    bg-[#FFAFA3] text-white
    text-sm flex items-center justify-center
  "
>
  BACK
</button>

  {/* CONFIRM */}
  <button
  className="
    w-[174px] h-[44.108px]
    rounded-[51.2px]
    
    bg-[#96AC40] text-white
    text-sm flex items-center justify-center
  "
>
  CONFIRM
</button>


</div>
  </div>

</div>
        
    
  );
}
