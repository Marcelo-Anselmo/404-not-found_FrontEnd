import { useContext } from "react";
import Header from "../components/Header/Header";
import Members from "../components/Members/Members";
import { DashboardContext } from "../context/dashboard";
import AtaModal from "../components/Modal/Modal";
import ReactModal from "react-modal";
import ModalEditeAta from "../components/ModalEditeAta/modalEditeAta";
import DeleteAtaModal from "../components/ModalDeleteAta/modalDeleteAta";

ReactModal.setAppElement("#root");

export const DashboardPage = () => {
    const { openAtaModal, openEditeAtaModal, openDeleteAtaModal } =
        useContext(DashboardContext);

    return (
        <div>
            <Header />
            <section className="mainContent">
                <h1>Autentica Ulife</h1>
                <div className="ataSection">
                    <button className="criaAta" onClick={() => openAtaModal()}>
                        Criar Ata
                    </button>
                    <button onClick={() => openEditeAtaModal()}>
                        Editar Ata
                    </button>
                    <button onClick={() => openDeleteAtaModal()}>
                        Excluir Ata
                    </button>
                </div>
            </section>
            <AtaModal />
            <ModalEditeAta />
            <DeleteAtaModal />
            <Members />
        </div>
    );
};
