import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Members from "./components/Members/Members.jsx";
import Modal from "./components/Modal/Modal.jsx";
import { useState } from "react";

function App() {
  const [modalDetail, setModalDetail] = useState({
    isOpen: false,
    prof: "",
    email: "",
    disciplina: "",
    aula: "",
    descricao: "",
  });

  return (
    <>
      <Header />
      <section className="mainContent">
        <h1>Autentica Ulife</h1>
        <div className="ataSection">
          <button
            className="criaAta"
            onClick={() =>
              setModalDetail({
                isOpen: true,
                prof: "",
                email: "",
                disciplina: "",
                aula: "",
                descricao: "",
              })
            }>
            Criar Ata
          </button>
          <Modal isOpen={modalDetail.isOpen} />
        </div>
      </section>
      <Members></Members>
    </>
  );
}

export default App;
