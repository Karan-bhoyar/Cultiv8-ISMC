<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MSMEGenerator from "../pages/MSMEGenerator";
import EscrowStatus from "../pages/EscrowStatus";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/msme-generator" element={<MSMEGenerator />} />
      <Route path="/escrow-status" element={<EscrowStatus />} />
     

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

=======
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MSMEGenerator from "../pages/MSMEGenerator";
import EscrowStatus from "../pages/EscrowStatus";
import Analytics from "../pages/Analytics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/msme-generator" element={<MSMEGenerator />} />
      <Route path="/escrow-status" element={<EscrowStatus />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

>>>>>>> 2988c110b1e35e6b17f929dde7c3cea20b841a5d
export default AppRoutes;