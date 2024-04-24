import { useContext } from "react";
import "./btnSendEmail.modules.css";
import { DashboardContext } from "../../context/dashboard";

const ButtonSendEmail = () => {
    const { ataOnline, sendEmail } = useContext(DashboardContext);

    return (
        <div className="containerSendEmail">
            <button
                className="sendEmail"
                onClick={() => sendEmail(ataOnline.id)}
            >
                Enviar Email
            </button>
        </div>
    );
};

export default ButtonSendEmail;
