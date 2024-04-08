import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const ModalSchema = yup.object({
    nome: yup.string().required(),
    curso: yup.string().required(),
    RA: yup.number().required(),
});

const ModalCreateAluno = () => {
    const { createAlunoModal, closeCreateAlunoModal } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitCreateAlunoModal = (data) => {
        console.log(data);
    };

    return (
        <>
            <ReactModal
                isOpen={createAlunoModal}
                onRequestClose={() => closeCreateAlunoModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <div>
                    <h1>Adiconar Aluno</h1>
                    <button onClick={() => closeCreateAlunoModal()}>XX</button>
                </div>
                <form onSubmit={handleSubmit(onSubmitCreateAlunoModal)}>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="McLovin"
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
                        type="number"
                        placeholder="0123456789"
                        {...register("RA")}
                    />
                    <p>{errors.RA?.message}</p>

                    <button type="submit">Adiconar Aluno</button>
                </form>
            </ReactModal>
        </>
    );
};

export default ModalCreateAluno;
