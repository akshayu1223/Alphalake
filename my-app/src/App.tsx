// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import ImportUsers from "./ImportUsers";

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//        <Sidebar />
//        <ImportUsers />
//     </div>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ImportUsers from "./ImportUsers";
import {RateShift} from "./RateShift";
import {MyTeam} from "./MyTeam";
import {FollowUps} from "./FollowUps";
import ManagementReport from "./ManagementReport";
import Admin from "./Admin";
import TeamSpotlight from "./TeamSpotlight";
import UserManagement from "./UserManagement";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/team-spotlight" element={<UserManagement />} />
          <Route path="/import-users" element={<ImportUsers />} />
          <Route path="/rate-shift" element={<RateShift />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/follow-ups" element={<FollowUps />} />
          <Route path="/management-report" element={<ManagementReport />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/team-spotlight" element={<TeamSpotlight />} />
          {/* Default route */}
          <Route path="*" element={<ImportUsers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
