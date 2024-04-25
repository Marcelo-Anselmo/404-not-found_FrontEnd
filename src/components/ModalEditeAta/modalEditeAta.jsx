import "./index.scss";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard";

const ModalSchema = yup.object({
    nome: yup.string().notRequired(),
    email: yup.string().notRequired(),
    disciplina: yup.string().notRequired(),
    aula: yup.number().notRequired(),
    turno: yup.string().notRequired(),
    descricao: yup.string().notRequired(),
});

const ModalEditeAta = () => {
    const { editeAtaModal, closeEditeAtaModal, editeAta, ataOnline } =
        useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ModalSchema) });

    const onSubmitEditeAtaModal = (data) => {
        editeAta(data, ataOnline.id);
    };

    return (
        <>
            <ReactModal
                isOpen={editeAtaModal}
                onRequestClose={() => closeEditeAtaModal()}
                className="Modal"
                overlayClassName="exterior-modal"
            >
                <div className="closeBtn">
                    <button onClick={() => closeEditeAtaModal()}>X</button>
                </div>
                <div className="editText">
                    <h1>Editar lista de presença</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmitEditeAtaModal)}>
                    <label>Professor</label>
                    <input
                        type="text"
                        defaultValue={ataOnline.nome}
                        {...register("nome")}
                    />
                    <p>{errors.nome?.message}</p>

                    <label>Email</label>
                    <input
                        type="text"
                        defaultValue={ataOnline.email}
                        {...register("email")}
                    />
                    <p>{errors.email?.message}</p>

                    <label>Disciplina</label>
                    <input
                        type="text"
                        defaultValue={ataOnline.disciplina}
                        {...register("disciplina")}
                    />
                    <p>{errors.disciplina?.message}</p>

                    <label>Turno</label>
                    <input
                        type="text"
                        defaultValue={ataOnline.turno}
                        {...register("turno")}
                    />
                    <p>{errors.turno?.message}</p>

                    <label>Aula</label>
                    <input
                        type="number"
                        defaultValue={ataOnline.aula}
                        {...register("aula")}
                    />
                    <p>{errors.aula?.message}</p>

                    <label>Descrição</label>
                    <input
                        type="text"
                        defaultValue={ataOnline.descricao}
                        {...register("descricao")}
                    />
                    <p>{errors.descricao?.message}</p>

                    <button className="confirmBtn" type="submit">Editar lista</button>
                </form>
            </ReactModal>
        </>
    );
};

export default ModalEditeAta;
