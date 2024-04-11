import "./cardAlunos.modules.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const CardAlunos = () => {
    const { ataOnline, openEditeAlunoModal, openDeleteAlunoModal, getAlunoId } =
        useContext(DashboardContext);

    return (
        <>
            <div className="containerCard">
                <h2 className="title">Alunos</h2>
                <ul className="lista">
                    {ataOnline.alunos?.map((aluno) => (
                        <li className="card" key={aluno.id}>
                            <div>
                                <p>Nome: {aluno.nome}</p>
                                <p>Curso: {aluno.curso}</p>
                                <p>RA: {aluno.RA}</p>
                                <p>Data: {aluno.created_at}</p>
                            </div>
                            <div className="containerBtn">
                                <FaPen
                                    className="editeBtn"
                                    onClick={() => {
                                        getAlunoId(aluno.id);
                                        openEditeAlunoModal();
                                    }}
                                />
                                <FaTrashAlt
                                    className="deleteBtn"
                                    onClick={() => {
                                        getAlunoId(aluno.id);
                                        openDeleteAlunoModal();
                                    }}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CardAlunos;
