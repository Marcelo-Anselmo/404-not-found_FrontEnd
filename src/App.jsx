import "./App.css";
import ReactModal from "react-modal";
import { Rotas } from "./Routes/routes.jsx";
import { DashboardProvider } from "./context/dashboard.jsx";

ReactModal.setAppElement("#root");

function App() {
    return (
        <div>
            <DashboardProvider>
                <Rotas />
            </DashboardProvider>
        </div>
    );
}

export default App;
