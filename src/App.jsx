import "./App.css";
import ReactModal from "react-modal";
import { Rotas } from "./Routes/routes.jsx";

ReactModal.setAppElement("#root");

function App() {
  return (
    <div>
      <Rotas />
    </div>
  );
}

export default App;
