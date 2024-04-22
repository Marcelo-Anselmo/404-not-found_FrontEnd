import "./index.scss";
import ReactModal from "react-modal";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const DeleteAtaModal = () => {
    const { deleteAtaModal, closeDeleteAtaModal, deleteAta, ataOnline } =
        useContext(DashboardContext);

    return (
      <ReactModal
        isOpen={deleteAtaModal}
        onRequestClose={() => closeDeleteAtaModal()}
        className="Modal"
        overlayClassName="exterior-modal">
        <div className="Btns">
          <h1>Deseja excluir está Ata?</h1>
          <div>
            <button className="confirmBtn" onClick={() => deleteAta(ataOnline.id)}>Confirmar</button>
            <button className="cancelBtn" onClick={() => closeDeleteAtaModal()}>Cancelar</button>
          </div>
        </div>
      </ReactModal>
    );
};

export default DeleteAtaModal;
