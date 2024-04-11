import "./App.css";
import ReactModal from "react-modal";
import { Rotas } from "./Routes/routes.jsx";
import { DashboardProvider } from "./context/dashboard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactModal.setAppElement("#root");

function App() {
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <DashboardProvider>
                <Rotas />
            </DashboardProvider>
        </div>
    );
}

export default App;
