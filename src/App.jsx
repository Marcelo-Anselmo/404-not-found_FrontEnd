import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Members from "./components/Members/Members.jsx";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <section className="mainContent">
        <h1>Autentica Ulife</h1>
        <div className="ataSection">
          <button className="criaAta">
            <Link to={""}>Criar ata</Link>
          </button>
        </div>
      </section>
      <Members></Members>
    </>
  );
}

export default App;
