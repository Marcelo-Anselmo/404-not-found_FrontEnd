import "./index.scss";
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
            className="Modal"
            overlayClassName="exterior-modal"
        >
            <div className="Btns">
                <h1>Excluir Aluno?</h1>
                <div>
                    <button className="confirmBtn" onClick={() => deleteAluno(ataOnline.id)}>
                        Confirmar
                    </button>
                    <button className="cancelBtn" onClick={() => closeDeleteAlunoModal()}>
                        Cancelar
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default DeleteAlunoModal;
