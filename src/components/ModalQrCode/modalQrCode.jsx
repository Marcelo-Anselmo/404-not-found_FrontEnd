import { useContext } from "react";
import "./modalQrCode.modules.css";
import ReactModal from "react-modal";
import QRCode from "react-qr-code";
import { DashboardContext } from "../../context/dashboard";

const ModalQrCode = () => {
    const { qrCodeModal, closeQrCodeModal, ataOnline } =
        useContext(DashboardContext);

    return (
        <>
            <ReactModal
                isOpen={qrCodeModal}
                onRequestClose={() => closeQrCodeModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <QRCode className="containerQrCode" value="www.google.com" />
            </ReactModal>
        </>
    );
};

export default ModalQrCode;
