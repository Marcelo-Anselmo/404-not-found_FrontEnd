import "./index.scss";
import unifgLogo from "../../../public/unifg_logo.png";
import Logo_404 from "../../../public/404_logo_alpha.png";
import animaLogo from "../../../public/anima_logo.png";

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
            <div className="imgSec">
              <img id="logo404" src={Logo_404} alt="logo do equipe 404" />
              <img id="logoAnima" src={animaLogo} alt="logo da ANIMA" />
              <img id="logoUNIFG" src={unifgLogo} alt="logo da UNIFG" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
