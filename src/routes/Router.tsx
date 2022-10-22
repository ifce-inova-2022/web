import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}
