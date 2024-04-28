import "./index.scss";

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <div id="aboutSection" className="aboutSection">
          <h2>Sobre</h2>
          <p>
            Site de Lista de Presença Online <br />
            que vem para ajudar a melhorar a eficiência, <br />
            organização e acompanhamento de frequencia <br />
            dos alunos da Instituição.
          </p>
        </div>
        <div id="memberSection" className="memberSection">
          <div>
            <h2>Equipe</h2>
          </div>
          <div>
            <ul>
              <li>Ramon</li>
              <li>Flávia</li>
              <li>Marcelo</li>
              <li>Marcos</li>
              <li>Helenna</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
