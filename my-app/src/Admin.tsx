// const Admin = () => {
//       return <div>Admin Page</div>;
//     };

//     export default Admin; // Add this line

// import ImportUsers from "./ImportUsers";

// const Admin = () => {
//   return <ImportUsers />;
// };

// export default Admin;


// 3rd

import ImportUsers from "./ImportUsers";
import UserManagement from "./UserManagement"; // You already created
import { useState } from "react";

const Admin = () => {
  const [page, setPage] = useState("import"); // default page

  return (
    <div>
      {/* ADMIN MENU (Users, Review & Validate, TeamSpotlight etc.) */}
      <div className="absolute left-[244px] top-[100px] text-black space-y-5">

        <div className="cursor-pointer" onClick={() => setPage("import")}>
          Import Users
        </div>

        <div className="cursor-pointer" onClick={() => setPage("review")}>
          Review & Validate
        </div>

        <div className="cursor-pointer" onClick={() => setPage("team")}>
          Team Spotlight
        </div>

      </div>

      {/* RENDER THE SELECTED PAGE */}
      {page === "import" && <ImportUsers />}
      {page === "review" && <UserManagement hideLayout />}

      {page === "team" && <div>Team Spotlight will go here</div>}
    </div>
  );
};

export default Admin;
