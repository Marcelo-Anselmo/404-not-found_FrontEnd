import styles from "../Modal/Modal.module.scss";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalSchema = yup.object({
  nome: yup.string().required(),
  email: yup.string().required(),
  disciplina: yup.string().required(),
  aula: yup.string().required(),
  descricao: yup.string().notRequired(),
});

const AtaModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ModalSchema) });

  return (
    <>
      <ReactModal
        isOpen={ataModal}
        onRequestClose={() => closeAtaModal()}
        className="modal"
        overlayClassName="exterior-modal">
        <div>
          <p>Teste</p>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
