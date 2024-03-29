import styles from "../Modal/Modal.module.scss";

const Modal = ({
  isOpen,
  isClose,
  prof,
  email,
  disciplina,
  aula,
  descricao,
}) => {
  if (isOpen) {
    return (
      <div className={styles.BG}>
        <div className={styles.modal}>
          <img src="./public/404_logo_alpha.png" alt="logo da 404" />

          <form>
            <label> Professor </label>
            <input type="text" name="prof" value={prof} /> <br />
            <label> E-mail </label>
            <input type="email" name="email" value={email} /> <br />
            <label> Disciplina </label>
            <input type="text" name="disciplina" value={disciplina} /> <br />
            <label> Aula </label>
            <input type="text" name="aula" value={aula} /> <br />
            <label> Descrição </label>
            <textarea
              name="descrição"
              value={descricao}
              cols="30"
              rows="3"></textarea>
            <div className={styles.Btns}>
              <button className={styles.BtnClose} onClick={() => isClose()}>
                Cancelar
              </button>
              <button className={styles.BtnConfirm} onClick={() => isClose()}>
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
