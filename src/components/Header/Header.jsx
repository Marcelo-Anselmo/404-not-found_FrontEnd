import "./index.scss";

const Header = () => {
  return (
    <>
      <header>
        <img src="./404_logo_alpha.png" alt="logo da 404" />
        <nav>
          <ul>
            <li>
              <a href="#aboutSection">Sobre</a>
              {/* <Link to={"aboutSection"}>Sobre</Link> */}
            </li>
            <li>
              <a href="#memberSection">Equipe</a>
              {/* <Link to={"#membrosSection"}>Equipe</Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
