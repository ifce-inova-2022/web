import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
