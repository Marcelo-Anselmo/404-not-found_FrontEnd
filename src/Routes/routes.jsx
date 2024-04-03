import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/homepage";

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};
