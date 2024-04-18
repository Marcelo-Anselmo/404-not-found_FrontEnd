import { useContext } from "react";
import "./infoAta.modules.css";
import { FaPen, FaTrashAlt, FaAddressCard } from "react-icons/fa";
import { DashboardContext } from "../../context/dashboard";

const InfoAta = () => {
    const {
        ataOnline,
        openCreateAlunoModal,
        openEditeAtaModal,
        openDeleteAtaModal,
    } = useContext(DashboardContext);

    return (
        <>
            <div className="container">
                <div className="containerTitle">
                    <h2>Lista de presença online</h2>
                    <div className="containerBtns">
                        <FaAddressCard
                            className="createBtn"
                            onClick={() => openCreateAlunoModal()}
                        />
                        <FaPen
                            className="editeBtn"
                            onClick={() => openEditeAtaModal()}
                        />
                        <FaTrashAlt
                            className="deleteBtn"
                            onClick={() => openDeleteAtaModal()}
                        />
                    </div>
                </div>

                <div className="containerInfo">
                    <p className="texto">Professor: {ataOnline.nome}</p>
                    <p className="texto">Disciplina: {ataOnline.disciplina}</p>
                    <p className="texto">Data: {ataOnline.created_at}</p>
                    <p className="texto">Turno: {ataOnline.turno}</p>
                    <p className="texto">Aula: {ataOnline.aula}</p>
                    <p className="texto">Descrição: {ataOnline.descricao}</p>
                </div>
            </div>
        </>
    );
};
export default InfoAta;
