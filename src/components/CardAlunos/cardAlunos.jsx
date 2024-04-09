import "./cardAlunos.modules.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const alunos = [
    {
        id: "ac4e46e8-eafa-4c60-aa1b-f52323a9cffb",
        nome: "Marcelo",
        curso: "ADS",
        RA: 123456789,
        created_at: "08/04/2024 20:37:26",
        professor: "c4846ab6-32a5-4801-b576-18c14e4bb8e7",
    },
    {
        id: "ac4e46e8-eafa-4c60-aa1b-f52323a9cffb",
        nome: "Alessandra",
        curso: "Ciencia da computação",
        RA: 123456789,
        created_at: "08/04/2024 20:37:26",
        professor: "c4846ab6-32a5-4801-b576-18c14e4bb8e7",
    },
    {
        id: "ac4e46e8-eafa-4c60-aa1b-f52323a9cffb",
        nome: "Matheus",
        curso: "Testando nome de curso",
        RA: 123456789,
        created_at: "08/04/2024 20:37:26",
        professor: "c4846ab6-32a5-4801-b576-18c14e4bb8e7",
    },
    {
        id: "ac4e46e8-eafa-4c60-aa1b-f52323a9cffb",
        nome: "Marcos",
        curso: "ADS",
        RA: 123456789,
        created_at: "08/04/2024 20:37:26",
        professor: "c4846ab6-32a5-4801-b576-18c14e4bb8e7",
    },
];

const CardAlunos = () => {
    return (
        <>
            <div className="containerCard">
                <h2 className="title">Alunos</h2>
                <ul className="lista">
                    {alunos.map((aluno) => (
                        <li className="card" key={aluno.id}>
                            <div>
                                <p>Nome: {aluno.nome}</p>
                                <p>Curso: {aluno.curso}</p>
                                <p>RA: {aluno.RA}</p>
                            </div>
                            <div className="containerBtn">
                                <FaPen
                                    className="editeBtn"
                                    // onClick={() => openEditeAtaModal()}
                                />
                                <FaTrashAlt
                                    className="deleteBtn"
                                    // onClick={() => openDeleteAtaModal()}
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
