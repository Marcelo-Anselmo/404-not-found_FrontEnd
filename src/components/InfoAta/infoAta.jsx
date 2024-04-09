import "./infoAta.modules.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const InfoAta = () => {
    return (
        <>
            <div className="container">
                <div className="containerTitle">
                    <h2>Ata online</h2>
                    <div className="containerBtns">
                        <FaPen
                            className="editeBtn"
                            // onClick={() => openEditeAtaModal()}
                        />
                        <FaTrashAlt
                            className="deleteBtn"
                            // onClick={() => openDeleteAtaModal()}
                        />
                    </div>
                </div>

                <div className="containerInfo">
                    <p className="texto">Professor: Sidney</p>
                    <p className="texto">Disciplina: Modelagem de Software</p>
                    <p className="texto">Data: 13/07/2024 12:10:50</p>
                    <p className="texto">Turno: Noite</p>
                    <p className="texto">Aula: 1</p>
                    <p className="texto">
                        Descrição:
                        sadasdsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsads
                    </p>
                </div>
            </div>
        </>
    );
};
export default InfoAta;
