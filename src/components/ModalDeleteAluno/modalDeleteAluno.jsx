import ReactModal from "react-modal";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const DeleteAlunoModal = () => {
    const { ataOnline, deleteAlunoModal, closeDeleteAlunoModal, deleteAluno } =
        useContext(DashboardContext);

    return (
        <ReactModal
            isOpen={deleteAlunoModal}
            onRequestClose={() => closeDeleteAlunoModal()}
            className="modal"
            overlayClassName="exterior-modal"
        >
            <div>
                <h2>Excluir Aluno?</h2>
                <div>
                    <button onClick={() => deleteAluno(ataOnline.id)}>
                        Confirmar
                    </button>
                    <button onClick={() => closeDeleteAlunoModal()}>
                        Cancelar
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default DeleteAlunoModal;
