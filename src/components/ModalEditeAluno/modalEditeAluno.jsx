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
    RA: yup.number().required(),
});

const ModalEditeAluno = () => {
    const { editeAlunoModal, closeEditeAlunoModal, editeAluno, ataOnline } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitEditeAlunoModal = (data) => {
        console.log(data);
        editeAluno(data, ataOnline.id);
    };

    return (
        <>
            <ReactModal
                isOpen={editeAlunoModal}
                onRequestClose={() => closeEditeAlunoModal()}
                className="Modal"
                overlayClassName="exterior-modal"
            >
                <div className="closeBtn">
                    <button onClick={() => closeEditeAlunoModal()}>X</button>
                </div>
                <div>
                    <h1>Editar Aluno</h1>
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
                        maxLength="10"
                        type="text"
                        placeholder="0123456789"
                        {...register("RA")}
                    />
                    <p>{errors.RA?.message}</p>

                    <button className="confirmBtn" type="submit">Editar Aluno</button>
                </form>
            </ReactModal>
        </>
    );
};

export default ModalEditeAluno;
