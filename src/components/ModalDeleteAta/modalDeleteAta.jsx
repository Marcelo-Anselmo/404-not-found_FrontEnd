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
            className="modal"
            overlayClassName="exterior-modal"
        >
            <div>
                <h2>Deseja excluir está Ata?</h2>
                <div>
                    <button onClick={() => deleteAta(ataOnline.id)}>
                        Confirmar
                    </button>
                    <button onClick={() => closeDeleteAtaModal()}>
                        Cancelar
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default DeleteAtaModal;
