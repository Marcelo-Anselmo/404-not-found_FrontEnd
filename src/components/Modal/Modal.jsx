import styles from "../Modal/Modal.module.scss";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const ModalSchema = yup.object({
    nome: yup.string().required(),
    email: yup.string().required(),
    disciplina: yup.string().required(),
    aula: yup.string().required(),
    descricao: yup.string().notRequired(),
});

const AtaModal = () => {
    const { ataModal, setAtaModal, openAtaModal, closeAtaModal } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitAtaModal = () => {};

    return (
        <>
            <ReactModal
                isOpen={ataModal}
                onRequestClose={() => closeAtaModal()}
                className="modal"
                overlayClassName="exterior-modal"
            >
                <div>
                    <h1>Ata Online</h1>
                    <button onClick={() => closeAtaModal()}>XX</button>
                </div>
                <form onSubmit={handleSubmit(onSubmitAtaModal)}>
                    <input
                        type="text"
                        placeholder="Professor"
                        {...register("nome")}
                    />
                    <p>{errors.nome?.message}</p>

                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>

                    <input
                        type="text"
                        placeholder="Disciplina"
                        {...register("disciplina")}
                    />
                    <p>{errors.disciplina?.message}</p>

                    <input
                        type="number"
                        placeholder="Aula: ex = 1"
                        {...register("aula")}
                    />
                    <p>{errors.aula?.message}</p>

                    <input
                        type="text"
                        placeholder="Descrição da aula"
                        {...register("descricao")}
                    />
                    <p>{errors.descricao?.message}</p>

                    <button type="submit">Criar Ata</button>
                </form>
            </ReactModal>
        </>
    );
};

export default AtaModal;
