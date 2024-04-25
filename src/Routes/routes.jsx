import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/homepage";
import StudentRegister from "../pages/studentRegister";

export const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/student">
                <Route path=":id" element={<StudentRegister />} />
            </Route>
        </Routes>
    );
};
