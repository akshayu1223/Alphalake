

// import { UploadBox } from '/src/UploadBox.tsx';

// export default function ImportUsers() {
//   return (
//     <div>

//       {/* ---------------- USER MANAGEMENT BAR ---------------- */}
//       <div
//         className="
//           right-0 w-auto
//  h-[40px] 
//           absolute top-[60px] left-[367px] 
//           bg-white 
//           border-b border-[#1D286733]
//           shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)] 
//           flex items-center 
//           pl-[15px]
//           font-archivo text-[20px] font-light text-black
//         "
//       >
//         👤 User Management
//       </div>

//       {/* ---------------- IMPORT USERS TITLE ---------------- */}
//       <div
//         className="
//           w-[156px] h-[26px]
//           absolute top-[160px] left-[400px]
//           font-archivo font-semibold text-[24px]
//           leading-[109%] tracking-[5%]
//           text-black bg-white
//         "
//       >
//         Import Users
//       </div>

//       {/* ---------------- DESCRIPTION TEXT ---------------- */}
//       <div
//         className="
//           w-[1280px] h-[66px]
//           absolute top-[196px] left-[400px]
//           font-archivo font-light text-[20px]
//           leading-[109%] tracking-[2%]
//           text-black bg-white
//         "
//       >
//         Upload a CSV or Excel file with a list of user emails. The first row
//         should be a header. You can also choose to upload a first name and
//         surname if you prefer to do this via the upload tool. Alternatively,
//         you can assign names to emails at the next step. If you wish bulk upload
//         names, column headers must match <b>"First Name"</b> and <b>"Surname"</b> exactly.
//       </div>


//       <div
//         className="
//     w-[1299px] h-[434px]
//     absolute top-[289px] left-[397px]
//     rounded-[30px] bg-white
//     border border-[#00000033]
//     shadow-[3px_4px_9.6px_-6px_rgba(0,0,0,0.25)]
//     flex flex-col items-center justify-center
//   "
//       >
//         <UploadBox />
//       </div>



//     </div>
//   );
// }

import { UploadBox } from "/src/UploadBox.tsx";
import UMHeaderSmall from "../ImportUsers/UMHeaderSmall"; // adjust path

export default function ImportUsers() {
  return (
    <div>
      {/* Small User Management Header */}
      <UMHeaderSmall />

      {/* ---------------- IMPORT USERS TITLE ---------------- */}
      <div
        className="
          w-[156px] h-[26px]
          absolute top-[120px] left-[400px]
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
          absolute top-[156px] left-[400px]
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

      {/* ---------------- UPLOAD BOX ---------------- */}
      <div
        className="
          w-[1299px] h-[434px]
          absolute top-[256px] left-[397px]
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
