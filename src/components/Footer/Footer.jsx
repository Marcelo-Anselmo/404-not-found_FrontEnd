import "./index.scss";

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <div id="aboutSection" className="aboutSection">
          <h2>Sobre</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, <br /> labore! Aperiam culpa saepe eos possimus dolorum
            labore assumenda, <br /> repudiandae aliquam perferendis nulla
            impedit porro autem, <br /> magnam et officia quod id!
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
