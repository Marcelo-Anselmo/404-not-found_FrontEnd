import "./index.scss";
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
    turno: yup.string().required(),
    descricao: yup.string().notRequired(),
});

const AtaModal = () => {
    const { ataModal, setAtaModal, openAtaModal, closeAtaModal, createAta } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitAtaModal = (data) => {
        createAta(data);
    };

    return (
        <>
            <ReactModal
                isOpen={ataModal}
                onRequestClose={() => closeAtaModal()}
                className="Modal"
                overlayClassName="exterior-modal"
            >
                <div className="closeBtn">
                    <button onClick={() => closeAtaModal()}>X</button>
                </div>
                <div>
                    <h1>Ata Online</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmitAtaModal)}>
                    <label>Professor</label>
                    <input
                        type="text"
                        placeholder="Roger S. Pressman"
                        {...register("nome")}
                    />
                    <p>{errors.nome?.message}</p>

                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="exemplo@email.com"
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>

                    <label>Disciplina</label>
                    <input
                        type="text"
                        placeholder="Modelagem de software"
                        {...register("disciplina")}
                    />
                    <p>{errors.disciplina?.message}</p>

                    <label>Turno</label>
                    <input
                        type="text"
                        placeholder="Ex: noite"
                        {...register("turno")}
                    />
                    <p>{errors.turno?.message}</p>

                    <label>Aula</label>
                    <input
                        type="number"
                        placeholder="Aula: ex = 1"
                        {...register("aula")}
                    />
                    <p>{errors.aula?.message}</p>

                    <label>Descrição</label>
                    <input
                        type="text"
                        placeholder="Descrição da aula"
                        {...register("descricao")}
                    />
                    <p>{errors.descricao?.message}</p>

                    <div className="confirmBtn">
                        <button type="submit">Criar Ata</button>
                    </div>
                </form>
            </ReactModal>
        </>
    );
};

export default AtaModal;
