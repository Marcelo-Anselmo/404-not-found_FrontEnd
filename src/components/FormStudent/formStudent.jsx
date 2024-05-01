import "./formStudent.modules.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DashboardContext } from "../../context/dashboard";
import { useContext } from "react";

const StudentSchema = yup.object({
    nome: yup.string().required("Nome e sobrenome").min(8, "Nome e sobrenome"),
    curso: yup.string().required().min(2, "Sigla do curso"),
    RA: yup.string().required().min(10, "RA contem no minimo 10 números").max(11, "RA contem no máximo 11 números"),
});

const FormStudent = ({ id }) => {
    const { createAluno } = useContext(DashboardContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(StudentSchema) });

    const onSubmitCreateAluno = (data) => {
        createAluno(data, id);
    };

    return (
        <div className="divContainer">
            <div className="divTitle">
                <h1>Confirmar Presença</h1>
            </div>
            <form
                className="containerForm"
                onSubmit={handleSubmit(onSubmitCreateAluno)}
            >
                <label>Nome</label>
                <input
                    type="text"
                    placeholder="Treloso"
                    {...register("nome")}
                />
                <p>{errors.nome?.message}</p>

                <label>Curso</label>
                <input type="text" placeholder="ADS" {...register("curso")} />
                <p>{errors.curso?.message}</p>

                <label>RA</label>
                <input
                    maxLength="11"
                    type="text"
                    placeholder="0123456789"
                    {...register("RA")}
                />
                <p>{errors.RA?.message}</p>

                <button className="btnCreate" type="submit">
                    Registrar Presença
                </button>
            </form>
        </div>
    );
};

export default FormStudent;
