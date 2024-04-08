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

const ModalEditeAluno = () => {
    const { editeAlunoModal, closeEditeAlunoModal } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitEditeAlunoModal = (data) => {
        console.log(data);
    };

    return (
        <>
            <ReactModal
                isOpen={editeAlunoModal}
                onRequestClose={() => closeEditeAlunoModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <div>
                    <h1>Editar Aluno</h1>
                    <button onClick={() => closeEditeAlunoModal()}>XX</button>
                </div>
                <form onSubmit={handleSubmit(onSubmitEditeAlunoModal)}>
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

                    <button type="submit">Editar Aluno</button>
                </form>
            </ReactModal>
        </>
    );
};

export default ModalEditeAluno;
