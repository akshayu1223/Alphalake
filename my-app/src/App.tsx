
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import ImportUsers from "./pages/ImportUsers/ImportUsers";
import { RateShift } from "./RateShift";
import { MyTeam } from "./MyTeam";
import { FollowUps } from "./FollowUps";
import ManagementReport from "./ManagementReport";
import TeamSpotlight from "./TeamSpotlight";
import UserManagement from "./pages/User/User";
import Usermanagement from "./pages/UserManagement_click/UserManagement_click";


function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/rate-shift" element={<RateShift />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/follow-ups" element={<FollowUps />} />
          <Route path="/management-report" element={<ManagementReport />} />
          <Route path="/team-spotlight" element={<TeamSpotlight />} />
            <Route path="/admin/usermanagement" element={<Usermanagement />} />
          {/* 1) Clicking admin should show UserManagement */}
          <Route path="/admin/1" element={< UserManagement/>} />

          {/* 2) /admin should automatically redirect to /admin/1 */}
          <Route path="/admin" element={<Navigate to="/admin/1" />} />

          <Route path="*" element={<ImportUsers />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
