import { useContext } from "react";
import Header from "../components/Header/Header";
import Members from "../components/Members/Members";
import { DashboardContext } from "../context/dashboard";
import "../App.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import AtaModal from "../components/Modal/Modal";
import ReactModal from "react-modal";
import ModalEditeAta from "../components/ModalEditeAta/modalEditeAta";
import DeleteAtaModal from "../components/ModalDeleteAta/modalDeleteAta";
import ModalCreateAluno from "../components/ModalCreateAluno/modalCreateAluno";
import ModalEditeAluno from "../components/ModalEditeAluno/modalEditeAluno";
import DeleteAlunoModal from "../components/ModalDeleteAluno/modalDeleteAluno";

ReactModal.setAppElement("#root");

export const DashboardPage = () => {
  const {
    openAtaModal,
    openEditeAtaModal,
    openDeleteAtaModal,
    openCreateAlunoModal,
    openEditeAlunoModal,
    openDeleteAlunoModal,
  } = useContext(DashboardContext);

  return (
    <div>
      <Header />
      <section className="mainContent">
        <h1>Autentica Ulife</h1>
        <div className="ataSection">
          <button className="criaAta" onClick={() => openAtaModal()}>
            Criar Ata
          </button>
          <div>
            <FaPen className="editIcon" onClick={() => openEditeAtaModal()} />
          </div>
          <div>
            <FaTrashAlt
              className="deleteIcon"
              onClick={() => openDeleteAtaModal()}
            />
          </div>
          {/* <button onClick={() => openEditeAtaModal()}>Editar Ata</button> */}
          {/* <button onClick={() => openDeleteAtaModal()}>Excluir Ata</button> */}
        </div>

        {/* <div>
          <button onClick={() => openCreateAlunoModal()}>
            Adicionar Aluno
          </button>
          <button onClick={() => openEditeAlunoModal()}>Editar Aluno</button>
          <button onClick={() => openDeleteAlunoModal()}>Excluir Aluno</button>
        </div> */}
      </section>
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
