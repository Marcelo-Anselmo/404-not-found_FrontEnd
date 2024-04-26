import "./App.css";
import ReactModal from "react-modal";
import { DashboardProvider } from "./context/dashboard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rotas } from "./Routes/routes.jsx";

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
