import { useContext } from "react";
import Header from "../components/Header/Header";
import Members from "../components/Members/Members";
import { DashboardContext } from "../context/dashboard";
import AtaModal from "../components/Modal/Modal";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export const DashboardPage = () => {
    const { ataModal, setAtaModal, openAtaModal, closeAtaModal } =
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
                </div>
            </section>
            <AtaModal />
            <Members />
        </div>
    );
};
