import "./index.scss";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const ModalSchema = yup.object({
    nome: yup.string().required(),
    curso: yup.string().required(),
    RA: yup
        .string()
        .required()
        .min(10, "RA contém no mínimo 10 números")
        .max(11, "RA contém no máximo 11 números"),
});

const ModalCreateAluno = () => {
    const { createAlunoModal, closeCreateAlunoModal, createAluno, ataOnline } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitCreateAlunoModal = (data) => {
        createAluno(data, ataOnline.id);
    };

    return (
        <>
            <ReactModal
                isOpen={createAlunoModal}
                onRequestClose={() => closeCreateAlunoModal()}
                className="Modal"
                overlayClassName="exterior-modal"
            >
                <div className="closeBtn">
                    <button onClick={() => closeCreateAlunoModal()}>X</button>
                </div>
                <div>
                    <h1>Adicionar Aluno</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmitCreateAlunoModal)}>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Treloso"
                        {...register("nome")}
                    />
                    <p>{errors.nome?.message}</p>

                    <label>Curso</label>
                    <input
                        type="text"
                        placeholder="ADS"
                        {...register("curso")}
                    />
                    <p>{errors.curso?.message}</p>

                    <label>RA</label>
                    <input
                        maxLength="11"
                        type="text"
                        placeholder="0123456789"
                        {...register("RA")}
                    />
                    <p>{errors.RA?.message}</p>

                    <button className="confirmBtn" type="submit">
                        Adicionar Aluno
                    </button>
                </form>
            </ReactModal>
        </>
    );
};

export default ModalCreateAluno;
