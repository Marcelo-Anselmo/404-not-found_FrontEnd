import { useContext } from "react";
import Header from "../components/Header/Header";
import Members from "../components/Footer/Footer";
import { DashboardContext } from "../context/dashboard";
import "../App.css";
import AtaModal from "../components/Modal/Modal";
import ReactModal from "react-modal";
import ModalEditeAta from "../components/ModalEditeAta/modalEditeAta";
import DeleteAtaModal from "../components/ModalDeleteAta/modalDeleteAta";
import ModalCreateAluno from "../components/ModalCreateAluno/modalCreateAluno";
import ModalEditeAluno from "../components/ModalEditeAluno/modalEditeAluno";
import DeleteAlunoModal from "../components/ModalDeleteAluno/modalDeleteAluno";
import InfoAta from "../components/InfoAta/infoAta";
import CardAlunos from "../components/CardAlunos/cardAlunos";

ReactModal.setAppElement("#root");

export const DashboardPage = () => {
    const {
        openAtaModal,
        openEditeAtaModal,
        openDeleteAtaModal,
        openCreateAlunoModal,
        openEditeAlunoModal,
        openDeleteAlunoModal,
        ataOnline,
    } = useContext(DashboardContext);

    return (
        <div>
            <Header />
            <section className="mainContent">
                <h1>Autentica Ulife</h1>
                {ataOnline.length == 0 ? (
                    <div className="ataSection">
                        <button
                            className="criaAta"
                            onClick={() => openAtaModal()}
                        >
                            Criar Ata
                        </button>
                    </div>
                ) : (
                    <InfoAta />
                )}
            </section>
            <CardAlunos />

            <AtaModal />
            <ModalEditeAta />
            <DeleteAtaModal />
            <ModalCreateAluno />
            <ModalEditeAluno />
            <DeleteAlunoModal />
            <Members />
        </div>
    );
};
